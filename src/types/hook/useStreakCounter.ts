import { useEffect, useState } from "react";
import { differenceInCalendarDays } from "date-fns";

export interface DailyCheckIn {
  date_checkin: string;
  isSuccess: boolean;
  message_id: number;
}

export const useStreakCounter = (checkIns: DailyCheckIn[] | null, lastCheckInDate: Date) => {
  const [currentStreak, setCurrentStreak] = useState<number>(0);
  const [longestStreak, setLongestStreak] = useState<number>(0);

  useEffect(() => {
    if (!checkIns || checkIns.length === 0){
      setCurrentStreak(0);
      setLongestStreak(0);
      return; 
    } 

    let curr = 0;
    let max = 0;
    let prevDate: Date | null = null;

    const sorted = [...checkIns].sort(
      (a, b) => new Date(a.date_checkin).getTime() - new Date(b.date_checkin).getTime()
    );
    for (const entry of sorted) {
      const date = new Date(entry.date_checkin);
      if (!entry.isSuccess) {
        curr = 0;
        prevDate = null;
        continue;
      }

      if (prevDate && differenceInCalendarDays(date, prevDate) === 1) {
        curr += 1;
      } else {
        curr = 1;
      }

      if (curr > max) max = curr;
      prevDate = date;
    }
    const today = new Date();
    const daysSinceLastCheckIn = differenceInCalendarDays(today, lastCheckInDate);
    if(daysSinceLastCheckIn > 1){
      setCurrentStreak(0);
    }
    else if(daysSinceLastCheckIn === 1){
      setCurrentStreak(curr)
    }
    else{
      setCurrentStreak(curr)
    }
    setLongestStreak(max);
  }, [checkIns]);
  return { currentStreak, longestStreak };
};
