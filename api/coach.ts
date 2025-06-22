import type { VercelRequest, VercelResponse } from '@vercel/node';
export default async function handler(req: VercelRequest, res: VercelResponse) {
    const {messages}  = req.body;
    
  //   use mock reply
//   if (process.env.NODE_ENV === "development") {
//     const lastUserMessage = messages[messages.length - 1]?.content || "";

//     // Optional: generate a different response depending on input
//     const mockReply = lastUserMessage.includes("streak")
//       ? "Mock reply: Let’s get that streak back on track!"
//       : "Mock reply: Great question! Keep going.";

//     return res.status(200).json({
//       reply: {
//         role: "assistant",
//         content: mockReply,
//       },
//     });
// }
    const gptRes = await fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
        },
        body: JSON.stringify({
            model: "gpt-3.5-turbo",
            messages: [
              { role: "system", content: "You are a realistic fitness coach. Keep replies short and actionable." },
              ...messages,
            ],
          }),
        });
        if (!gptRes.ok) {
            const text = await gptRes.text(); // read the error body
            console.error("GPT API error:", gptRes.status, text);
            return res.status(500).json({ error: "GPT failed" });
          }
        const data = await gptRes.json();
        const reply = data.choices?.[0]?.message;
        res.status(200).json({ reply });
}