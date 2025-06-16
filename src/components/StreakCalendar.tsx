import React, { useEffect, useState } from "react";
import { Calendar } from "@/components/ui/calendar";
import dayjs from 'dayjs';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import {
  format,
  startOfMonth,
  endOfMonth,
  eachDayOfInterval,
  isSameDay,
  parseISO
} from "date-fns";


interface StreakCalendarProps {
  checkIns: { date_checkin: string, isSuccess: boolean }[]; 
  currentMonth?: Date;
  onMonthChange?: (date: Date) => void;
  
}

const StreakCalendar = ({
  // streakData = [],
  checkIns,
  currentMonth = new Date(),
  onMonthChange = () => {},
}: StreakCalendarProps) => {
  useEffect(()=>{
    if(checkIns){
      console.log("this is checkIns from StreakCalendar: ",checkIns)
    }
  })
  const [month, setMonth] = useState<Date>(currentMonth);

  const handleMonthChange = (date: Date) => {
    setMonth(date);
    onMonthChange(date);
  };

  // Function to determine day class based on streak data
  const getDayClass = (day: Date) => {
    // const streakDay = checkIns.find((d) => isSameDay(parseISO(d.date_checkin), day));
    // console.log("this is streakDay: ", streakDay)
    // if (!streakDay) return "";
    // if (streakDay) {
    //   return "bg-green-500 text-white rounded-full";
    // } 
    // else {
    //   return "bg-red-500 text-white rounded-full";
    // }
  };
  // 1. Sort checkIns by date
const sorted = [...checkIns].sort((a, b) =>
  new Date(a.date_checkin).getTime() - new Date(b.date_checkin).getTime()
);

// 2. Build a full calendar
if (sorted.length == 0) {
  return []; 
}
const startDate = dayjs(sorted[0].date_checkin);
const endDate = dayjs(); // today
const checkInMap = new Map(
  checkIns.map(item => [dayjs(item.date_checkin).format('YYYY-MM-DD'), item])
);

const fullCheckIns = [];
for (let d = startDate; d.isBefore(endDate) || d.isSame(endDate, 'day'); d = d.add(1, 'day')) {
  const key = d.format('YYYY-MM-DD');
  const entry = checkInMap.get(key);
  if (entry) {
    fullCheckIns.push(entry);
  } else {
    fullCheckIns.push({
      date_checkin: key,
      isSuccess: false, // This day was missed
    });
  }
}

  const modifiers = fullCheckIns.reduce((acc, data) => {
    const date = parseISO(data.date_checkin); // JS Date object 
    const key = data.isSuccess ? 'success' : 'failure';
    if (!acc[key]) acc[key] = [];
    acc[key].push(date);
    return acc;
  }, {} as Record<'success' | 'failure', Date[]>);
  

  return (
    <Card className="w-full max-w-4xl bg-white shadow-lg">
      <CardHeader>
        <CardTitle className="text-xl font-bold">Streak Calendar</CardTitle>
      </CardHeader>
      <CardContent className="">
        <div className="flex flex-col space-y-4">
          <Calendar
            mode="single"
            numberOfMonths={3}
            month={month}
            onMonthChange={handleMonthChange} 
            className="rounded-md border"
            classNames={{
              months: "flex gap-8 justify-center", // <- controls layout of months
              month: "bg-white rounded-lg shadow-sm p-3",
              day_selected: "bg-transparent",
              day: "h-8 w-8 p-0 font-normal aria-selected:opacity-100",
              // day_today: getDayClass(new Date())
            }}
            modifiers={modifiers}
            modifiersClassNames={{
               success: 'bg-green-500 text-white rounded-full',
               failure: 'bg-red-500 text-white rounded-full'
            }}
            // selected={new Date()}
          />

          <div className="flex flex-wrap gap-4 justify-center mt-4">
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded-full bg-green-500"></div>
              <span className="text-sm">Sticked to your commitments</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded-full bg-red-500"></div>
              <span className="text-sm">Either Fail or Forget</span>
            </div>
          </div>

          <div className="mt-4">
            <h3 className="text-md font-medium mb-2">Current Month Stats</h3>
            <div className="flex flex-wrap gap-3">
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default StreakCalendar;
