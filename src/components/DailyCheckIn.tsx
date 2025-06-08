import React, { useState, useEffect } from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { format, set } from "date-fns";
import { CalendarIcon, CheckCircle, XCircle } from "lucide-react";
import { supabase } from "../../supabase/supabase";

type DailyCheckInProps = {
  checkIns: { date_checkin: string, isSuccess: boolean, message_id: Number }[]; 
  Loading: boolean;
  user: any;
  onSubmit? : (result :{success: boolean; date:string })=> Promise<void>;
  motivationalMessage?: string | null;
  isSubmitting?: boolean | null;
  existingMotivationalMessage?: string | null;
};

const DailyCheckIn:React.FC<DailyCheckInProps> = ({checkIns, Loading, onSubmit, user, isSubmitting, motivationalMessage, existingMotivationalMessage}) => {
  const [motivationalQuote, setMotivationalQuote] = useState("");
  const [success, setSuccess] = useState(Boolean);
  const [submitted,setSubmitted] = useState(false);
  const [loading, setLoading] = useState<boolean>(true);
  const today = new Date().toISOString().split('T')[0];
  const checkSubmitted = async()=>{
    // const isSubmitted = checkIns?.some((entry: any) => entry.date_checkin === today);  
    const todayEntry = checkIns?.find(entry => entry.date_checkin === today);
    console.log('checkin:', checkIns)

    if(todayEntry){
      setSubmitted(true);
      setSuccess(todayEntry.isSuccess)
      setMotivationalQuote(existingMotivationalMessage);
    }
    else{setSubmitted(false)}
  }
  useEffect(()=>{
    if(checkIns){
      checkSubmitted();

    }
  }, [checkIns])
  useEffect(() => {
    if (motivationalMessage) {
      setMotivationalQuote(motivationalMessage);
    }
  }, [motivationalMessage]);
  const handleSubmission = async (didSucceed: boolean) =>{
      await onSubmit({ success: didSucceed, date: today })
      {isSubmitting?(
        <div className="spinner">Submitting...</div>
      ):
      setMotivationalQuote(motivationalMessage)
      setSuccess(didSucceed);
      console.log("succes check:", didSucceed) 
      try{
        console.log("this is the passed data: ",{ success: didSucceed, date: today })
        setSubmitted(true)
      }
      catch(e){
        console.log("Error while submitting data: ",e)
      }
    }
  }
  const resetForm = () => {
    setSuccess(null);
    setSubmitted(false);
    setMotivationalQuote("");
  };

  return (
    <Card className="w-full max-w-md bg-white">
      <CardHeader className="pb-2">
        <CardTitle className="flex items-center justify-between">
          <span>Daily Check-In</span>
          <div className="flex items-center text-sm font-normal text-muted-foreground">
            <CalendarIcon className="mr-1 h-4 w-4" />
            {format(today, "MMMM d, yyyy")}
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent>
        {submitted ? (
          <div className="flex flex-col items-center justify-center py-6">
            {success ? (
              <CheckCircle className="h-16 w-16 text-green-500 mb-2" />
            ) : (
              <XCircle className="h-16 w-16 text-red-500 mb-2" />
            )}
            <p className="text-lg font-medium">
              {success ? "Success!" : "That's okay!"}
            </p>
            <p className="text-sm text-muted-foreground text-center mt-1 px-4">
              {motivationalQuote}
            </p>
            <Button variant="outline" className="mt-4" onClick={resetForm}>
              Reset Check-in
            </Button>
          </div>
        ) : (
          <div className="space-y-6 py-6">
            <p className="text-center font-medium mb-4">
              Did you stick to your diet and macros today?
            </p>
            <div className="flex justify-center gap-4">
              <Button
                className="bg-green-500 hover:bg-green-600 text-white px-8"
                onClick={() => handleSubmission(true)}
                disabled={Loading}
              >
                <CheckCircle className="mr-2 h-5 w-5" />
                Yes
              </Button>
              <Button
                className="bg-red-500 hover:bg-red-600 text-white px-8"
                onClick={() => handleSubmission(false)}
                disabled={Loading}
              >
                <XCircle className="mr-2 h-5 w-5" />
                No
              </Button>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
 };

export default DailyCheckIn;
