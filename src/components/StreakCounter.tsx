import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Flame, Trophy, Calendar } from "lucide-react";
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';
import relativeTime from 'dayjs/plugin/relativeTime';
dayjs.extend(utc);
dayjs.extend(relativeTime);
dayjs.extend(timezone);
const localTz = dayjs.tz.guess();
interface StreakCounterProps {
  currentStreak?: number | null;
  longestStreak?: number;
  streakGoal?: number;
  lastCheckIn: string |null;
}

const StreakCounter: React.FC<StreakCounterProps> = ({
  currentStreak,
  longestStreak,
  streakGoal = 30,
  lastCheckIn
}) => {
  // Calculate progress percentage towards goal
  const progressPercentage = Math.min(
    Math.round((currentStreak / streakGoal) * 100),
    100,
  );
  const renderLastCheckIn = ()=>{
    if(!lastCheckIn){
      return 'No Check In Found'
    }
    // const now = dayjs().tz(localTz).startOf('day');
    const now = dayjs
    .utc(lastCheckIn)   // convert DB timestamp (UTC) → Day.js
    .tz(localTz)        // shift to local zone
    .startOf('day');
    const checkInDate = dayjs(lastCheckIn);
    const diffDays = now.diff(checkInDate, 'day');
    if (diffDays <= 7) {
      if(diffDays == 0){
        return "Today";
      }
      return checkInDate.from(now); // "3 days ago"
    }
    else {
      return checkInDate.format('DD-MM-YYYY'); // "18-05-2025"
    }
  }

  // Determine motivational message based on streak 
  const getMotivationalMessage = () => {
    if (currentStreak === 0) return "Start your streak today!";
    if (currentStreak < 3) return "Great start! Keep going!";
    if (currentStreak < 7) return "You're building momentum!";
    if (currentStreak < 14) return "Impressive dedication!";
    if (currentStreak < 30) return "You're on fire! Amazing work!";
    return "Incredible achievement! You're unstoppable!";
  };

  return (
    <Card className="w-full max-w-md mx-auto bg-white shadow-lg">
      <CardHeader className="pb-2">
        <div className="flex justify-between items-center">
          <CardTitle className="text-2xl font-bold">Your Streak</CardTitle>
          <Badge variant="outline" className="flex items-center gap-1">
            <Calendar className="h-3 w-3" />
            Last check-in: {renderLastCheckIn()}
          </Badge>
        </div>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col items-center space-y-6">
          {/* Current streak display */}
          <div className="flex items-center justify-center w-full">
            <div className="relative flex flex-col items-center justify-center w-36 h-36 rounded-full bg-gradient-to-br from-orange-100 to-orange-50 border-4 border-orange-300">
              <Flame className="absolute -top-4 h-8 w-8 text-orange-500" />
              <span className="text-5xl font-bold text-orange-600">
                {currentStreak}
              </span>
              <span className="text-sm font-medium text-orange-800">DAYS</span>
            </div>
          </div>

          {/* Motivational message */}
          <p className="text-center text-gray-700 font-medium">
            {getMotivationalMessage()}
          </p>

          {/* Progress bar */}
          <div className="w-full space-y-2">
            <div className="flex justify-between text-sm">
              <span>Progress to {streakGoal}-day goal</span>
              <span>{progressPercentage}%</span>
            </div>
            <Progress value={progressPercentage} className="h-2" />
          </div>

          {/* Longest streak */}
          <div className="flex items-center justify-center gap-2 bg-gray-50 w-full py-3 rounded-md">
            <Trophy className="h-5 w-5 text-yellow-500" />
            <span className="font-medium">Longest streak:</span>
            <span className="font-bold text-lg">{longestStreak} days</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default StreakCounter;
