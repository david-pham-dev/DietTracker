import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  CalendarIcon,
  ChevronRightIcon,
  TrendingUpIcon,
  AwardIcon,
  UserIcon,
} from "lucide-react";
import StreakCounter from "./StreakCounter";
import DailyCheckIn from "./DailyCheckIn";
import StreakCalendar from "./StreakCalendar";
import ProgressCharts from "./ProgressCharts";

const Home = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-card">
        <div className="container flex h-16 items-center justify-between px-4">
          <div className="flex items-center gap-2">
            <div className="rounded-full bg-primary p-1">
              <TrendingUpIcon className="h-5 w-5 text-primary-foreground" />
            </div>
            <h1 className="text-xl font-bold">OMAD/Keto Streak Tracker</h1>
          </div>
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="sm">
              <UserIcon className="mr-2 h-4 w-4" />
              Profile
            </Button>
            <Avatar>
              <AvatarImage
                src="https://api.dicebear.com/7.x/avataaars/svg?seed=user123"
                alt="User"
              />
              <AvatarFallback>U</AvatarFallback>
            </Avatar>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container px-4 py-6">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {/* Streak Counter Card */}
          <Card className="col-span-full lg:col-span-2">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUpIcon className="h-5 w-5" />
                Current Streak
              </CardTitle>
            </CardHeader>
            <CardContent>
              <StreakCounter currentStreak={7} longestStreak={14} />
            </CardContent>
          </Card>

          {/* Daily Check-in Card */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CalendarIcon className="h-5 w-5" />
                Daily Check-in
              </CardTitle>
            </CardHeader>
            <CardContent>
              <DailyCheckIn />
            </CardContent>
          </Card>

          {/* Tabs for Calendar and Progress */}
          <Card className="col-span-full">
            <CardHeader>
              <Tabs defaultValue="calendar" className="w-full">
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="calendar">
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    Calendar View
                  </TabsTrigger>
                  <TabsTrigger value="progress">
                    <TrendingUpIcon className="mr-2 h-4 w-4" />
                    Progress Charts
                  </TabsTrigger>
                </TabsList>
                <TabsContent value="calendar" className="mt-4">
                  <StreakCalendar />
                </TabsContent>
                <TabsContent value="progress" className="mt-4">
                  <ProgressCharts />
                </TabsContent>
              </Tabs>
            </CardHeader>
          </Card>

          {/* Achievements Section */}
          <Card className="col-span-full">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <AwardIcon className="h-5 w-5" />
                Achievements
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
                {/* Achievement Badges */}
                {achievements.map((achievement) => (
                  <div
                    key={achievement.id}
                    className={`flex flex-col items-center justify-center rounded-lg border p-4 text-center ${achievement.unlocked ? "" : "opacity-50"}`}
                  >
                    <div
                      className={`mb-2 rounded-full p-2 ${achievement.unlocked ? "bg-primary/20" : "bg-muted"}`}
                    >
                      <AwardIcon
                        className={`h-6 w-6 ${achievement.unlocked ? "text-primary" : "text-muted-foreground"}`}
                      />
                    </div>
                    <h3 className="text-sm font-medium">{achievement.name}</h3>
                    <p className="text-xs text-muted-foreground">
                      {achievement.description}
                    </p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t bg-card">
        <div className="container flex h-16 items-center justify-between px-4">
          <p className="text-sm text-muted-foreground">
            © 2023 OMAD/Keto Streak Tracker
          </p>
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="sm">
              Help
            </Button>
            <Button variant="ghost" size="sm">
              Settings
            </Button>
          </div>
        </div>
      </footer>
    </div>
  );
};

// Mock achievement data
const achievements = [
  {
    id: 1,
    name: "7 Day Streak",
    description: "Complete a full week of OMAD and Keto",
    unlocked: true,
  },
  {
    id: 2,
    name: "30 Day Streak",
    description: "Complete a month of OMAD and Keto",
    unlocked: false,
  },
  {
    id: 3,
    name: "Perfect Week",
    description: "7 days with both OMAD and Keto",
    unlocked: true,
  },
  {
    id: 4,
    name: "5 lbs Lost",
    description: "Lose your first 5 pounds",
    unlocked: true,
  },
  {
    id: 5,
    name: "10 lbs Lost",
    description: "Lose 10 pounds total",
    unlocked: false,
  },
  {
    id: 6,
    name: "Ketosis Master",
    description: "Maintain ketosis for 14 days",
    unlocked: false,
  },
];

export default Home;
