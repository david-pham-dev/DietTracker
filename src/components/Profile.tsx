import React, { useState, useEffect } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Label } from "@/components/ui/label";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { ArrowLeftIcon, SaveIcon, UserIcon, Weight } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useUser } from "@/types/hook/useUserData1";
const Profile = () => {
  const navigate = useNavigate();
  const {user, loading, profile, updateProfile} = useUser();  
  const[age, setAge] = useState('')
  const[height, setHeight] = useState('')
  const[fullName, setFullName] = useState('')
  const[weight, setWeight] = useState('')
  useEffect(()=>{
    if(profile){
      setFullName(profile?.full_name?? '');
      setHeight(profile?.Height??'');
      setAge(profile.Age ??'');
      setWeight(profile?.Weight??'')
    }
  },[profile])
  useEffect(()=>{
  },[user,loading, profile])

  const handleSubmitData = async(e:React.FormEvent)=>{
    e.preventDefault();
    await updateProfile({Age: Number(age), Weight: Number(weight),full_name: String(fullName),Height: Number(height)});
    console.log({Age: Number(age), Weight: Number(weight),full_name: String(fullName),Height: Number(height)})
    alert('Profile Updated Successfully')
    navigate("/home")
  }
  if (loading) return <p>Loading Data.......</p>;
  if(profile){
    console.log("this is profile in EditProfile page:", profile)
    console.log("user:", user)
  }

  return (
    <div className="container px-4 py-6 max-w-4xl mx-auto bg-background min-h-screen">
      {/* Header with back button */}
      <div className="flex items-center mb-6">
        <Link to="/home" className="mr-4">
          <Button variant="ghost" size="sm">
            <ArrowLeftIcon className="mr-2 h-4 w-4" />
            Back
          </Button>
        </Link>
        <h1 className="text-2xl font-bold">Your Profile</h1>
      </div>
      
      {/* Main profile card */}
      <Card className="w-full shadow-md">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <UserIcon className="h-5 w-5" />
            Profile Information
          </CardTitle>
          <CardDescription>
            Update your personal information and preferences
          </CardDescription>
        </CardHeader>
        <form>
          <CardContent className="space-y-6">
            {/* Profile picture section */}
            <div className="flex flex-col items-center sm:items-start sm:flex-row gap-6 pb-6 border-b">
              <div className="relative">
              <div className="h-24 w-24 rounded-full bg-primary/10 flex items-center justify-center overflow-hidden border-2 border-primary/20">
                    {profile?.avatar_url ? 
                    (
                      <img
                        src={profile.avatar_url}
                        alt="User"
                        className="object-cover h-full w-full"
                      />
                    ) : (
                      <UserIcon className="h-12 w-12 text-primary/40" />
                    )}
                  </div>

                {/* <div className="h-24 w-24 rounded-full bg-primary/10 flex items-center justify-center overflow-hidden border-2 border-primary/20">
                  <UserIcon className="h-12 w-12 text-primary/40" />
                </div> */}
                {/* <Button
                  size="sm"
                  variant="outline"
                  className="absolute -bottom-2 -right-2 rounded-full h-8 w-8 p-0"
                >
                  <span className="sr-only">Change picture</span>
                  <span className="text-xs">+</span>
                </Button> */}
              </div>
              {/* <div className="text-center sm:text-left">
                <h3 className="text-lg font-medium">Profile Picture</h3>
                 <div className="mt-2">
                  <Button variant="outline" size="sm" className="mr-2">
                    Upload
                  </Button>
                  <Button variant="ghost" size="sm">
                    Remove
                  </Button>
                </div> 
              </div> */}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Basic Information */}
              <div className="space-y-4">
                <h3 className="text-lg font-medium">Basic Information</h3>
{/* 
                <div className="space-y-2">
                  <Label htmlFor="username">Username</Label>
                  <Input
                    id="username"
                    name="username"
                    placeholder="Your username"
                  />
                </div> */}

                <div className="space-y-2">
                  <Label htmlFor="full_name">Full Name</Label>
                  <Input
                    id="full_name"
                    name="full_name"
                    placeholder="Your full name"
                    value={fullName || ''}
                    onChange={(e)=>setFullName(e.target.value)}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    value={user.email}
                    type="email"
                    disabled
                  />
                  {/* <p className="text-xs text-muted-foreground">
                    Email cannot be changed
                  </p> */}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="age">
                    Age <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    id="age"
                    name="age"
                    type="number"
                    value={age}
                    onChange={(e)=>setAge(e.target.value)}
                    placeholder="Your age"
                  />
                </div>
              </div>

              {/* Health Information */}
              <div className="space-y-4">
                <h3 className="text-lg font-medium">Health Information</h3>

                <div className="space-y-2">
                  <Label htmlFor="weight">
                    Current Weight (lbs) <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    id="weight"
                    value={weight}
                    onChange={(e)=>setWeight(e.target.value)}
                    name="weight"
                    type="number"
                    step="0.1"
                    placeholder="Your current weight"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="height">Height (inches)</Label>
                  <Input
                    id="height"
                    name="height"
                    type="number"
                    value={height}
                    onChange={(e)=>setHeight(e.target.value)}
                    step="0.1"
                    placeholder="Your height"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="medication">Current Medication</Label>
                  <Input
                    id="medication"
                    name="medication"
                    placeholder="Your Current Medication"
                  />
                </div>

                {/* <div className="space-y-2">
                  <Label htmlFor="goal_weight">Goal Weight (lbs)</Label>
                  <Input
                    id="goal_weight"
                    name="goal_weight"
                    type="number"
                    step="0.1"
                    placeholder="Your goal weight"
                  />
                </div> */}

                {/* <div className="space-y-2">
                  <Label htmlFor="start_date">Start Date</Label>
                  <Input
                    id="start_date"
                    name="start_date"
                    type="date"
                    placeholder="When did you start?"
                  />
                </div> */}
              </div>
            </div>

            {/* Preferences */}
            <div className="space-y-4 pt-4 border-t">
              <h3 className="text-lg font-medium">Diet Preferences</h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="activity_level">Activity Level</Label>
                  <select
                    id="activity_level"
                    name="activity_level"
                    className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                  >
                    <option value="">Select activity level</option>
                    <option value="sedentary">Sedentary</option>
                    <option value="light">Light Activity</option>
                    <option value="moderate">Moderate Activity</option>
                    <option value="active">Active</option>
                    <option value="very_active">Very Active</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="diet_preference">Aspiration</Label>
                  <select
                    id="diet_preference"
                    name="diet_preference"
                    className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                  >
                    <option value="">What Are Looking For In This Glow-up Journey?</option>
                    <option value="loose_weight">Loose Weight</option>
                    <option value="build_muscle">Build Muscle</option>
                    <option value="contest">Prepare for Contest</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Additional preferences */}
            <div className="space-y-4 pt-4 border-t">
              <h3 className="text-lg font-medium">Notification Preferences</h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    id="email_notifications"
                    className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
                  />
                  <Label
                    htmlFor="email_notifications"
                    className="text-sm font-normal"
                  >
                    Email Notifications
                  </Label>
                </div>

                <div className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    id="reminder_notifications"
                    className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
                  />
                  <Label
                    htmlFor="reminder_notifications"
                    className="text-sm font-normal"
                  >
                    Daily Check-in Reminders
                  </Label>
                </div>
              </div>
            </div>
          </CardContent>

          <CardFooter className="flex flex-col sm:flex-row justify-between gap-4 border-t pt-6">
            <Button variant="outline" type="button">
              Cancel
            </Button>
            <Button type="submit" onClick={handleSubmitData}>
              <SaveIcon className="mr-2 h-4 w-4" />
              Save Changes
            </Button>
          </CardFooter>
        </form>
      </Card>

      {/* Required Fields Modal - Design Only */}
      <Dialog>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Complete Your Profile</DialogTitle>
            <DialogDescription>
              Please fill in your age and weight to get the most out of your
              OMAD/Keto tracking experience.
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4 py-4">
            <div className="space-y-2">
              <Label htmlFor="modal-age">Age</Label>
              <Input
                id="modal-age"
                name="age"
                type="number"
                placeholder="Your age"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="modal-weight">Current Weight (lbs)</Label>
              <Input
                id="modal-weight"
                name="weight"
                type="number"
                step="0.1"
                placeholder="Your current weight"
              />
            </div>
          </div>
          <DialogFooter>
            <Button>Save Information</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Profile;
