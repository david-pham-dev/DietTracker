import React, {createContext, useContext, useEffect, useState} from "react";
import { supabase } from "../../../supabase/supabase";

type UserContextType = {
    user: any;
    profile: any;   
    loading: boolean;
    checkIns: any;
    updateProfile: (newData: any) => Promise<void>; 
    submitTodayCheckIn : ({success, date}) => Promise<any>;

    getMotivationalMessage: ({success})=> Promise<{message: string} | null>;
};

const UserContext = createContext<UserContextType | null>(null);

export const UserProvider = ({children}:{children:React.ReactNode})=>{
    const [user, setUser] = useState<any>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [profile, setProfile] = useState<any>(null);
    const [checkIns, setCheckIns] = useState<any>(null);

    const fetchUserandProfile = async ()=>{
        setLoading(true);
        const {
            data: {user}
        } = await supabase.auth.getUser();
        if(user){
            setUser(user)
            const {data: profileData, error: profileError} = await supabase.from('profiles').select('*').eq('id', user.id).single();
            const { data: checkInData, error: checkInError } = await supabase
            .from('dailycheckins')
            .select('date_checkin, isSuccess')
            .eq('user_id', user.id)
            .order('date_checkin',{ascending:true})
            if(!profileError && !checkInError){
                setProfile(profileData);
                setCheckIns(checkInData);
            }   
            else{
                if(checkInError){
                    console.error("Error while fetching CheckIns:", checkInError);
                    setCheckIns(null);
                }
                if(profileError){
                    console.error("Profile Fetching Error:", profileError)
                    setProfile(null)
                }
            }
        }
        else{
            setUser(null);
            setProfile(null);
            setCheckIns(null)
        }
        setLoading(false);
    };

  
    const updateProfile =async (newData: any)=>{
        const{data: updateData, error: updateError} = await supabase.from('profiles').update(newData).eq('id', user.id);
    }

    //useEffect for DailyCheckIn popup
    // const fetchCheckIns = async() =>{
    //     const {data, error} = await supabase.from('dailycheckins').select('date_checkin')
    //     .eq('user_id', user.id).order('date_checkin',{ascending:true});
    //     if(error){
    //         console.error("Error while Fetching CheckIns: ", error);
    //         setCheckIns(null)
    //     }
    //     else{
    //         setCheckIns(data)
    //     }
    //     setLoading(false);
    // }
    useEffect(()=>{
        fetchUserandProfile();
    },[]); //Do I need a dependency param here?
    const submitTodayCheckIn = async ({success, date})=>{
        const today = new Date().toISOString().split('T')[0];
        const {error} = await supabase.from('dailycheckins').insert([{user_id: user.id, date_checkin:date,isSuccess: success}])
        if(error){
            if(error.code === "23505"){
                console.log("Already CheckIn For Today");
            }
            else{ 
                console.log("Error while Inserting Check-in: ", error)
            }      
        }
        else{
            console.log("Check In Submitted");
        }
    }
    const submitTodayMotivationalQuote = async()=>{
        
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
        return { message: data?.message};
    }
    return(
        <UserContext.Provider value={{user, profile,updateProfile,checkIns,submitTodayCheckIn,loading, getMotivationalMessage}}>
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