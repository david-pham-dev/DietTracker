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
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import StreakCounter from "./StreakCounter";
import DailyCheckIn from "./DailyCheckIn";
import StreakCalendar from "./StreakCalendar";
import ProgressCharts from "./ProgressCharts";
import { useUser } from "@/types/hook/useUserData1";
import { useStreakCounter } from "@/types/hook/useStreakCounter";
const Dashboard= () => {
  const navigate = useNavigate();
  const {handleLogOut ,user, loading, profile, checkIns, submitTodayCheckIn, lastCheckIn, isSubmitting, motivationalMessage, existingMotivationalMessage, lastCheckInDate} = useUser(); 
  const [subscription, setSubscription] = useState({
    status: "loading", // loading, active, free, expired
    type: "", // free, monthly, lifetime
    daysRemaining: 0,
  });
  const [showModal, setShowModal] = useState(false);
  const [showProgressOverlay, setShowProgressOverlay] = useState(true);
  const [showAchievementsOverlay, setShowAchievementsOverlay] = useState(true);
  const { currentStreak, longestStreak} = useStreakCounter(checkIns, lastCheckInDate);
//take user data
  useEffect(()=>{
    if(!loading && !user && !profile &&!checkIns){
      navigate("/login")
    }
  },[user,loading, profile, checkIns, lastCheckIn])
  if (loading) return <p>Loading Data.......</p>;
  
  
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-card">
        <div className="container flex h-16 items-center justify-between px-4">
          <div className="flex items-center gap-2">
            <div className="rounded-full bg-primary p-1">
              <TrendingUpIcon className="h-5 w-5 text-primary-foreground" />
            </div>
            <h1 className="text-xl font-bold">InShape Diet Tracker</h1>
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
            {/* {profile && (
                <Avatar>
                  <AvatarImage 
                    src={profile.avatar_url} 
                    alt="User" 
                  />  
                  <AvatarFallback>{profile?.full_name?.charAt(0).toUpperCase() || "U"}</AvatarFallback>
                </Avatar>
              )} */}
            {profile &&
            <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Avatar className="cursor-pointer">
                <AvatarImage src={profile.avatar_url} alt="User" />
                <AvatarFallback>{profile?.full_name?.charAt(0).toUpperCase() || "U"}</AvatarFallback>
              </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              {/* <DropdownMenuItem onClick={() => navigate("/profile")}>Profile</DropdownMenuItem> */}
              <DropdownMenuItem onClick={handleLogOut}>Logout</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
            }
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
                          <div className="text-gray-600 mb-4">Progress Charts For Advanced Analytics</div>
                          <Button 
                            onClick={() => setShowProgressOverlay(false)}
                            className="bg-primary hover:bg-primary/90"
                          >
                            Preview
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
                      Achievement Badges When You Reach  Milestones
                    </div>
                    <Button 
                      onClick={() => setShowAchievementsOverlay(false)}
                      className="bg-primary hover:bg-primary/90"
                    >
                      Preview 
                    </Button>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>


          {/* Supporting Section */}
          <Card className="col-span-full bg-gradient-to-br from-background to-muted/20">
            <CardHeader className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="rounded-full bg-primary/10 p-2">
                  <CreditCardIcon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-2xl">Feedback & Supporting Us</CardTitle>
              </div>
              <CardDescription className="text-base leading-relaxed max-w-3xl">
                Fitness changed my life. Therefore, we don't charge a cent — we just want to help people get healthier. If you've found the app useful, leaving feedback would mean a lot. It helps us improve and stay on the right track.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 gap-8 md:grid-cols-2 max-w-4xl mx-auto">
                {/* Feedback Card */}
                <div className="rounded-xl border bg-card/50 backdrop-blur-sm p-6 shadow-lg transition-all hover:shadow-xl hover:scale-[1.02]">
                  <div className="flex justify-between items-start mb-6">
                    <div className="space-y-1">
                      <h3 className="font-semibold text-xl">Leave a Feedback!!</h3>
                      <div className="h-1 w-20 bg-primary/20 rounded-full"></div>
                    </div>
                    <div className="rounded-full bg-primary/10 p-2">
                      <svg className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                      </svg>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
                    Our application is still in the making. We read and appreciate all your comments.
                  </p>
                  <ul className="text-sm space-y-4 mb-8">
                    <li className="flex items-center gap-3">
                      <div className="rounded-full bg-primary/10 p-1">
                        <CheckCircleIcon className="h-4 w-4 text-primary" />
                      </div>
                      <span>Bugs Fixing</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="rounded-full bg-primary/10 p-1">
                        <CheckCircleIcon className="h-4 w-4 text-primary" />
                      </div>
                      <span>Feature Requests</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="rounded-full bg-primary/10 p-1">
                        <CheckCircleIcon className="h-4 w-4 text-primary" />
                      </div>
                      <span>General Feedback</span>
                    </li>
                  </ul>
                  <Button 
                    size="lg" 
                    className="w-full bg-[#1877F2] hover:bg-[#145ec1] text-white transition-all"
                    onClick={() => window.open('https://forms.gle/cQpkKaFxGgSgSroh6', '_blank')}
                  >
                    <ArrowRightIcon className="mr-2 h-5 w-5" />
                    Share Your Feedback
                  </Button>
                </div>

                {/* Social Connection Card */}
                <div className="rounded-xl border bg-card/50 backdrop-blur-sm p-6 shadow-lg transition-all hover:shadow-xl hover:scale-[1.02]">
                  <div className="flex justify-between items-start mb-6">
                    <div className="space-y-1">
                      <h3 className="font-semibold text-xl">Let's Connect</h3>
                      <div className="h-1 w-20 bg-primary/20 rounded-full"></div>
                    </div>
                    <div className="rounded-full bg-primary/10 p-2">
                      <svg className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
                    If we share similar characteristics and you need any help on:
                  </p>
                  <ul className="text-sm space-y-4 mb-8">
                    <li className="flex items-center gap-3">
                      <div className="rounded-full bg-primary/10 p-1">
                        <CheckCircleIcon className="h-4 w-4 text-primary" />
                      </div>
                      <span>A proper workout plan and diet</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="rounded-full bg-primary/10 p-1">
                        <CheckCircleIcon className="h-4 w-4 text-primary" />
                      </div>
                      <span>Get your money, muscle and mindset on track</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="rounded-full bg-primary/10 p-1">
                        <CheckCircleIcon className="h-4 w-4 text-primary" />
                      </div>
                      <span>Share your progress and stories</span>
                    </li>
                  </ul>
                  <div className="space-y-3">
                    <Button 
                      size="lg" 
                      className="w-full bg-rose-600 hover:bg-rose-700 text-white transition-all"
                      onClick={() => window.open('https://instagram.com/_mduc.8', '_blank')}
                    >
                      <svg className="mr-2 h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                      </svg>
                      Shoot me a DM on Instagram
                    </Button>
                    <Button 
                      size="lg" 
                      variant="outline"
                      className="w-full hover:bg-primary/10 transition-all"
                      onClick={() => navigate('/testimonials')}
                    >
                      <ArrowRightIcon className="mr-2 h-5 w-5" />
                      Read Our Stories
                    </Button>
                  </div>
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
            © 2025 InShape Diet Tracker
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
    name: "Building Momentum",
    description: "Stick to your diet for a day",
    unlocked: true,
  },
  {
    id: 2,
    name: "Perfect Week",
    description: "7 days stick with your commitments",
    unlocked: true,
  },
  {
    id: 3,
    name: "30 Day Streak",
    description: "You are a Machine - Complete your first month",
    unlocked: false,
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
    name: "15 lbs Lost",
    description: "Lose 15 pounds total",
    unlocked: false,
  },
];

export default Dashboard;
