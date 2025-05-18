import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { format } from "date-fns";
import { CalendarIcon, CheckCircle } from "lucide-react";

interface DailyCheckInProps {
  date?: Date;
  onSubmit?: (data: { omad: boolean; keto: boolean; date: Date }) => void;
  isSubmitted?: boolean;
}

const DailyCheckIn = ({
  date = new Date(),
  onSubmit = () => {},
  isSubmitted = false,
}: DailyCheckInProps) => {
  const [omad, setOmad] = useState(false);
  const [keto, setKeto] = useState(false);
  const [submitted, setSubmitted] = useState(isSubmitted);

  const handleSubmit = () => {
    onSubmit({ omad, keto, date });
    setSubmitted(true);
  };

  const resetForm = () => {
    setOmad(false);
    setKeto(false);
    setSubmitted(false);
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
            <CheckCircle className="h-16 w-16 text-green-500 mb-2" />
            <p className="text-lg font-medium">Check-in complete!</p>
            <p className="text-sm text-muted-foreground text-center mt-1">
              {omad && keto
                ? "Great job following both OMAD and Keto today!"
                : omad
                  ? "You completed your OMAD goal today."
                  : keto
                    ? "You stayed on your Keto diet today."
                    : "You recorded your progress for today."}
            </p>
            <Button variant="outline" className="mt-4" onClick={resetForm}>
              Edit Check-in
            </Button>
          </div>
        ) : (
          <div className="space-y-6 py-2">
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label htmlFor="omad-toggle">OMAD</Label>
                <p className="text-sm text-muted-foreground">One Meal A Day</p>
              </div>
              <Switch
                id="omad-toggle"
                checked={omad}
                onCheckedChange={setOmad}
              />
            </div>
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label htmlFor="keto-toggle">Keto</Label>
                <p className="text-sm text-muted-foreground">Low-carb diet</p>
              </div>
              <Switch
                id="keto-toggle"
                checked={keto}
                onCheckedChange={setKeto}
              />
            </div>
          </div>
        )}
      </CardContent>
      {!submitted && (
        <CardFooter>
          <Button className="w-full" onClick={handleSubmit}>
            Submit Check-in
          </Button>
        </CardFooter>
      )}
    </Card>
  );
};

export default DailyCheckIn;
