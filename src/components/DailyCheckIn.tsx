import React, { useState, useEffect } from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { format } from "date-fns";
import { CalendarIcon, CheckCircle, XCircle } from "lucide-react";
import { createClient } from "@supabase/supabase-js";

interface DailyCheckInProps {
  date?: Date;
  onSubmit?: (data: { success: boolean; date: Date }) => void;
  isSubmitted?: boolean;
  userId?: string;
}

const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_ANON_KEY,
);

const DailyCheckIn = ({
  date = new Date(),
  onSubmit = () => {},
  isSubmitted = false,
  userId = "",
}: DailyCheckInProps) => {
  const [submitted, setSubmitted] = useState(isSubmitted);
  const [success, setSuccess] = useState<boolean | null>(null);
  const [motivationalMessage, setMotivationalMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (didSucceed: boolean) => {
    setLoading(true);
    setSuccess(didSucceed);

    try {
      // Call the edge function to get a random motivational message
      const { data, error } = await supabase.functions.invoke(
        "supabase-functions-get_motivational_message",
        {
          body: { type: didSucceed ? "success" : "failure" },
        },
      );

      if (error) throw error;

      setMotivationalMessage(
        data.message ||
          (didSucceed
            ? "Great job sticking to your plan today!"
            : "Don't worry, tomorrow is a new day to get back on track!"),
      );

      // Call the onSubmit callback with the result
      onSubmit({ success: didSucceed, date });
      setSubmitted(true);
    } catch (error) {
      console.error("Error fetching motivational message:", error);
      setMotivationalMessage(
        didSucceed
          ? "Great job sticking to your plan today!"
          : "Don't worry, tomorrow is a new day to get back on track!",
      );
      onSubmit({ success: didSucceed, date });
      setSubmitted(true);
    } finally {
      setLoading(false);
    }
  };

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
            {format(date, "MMMM d, yyyy")}
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
                onClick={() => handleSubmit(true)}
                disabled={loading}
              >
                <CheckCircle className="mr-2 h-5 w-5" />
                Yes
              </Button>
              <Button
                className="bg-red-500 hover:bg-red-600 text-white px-8"
                onClick={() => handleSubmit(false)}
                disabled={loading}
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
