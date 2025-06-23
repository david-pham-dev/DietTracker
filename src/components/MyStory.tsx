import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { InstagramIcon, YoutubeIcon, Flame, CheckCircle, ShieldCheck } from "lucide-react"
import { getImageUrl } from "@/types/pics/supabasePics";
export default function MyStoryPage() {
  const beforeSidePhysique = getImageUrl('2023-side.jpg');
  const beforeFrontPhysique = getImageUrl('2023-front.jpg');
  const disgusting = getImageUrl('Disgusting.jpg')
  const flexing = getImageUrl('flexing.jpg');
  const currentPhysique = getImageUrl('currentPhysique.jpg');
  const currentBackPhysique = getImageUrl('currentBackPhysique.jpg');
  const kg85 = getImageUrl('85kg.jpg');
  const kg100 = getImageUrl('100kg.jpg');
//   return (
//     <div className="bg-background text-foreground">
//       {/* Hero Section */}
//       <section className="py-16 md:py-24 text-center">
//         <div className="container max-w-4xl mx-auto px-4 space-y-6">
//           <h1 className="text-5xl md:text-6xl font-bold tracking-tight animate-fadeIn">
//             My Story
//           </h1>
//           <p className="text-muted-foreground md:text-xl max-w-3xl mx-auto animate-fadeIn delay-100">
//             A journey from feeling lost to building habits that changed everything—
//             <span className="font-semibold text-foreground"> body, mind, and even career.</span>
//           </p>
//           {/* <div className="flex justify-center gap-8 pt-6 animate-fadeIn delay-200">
//             <div className="flex flex-col items-center">
//               <img
//                 src={beforeFrontPhysique}
//                 alt="Before"
//                 className="w-40 rounded-xl shadow-md filter grayscale"
//               />
//                <img
//                 src={beforeSidePhysique}
//                 alt="Before"
//                 className="w-40 rounded-xl shadow-md filter grayscale"
//               />
//               <p className="mt-2 text-sm text-muted-foreground">Before</p>
//             </div>
//             <div className="flex flex-col items-center">
//               <img
//                 src={currentPhysique}
//                 alt="After"
//                 className="w-40 rounded-xl shadow-md"
//               />
//                <img
//                 src={currentBackPhysique}
//                 alt="After"
//                 className="w-40 rounded-xl shadow-md"
//               />
//               <p className="mt-2 text-sm text-muted-foreground">After</p>
//             </div>
//           </div> */}
//           <div className="flex flex-col items-center pt-6 animate-fadeIn delay-200">
//   <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
//     {/* Before - Front */}
//     <div className="flex flex-col items-center">
//       <div className="w-40 h-56 overflow-hidden rounded-xl shadow-md filter grayscale">
//         <img
//           src={beforeFrontPhysique}
//           alt="Before Front"
//           className="w-full h-full object-cover"
//         />
//       </div>
//       <p className="mt-1 text-xs text-muted-foreground">Before (Front)</p>
//     </div>

//     {/* Before - Side */}
//     <div className="flex flex-col items-center">
//       <div className="w-40 h-56 overflow-hidden rounded-xl shadow-md filter grayscale">
//         <img
//           src={beforeSidePhysique}
//           alt="Before Side"
//           className="w-full h-full object-cover"
//         />
//       </div>
//       <p className="mt-1 text-xs text-muted-foreground">Before (Side)</p>
//     </div>

//     {/* After - Front */}
//     <div className="flex flex-col items-center">
//       <div className="w-40 h-56 overflow-hidden rounded-xl shadow-md">
//         <img
//           src={currentPhysique}
//           alt="After Front"
//           className="w-full h-full object-cover"
//         />
//       </div>
//       <p className="mt-1 text-xs text-muted-foreground">After (Front)</p>
//     </div>

//     {/* After - Back */}
//     <div className="flex flex-col items-center">
//       <div className="w-40 h-56 overflow-hidden rounded-xl shadow-md">
//         <img
//           src={currentBackPhysique}
//           alt="After Back"
//           className="w-full h-full object-cover"
//         />
//       </div>
//       <p className="mt-1 text-xs text-muted-foreground">After (Back)</p>
//     </div>
//   </div>
// </div>

//         </div>
//       </section>

//       <section className="py-16 bg-muted/10">
//         <div className="container max-w-3xl mx-auto px-4 space-y-6">
//           <h2 className="text-2xl font-semibold flex items-center gap-3">
//             <Flame className="w-6 h-6 text-primary" />
//             Before: Stuck in a Loop
//           </h2>
//           <p className="text-muted-foreground">
//             I used to think, becoming healthy requires a massive change and sacrifice. Therefore, I wasted a bunch of time, trying to find the best diet, the most optimal food, jumping from one diet to another—keto, fasting, counting macros—but I never stuck with anything long enough to see results.
//             I felt overwhelmed, basing my time, effort and IDENTITY on my diet. Basically becoming a GYMCEL, just to never see the result.
//           </p>
//         </div>
//       </section>

//       {/* Chapter 2 */}
//       <section className="py-16">
//         <div className="container max-w-3xl mx-auto px-4 space-y-6">
//           <h2 className="text-2xl font-semibold flex items-center gap-3">
//             <CheckCircle className="w-6 h-6 text-primary" />
//             The Breakthrough: Small Habits
//           </h2>
//           <p className="text-muted-foreground">
//             Everything changed when I stopped <span className="font-semibold text-foreground">trying to be perfect</span> and started being consistent.
//             I began with one simple goal: track my meals daily. Make sure I ate simple whole food, not overcomplicating my day.
//             One by one, these small wins added up.
//           </p>
//           <p className="text-muted-foreground">
//             During the process, I learned an important lession: the same principle applies with any skill—like learning to code. You don’t need to master everything overnight. You just need to <span className="font-semibold text-foreground">keep showing up.</span>
//             That mindset changed my body, my confidence, and my career path.
//           </p>
//           <div className="flex flex-col items-center pt-6 animate-fadeIn delay-200">
//   <div className="grid grid-cols-2 md:grid-cols-2 gap-4">
//     {/* Before - Front */}
//     {/* Before - Side */}
//     <div className="flex flex-col items-center">
//       <div className="w-40 h-56 overflow-hidden rounded-xl shadow-md">
//         <img
//           src={kg100}
//           alt="Before Side"
//           className="w-full h-full object-cover"
//         />
//       </div>
//       <p className="mt-1 text-xs text-muted-foreground">100kg at June-2024</p>
//     </div>

//     {/* After - Front */}
//     <div className="flex flex-col items-center">
//       <div className="w-40 h-56 overflow-hidden rounded-xl shadow-md">
//         <img
//           src={kg85}
//           alt="After Front"
//           className="w-full h-full object-cover"
//         />
//       </div>
//       <p className="mt-1 text-xs text-muted-foreground">85kg at Present (And Counting Down)</p>
//     </div>
//   </div>
// </div>

//         </div>
//       </section>

//       {/* Chapter 3 */}
//       <section className="py-16 bg-muted/10">
//         <div className="container max-w-3xl mx-auto px-4 space-y-6">
//           <h2 className="text-2xl font-semibold flex items-center gap-3">
//             <ShieldCheck className="w-6 h-6 text-primary" />
//             Today: Stronger Inside and Out
//           </h2>
//           <p className="text-muted-foreground">
//             Now I feel stronger, more focused, and more at peace. I still track my food. I still keep it simple.
//             This app was born from that journey—to help others do the same without overcomplicating the process.
//           </p>
//           <div className="pt-6 flex justify-center gap-4">
// <div className="relative w-full pb-[56.25%] h-0">
//   <iframe
//     className="absolute top-0 left-0 w-full h-full"
//     src="https://www.youtube.com/embed/pnMGm0MRYt8"
//     title="YouTube video"
//     frameBorder="0"
//     allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//     allowFullScreen
//   />
// </div>

//           </div>
//           <p className="text-sm text-muted-foreground text-center mt-2">
//            My Life Changes When I Take Full Responsibility.
//           </p>
//         </div>
//       </section>

//       {/* Social Callout */}
//       <section className="py-16 text-center">
//         <div className="container max-w-2xl mx-auto px-4 space-y-6">
//           <h2 className="text-2xl font-semibold">Follow My Ongoing Journey</h2>
//           <p className="text-muted-foreground max-w-xl mx-auto">
//             I share behind-the-scenes progress, training, and personal insights on my social channels.
//             Come hang out, learn with me, and stay inspired.
//           </p>
//           <div className="flex justify-center gap-6 pt-4">
//             <a
//               href="https://youtube.com/yourchannel"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="inline-flex items-center gap-2 text-primary hover:scale-105 transition-transform focus:outline-none focus:ring-2 focus:ring-primary rounded"
//             >
//               <YoutubeIcon className="w-5 h-5" />
//               YouTube
//             </a>
//             <a
//               href="https://instagram.com/yourprofile"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="inline-flex items-center gap-2 text-primary hover:scale-105 transition-transform focus:outline-none focus:ring-2 focus:ring-primary rounded"
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
//           <p className="text-muted-foreground max-w-md mx-auto">
//             You&apos;ve seen my journey. <span className="font-semibold text-foreground">Ready to begin yours?</span>
//           </p>
//           <Link to="/dashboard">
//             <Button
//               variant="default"
//               className="transition-transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-primary"
//             >
//               Try the App
//             </Button>
//           </Link>
//         </div>
//       </section>
//     </div>
//   )
return (
  <div className="bg-background text-foreground">
    {/* Hero Section */}
    <section className="py-16 md:py-24 text-center">
      <div className="container max-w-4xl mx-auto px-4 space-y-6">
        <h1 className="text-5xl md:text-6xl font-bold tracking-tight animate-fadeIn">
          My Story
        </h1>
        <p className="text-primary font-semibold animate-fadeIn delay-100">
          From 100kg → 85kg — and still going.
        </p>
        <p className="text-muted-foreground md:text-xl max-w-3xl mx-auto animate-fadeIn delay-150">
          A journey from getting bullied and jumped on, fighting with depression, to building habits that changed everything—
          <span className="font-semibold text-foreground"> body, mind, and even career.</span>
        </p>
        <div className="flex flex-col items-center pt-6 animate-fadeIn delay-200">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[beforeFrontPhysique, beforeSidePhysique, currentPhysique, currentBackPhysique, flexing].map((src, i) => (
              <div key={i} className="flex flex-col items-center">
                <div
                  className={`w-40 h-56 overflow-hidden rounded-xl shadow-md ${i < 2 ? "filter grayscale" : ""} hover:scale-[1.02] transition-transform duration-300`}
                >
                  <img src={src} alt="Physique" className="w-full h-full object-cover" />
                </div>
                <p className="mt-1 text-xs text-muted-foreground">
                  {i === 0 && "Before (Front)"}
                  {i === 1 && "Before (Side)"}
                  {i === 2 && "Now (Front)"}
                  {i === 3 && "Now (Back)"}
                  {i === 4 && "Now (Side)"}
                </p>
              </div>
            ))}
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
          I used to think, becoming healthy requires a massive change and sacrifice. Therefore, I wasted a bunch of time, trying to find the best diet, the most optimal food, jumping from one diet to another—keto, fasting, counting macros—but I never stuck with anything long enough to see results.
          I felt overwhelmed, basing my time, effort and IDENTITY on my diet. Basically becoming a GYMCEL, just to never see the result.
        </p>
        <div className="flex flex-col items-center pt-6 animate-fadeIn delay-200">
          <div className="grid grid-cols gap-4">
            {[{ src: disgusting, label: "I was Eating Bland And Boring Food, Thinking I'm Making Smart Moves" }].map((item, i) => (
              <div key={i} className="flex flex-col items-center">
                <div className="w-40 h-56 overflow-hidden rounded-xl shadow-md hover:scale-[1.02] transition-transform duration-300">
                  <img src={item.src} alt={item.label} className="w-full h-full object-cover" />
                </div>
                <p className="mt-1 text-xs text-muted-foreground">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
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
          I began with one simple goal: track my meals daily. Make sure I ate simple whole food, not overcomplicating my day.
          One by one, these small wins added up.
        </p>
        <p className="text-muted-foreground">
          During the process, I learned an important lesson: the same principle applies with any skill—like learning to code. You don’t need to master everything overnight. You just need to <span className="font-semibold text-foreground">keep showing up.</span>
          That mindset changed my body, my confidence, and my career path.
        </p>
        <div className="flex flex-col items-center pt-6 animate-fadeIn delay-200">
          <div className="grid grid-cols-2 gap-4">
            {[{ src: kg100, label: "100kg at June-2024" }, { src: kg85, label: "85kg at Present (And Counting Down)" }].map((item, i) => (
              <div key={i} className="flex flex-col items-center">
                <div className="w-40 h-56 overflow-hidden rounded-xl shadow-md hover:scale-[1.02] transition-transform duration-300">
                  <img src={item.src} alt={item.label} className="w-full h-full object-cover" />
                </div>
                <p className="mt-1 text-xs text-muted-foreground">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
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
          <div className="relative w-full pb-[56.25%] h-0 rounded-xl overflow-hidden">
            <iframe
              className="absolute top-0 left-0 w-full h-full"
              src="https://www.youtube.com/embed/2OfPFi8gZGs"
              title="YouTube video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
        <a
          href="https://www.youtube.com/shorts/2OfPFi8gZGs"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-2 inline-block text-sm text-primary hover:underline text-center"
        >
          Watch Full Video on YouTube →
        </a>
        <p className="text-sm text-muted-foreground text-center mt-2">
          My Life Changes When I Take Full Responsibility.
        </p>
      </div>
    </section>

    {/* Social Callout */}
    <section className="py-16 text-center">
      <div className="container max-w-2xl mx-auto px-4 space-y-6">
        <h2 className="text-2xl font-semibold">Follow My Ongoing Journey</h2>
        <p className="text-muted-foreground max-w-xl mx-auto">
          I share behind-the-scenes progress, experience, and personal insights on my social channels.
          Join me and stay sharp. TOGETHER.
        </p>
        <div className="flex justify-center gap-6 pt-4">
          <a
            href="https://www.youtube.com/@HanoiHammer"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-primary hover:scale-105 transition-transform focus:outline-none focus:ring-2 focus:ring-primary rounded"
          >
            <YoutubeIcon className="w-5 h-5" />
            YouTube
          </a>
          <a
            href="https://instagram.com/_mduc.8"
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
          You’ve seen how I changed. <span className="font-semibold text-foreground">Are you ready to become the hero of your own story?</span>
        </p>
        <Link to="/login">
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
);
}

