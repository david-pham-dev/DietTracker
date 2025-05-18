import React, { useState } from "react";
import { Calendar } from "@/components/ui/calendar";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  format,
  startOfMonth,
  endOfMonth,
  eachDayOfInterval,
  isSameDay,
} from "date-fns";

interface StreakDay {
  date: Date;
  omad: boolean;
  keto: boolean;
}

interface StreakCalendarProps {
  streakData?: StreakDay[];
  currentMonth?: Date;
  onMonthChange?: (date: Date) => void;
}

const StreakCalendar = ({
  streakData = [],
  currentMonth = new Date(),
  onMonthChange = () => {},
}: StreakCalendarProps) => {
  const [month, setMonth] = useState<Date>(currentMonth);

  // Generate mock data if none provided
  const mockStreakData: StreakDay[] =
    streakData.length > 0
      ? streakData
      : [
          { date: new Date(2023, 5, 1), omad: true, keto: true },
          { date: new Date(2023, 5, 2), omad: true, keto: true },
          { date: new Date(2023, 5, 3), omad: true, keto: false },
          { date: new Date(2023, 5, 4), omad: false, keto: true },
          { date: new Date(2023, 5, 5), omad: false, keto: false },
          { date: new Date(2023, 5, 6), omad: true, keto: true },
          { date: new Date(2023, 5, 7), omad: true, keto: true },
        ];

  const handleMonthChange = (date: Date) => {
    setMonth(date);
    onMonthChange(date);
  };

  // Function to determine day class based on streak data
  const getDayClass = (day: Date) => {
    const streakDay = mockStreakData.find((d) => isSameDay(d.date, day));

    if (!streakDay) return "";

    if (streakDay.omad && streakDay.keto) {
      return "bg-green-500 text-white rounded-full";
    } else if (streakDay.omad || streakDay.keto) {
      return "bg-yellow-400 text-black rounded-full";
    } else {
      return "bg-red-500 text-white rounded-full";
    }
  };

  return (
    <Card className="w-full max-w-4xl bg-white shadow-lg">
      <CardHeader>
        <CardTitle className="text-xl font-bold">Streak Calendar</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col space-y-4">
          <Calendar
            mode="single"
            month={month}
            onMonthChange={handleMonthChange}
            className="rounded-md border"
            classNames={{
              day_selected: "bg-transparent",
              day: (date) => getDayClass(date),
            }}
            selected={new Date()}
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
              <Badge
                variant="outline"
                className="bg-green-100 text-green-800 border-green-300"
              >
                Perfect Days:{" "}
                {mockStreakData.filter((d) => d.omad && d.keto).length}
              </Badge>
              <Badge
                variant="outline"
                className="bg-yellow-100 text-yellow-800 border-yellow-300"
              >
                Partial Days:{" "}
                {
                  mockStreakData.filter(
                    (d) => (d.omad || d.keto) && !(d.omad && d.keto),
                  ).length
                }
              </Badge>
              <Badge
                variant="outline"
                className="bg-red-100 text-red-800 border-red-300"
              >
                Missed Days:{" "}
                {mockStreakData.filter((d) => !d.omad && !d.keto).length}
              </Badge>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default StreakCalendar;
