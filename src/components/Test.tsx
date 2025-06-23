// import React from "react";
// import { Link } from "react-router-dom";
// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";
// import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
// import { Badge } from "@/components/ui/badge";
// import { TrendingUpIcon, ArrowLeftIcon, StarIcon } from "lucide-react";

// const testimonials = [
//   {
//     id: 1,
//     name: "Sarah M.",
//     avatar: "sarah",
//     achievement: "Lost 15 lbs in 2 months",
//     quote:
//       "The streak tracker kept me accountable every single day. Seeing my progress visually made all the difference in sticking with OMAD. I love how simple it is to check in daily, and the motivational messages really help on tough days. After just two months, I've lost 15 pounds and feel so much better!",
//     rating: 5,
//     streakDays: 62,
//   },
//   {
//     id: 2,
//     name: "Michael T.",
//     avatar: "michael",
//     achievement: "30-day streak and counting",
//     quote:
//       "As someone who's tried and failed at many diets, this app has been a game-changer. The daily check-ins and motivational messages keep me going even on tough days. I'm now on a 30-day streak with both OMAD and Keto, and I've never felt better. The achievement badges are surprisingly motivating!",
//     rating: 5,
//     streakDays: 30,
//   },
//   {
//     id: 3,
//     name: "Jennifer K.",
//     avatar: "jennifer",
//     achievement: "Reached goal weight",
//     quote:
//       "The combination of tracking both OMAD and Keto helped me stay focused on my goals. I love seeing my streak grow each day! After 3 months of consistent use, I finally reached my goal weight that I've been trying to hit for years. The calendar view helps me see patterns in my eating habits.",
//     rating: 5,
//     streakDays: 94,
//   },
//   {
//     id: 4,
//     name: "David L.",
//     avatar: "david",
//     achievement: "Improved energy levels",
//     quote:
//       "I was skeptical about OMAD at first, but this app made it easy to track my progress. The streak counter is addictive - I don't want to break my streak! Beyond weight loss, I've noticed significantly improved energy levels throughout the day. The app's simple design makes it easy to use consistently.",
//     rating: 4,
//     streakDays: 45,
//   },
//   {
//     id: 5,
//     name: "Emma R.",
//     avatar: "emma",
//     achievement: "Better sleep quality",
//     quote:
//       "I've been using this app for tracking my keto diet for about 2 months now. Not only have I lost weight, but my sleep quality has improved dramatically. The streak calendar helps me visualize my progress over time, and I love earning new achievement badges. It's the motivation I needed!",
//     rating: 5,
//     streakDays: 58,
//   },
//   {
//     id: 6,
//     name: "James W.",
//     avatar: "james",
//     achievement: "Reduced inflammation",
//     quote:
//       "As someone with chronic inflammation issues, combining OMAD and keto has been life-changing. This app helps me stay on track with both. I appreciate the simple daily check-in process and the motivational messages. After breaking my streak once, I was even more determined to build it back up!",
//     rating: 4,
//     streakDays: 37,
//   },
// ];

// const TestimonialsPage = () => {
//   return (
//     <div className="min-h-screen bg-background">
//       {/* Header */}
//       <header className="border-b bg-card">
//         <div className="container flex h-16 items-center justify-between px-4">
//           <div className="flex items-center gap-2">
//             <div className="rounded-full bg-primary p-1">
//               <TrendingUpIcon className="h-5 w-5 text-primary-foreground" />
//             </div>
//             <h1 className="text-xl font-bold">OMAD/Keto Streak Tracker</h1>
//           </div>
//           <div className="flex items-center gap-4">
//             <Link to="/login">
//               <Button variant="ghost" size="sm">
//                 Login
//               </Button>
//             </Link>
//             <Link to="/register">
//               <Button size="sm">Register</Button>
//             </Link>
//           </div>
//         </div>
//       </header>

//       {/* Main Content */}
//       <main className="container px-4 py-8">
//         <div className="mb-8">
//           <Link
//             to="/"
//             className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground"
//           >
//             <ArrowLeftIcon className="mr-1 h-4 w-4" />
//             Back to Home
//           </Link>
//         </div>

