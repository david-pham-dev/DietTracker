import React from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Link } from "react-router-dom";
import { TrendingUp, Award, Calendar, ArrowRight } from "lucide-react";

const MyJourneyPage = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-primary/20 to-background py-20 md:py-32">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
            <div className="flex flex-col space-y-4">
              <h1 className="text-3xl md:text-5xl font-bold tracking-tighter">
                My Weight Loss Journey
              </h1>
              <p className="text-muted-foreground md:text-xl/relaxed">
                How I lost 50 pounds with OMAD and Keto, and how you can too
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" asChild>
                  <Link to="/register">Start Your Journey</Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <a href="#my-story">Read My Story</a>
                </Button>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="relative">
                <div className="absolute -inset-1 rounded-xl bg-gradient-to-r from-primary to-primary-foreground opacity-30 blur"></div>
                <div className="relative aspect-square w-full max-w-sm overflow-hidden rounded-xl bg-background">
                  <img
                    src="https://images.unsplash.com/photo-1611672585731-fa10603fb9e0?w=800&q=80"
                    alt="Before and After Transformation"
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* My Story Section */}
      <section id="my-story" className="py-12 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                My Story
              </h2>
              <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed">
                From struggling with weight to finding a sustainable lifestyle
              </p>
            </div>
          </div>

          <div className="mx-auto max-w-3xl space-y-8">
            <Card>
              <CardHeader>
                <CardTitle>The Breaking Point</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Three years ago, I stepped on the scale and saw 230 pounds
                  staring back at me. As someone who stands 5'10", this put me
                  firmly in the obese category. I was constantly tired, my
                  confidence was at an all-time low, and my doctor was concerned
                  about my rising blood pressure and cholesterol levels.
                </p>
                <p className="text-muted-foreground">
                  After trying countless diets and exercise programs with only
                  temporary success, I knew I needed to find something
                  sustainable that would work with my lifestyle and psychology.
                  That's when I discovered the combination of OMAD (One Meal A
                  Day) and the Ketogenic diet.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Discovering OMAD and Keto</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  OMAD simplified my relationship with food. Instead of
                  obsessing about meals all day, I focused my eating into a
                  single, satisfying meal. This not only saved me time but also
                  helped me develop a healthier relationship with hunger and
                  fullness cues.
                </p>
                <p className="text-muted-foreground mb-4">
                  Adding the ketogenic approach to my one meal ensured I was
                  getting proper nutrition while keeping my body in fat-burning
                  mode. The high-fat, moderate-protein, low-carb approach kept
                  me satisfied and energized throughout the day.
                </p>
                <p className="text-muted-foreground">
                  The most surprising benefit was how quickly my energy levels
                  improved and my cravings disappeared. Within weeks, I was no
                  longer a slave to sugar and processed foods.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>The Power of Streaks</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  The game-changer in my journey was when I started tracking my
                  daily adherence to both OMAD and Keto. I noticed that the
                  longer my streak grew, the more motivated I became to maintain
                  it.
                </p>
                <p className="text-muted-foreground mb-4">
                  There's something psychologically powerful about not wanting
                  to break a chain of successful days. Even on challenging
                  days—holidays, social events, stressful work periods—I found
                  myself making better choices because I didn't want to reset my
                  streak counter.
                </p>
                <p className="text-muted-foreground">
                  This realization led me to create this app. I wanted to share
                  this simple but effective motivation tool with others on
                  similar journeys.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>The Results</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Over 18 months, I lost 50 pounds, going from 230 to 180
                  pounds. My blood pressure normalized, my cholesterol improved,
                  and my energy levels soared. I no longer needed afternoon
                  naps, and I found myself naturally becoming more active.
                </p>
                <p className="text-muted-foreground mb-4">
                  Beyond the physical changes, the mental clarity and emotional
                  stability I gained were unexpected benefits. Food no longer
                  controlled my day, and I discovered a sense of freedom I
                  hadn't experienced in years.
                </p>
                <p className="text-muted-foreground">
                  Most importantly, I've maintained this weight loss for over a
                  year now. By focusing on streaks rather than perfection, I've
                  developed a sustainable approach that allows for occasional
                  flexibility while maintaining my overall health goals.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="bg-muted py-12 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                My Journey Timeline
              </h2>
              <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed">
                The key milestones that marked my transformation
              </p>
            </div>
          </div>

          <div className="mx-auto max-w-3xl relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-border"></div>

            {/* Timeline items */}
            <div className="space-y-12">
              <div className="relative">
                <div className="flex items-center justify-center">
                  <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                    <span className="text-primary-foreground font-bold">1</span>
                  </div>
                </div>
                <div className="ml-auto mr-auto md:ml-auto md:mr-0 md:pl-10 mt-6 w-full md:w-1/2">
                  <Card>
                    <CardHeader>
                      <CardTitle>Month 1: The Beginning</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">
                        Lost 10 pounds in the first month. Experienced keto flu
                        for a few days but pushed through. Started with a 5-day
                        streak, then 10 days, then 15.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>

              <div className="relative">
                <div className="flex items-center justify-center">
                  <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                    <span className="text-primary-foreground font-bold">2</span>
                  </div>
                </div>
                <div className="ml-auto mr-auto md:mr-auto md:ml-0 md:pr-10 mt-6 w-full md:w-1/2">
                  <Card>
                    <CardHeader>
                      <CardTitle>Month 3: The Adaptation</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">
                        Down 25 pounds total. Energy levels stabilized. Longest
                        streak: 21 days. Started noticing clothes fitting
                        differently.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>

              <div className="relative">
                <div className="flex items-center justify-center">
                  <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                    <span className="text-primary-foreground font-bold">3</span>
                  </div>
                </div>
                <div className="ml-auto mr-auto md:ml-auto md:mr-0 md:pl-10 mt-6 w-full md:w-1/2">
                  <Card>
                    <CardHeader>
                      <CardTitle>Month 6: The Breakthrough</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">
                        Down 35 pounds. Blood pressure normalized. Achieved a
                        30-day perfect streak. Started developing the concept
                        for this app.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>

              <div className="relative">
                <div className="flex items-center justify-center">
                  <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                    <span className="text-primary-foreground font-bold">4</span>
                  </div>
                </div>
                <div className="ml-auto mr-auto md:mr-auto md:ml-0 md:pr-10 mt-6 w-full md:w-1/2">
                  <Card>
                    <CardHeader>
                      <CardTitle>Month 12: The Milestone</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">
                        Down 45 pounds. Completed a 60-day streak. Started
                        helping friends with their OMAD/Keto journeys. Began
                        development of the streak tracker app.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>

              <div className="relative">
                <div className="flex items-center justify-center">
                  <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                    <span className="text-primary-foreground font-bold">5</span>
                  </div>
                </div>
                <div className="ml-auto mr-auto md:ml-auto md:mr-0 md:pl-10 mt-6 w-full md:w-1/2">
                  <Card>
                    <CardHeader>
                      <CardTitle>Month 18: The Goal</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">
                        Reached goal weight of 180 pounds. 50 pounds total lost.
                        Launched the OMAD/Keto Streak Tracker app to help others
                        achieve similar success.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                Start Your Own Success Story
              </h2>
              <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed">
                Use the same streak tracking system that helped me lose 50
                pounds
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" asChild>
                <Link to="/register">Create Free Account</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/testimonials">Read Success Stories</Link>
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

export default MyJourneyPage;
