import React, {createContext, useContext, useEffect, useState} from "react";
import { supabase } from "../../../supabase/supabase";
import { isToday } from "date-fns";


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
    setMotivationalMessage:React.Dispatch<React.SetStateAction<string | null>>;
    updateProfile: (newData: any) => Promise<void>; 
    submitTodayCheckIn : ({success, date}) => Promise<void>;
};

const UserContext = createContext<UserContextType | null>(null);

export const UserProvider = ({children}:{children:React.ReactNode})=>{
    const [session, setSession] = useState<any>(null);
    const [user, setUser] = useState<any>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [profile, setProfile] = useState<any>(null);
    const [checkIns, setCheckIns] = useState<any>(null);
    const [lastCheckIn, setLastCheckIn] = useState<string | null>(null);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [motivationalMessage, setMotivationalMessage] = useState<string | null>(null);
    const [existingMotivationalMessage, setExistingMotivationalMessage] = useState<string | null>(null);
    const today = new Date().toISOString().split('T')[0];


    //Authentication

    const fetchUserandProfile = async ()=>{
        setLoading(true);
        const {
            data: {session}
        } = await supabase.auth.getSession();
        if(session){
            setSession(session);
        }
        if(session?.user){
            const user = session?.user;
            setUser(session?.user)
            const {data: profileData, error: profileError} = await supabase.from('profiles').select('*').eq('id', user.id).single();
            await fetchCheckIns(user);
            if(!profileError){
                setProfile(profileData);
            }   
            else{
                console.log("Profile Fetching Error:", profileError)
                setProfile(null)       
            }
        }
        else{
            setUser(null);
            setProfile(null);
            setCheckIns(null)
        }
        setLoading(false);

        // if(user){
        //     setUser(user)
        //     // await getLastCheckIn(user.id)
        //     const {data: profileData, error: profileError} = await supabase.from('profiles').select('*').eq('id', user.id).single();
        //     await fetchCheckIns(user);
        //     if(!profileError){
        //         setProfile(profileData);
        //     }   
        //     else{
        //         console.log("Profile Fetching Error:", profileError)
        //         setProfile(null)       
        //     }
        // }
        // else{
        //     setUser(null);
        //     setProfile(null);
        //     setCheckIns(null)
        // }
        // setLoading(false);

 
    };
    const fetchCheckIns = async (user:any)=>{
        if (!user) return;
        setLoading(true)
        const { data: checkInData, error: checkInError } = await supabase
        .from('dailycheckins')
        .select('date_checkin, isSuccess, message_id')
        .eq('user_id', user.id)
        .order('date_checkin',{ascending:false})
        if(!checkInError){
            const lastCheckIndate = checkInData[0].date_checkin;
            if(lastCheckIndate === today){
                const { data: exisintMessage, error: checkInError } = await supabase
                .from('motivational_messages')
                .select('message')
                .eq('message_id', checkInData[0].message_id)
                .single();
                        if(!checkInError){
                            setExistingMotivationalMessage(exisintMessage.message)
                        }
                        }
            setCheckIns(checkInData)
            setLastCheckIn(lastCheckIndate)
        }
        else{
            console.log("Error while fetching checkIns: ", checkInError)
        }
        setLoading(false);

    }

    const updateProfile =async (newData: any)=>{
        const{data: updateData, error: updateError} = await supabase.from('profiles').update(newData).eq('id', user.id);
    }

    useEffect(()=>{
        fetchUserandProfile();
    },[]); //Do I need a dependency param here?
    const submitTodayCheckIn = async ({success, date})=>{
        console.log('Starting submitTodayCheckIn with:', { success, date });
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
                console.log('Check-in inserted successfully, fetching motivational message');
                // const motivationalMessagefromDB = await getMotivationalMessage({success: success})
                console.log('Received motivational message:', motivationalMessagefromDB);
                
                console.log('Submitting motivational quote for tracking');
                // const tracking = await submitTodayMotivationalQuoteForTracking({message_id: motivationalMessagefromDB.message_id,date})
                
                console.log('Refetching check-ins');
                const refetch = await fetchCheckIns(user)
                
                console.log('Setting motivational message:', motivationalMessagefromDB.message);
                const message = setMotivationalMessage(motivationalMessagefromDB.message);
                
                await Promise.all([tracking, refetch, message]);
                console.log("Check In Submitted successfully");
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
        // const {error: insertToDailyCheckInsError} = await supabase
        //     .from('dailycheckins')
        //     .update({ message_id: message_id })
        //     .eq('user_id', user.id)
        //     .eq('date_checkin', date);
        // console.log('this is messageId: ', message_id)
        // console.log('this is userId: ', user.id)
        // console.log('this is datecheckin: ', date)
        // if(insertToDailyCheckInsError) {
        //     console.error('Error updating dailycheckins:', insertToDailyCheckInsError);
        // }
        if(Error){
            if(insertToUserQuotesTracking){
                console.log('Error while adding data to user_quotes_tracking: ', insertToUserQuotesTracking)
            }
        }
        else{
            console.log("Quotes Added to both dailyCheckIns and userQuotesTracking");
        }
    }
    const getMotivationalMessage = async ({success})=>{
        console.log('Fetching motivational message for success:', success);
        const {data, error} = await supabase.rpc('get_random_message',{
            is_success: success,
            user_id: user.id     
        })
        if (error) {
            console.error("Failed to fetch motivational message:", error);
            return null;
        }
        console.log('Received data from get_random_message:', data);
        const result = data?.[0];
        return {
            message_id: result.id,
            message: result.message
          };
        };
    return(
        <UserContext.Provider value={{user,session, profile,updateProfile,checkIns, submitTodayCheckIn ,loading, lastCheckIn,isSubmitting,setMotivationalMessage ,motivationalMessage, existingMotivationalMessage}}>
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