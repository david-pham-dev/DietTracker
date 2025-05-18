import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

interface ProgressChartsProps {
  weightData?: Array<{ date: string; weight: number }>;
  ketoneData?: Array<{ date: string; level: number }>;
  onWeightSubmit?: (weight: number) => void;
  onKetoneSubmit?: (level: number) => void;
}

const ProgressCharts = ({
  weightData = [
    { date: "2023-05-01", weight: 185 },
    { date: "2023-05-08", weight: 183 },
    { date: "2023-05-15", weight: 181 },
    { date: "2023-05-22", weight: 179 },
    { date: "2023-05-29", weight: 178 },
    { date: "2023-06-05", weight: 176 },
  ],
  ketoneData = [
    { date: "2023-05-01", level: 0.8 },
    { date: "2023-05-08", level: 1.2 },
    { date: "2023-05-15", level: 1.5 },
    { date: "2023-05-22", level: 1.8 },
    { date: "2023-05-29", level: 2.0 },
    { date: "2023-06-05", level: 2.3 },
  ],
  onWeightSubmit = () => {},
  onKetoneSubmit = () => {},
}: ProgressChartsProps) => {
  const [currentWeight, setCurrentWeight] = useState<string>("");
  const [currentKetone, setCurrentKetone] = useState<string>("");
  const [activeTab, setActiveTab] = useState<string>("weight");

  const handleWeightSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const weight = parseFloat(currentWeight);
    if (!isNaN(weight)) {
      onWeightSubmit(weight);
      setCurrentWeight("");
    }
  };

  const handleKetoneSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const level = parseFloat(currentKetone);
    if (!isNaN(level)) {
      onKetoneSubmit(level);
      setCurrentKetone("");
    }
  };

  return (
    <Card className="w-full bg-white">
      <CardHeader>
        <CardTitle className="text-xl font-bold">Progress Tracking</CardTitle>
      </CardHeader>
      <CardContent>
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-6">
            <TabsTrigger value="weight">Weight Tracking</TabsTrigger>
            <TabsTrigger value="ketone">Ketone Levels</TabsTrigger>
          </TabsList>

          <TabsContent value="weight" className="space-y-4">
            <div className="h-64 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart
                  data={weightData}
                  margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="date" />
                  <YAxis domain={["dataMin - 5", "dataMax + 5"]} />
                  <Tooltip />
                  <Legend />
                  <Line
                    type="monotone"
                    dataKey="weight"
                    stroke="#8884d8"
                    strokeWidth={2}
                    activeDot={{ r: 8 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>

            <form
              onSubmit={handleWeightSubmit}
              className="flex items-end gap-4"
            >
              <div className="flex-1">
                <Label htmlFor="current-weight" className="block mb-2">
                  Enter Today's Weight (lbs)
                </Label>
                <Input
                  id="current-weight"
                  type="number"
                  step="0.1"
                  placeholder="Enter weight"
                  value={currentWeight}
                  onChange={(e) => setCurrentWeight(e.target.value)}
                />
              </div>
              <Button type="submit">Save Weight</Button>
            </form>
          </TabsContent>

          <TabsContent value="ketone" className="space-y-4">
            <div className="h-64 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart
                  data={ketoneData}
                  margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="date" />
                  <YAxis domain={[0, "dataMax + 0.5"]} />
                  <Tooltip />
                  <Legend />
                  <Line
                    type="monotone"
                    dataKey="level"
                    stroke="#82ca9d"
                    strokeWidth={2}
                    activeDot={{ r: 8 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>

            <form
              onSubmit={handleKetoneSubmit}
              className="flex items-end gap-4"
            >
              <div className="flex-1">
                <Label htmlFor="current-ketone" className="block mb-2">
                  Enter Today's Ketone Level (mmol/L)
                </Label>
                <Input
                  id="current-ketone"
                  type="number"
                  step="0.1"
                  placeholder="Enter ketone level"
                  value={currentKetone}
                  onChange={(e) => setCurrentKetone(e.target.value)}
                />
              </div>
              <Button type="submit">Save Ketone Level</Button>
            </form>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
};

export default ProgressCharts;
