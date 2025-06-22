import { useEffect, useState } from "react";

export default function ChatPanel ({onClose}: {onClose:()=> void}){
    type Message = {
        role: "user" | "assistant";
        content: string;
      };
      const [messages, setMessages] = useState<Message[]>([
        {
            role: "assistant",
            content: "What's up brother, I'm here to help you get the best shape of your life, no BS, no gimmicks",
        },
      ]);
      const [isTyping, setIsTyping] = useState(false);
      const [inputText, setInputText] = useState("");
      function onUserSubmit(e:any){
          if(!inputText.trim()) return;
          const newMessage: Message = {role: "user", content: inputText.trim()};
          const updatedMessages = [...messages, newMessage]
          setMessages(updatedMessages)
          setInputText('');
          fetch("/api/coach",{
            method: "POST",
            headers: {"Content-Type":"application/json"},
            body: JSON.stringify({messages: updatedMessages})
          })
          .then((res)=> res.json())
          .then((data)=>{
            if(data?.reply){
              setMessages((prev)=> [...prev, data.reply])
            }
            else{
              setMessages((prev)=>[
                ...prev, 
                {
                  role: "assistant",
                  content: "Sorry I don't get it brother",
              },
              ])
            }
          })
          .catch((err) => {
            console.error("GPT error:", err);
            setMessages((prev) => [
              ...prev,
              { role: "assistant", content: "Something went wrong. Try again later." },
            ]);
          });
      }
     
      useEffect(()=>{
        console.log('this is message, ', messages)
        console.log("NODE_ENV:", process.env.NODE_ENV);
      }, [messages])
    return(
        
    <>
        <div className="fixed bottom-20 right-4 w-80 h-[400px] bg-white shadow-xl rounded-xl p-4">
            <div className="flex flex-col gap-2 overflow-y-auto h-full">
                {messages.map((msg,idx)=>(
                    <div  key={idx}
                    className={`p-2 rounded-lg max-w-[70%] ${
                      msg.role === "user"
                        ? "bg-gray-200 self-end text-right"
                        : "bg-blue-100 self-start text-left"
                    }`}>
                      {msg.content}
                    </div>
                ))}
            </div>
            {/* {isTyping && (
  <div className="text-left">
    <div className="rounded px-3 py-2 my-1 inline-block bg-muted animate-pulse">
      Coach is typing...
    </div>
  </div>
)} */}
            <form
            onSubmit={(e)=>{
              e.preventDefault();
              onUserSubmit(e);
            }} 
            >
            <input
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              placeholder="Type your message..."
              className="flex-1 border border-gray-300 p-2 rounded"
            />

            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
    Send
  </button>
            </form>
        <button onClick={onClose}>Close</button>
        {/* Messages + Input */}
      </div>
    </>
    );
}