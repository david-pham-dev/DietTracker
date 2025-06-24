import React from "react";
import { Link } from "react-router-dom";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import {
  TrendingUpIcon,
  CheckCircleIcon,
  CalendarIcon,
  AwardIcon,
  ArrowRightIcon,
  HeartIcon,
  StarIcon,
  MessageSquareIcon,
  CreditCardIcon,
  ArrowRightCircleIcon
} from "lucide-react";
import { useUser } from "@/types/hook/useUserData1";
import { motion } from "framer-motion";
import CheckLoginSeamlessly from "./helper/checkLoginSeamlessly";
const LandingPage = () => {
  const {user,session} = useUser();
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-primary/20 to-background py-20 md:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="rounded-full bg-primary p-2 text-primary-foreground">
              <TrendingUpIcon className="h-6 w-6" />
            </div>
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
             InShape Diet Streak Tracker
            </h1>
            <p className="max-w-[700px] text-muted-foreground md:text-xl">
              Get in the best shape of your life and build good habits with our simple,
              motivational diet streak tracker.
            </p>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <CheckLoginSeamlessly session={session}/>
              {/* <Link to="/login">
                <Button size="lg" className="gap-1">
                  Start Your Streak
                  <ArrowRightIcon className="h-4 w-4" />
                </Button>
              </Link> */}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 md:py-24 bg-background">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">
                Key Features
              </div>
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                Everything You Need to Stay on Track
              </h2>
              <p className="max-w-[700px] text-muted-foreground md:text-xl">
                Simple tools to help you build and maintain healthy eating
                habits
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-3">
            <Card className="relative overflow-hidden">
              <div className="absolute right-2 top-2">
                <Badge variant="outline" className="bg-primary/10">
                  Motivational
                </Badge>
              </div>
              <CardHeader>
                <TrendingUpIcon className="h-6 w-6 text-primary" />
                <CardTitle>Streak Counter</CardTitle>
                <CardDescription>
                  Track your consecutive days following your diet
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p>
                  See your current streak and all-time best to stay motivated
                </p>
              </CardContent>
            </Card>
            <Card className="relative overflow-hidden">
              <div className="absolute right-2 top-2">
                <Badge variant="outline" className="bg-primary/10">
                  Simple
                </Badge>
              </div>
              <CardHeader>
                <CheckCircleIcon className="h-6 w-6 text-primary" />
                <CardTitle>Daily Check-ins</CardTitle>
                <CardDescription>
                  Quick and easy daily tracking with motivational feedback
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p>
                  Just one tap to record your success and keep your streak going
                </p>
              </CardContent>
            </Card>
            <Card className="relative overflow-hidden">
              <div className="absolute right-2 top-2">
                <Badge variant="outline" className="bg-primary/10">
                  Visual
                </Badge>
              </div>
              <CardHeader>
                <CalendarIcon className="h-6 w-6 text-primary" />
                <CardTitle>Progress Calendar</CardTitle>
                <CardDescription>
                  Visualise your journey with an easy-to-read calendar view
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p>
                  See patterns in your habits and celebrate your consistency
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      {/* <section className="py-12 md:py-24 bg-background">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">
                My Journey
              </div>
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                From Struggle to Success
              </h2>
              <p className="max-w-[700px] text-muted-foreground md:text-xl">
                How I transformed my life and created this app to help others achieve their health goals
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-3">
            <Card className="relative overflow-hidden hover:shadow-lg transition-all">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-full bg-primary/20 flex items-center justify-center">
                    <TrendingUpIcon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <CardTitle className="text-lg">The Beginning</CardTitle>
                    <CardDescription>My OMAD Journey</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  "After years of failed diet attempts, I discovered OMAD and created this app to track my progress. The results were life-changing..."
                </p>
                <div className="mt-4">
                  <Badge variant="outline" className="bg-primary/10">
                    Read More
                  </Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="relative overflow-hidden hover:shadow-lg transition-all">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-full bg-primary/20 flex items-center justify-center">
                    <AwardIcon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <CardTitle className="text-lg">The Transformation</CardTitle>
                    <CardDescription>Results & Milestones</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  "Through consistent tracking and dedication, I achieved my health goals and gained valuable insights into building sustainable habits..."
                </p>
                <div className="mt-4">
                  <Badge variant="outline" className="bg-primary/10">
                    Read More
                  </Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="relative overflow-hidden hover:shadow-lg transition-all">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-full bg-primary/20 flex items-center justify-center">
                    <HeartIcon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <CardTitle className="text-lg">The Mission</CardTitle>
                    <CardDescription>Helping Others</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  "Now I'm passionate about helping others achieve their health goals through this simple yet powerful tracking tool..."
                </p>
                <div className="mt-4">
                  <Badge variant="outline" className="bg-primary/10">
                    Read More
                  </Badge>
                </div>
              </CardContent>
            </Card>
          </div>
          <div className="text-center">
            <Link to="/testimonials">
              <Button variant="outline" className="gap-2">
                <MessageSquareIcon className="h-4 w-4" />
                Read My Full Story
              </Button>
            </Link>
          </div>
        </div>
      </section> */}
        <section className="py-12 md:py-24 bg-muted/50">
    <div className="container px-4 md:px-6">
      <div className="flex flex-col items-center justify-center space-y-4 text-center">
        <div className="space-y-2">
          <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">
            My Journey
          </div>
          <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
            How Small Habits Changed Everything
          </h2>
          <p className="max-w-[1000px] text-muted-foreground md:text-l">
           Fat, Ugly, Wake Up With No Energy, That Used To Be Me. But once I decided to change my life based on simple, consistent habits—like eating mindfully and tracking my meals— my life changes. This app is a result of that journey.
          </p>
        </div>
      </div>

      <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-3">
        <Card className="relative overflow-hidden hover:shadow-lg transition-all">
          <CardHeader>
            <div className="flex items-center gap-4">
              <div className="h-12 w-12 rounded-full bg-primary/20 flex items-center justify-center">
                <TrendingUpIcon className="h-6 w-6 text-primary" />
              </div>
              <div>
                <CardTitle className="text-lg">The Turning Point</CardTitle>
                <CardDescription>TIRED OF BEING UGLY</CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              "I decided I don't want to be fat and out-of-shape anymore. I want to regain the control of mylife - IT ALL STARTS WITH MY PHYSICALITY."
            </p>
            <div className="mt-4">
              <Badge variant="outline" className="bg-primary/10">
                Read More
              </Badge>
            </div>
          </CardContent>
        </Card>

        <Card className="relative overflow-hidden hover:shadow-lg transition-all">
          <CardHeader>
            <div className="flex items-center gap-4">
              <div className="h-12 w-12 rounded-full bg-primary/20 flex items-center justify-center">
                <AwardIcon className="h-6 w-6 text-primary" />
              </div>
              <div>
                <CardTitle className="text-lg">The Progress</CardTitle>
                <CardDescription>IF YOU NOT TRACKING - YOU ARE SLACKING</CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              "Meal tracking helped me stay accountable, notice patterns, and stay on track—even when motivation dipped."
            </p>
            <div className="mt-4">
              <Badge variant="outline" className="bg-primary/10">
                Read More
              </Badge>
            </div>
          </CardContent>
        </Card>

        <Card className="relative overflow-hidden hover:shadow-lg transition-all">
          <CardHeader>
            <div className="flex items-center gap-4">
              <div className="h-12 w-12 rounded-full bg-primary/20 flex items-center justify-center">
                <HeartIcon className="h-6 w-6 text-primary" />
              </div>
              <div>
                <CardTitle className="text-lg">MY MISSION</CardTitle>
                <CardDescription>Building It for You</CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              "This app is designed for people like me—who want a simple way to track progress, stay consistent, and feel better every day."
            </p>
            <div className="mt-4">
              <Badge variant="outline" className="bg-primary/10">
                Read More
              </Badge>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="flex justify-center">
        <Link to="/journey">
          {/* <Button variant="outline" className="gap-2">
            <MessageSquareIcon className="h-4 w-4" />
            Read the Full Story
          </Button> */}
  <motion.button
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    className="flex items-center border border-black/70 text-black/80 bg-white/10 px-5 py-3 rounded-2xl font-semibold shadow-md hover:bg-white hover:text-black transition"
  >
  <ArrowRightCircleIcon className="h-5 w-5  text-black/80" />
  See How I Turned My Life Around
</motion.button>
        </Link> 
      </div>
    </div>
  </section>

      <section className="py-12 md:py-24 bg-background">
  <div className="container px-4 md:px-6">
    <div className="flex flex-col items-center justify-center space-y-4 text-center">
      <div className="space-y-2">
        <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">
          FAQ
        </div>
        <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
          Frequently Asked Questions
        </h2>
        <p className="max-w-[700px] text-muted-foreground md:text-xl">
          Everything you need to know about our streak tracker and how it helps build better eating habits
        </p>
      </div>
    </div>
    <div className="mx-auto max-w-3xl space-y-4 py-12">
      <Card>
        <CardHeader>
          <CardTitle>What is this app about?</CardTitle>
        </CardHeader>
        <CardContent>
          <p>
            This app helps you build healthy habits by tracking your daily consistency in eating whole, minimally processed foods. It’s not tied to any specific diet — just a reminder to be more intentional with what you eat.
          </p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Do I have to follow a specific diet?</CardTitle>
        </CardHeader>
        <CardContent>
          <p>
            Not at all. Whether you’re plant-based, paleo, or just trying to cut out junk food, this app supports your personal goals by encouraging mindful choices and consistency — no labels, no rules.
          </p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>How does the streak tracker work?</CardTitle>
        </CardHeader>
        <CardContent>
          <p>
            Each day, you check in to confirm that you ate mindfully and mostly whole foods. The app tracks how many days in a row you’ve stayed consistent, giving you a clear visual of your progress and momentum.
          </p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>What if I miss a day?</CardTitle>
        </CardHeader>
        <CardContent>
          <p>
            Missing a day resets your current streak, but your longest streak stays recorded. It’s not about being perfect — it’s about building awareness, bouncing back, and showing up again tomorrow.
          </p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Is it really free?</CardTitle>
        </CardHeader>
        <CardContent>
          <p>
            Yes — this app is completely free. It’s something I built to help others stay on track, just like I did. If you find it helpful, please leave a feedback on how we can improve the app, and connect with me on Instagram and share your journey!
          </p>
        </CardContent>        
      </Card>
      <div className="flex flex-col md:flex-row gap-4 mt-8">
          <Button 
                    size="lg" 
                    className="w-full bg-[#1877F2] hover:bg-[#145ec1] text-white transition-all"
                      onClick={() => window.open('https://forms.gle/cQpkKaFxGgSgSroh6', '_blank')}
                  >
                    <ArrowRightIcon className="mr-2 h-5 w-5" />
                    Share Your Feedback
                  </Button>
                  <Button 
                      size="lg" 
                      className=" w-full bg-rose-600 hover:bg-rose-700 text-white transition-all"
                      onClick={() => window.open('https://instagram.com/_mduc.8', '_blank')}
                    >
                      <svg className="mr-2 h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                      </svg>
                      Shoot me a DM on Instagram
                    </Button>
                    
        </div>
    </div>
  </div>
</section>


      {/* CTA Section */}
      <section className="py-12 md:py-24 bg-primary/10">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                Ready to Start Your Streak?
              </h2>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">
                Join thousands of others who are successfully building healthy
                habits with our Streak Tracker.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
            <CheckLoginSeamlessly session={session}
            text="All Greatness Comes From The Smallest Step" className="gap-1 bg-green-600 hover:bg-green-700 active:bg-green-600 focus:bg-green-600"/>
            {/* <Link to="/login">
                <Button size="lg" className="gap-1 bg-green-600 hover:bg-green-700 active:bg-green-600 focus:bg-green-600">
                  All Greatness Comes From The Smallest Step  
                  <ArrowRightIcon className="h-4 w-4" />
                </Button>
              </Link> */}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-card">
        <div className="container flex flex-col gap-6 py-8 md:flex-row md:items-center md:justify-between md:py-12">
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <div className="rounded-full bg-primary p-1">
                <TrendingUpIcon className="h-5 w-5 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-bold">InShape Diet Tracker</h3>
            </div>
            <p className="text-sm text-muted-foreground">
              © 2025 InShape Diet Tracker. All rights reserved.
            </p>
          </div>
          <div className="flex gap-4">
            {/* <Link to="/terms">
              <Button variant="ghost" size="sm">
                Terms
              </Button>
            </Link> */}
            <Link to="/privacy">
              <Button variant="ghost" size="sm">
                Privacy
              </Button>
            </Link>
            {/* <Link to="/contact">
              <Button variant="ghost" size="sm">
                Contact
              </Button>
            </Link> */}
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
