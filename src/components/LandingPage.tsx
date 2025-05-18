import React from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Link } from "react-router-dom";
import { CheckCircle, TrendingUp, Calendar, Award } from "lucide-react";

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-primary/20 to-background py-20 md:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="rounded-full bg-primary p-2 md:p-3">
              <TrendingUp className="h-6 w-6 md:h-8 md:w-8 text-primary-foreground" />
            </div>
            <h1 className="text-3xl md:text-5xl font-bold tracking-tighter">
              OMAD/Keto Streak Tracker
            </h1>
            <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed">
              Stay accountable and track your progress with our simple,
              motivational diet tracking app. Build streaks and achieve your
              health goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" asChild>
                <Link to="/register">Get Started</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/login">Sign In</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                Key Features
              </h2>
              <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed">
                Everything you need to stay on track with your diet goals
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mt-12">
            <Card className="flex flex-col items-center text-center">
              <CardHeader>
                <div className="rounded-full bg-primary/20 p-3 mb-3">
                  <TrendingUp className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Streak Counter</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Track your current and longest streaks to stay motivated and
                  see your progress over time.
                </CardDescription>
              </CardContent>
            </Card>
            <Card className="flex flex-col items-center text-center">
              <CardHeader>
                <div className="rounded-full bg-primary/20 p-3 mb-3">
                  <CheckCircle className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Daily Check-ins</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Simple yes/no check-ins to record your diet adherence with
                  motivational messages.
                </CardDescription>
              </CardContent>
            </Card>
            <Card className="flex flex-col items-center text-center">
              <CardHeader>
                <div className="rounded-full bg-primary/20 p-3 mb-3">
                  <Calendar className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Visual Calendar</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  See your progress at a glance with a color-coded calendar
                  showing your successful days.
                </CardDescription>
              </CardContent>
            </Card>
            <Card className="flex flex-col items-center text-center">
              <CardHeader>
                <div className="rounded-full bg-primary/20 p-3 mb-3">
                  <Award className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Achievements</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Earn badges and rewards for reaching milestones in your diet
                  journey.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-muted py-12 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                Success Stories
              </h2>
              <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed">
                See how our app has helped others achieve their diet goals
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mt-12">
            <Card>
              <CardHeader>
                <CardTitle>Sarah M.</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  "I've lost 15 pounds in 2 months by sticking to OMAD and
                  tracking my streaks. The visual reminders keep me
                  accountable!"
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>John D.</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  "The achievement badges make it fun to stay on track. I'm on a
                  45-day streak with keto and feeling better than ever."
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Emily R.</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  "Even when I break my streak, the motivational messages help
                  me get back on track the next day instead of giving up."
                </p>
              </CardContent>
            </Card>
          </div>
          <div className="flex justify-center mt-12">
            <Button variant="outline" asChild>
              <Link to="/testimonials">Read More Success Stories</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-10">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                Frequently Asked Questions
              </h2>
              <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed">
                Find answers to common questions about OMAD, Keto, and our app
              </p>
            </div>
          </div>

          <div className="mx-auto max-w-3xl">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>What is OMAD?</AccordionTrigger>
                <AccordionContent>
                  OMAD stands for "One Meal A Day" and is a form of intermittent
                  fasting where you consume all your daily calories in a single
                  meal within a one-hour eating window. The remaining 23 hours
                  are spent fasting.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2">
                <AccordionTrigger>What is the Keto diet?</AccordionTrigger>
                <AccordionContent>
                  The Ketogenic (Keto) diet is a low-carb, high-fat diet that
                  puts your body into a metabolic state called ketosis. In this
                  state, your body becomes efficient at burning fat for energy
                  instead of carbohydrates.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3">
                <AccordionTrigger>
                  Can I combine OMAD and Keto?
                </AccordionTrigger>
                <AccordionContent>
                  Yes, many people successfully combine OMAD and Keto for
                  enhanced weight loss results. The combination can help
                  accelerate fat burning and improve metabolic health. Our app
                  is designed to track both approaches separately or together.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4">
                <AccordionTrigger>
                  How do streaks help with diet adherence?
                </AccordionTrigger>
                <AccordionContent>
                  Streaks create a psychological motivation called the "don't
                  break the chain" effect. Seeing your progress visually and not
                  wanting to break your streak can provide powerful motivation
                  to stick with your diet, even on challenging days.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5">
                <AccordionTrigger>
                  What should I do if I break my streak?
                </AccordionTrigger>
                <AccordionContent>
                  Breaking a streak is normal and part of the journey. Our app
                  provides motivational messages to help you get back on track.
                  Remember that consistency over time matters more than
                  perfection. Just start a new streak the next day!
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-6">
                <AccordionTrigger>Is this app free to use?</AccordionTrigger>
                <AccordionContent>
                  Yes, the basic features of our app are completely free to use.
                  We offer premium features for advanced tracking and insights
                  with a subscription, but the core streak tracking
                  functionality is available at no cost.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary/10 py-12 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                Ready to Start Your Journey?
              </h2>
              <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed">
                Join thousands of others who are transforming their health with
                OMAD and Keto
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" asChild>
                <Link to="/register">Create Free Account</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/my-journey">Read My Journey</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-card">
        <div className="container flex flex-col md:flex-row items-center justify-between gap-4 py-10 px-4 md:px-6">
          <p className="text-sm text-muted-foreground">
            © 2023 OMAD/Keto Streak Tracker. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="sm" asChild>
              <Link to="/privacy">Privacy</Link>
            </Button>
            <Button variant="ghost" size="sm" asChild>
              <Link to="/terms">Terms</Link>
            </Button>
            <Button variant="ghost" size="sm" asChild>
              <Link to="/contact">Contact</Link>
            </Button>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
