import { MessageCircleIcon } from "lucide-react";
import { useState } from "react";
import ChatPanel from "./chatPanel";
export default function PrivateAssistant() {
    const [isOpen, setIsOpen] = useState(false); 
  return (
    <>
      <button onClick={()=> setIsOpen(!isOpen)}
      className="fixed bottom-4 right-4 z-50 flex items-center justify-center w-14 h-14 rounded-full bg-blue-600 text-white shadow-lg hover:scale-105 transition-transform"
      aria-label="Open chat"
    >
      <MessageCircleIcon className="w-6 h-6" />
    </button>
    {isOpen && <ChatPanel onClose={()=>setIsOpen(false)} />}
    </>
  );
}
