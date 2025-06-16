import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRightIcon } from "lucide-react";
type CheckLoginSeamlesslyProps = {
    session: any;
    text?: string;
    className?: string;   // additional classes to customize styling
  };
  
export default function CheckLoginSeamlessly({ session,
    text = "Start Your Streak",
    className = "",}:CheckLoginSeamlesslyProps){
    
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const handleClick = async ()=>{
        setLoading(true);
        if(session?.user){
            navigate("/dashboard")
        }
        else{
            navigate("/login");
        }
        window.scrollTo(0, 0);
        setLoading(false);
    };
    return (
        <Button
      onClick={handleClick}
        size="lg"
      className={`gap-1 ${className}`}
      disabled={loading}
    >
      {text}
      <ArrowRightIcon className="h-4 w-4" />
    </Button>
      );
}

