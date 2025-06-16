import React, {createContext, useContext, useEffect, useState} from "react";
import { supabase } from "../../../supabase/supabase";
import { isToday } from "date-fns";
import { useUser } from "./useUserData1";
import { differenceInCalendarDays } from 'date-fns';
import dayjs from "dayjs";

type StreakContextType = {
    currentStreak: number | null;
    longestStreak: number | null;
};

const DataContext = createContext<StreakContextType | null>(null);

export const StreakDataProvider = ({children}:{children:React.ReactNode}) => {
    const {checkIns} = useUser();
    let curr = 0;
    let max = 0;
    let prevDate: Date | null = null;
    const [currentStreak, setCurrentStreak] = useState<number | null>(0);
    const [longestStreak, setLongestStreak] = useState<number | null>(0);

    useEffect(() => {
        if (!checkIns || checkIns.length === 0) return;
        const sorted  = [...checkIns].sort(
            (a,b) => new Date(a.date_checkin).getTime() - new Date(b.date_checkin).getTime() 
        );
        for(const entry of sorted){
            const date = new Date(entry.date_checkin);
            if(!entry.isSuccess){
                curr = 0;
                prevDate = null;
                continue;
            }
            if(prevDate && differenceInCalendarDays(date, prevDate) === 1){
                curr +=1;
            }
            else{
                curr =1;
            }
            if(curr > max) max = curr
            prevDate = date;
        }
        setCurrentStreak(curr);
        setLongestStreak(max);
    }, [checkIns]); // Only run when checkIns changes
    return (
        <DataContext.Provider value={{currentStreak, longestStreak}}>
            {children}
        </DataContext.Provider>
    );
};

export const useStreak = () => {
    const context = useContext(DataContext);
    if (!context) {
        throw new Error('useStreak must be used within a StreakDataProvider');
    }
    return context;
}; 