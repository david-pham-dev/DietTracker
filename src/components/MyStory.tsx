// import { Link } from "react-router-dom"
// import { Button } from "@/components/ui/button"
// import { InstagramIcon, YoutubeIcon } from "lucide-react"

// export default function MyStoryPage() {
//   return (
//     <div className="bg-background text-foreground">
//       {/* Hero Section */}
//       <section className="py-16 md:py-24 text-center">
//         <div className="container max-w-4xl mx-auto px-4 space-y-6">
//           <h1 className="text-4xl md:text-5xl font-bold">My Story</h1>
//           <p className="text-muted-foreground md:text-xl">
//             A journey from feeling lost to building habits that changed everything—body, mind, and even career.
//           </p>
//           <div className="flex justify-center gap-4 pt-6">
//             <img src="/before.jpg" alt="Before" className="w-40 rounded-xl shadow-md" />
//             <img src="/after.jpg" alt="After" className="w-40 rounded-xl shadow-md" />
//           </div>
//         </div>
//       </section>

//       {/* Chapter 1 */}
//       <section className="py-16 bg-muted/10">
//         <div className="container max-w-3xl mx-auto px-4 space-y-4">
//           <h2 className="text-2xl font-semibold">Before: Stuck in a Loop</h2>
//           <p className="text-muted-foreground">
//             I used to jump from one diet to another—keto, fasting, counting macros—but I never stuck with anything long enough to see results.
//             I felt overwhelmed, unmotivated, and disconnected from my goals.
//           </p>
//           <p className="text-muted-foreground">
//             I wanted to feel better, move better, and live better. But I didn't know where to start—or how to keep going once I did.
//           </p>
//         </div>
//       </section>

//       {/* Chapter 2 */}
//       <section className="py-16">
//         <div className="container max-w-3xl mx-auto px-4 space-y-4">
//           <h2 className="text-2xl font-semibold">The Breakthrough: Small Habits</h2>
//           <p className="text-muted-foreground">
//             Everything changed when I stopped trying to be perfect and started being consistent.
//             I began with one simple goal: track my meals daily. Then another: drink more water. One by one, these small wins added up.
//           </p>
//           <p className="text-muted-foreground">
//             I realized it’s the same with any skill—like learning to code. You don’t need to master everything overnight. You just need to keep showing up.
//             That mindset changed my body, my confidence, and my career path.
//           </p>
//         </div>
//       </section>

//       {/* Chapter 3 */}
//       <section className="py-16 bg-muted/10">
//         <div className="container max-w-3xl mx-auto px-4 space-y-4">
//           <h2 className="text-2xl font-semibold">Today: Stronger Inside and Out</h2>
//           <p className="text-muted-foreground">
//             Now I feel stronger, more focused, and more at peace. I still track my food. I still keep it simple.
//             This app was born from that journey—to help others do the same without overcomplicating the process.
//           </p>
//           <div className="pt-6 flex justify-center gap-4">
//             <video className="rounded-xl shadow-lg w-full max-w-md" controls>
//               <source src="/training-now.mp4" type="video/mp4" />
//               Your browser does not support the video tag.
//             </video>
//           </div>
//         </div>
//       </section>

//       {/* Social Callout */}
//       <section className="py-16 text-center">
//         <div className="container max-w-2xl mx-auto px-4 space-y-4">
//           <h2 className="text-2xl font-semibold">Follow My Ongoing Journey</h2>
//           <p className="text-muted-foreground">
//             I share behind-the-scenes progress, training, and personal insights on my social channels.
//             Come hang out, learn with me, and stay inspired.
//           </p>
//           <div className="flex justify-center gap-4 pt-4">
//             <a
//               href="https://youtube.com/yourchannel"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="inline-flex items-center gap-2 text-primary hover:underline"
//             >
//               <YoutubeIcon className="w-5 h-5" />
//               YouTube
//             </a>
//             <a
//               href="https://instagram.com/yourprofile"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="inline-flex items-center gap-2 text-primary hover:underline"
//             >
//               <InstagramIcon className="w-5 h-5" />
//               Instagram
//             </a>
//           </div>
//         </div>
//       </section>

//       {/* Final CTA */}
//       <section className="py-12 bg-muted/5 text-center">
//         <div className="container px-4 space-y-4">
//           <p className="text-muted-foreground">
//             Ready to start tracking your own habits? It starts with one step.
//           </p>
//           <Link to="/dashboard">
//             <Button variant="default">Try the App</Button>
//           </Link>
//         </div>
//       </section>
//     </div>
//   )
// }
import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { InstagramIcon, YoutubeIcon, Flame, CheckCircle, ShieldCheck } from "lucide-react"

