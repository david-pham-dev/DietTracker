import React, { useState } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  format,
  startOfWeek,
  endOfWeek,
  eachDayOfInterval,
  isSameDay,
  addDays,
  subDays,
  isToday,
} from "date-fns";
import { CheckCircle, XCircle, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface StreakDay {
  date: Date;
  success: boolean;
}

interface StreakCalendarProps {
  streakData?: StreakDay[];
  currentDate?: Date;
  onDateChange?: (date: Date) => void;
}

const StreakCalendar = ({
  streakData = [],
  currentDate = new Date(),
  onDateChange = () => {},
}: StreakCalendarProps) => {
  const [selectedDate, setSelectedDate] = useState<Date>(currentDate);

  // Generate mock data if none provided
  const mockStreakData: StreakDay[] =
    streakData.length > 0
      ? streakData
      : [
          { date: subDays(new Date(), 6), success: true },
          { date: subDays(new Date(), 5), success: true },
          { date: subDays(new Date(), 4), success: false },
          { date: subDays(new Date(), 3), success: true },
          { date: subDays(new Date(), 2), success: false },
          { date: subDays(new Date(), 1), success: true },
          { date: new Date(), success: true },
        ];

  // Get the start and end of the current week
  const start = startOfWeek(selectedDate, { weekStartsOn: 1 }); // Week starts on Monday
  const end = endOfWeek(selectedDate, { weekStartsOn: 1 }); // Week ends on Sunday

  // Get all days in the current week
  const weekDays = eachDayOfInterval({ start, end });

  // Navigate to previous week
  const previousWeek = () => {
    const newDate = subDays(start, 1);
    setSelectedDate(newDate);
    onDateChange(newDate);
  };

  // Navigate to next week
  const nextWeek = () => {
    const newDate = addDays(end, 1);
    setSelectedDate(newDate);
    onDateChange(newDate);
  };

  // Calculate stats for the current week
  const successDays = mockStreakData.filter(
    (d) => d.success && weekDays.some((day) => isSameDay(day, d.date)),
  ).length;

  const failedDays = mockStreakData.filter(
    (d) => !d.success && weekDays.some((day) => isSameDay(day, d.date)),
  ).length;

  return (
    <Card className="w-full max-w-4xl bg-white shadow-lg">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-xl font-bold">Weekly View</CardTitle>
        <div className="flex items-center space-x-2">
          <Button variant="outline" size="icon" onClick={previousWeek}>
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <span className="text-sm font-medium">
            {format(start, "MMM d")} - {format(end, "MMM d, yyyy")}
          </span>
          <Button variant="outline" size="icon" onClick={nextWeek}>
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-7 gap-2">
          {weekDays.map((day) => {
            const streakDay = mockStreakData.find((d) =>
              isSameDay(d.date, day),
            );
            const hasData = streakDay !== undefined;
            const isSuccess = hasData && streakDay.success;

            return (
              <div
                key={day.toString()}
                className={`flex flex-col items-center justify-center p-4 rounded-lg ${isToday(day) ? "border-2 border-primary" : "border"} ${hasData ? (isSuccess ? "bg-green-100" : "bg-red-100") : ""}`}
              >
                <div className="text-sm font-medium mb-1">
                  {format(day, "EEE")}
                </div>
                <div className="text-lg font-bold">{format(day, "d")}</div>
                {hasData ? (
                  isSuccess ? (
                    <CheckCircle className="h-6 w-6 text-green-600 mt-2" />
                  ) : (
                    <XCircle className="h-6 w-6 text-red-600 mt-2" />
                  )
                ) : (
                  <div className="h-6 w-6 mt-2" />
                )}
              </div>
            );
          })}
        </div>

        <div className="mt-6">
          <h3 className="text-md font-medium mb-2">Weekly Stats</h3>
          <div className="flex flex-wrap gap-3">
            <Badge
              variant="outline"
              className="bg-green-100 text-green-800 border-green-300"
            >
              Success Days: {successDays}
            </Badge>
            <Badge
              variant="outline"
              className="bg-red-100 text-red-800 border-red-300"
            >
              Missed Days: {failedDays}
            </Badge>
            <Badge
              variant="outline"
              className="bg-blue-100 text-blue-800 border-blue-300"
            >
              Success Rate:{" "}
              {weekDays.length > 0
                ? Math.round(
                    (successDays / (successDays + failedDays || 1)) * 100,
                  )
                : 0}
              %
            </Badge>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default StreakCalendar;
