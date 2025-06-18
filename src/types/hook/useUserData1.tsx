import React, {createContext, useContext, useEffect, useState} from "react";
import { supabase } from "../../../supabase/supabase";
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';
import dayjs from 'dayjs';
import { useNavigate } from "react-router-dom";

type UserContextType = {
    user: any;
    session:any;
    profile: any;   
    loading: boolean;
    isSubmitting: boolean;
    checkIns: any;
    existingMotivationalMessage: string | null;
    lastCheckIn:string | null;
    motivationalMessage: string | null;
    handleLogOut: any
    setMotivationalMessage:React.Dispatch<React.SetStateAction<string | null>>;
    lastCheckInDate: Date | null;
    updateProfile: (newData: any) => Promise<void>; 
    submitTodayCheckIn : ({success, date}) => Promise<void>;
};

const UserContext = createContext<UserContextType | null>(null);

export const UserProvider = ({children}:{children:React.ReactNode})=>{
    dayjs.extend(utc);
    dayjs.extend(timezone);
    const localTz = dayjs.tz.guess();
    const today = dayjs().tz(localTz).startOf('day').format('YYYY-MM-DD');;
    const [session, setSession] = useState<any>(null);
    const [user, setUser] = useState<any>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [profile, setProfile] = useState<any>(null);
    const [checkIns, setCheckIns] = useState<any>([]);
    const [lastCheckIn, setLastCheckIn] = useState<string | null>(null);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [motivationalMessage, setMotivationalMessage] = useState<string | null>(null);
    const [existingMotivationalMessage, setExistingMotivationalMessage] = useState<string | null>(null);
    const [lastCheckInDate, setLastCheckInDate] = useState<Date>(null);
    const navigate = useNavigate();
    const clearUserData = () => {
        setUser(null);
        setProfile(null);
        setCheckIns(null);
        setSession(null);
        setLastCheckIn(null);
        setMotivationalMessage(null);
        setExistingMotivationalMessage(null);
    };

    const handleLogOut = async() =>{
        setLoading(true);
        const {error } = await supabase.auth.signOut();
        if (error) {
            console.error("Error signing out:", error);
            return { error: "Failed to sign out" };
        }
        else{ // Redirect to landing page
            clearUserData(); 
            setLoading(false);
            navigate("/");
        }
    }

    //Authentication

    const fetchUserandProfile = async ()=>{
        setLoading(true);
        //handle hash(depreciated)
        // if(window.location.hash.includes('access_token')){
        //     const { data, error } = await supabase.auth.();
        //     if (error) {
        //       console.error('Error processing URL session:', error);
        //     } else {
        //       setSession(data.session);
        //       window.history.replaceState({}, document.title, window.location.pathname); // Clean up URL
        //     }
        // }
        //fetch session
        // supabase.auth.getSession().then(({ data: { session } }) => {
        //     setSession(session);
        //     setLoading(false);
        //   });
        if(session?.user){
            const user = session?.user;
            setUser(session?.user)
            const {data: profileData, error: profileError} = await supabase.from('profiles').select('*').eq('id', user.id).single();
            await fetchCheckIns(user);
            if(!profileError){
                setProfile(profileData);
            }   
            else{
                setProfile(null)       
            }
        }
        else{
            setUser(null);
            setProfile(null);
            setCheckIns([])
        }
        setLoading(false);

 
    };
    const fetchCheckIns = async (user:any)=>{
        if (!user) return;
        setLoading(true)
        const { data: checkInData, error: checkInError } = await supabase
        .from('dailycheckins')
        .select('date_checkin, isSuccess, message_id')
        .eq('user_id', user.id)
        .order('date_checkin',{ascending:false})

        //fixing checkIns = null
        if(checkInError){
            setLoading(false);
            return;
        }
        if(!checkInData || checkInData.length === 0){
            setCheckIns([]);
            setLastCheckIn(null);
            setLoading(false);
            return;
        }
        const lastCheckInEntry = checkInData[0];
        setLastCheckInDate(lastCheckInEntry.date_checkin);
        const lastCheckInDate = lastCheckInEntry.date_checkin;
        if(lastCheckInDate === today){
            const { data: existingMessage, error: existingMessageError } = await supabase
                    .from('motivational_messages')
                    .select('message')
                    .eq('message_id', lastCheckInEntry.message_id)
                    .single();
                    if (!existingMessageError && existingMessage) {
                        setExistingMotivationalMessage(existingMessage.message);
                      }
                }
                setCheckIns(checkInData);
                setLastCheckIn(lastCheckInDate);
                setLoading(false);
        // if(!checkInError){
        //     const lastCheckIndate = checkInData[0].date_checkin;
        //     if(lastCheckIndate === today){
        //         const { data: exisintMessage, error: checkInError } = await supabase
        //         .from('motivational_messages')
        //         .select('message')
        //         .eq('message_id', checkInData[0].message_id)
        //         .single();
        //                 if(!checkInError){
        //                     setExistingMotivationalMessage(exisintMessage.message)
        //                 }
        //                 }
        //     setCheckIns(checkInData)
        //     setLastCheckIn(lastCheckIndate)
        // }
        // else{
        //     console.log("Error while fetching checkIns: ", checkInError)
        // }
        // setLoading(false);
    }

    const updateProfile =async (newData: any)=>{
        const{data: updateData, error: updateError} = await supabase.from('profiles').update(newData).eq('id', user.id);
    }

    useEffect(()=>{
        const {
            data: { subscription },
          } = supabase.auth.onAuthStateChange((_event, session) => {
            setSession(session);
            // setUser(session?.user ?? null);
            fetchUserandProfile()
          });
      
          return () => {
            subscription.unsubscribe(); // Prevent memory leaks
          };;
    },[]); //Do I need a dependency param here?
    const submitTodayCheckIn = async ({success, date})=>{
        const today = new Date().toISOString().split('T')[0];
        setIsSubmitting(true);
        try{
            const motivationalMessagefromDB = await getMotivationalMessage({success: success})
            const tracking = await submitTodayMotivationalQuoteForTracking({message_id: motivationalMessagefromDB.message_id,date})
            const {error} = await supabase.from('dailycheckins').insert([{user_id: user.id, date_checkin:date,isSuccess: success,message_id:motivationalMessagefromDB.message_id}])

            if(error){
                console.error('Error inserting check-in:', error);
                if(error.code === "23505"){
                    console.log("Already CheckIn For Today");
                }
                else{ 
                    console.log("Error while Inserting Check-in: ", error)
                }
                return null;      
            }
            else{
                const refetch = await fetchCheckIns(user)
                const message = setMotivationalMessage(motivationalMessagefromDB.message);            
                await Promise.all([tracking, refetch, message]);
            }
        }    
        catch (err) {
            console.error('Unexpected error in submitTodayCheckIn:', err);
            return null;
          } finally {
            setIsSubmitting(false);
          }
    }
    const submitTodayMotivationalQuoteForTracking = async({message_id,date})=>{
        const {error: insertToUserQuotesTracking} = await supabase.from('user_quotes_tracking').insert([{user_id: user.id, date_shown:date,message_id: message_id}])
    }
    const getMotivationalMessage = async ({success})=>{
        const {data, error} = await supabase.rpc('get_random_message',{
            is_success: success,
            user_id: user.id     
        })
        if (error) {
            console.error("Failed to fetch motivational message:", error);
            return null;
        }
        const result = data?.[0];
        return {
            message_id: result.id,
            message: result.message
          };
        };
    return(
        <UserContext.Provider value={{handleLogOut, user,session, profile,updateProfile,checkIns, submitTodayCheckIn ,loading, lastCheckIn,isSubmitting,setMotivationalMessage ,motivationalMessage, existingMotivationalMessage, lastCheckInDate}}>
            {children}
        </UserContext.Provider>
    );
}

export const useUser = () => {
    const context = useContext(UserContext);
    if (!context) {
        throw new Error('useUser must be used within a UserProvider');
    }
    return context;
}; 