export default function MyStoryPage() {
  return (
    <div className="bg-background text-foreground">
      {/* Hero Section */}
      <section className="py-16 md:py-24 text-center">
        <div className="container max-w-4xl mx-auto px-4 space-y-6">
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight animate-fadeIn">
            My Story
          </h1>
          <p className="text-muted-foreground md:text-xl max-w-3xl mx-auto animate-fadeIn delay-100">
            A journey from feeling lost to building habits that changed everything—
            <span className="font-semibold text-foreground"> body, mind, and even career.</span>
          </p>
          <div className="flex justify-center gap-8 pt-6 animate-fadeIn delay-200">
            <div className="flex flex-col items-center">
              <img
                src="/before.jpg"
                alt="Before"
                className="w-40 rounded-xl shadow-md filter grayscale"
              />
              <p className="mt-2 text-sm text-muted-foreground">Before</p>
            </div>
            <div className="flex flex-col items-center">
              <img
                src="/after.jpg"
                alt="After"
                className="w-40 rounded-xl shadow-md"
              />
              <p className="mt-2 text-sm text-muted-foreground">After</p>
            </div>
          </div>
        </div>
      </section>

      {/* Chapter 1 */}
      <section className="py-16 bg-muted/10">
        <div className="container max-w-3xl mx-auto px-4 space-y-6">
          <h2 className="text-2xl font-semibold flex items-center gap-3">
            <Flame className="w-6 h-6 text-primary" />
            Before: Stuck in a Loop
          </h2>
          <p className="text-muted-foreground">
            I used to jump from one diet to another—keto, fasting, counting macros—but I never stuck with anything long enough to see results.
            I felt overwhelmed, unmotivated, and disconnected from my goals.
          </p>
          <p className="text-muted-foreground">
            I wanted to feel better, move better, and live better. But I didn&apos;t know where to start—or how to keep going once I did.
          </p>
        </div>
      </section>

      {/* Chapter 2 */}
      <section className="py-16">
        <div className="container max-w-3xl mx-auto px-4 space-y-6">
          <h2 className="text-2xl font-semibold flex items-center gap-3">
            <CheckCircle className="w-6 h-6 text-primary" />
            The Breakthrough: Small Habits
          </h2>
          <p className="text-muted-foreground">
            Everything changed when I stopped <span className="font-semibold text-foreground">trying to be perfect</span> and started being consistent.
            I began with one simple goal: track my meals daily. Then another: drink more water. One by one, these small wins added up.
          </p>
          <p className="text-muted-foreground">
            I realized it’s the same with any skill—like learning to code. You don’t need to master everything overnight. You just need to <span className="font-semibold text-foreground">keep showing up.</span>
            That mindset changed my body, my confidence, and my career path.
          </p>
        </div>
      </section>

      {/* Chapter 3 */}
      <section className="py-16 bg-muted/10">
        <div className="container max-w-3xl mx-auto px-4 space-y-6">
          <h2 className="text-2xl font-semibold flex items-center gap-3">
            <ShieldCheck className="w-6 h-6 text-primary" />
            Today: Stronger Inside and Out
          </h2>
          <p className="text-muted-foreground">
            Now I feel stronger, more focused, and more at peace. I still track my food. I still keep it simple.
            This app was born from that journey—to help others do the same without overcomplicating the process.
          </p>
          <div className="pt-6 flex justify-center gap-4">
            <video
              className="rounded-xl shadow-lg w-full max-w-md"
              controls
              poster="/training-thumbnail.jpg"
            >
              <source src="/training-now.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <p className="text-sm text-muted-foreground text-center mt-2">
            A glimpse of my training today
          </p>
        </div>
      </section>

      {/* Social Callout */}
      <section className="py-16 text-center">
        <div className="container max-w-2xl mx-auto px-4 space-y-6">
          <h2 className="text-2xl font-semibold">Follow My Ongoing Journey</h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            I share behind-the-scenes progress, training, and personal insights on my social channels.
            Come hang out, learn with me, and stay inspired.
          </p>
          <div className="flex justify-center gap-6 pt-4">
            <a
              href="https://youtube.com/yourchannel"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-primary hover:scale-105 transition-transform focus:outline-none focus:ring-2 focus:ring-primary rounded"
            >
              <YoutubeIcon className="w-5 h-5" />
              YouTube
            </a>
            <a
              href="https://instagram.com/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-primary hover:scale-105 transition-transform focus:outline-none focus:ring-2 focus:ring-primary rounded"
            >
              <InstagramIcon className="w-5 h-5" />
              Instagram
            </a>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-12 bg-muted/5 text-center">
        <div className="container px-4 space-y-4">
          <p className="text-muted-foreground max-w-md mx-auto">
            You&apos;ve seen my journey. <span className="font-semibold text-foreground">Ready to begin yours?</span>
          </p>
          <Link to="/dashboard">
            <Button
              variant="default"
              className="transition-transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-primary"
            >
              Try the App
            </Button>
          </Link>
        </div>
      </section>
    </div>
  )
}
