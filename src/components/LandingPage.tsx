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
} from "lucide-react";

const LandingPage = () => {
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
              OMAD/Keto Streak Tracker
            </h1>
            <p className="max-w-[700px] text-muted-foreground md:text-xl">
              Build healthy habits and track your progress with our simple,
              motivational streak tracker designed specifically for OMAD and
              Keto diets.
            </p>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Link to="/register">
                <Button size="lg" className="gap-1">
                  Start Your Streak
                  <ArrowRightIcon className="h-4 w-4" />
                </Button>
              </Link>
              <Link to="/login">
                <Button size="lg" variant="outline">
                  Login
                </Button>
              </Link>
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
                  Track your consecutive days following OMAD and Keto diets
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
                  Visualize your journey with an easy-to-read calendar view
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

      {/* Supporting Section */}
      <section className="py-12 md:py-24 bg-muted/50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">
                Supporting Us
              </div>
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                Simple Credit System
              </h2>
              <p className="max-w-[700px] text-muted-foreground md:text-xl">
                Try for free, then choose a plan that works for you
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-3">
            {/* Free Plan */}
            <Card className="relative overflow-hidden border-2 border-muted">
              <CardHeader>
                <CardTitle>Free Trial</CardTitle>
                <CardDescription>
                  Build your habit for two weeks
                </CardDescription>
                <div className="text-3xl font-bold">$0</div>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center">
                    <CheckCircleIcon className="mr-2 h-4 w-4 text-primary" />
                    14 days full access
                  </li>
                  <li className="flex items-center">
                    <CheckCircleIcon className="mr-2 h-4 w-4 text-primary" />
                    Daily check-ins
                  </li>
                  <li className="flex items-center">
                    <CheckCircleIcon className="mr-2 h-4 w-4 text-primary" />
                    Basic streak tracking
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Link to="/register" className="w-full">
                  <Button className="w-full" variant="outline">
                    Start Free
                  </Button>
                </Link>
              </CardFooter>
            </Card>
            {/* Monthly Plan */}
            <Card className="relative overflow-hidden border-2 border-primary">
              <div className="absolute right-4 top-4">
                <Badge>Popular</Badge>
              </div>
              <CardHeader>
                <CardTitle>Monthly</CardTitle>
                <CardDescription>
                  Affordable monthly subscription
                </CardDescription>
                <div className="text-3xl font-bold">$4</div>
                <p className="text-sm text-muted-foreground">per month</p>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center">
                    <CheckCircleIcon className="mr-2 h-4 w-4 text-primary" />
                    Unlimited access
                  </li>
                  <li className="flex items-center">
                    <CheckCircleIcon className="mr-2 h-4 w-4 text-primary" />
                    Advanced analytics
                  </li>
                  <li className="flex items-center">
                    <CheckCircleIcon className="mr-2 h-4 w-4 text-primary" />
                    Personalized insights
                  </li>
                  <li className="flex items-center">
                    <CheckCircleIcon className="mr-2 h-4 w-4 text-primary" />
                    Cancel anytime
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Link to="/register" className="w-full">
                  <Button className="w-full">Subscribe Monthly</Button>
                </Link>
              </CardFooter>
            </Card>
            {/* Lifetime Plan */}
            <Card className="relative overflow-hidden border-2 border-muted">
              <CardHeader>
                <CardTitle>Lifetime</CardTitle>
                <CardDescription>
                  One-time payment, forever access
                </CardDescription>
                <div className="text-3xl font-bold">$10</div>
                <p className="text-sm text-muted-foreground">
                  one-time payment
                </p>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center">
                    <CheckCircleIcon className="mr-2 h-4 w-4 text-primary" />
                    Everything in Monthly
                  </li>
                  <li className="flex items-center">
                    <CheckCircleIcon className="mr-2 h-4 w-4 text-primary" />
                    Lifetime updates
                  </li>
                  <li className="flex items-center">
                    <CheckCircleIcon className="mr-2 h-4 w-4 text-primary" />
                    Priority support
                  </li>
                  <li className="flex items-center">
                    <CheckCircleIcon className="mr-2 h-4 w-4 text-primary" />
                    No recurring payments
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Link to="/register" className="w-full">
                  <Button className="w-full" variant="outline">
                    Get Lifetime Access
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-12 md:py-24 bg-background">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">
                Testimonials
              </div>
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                Success Stories
              </h2>
              <p className="max-w-[700px] text-muted-foreground md:text-xl">
                See how our app has helped others achieve their health goals
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center">
                    <StarIcon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <CardTitle className="text-lg">Sarah M.</CardTitle>
                    <CardDescription>Lost 15 lbs in 2 months</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  "The streak tracker kept me accountable. Seeing my progress
                  visually made all the difference in sticking with OMAD."
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center">
                    <StarIcon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <CardTitle className="text-lg">Michael T.</CardTitle>
                    <CardDescription>
                      30-day streak and counting
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  "The daily check-ins and motivational messages keep me going
                  even on tough days. Best habit tracker I've used!"
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center">
                    <StarIcon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <CardTitle className="text-lg">Jennifer K.</CardTitle>
                    <CardDescription>Reached goal weight</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  "The combination of tracking both OMAD and Keto helped me stay
                  focused. I love seeing my streak grow each day!"
                </p>
              </CardContent>
            </Card>
          </div>
          <div className="flex justify-center">
            <Link to="/testimonials">
              <Button variant="outline" className="gap-2">
                <MessageSquareIcon className="h-4 w-4" />
                Read More Success Stories
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 md:py-24 bg-muted/50">
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
                Everything you need to know about our streak tracker
              </p>
            </div>
          </div>
          <div className="mx-auto max-w-3xl space-y-4 py-12">
            <Card>
              <CardHeader>
                <CardTitle>What is OMAD?</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  OMAD stands for "One Meal A Day" and is an intermittent
                  fasting approach where you consume all your daily calories in
                  just one meal and fast for the remaining hours of the day.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>What is the Keto diet?</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  The Ketogenic (Keto) diet is a low-carb, high-fat diet that
                  helps your body enter a metabolic state called ketosis, where
                  it burns fat for energy instead of carbohydrates.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>How does the streak tracker work?</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Our streak tracker allows you to check in daily to record
                  whether you've followed your OMAD and/or Keto diet. It tracks
                  consecutive successful days, visualizes your progress, and
                  provides motivational feedback to keep you going.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>What happens if I miss a day?</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  If you miss a day, your current streak will reset, but your
                  longest streak will still be saved. We'll provide motivational
                  messages to help you get back on track and start a new streak.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Can I try before subscribing?</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Yes! We offer a 14-day free trial with full access to all
                  features. This gives you enough time to build a habit and see
                  if our tracker helps you stay consistent with your OMAD and
                  Keto goals.
                </p>
              </CardContent>
            </Card>
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
                habits with our OMAD/Keto Streak Tracker.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Link to="/register">
                <Button size="lg" className="gap-1">
                  Start Your Free Trial
                  <ArrowRightIcon className="h-4 w-4" />
                </Button>
              </Link>
              <Link to="/login">
                <Button size="lg" variant="outline">
                  Login
                </Button>
              </Link>
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
              <h3 className="text-xl font-bold">OMAD/Keto Streak Tracker</h3>
            </div>
            <p className="text-sm text-muted-foreground">
              © 2023 OMAD/Keto Streak Tracker. All rights reserved.
            </p>
          </div>
          <div className="flex gap-4">
            <Link to="/terms">
              <Button variant="ghost" size="sm">
                Terms
              </Button>
            </Link>
            <Link to="/privacy">
              <Button variant="ghost" size="sm">
                Privacy
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="ghost" size="sm">
                Contact
              </Button>
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
