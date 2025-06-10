import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRightIcon } from "lucide-react";

export default function CheckLoginSeamlessly({session}: {session:any}){
    
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const handleClick = async ()=>{
        setLoading(true);
        if(session?.user){
            navigate("/home")
        }
        else{
            navigate("/login");
        }
        setLoading(false);
    };
    return (
        <Button onClick={handleClick} size="lg" className="gap-1" disabled={loading}>
          Start Your Streak
          <ArrowRightIcon className="h-4 w-4" />
        </Button>
      );
}

