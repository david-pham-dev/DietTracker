import React, { useEffect, useState } from "react";
import { Calendar } from "@/components/ui/calendar";
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

interface StreakDay {
  checkIns: { date_checkin: string, isSuccess: boolean }[]; 
  // omad: boolean;
  // keto: boolean;
}

interface StreakCalendarProps {
  // streakData?: StreakDay[];
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
    const streakDay = checkIns.find((d) => isSameDay(parseISO(d.date_checkin), day));
    console.log("this is streakDay: ", streakDay)
    if (!streakDay) return "";
    if (streakDay) {
      return "bg-green-500 text-white rounded-full";
    } 
    else {
      return "bg-red-500 text-white rounded-full";
    }
  };
  const modifiers = checkIns.reduce((acc, data) => {
    const date = parseISO(data.date_checkin); // JS Date object 
    const key = data.isSuccess ? 'success' : 'failure';
    if (!acc[key]) acc[key] = [];
    acc[key].push(date);
    console.log("this is accKey: ", acc['failure'])
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
              day_today: getDayClass(new Date())
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
              <span className="text-sm">Both OMAD & Keto</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded-full bg-yellow-400"></div>
              <span className="text-sm">Either OMAD or Keto</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded-full bg-red-500"></div>
              <span className="text-sm">Streak Broken</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded-full border border-gray-300"></div>
              <span className="text-sm">No Data</span>
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
