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
import { Loading } from "@/stories/button.stories";

type DailyCheckInProps = {
  checkIns: { date_checkin: string, isSuccess: boolean }[]; 
  Loading: boolean;
  onSubmit? : (result :{success: boolean; date:string })=> void;
};

const DailyCheckIn:React.FC<DailyCheckInProps> = ({checkIns, Loading, onSubmit}) => {
  const [motivationalMessage, setMotivationalMessage] = useState("");
  const [success, setSuccess] = useState(Boolean);
  const [submitted,setSubmitted] = useState(false);
  const [loading, setLoading] = useState<boolean>(true);
  const today = new Date().toISOString().split('T')[0];
  const checkSubmitted = async()=>{
    const isSubmitted = checkIns?.some((entry: any) => entry.date_checkin === today);  
    if(isSubmitted){
      setSuccess(checkIns?.some((entry: any) => entry.isSuccess))
    }
    setSubmitted(isSubmitted);
  }
  useEffect(()=>{
    if(checkIns){
      checkSubmitted();
    }
  }, [checkIns])
  const handleSubmission = async (didSucceed: boolean) =>{
      setLoading(true);
      setSuccess(didSucceed);
      console.log("succes check:", didSucceed)
      try{
        onSubmit({ success: didSucceed, date: today })
        console.log("this is the passed data: ",{ success: didSucceed, date: today })
        setSubmitted(true)
      }
      catch(e){
        console.log("Error while submitting    data: ",e)
      }
      finally{
        setLoading(false);
      }
  }
  // const handleSubmit = async (didSucceed: boolean) => {
  //   setLoading(true);
  //   setSuccess(didSucceed);

  //   try {
  //     // Call the edge function to get a random motivational message
  //     const { data, error } = await supabase.functions.invoke(
  //       "supabase-functions-get_motivational_message",
  //       {
  //         body: { type: didSucceed ? "success" : "failure" },
  //       },
  //     );

  //     if (error) throw error;

  //     setMotivationalMessage(
  //       data.message ||
  //         (didSucceed
  //           ? "Great job sticking to your plan today!"
  //           : "Don't worry, tomorrow is a new day to get back on track!"),
  //     );

  //     // Call the onSubmit callback with the result
  //     onSubmit({ success: didSucceed, date });
  //     setSubmitted(true);
  //   } catch (error) {
  //     console.error("Error fetching motivational message:", error);
  //     setMotivationalMessage(
  //       didSucceed
  //         ? "Great job sticking to your plan today!"
  //         : "Don't worry, tomorrow is a new day to get back on track!",
  //     );
  //     onSubmit({ success: didSucceed, date });
  //     setSubmitted(true);
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  const resetForm = () => {
    setSuccess(null);
    setSubmitted(false);
    setMotivationalMessage("");
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
              {motivationalMessage}
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
