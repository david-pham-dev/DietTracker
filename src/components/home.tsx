import React, { useState, useEffect } from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link, useNavigate } from "react-router-dom";
import {
  CalendarIcon,
  ChevronRightIcon,
  TrendingUpIcon,
  AwardIcon,
  UserIcon,
  CreditCardIcon,
  CheckCircleIcon,
  AlertCircleIcon,
  ArrowRightIcon,
} from "lucide-react";
import StreakCounter from "./StreakCounter";
import DailyCheckIn from "./DailyCheckIn";
import StreakCalendar from "./StreakCalendar";
import ProgressCharts from "./ProgressCharts";
import { useUser } from "@/types/hook/useUserData1";
import { useStreak } from "@/types/hook/useDataStreak";
const Home= () => {
  const navigate = useNavigate();
  const {currentStreak, longestStreak} = useStreak();
  const {user, loading, profile, checkIns, submitTodayCheckIn, lastCheckIn, isSubmitting, motivationalMessage, existingMotivationalMessage} = useUser(); 
  const [subscription, setSubscription] = useState({
    status: "loading", // loading, active, free, expired
    type: "", // free, monthly, lifetime
    daysRemaining: 0,
  });
  const [showModal, setShowModal] = useState(false);
  const [showProgressOverlay, setShowProgressOverlay] = useState(true);
  const [showAchievementsOverlay, setShowAchievementsOverlay] = useState(true);
  
//take user data
  useEffect(()=>{
    if(!loading && !user && !profile &&!checkIns){
      navigate("/login")
    }
  },[user,loading, profile, checkIns, lastCheckIn])
  if (loading) return <p>Loading Data.......</p>;
  // if(lastCheckIn) {
  //   console.log('this is lastCheckIn in home.tsx: ', lastCheckIn)
  // }
  // else{
  //   console.log('there is no lastCheckIn in home.tsx');
  // }
if(motivationalMessage){
  console.log('this is motivational message in Home.tsx: ', motivationalMessage)
}
if(existingMotivationalMessage){
  console.log('this is existing message in Home.tsx: ', existingMotivationalMessage)
}
  // Mock function to check subscription status
  // In a real app, this would fetch from your database

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
          <div className="flex items-center gap-2">          
              <div className="text-sm text-muted-foreground">
               Hello, {profile?.full_name}
              </div>
          </div>
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="sm" onClick={() => navigate("/profile")}>
              <UserIcon className="mr-2 h-4 w-4" />
              Profile
            </Button>
            {profile && (
                <Avatar>
                  <AvatarImage 
                    src={profile.avatar_url} 
                    alt="User" 
                  />
                  <AvatarFallback>{profile?.full_name?.charAt(0).toUpperCase() || "U"}</AvatarFallback>
                </Avatar>
              )}
          </div>
        </div>
      </header>

      {/* Subscription Banner */}
      {subscription.status === "free" && (
        <div className="bg-primary/10 py-2">
          <div className="container px-4 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <AlertCircleIcon className="h-4 w-4 text-primary" />
              <p className="text-sm">
                <span className="font-medium">Free trial:</span>{" "}
                {subscription.daysRemaining} days remaining
              </p>
            </div>
            <Link to="/supporting">
              <Button size="sm" variant="outline" className="text-xs h-8">
                Upgrade
              </Button>
            </Link>
          </div>
        </div>
      )}

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
              <StreakCounter lastCheckIn={lastCheckIn} currentStreak={currentStreak} longestStreak={longestStreak} />
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
              <DailyCheckIn existingMotivationalMessage = {existingMotivationalMessage} checkIns={checkIns} Loading ={loading} isSubmitting ={isSubmitting} motivationalMessage={motivationalMessage} onSubmit={submitTodayCheckIn} user={user} />
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
                  <StreakCalendar checkIns={checkIns}  />
                </TabsContent>
                <TabsContent value="progress" className="mt-4">
                  <div className="relative">
                    <ProgressCharts />
                    {showProgressOverlay && (
                      <div className="absolute inset-0 bg-white/80 backdrop-blur-sm flex items-center justify-center rounded-lg">
                        <div className="text-center p-6">
                          <div className="text-2xl font-bold text-gray-800 mb-2">Coming Soon</div>
                          <div className="text-gray-600 mb-4">Progress charts feature is under development</div>
                          <Button 
                            onClick={() => setShowProgressOverlay(false)}
                            className="bg-primary hover:bg-primary/90"
                          >
                            Review Progress
                          </Button>
                        </div>
                      </div>
                    )}
                  </div>
                </TabsContent>
              </Tabs>
            </CardHeader>
          </Card>

          {/* Achievements Section */}
          <Card className="col-span-full relative">
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
              {showAchievementsOverlay && (
                <div className="absolute inset-0 bg-white/80 backdrop-blur-sm flex items-center justify-center rounded-lg">
                  <div className="text-center p-6">
                    <div className="text-2xl font-bold text-gray-800 mb-2">
                      Coming Soon
                    </div>
                    <div className="text-gray-600 mb-4">
                      Achievement badges feature is under development
                    </div>
                    <Button 
                      onClick={() => setShowAchievementsOverlay(false)}
                      className="bg-primary hover:bg-primary/90"
                    >
                      Review Achievements
                    </Button>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>


          {/* Supporting Section */}
          <Card className="col-span-full">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CreditCardIcon className="h-5 w-5" />
                Supporting
              </CardTitle>
              <CardDescription>
                Choose a plan that works for you
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                {/* Free Plan */}
                <div
                  className={`rounded-lg border p-4 ${subscription.type === "free" ? "border-primary bg-primary/5" : ""}`}
                >
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-medium">Free Trial</h3>
                    {subscription.type === "free" && (
                      <Badge variant="outline" className="bg-primary/10">
                        Current
                      </Badge>
                    )}
                  </div>
                  <p className="text-2xl font-bold mb-1">$0</p>
                  <p className="text-sm text-muted-foreground mb-4">14 days</p>
                  <ul className="text-sm space-y-2 mb-4">
                    <li className="flex items-center">
                      <CheckCircleIcon className="mr-2 h-3 w-3 text-primary" />
                      Basic features
                    </li>
                    <li className="flex items-center">
                      <CheckCircleIcon className="mr-2 h-3 w-3 text-primary" />
                      Daily check-ins
                    </li>
                  </ul>
                  {subscription.type !== "free" && (
                    <Button
                      variant="outline"
                      size="sm"
                      className="w-full"
                      disabled
                    >
                      Current Plan
                    </Button>
                  )}
                </div>

                {/* Monthly Plan */}
                <div
                  className={`rounded-lg border p-4 ${subscription.type === "monthly" ? "border-primary bg-primary/5" : ""}`}
                >
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-medium">Monthly</h3>
                    {subscription.type === "monthly" && (
                      <Badge variant="outline" className="bg-primary/10">
                        Current
                      </Badge>
                    )}
                  </div>
                  <p className="text-2xl font-bold mb-1">$4</p>
                  <p className="text-sm text-muted-foreground mb-4">
                    per month
                  </p>
                  <ul className="text-sm space-y-2 mb-4">
                    <li className="flex items-center">
                      <CheckCircleIcon className="mr-2 h-3 w-3 text-primary" />
                      All features
                    </li>
                    <li className="flex items-center">
                      <CheckCircleIcon className="mr-2 h-3 w-3 text-primary" />
                      Advanced analytics
                    </li>
                    <li className="flex items-center">
                      <CheckCircleIcon className="mr-2 h-3 w-3 text-primary" />
                      Cancel anytime
                    </li>
                  </ul>
                  {subscription.type !== "monthly" ? (
                    <Button size="sm" className="w-full">
                      Subscribe
                    </Button>
                  ) : (
                    <Button
                      variant="outline"
                      size="sm"
                      className="w-full"
                      disabled
                    >
                      Current Plan
                    </Button>
                  )}
                </div>

                {/* Lifetime Plan */}
                <div
                  className={`rounded-lg border p-4 ${subscription.type === "lifetime" ? "border-primary bg-primary/5" : ""}`}
                >
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-medium">Lifetime</h3>
                    {subscription.type === "lifetime" && (
                      <Badge variant="outline" className="bg-primary/10">
                        Current
                      </Badge>
                    )}
                  </div>
                  <p className="text-2xl font-bold mb-1">$10</p>
                  <p className="text-sm text-muted-foreground mb-4">one-time</p>
                  <ul className="text-sm space-y-2 mb-4">
                    <li className="flex items-center">
                      <CheckCircleIcon className="mr-2 h-3 w-3 text-primary" />
                      All features
                    </li>
                    <li className="flex items-center">
                      <CheckCircleIcon className="mr-2 h-3 w-3 text-primary" />
                      Lifetime updates
                    </li>
                    <li className="flex items-center">
                      <CheckCircleIcon className="mr-2 h-3 w-3 text-primary" />
                      Priority support
                    </li>
                  </ul>
                  {subscription.type !== "lifetime" ? (
                    <Button size="sm" className="w-full">
                      Get Lifetime
                    </Button>
                  ) : (
                    <Button
                      variant="outline"
                      size="sm"
                      className="w-full"
                      disabled
                    >
                      Current Plan
                    </Button>
                  )}
                </div>
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