//         <div className="mb-12 text-center">
//           <h1 className="text-3xl font-bold tracking-tight md:text-4xl">
//             Success Stories
//           </h1>
//           <p className="mt-4 text-xl text-muted-foreground">
//             Read how our streak tracker has helped people achieve their health
//             goals
//           </p>
//         </div>

//         <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
//           {testimonials.map((testimonial) => (
//             <Card key={testimonial.id} className="flex flex-col">
//               <CardHeader>
//                 <div className="flex items-center gap-4">
//                   <Avatar>
//                     <AvatarImage
//                       src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${testimonial.avatar}`}
//                     />
//                     <AvatarFallback>{testimonial.name[0]}</AvatarFallback>
//                   </Avatar>
//                   <div>
//                     <CardTitle>{testimonial.name}</CardTitle>
//                     <CardDescription>{testimonial.achievement}</CardDescription>
//                   </div>
//                 </div>
//               </CardHeader>
//               <CardContent className="flex-1">
//                 <div className="mb-4 flex">
//                   {[...Array(testimonial.rating)].map((_, i) => (
//                     <StarIcon
//                       key={i}
//                       className="h-4 w-4 fill-primary text-primary"
//                     />
//                   ))}
//                   {[...Array(5 - testimonial.rating)].map((_, i) => (
//                     <StarIcon
//                       key={i + testimonial.rating}
//                       className="h-4 w-4 text-muted"
//                     />
//                   ))}
//                 </div>
//                 <p className="text-muted-foreground">"{testimonial.quote}"</p>
//                 <div className="mt-4 flex items-center">
//                   <Badge variant="outline" className="bg-primary/10">
//                     {testimonial.streakDays} Day Streak
//                   </Badge>
//                 </div>
//               </CardContent>
//             </Card>
//           ))}
//         </div>

//         <div className="mt-12 text-center">
//           <h2 className="text-2xl font-bold">
//             Ready to Start Your Own Success Story?
//           </h2>
//           <p className="mt-2 text-muted-foreground">
//             Join thousands of others who are successfully building healthy
//             habits
//           </p>
//           <div className="mt-6 flex flex-col items-center justify-center gap-4 sm:flex-row">
//             <Link to="/register">
//               <Button size="lg">Start Your Free Trial</Button>
//             </Link>
//             <Link to="/">
//               <Button variant="outline" size="lg">
//                 Learn More
//               </Button>
//             </Link>
//           </div>
//         </div>
//       </main>

//       {/* Footer */}
//       <footer className="border-t bg-card mt-16">
//         <div className="container flex flex-col gap-6 py-8 md:flex-row md:items-center md:justify-between md:py-12">
//           <div className="flex flex-col gap-2">
//             <div className="flex items-center gap-2">
//               <div className="rounded-full bg-primary p-1">
//                 <TrendingUpIcon className="h-5 w-5 text-primary-foreground" />
//               </div>
//               <h3 className="text-xl font-bold">OMAD/Keto Streak Tracker</h3>
//             </div>
//             <p className="text-sm text-muted-foreground">
//               © 2023 OMAD/Keto Streak Tracker. All rights reserved.
//             </p>
//           </div>
//           <div className="flex gap-4">
//             <Link to="/terms">
//               <Button variant="ghost" size="sm">
//                 Terms
//               </Button>
//             </Link>
//             <Link to="/privacy">
//               <Button variant="ghost" size="sm">
//                 Privacy
//               </Button>
//             </Link>
//             <Link to="/contact">
//               <Button variant="ghost" size="sm">
//                 Contact
//               </Button>
//             </Link>
//           </div>
//         </div>
//       </footer>
//     </div>
//   );
// };

// export default TestimonialsPage;
import PrivateAssistant from "./helper/chatAssistant/privateAssistant";
 export default function Test(){
  return(
    <PrivateAssistant />
  );
 }
