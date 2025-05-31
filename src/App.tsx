import { Suspense, useState, useEffect } from "react";
import { useRoutes, Routes, Route } from "react-router-dom";
import Home from "./components/home";
import LandingPage from "./components/LandingPage";
import LoginPage from "./components/LoginPage";
import Profile from "./components/Profile";
import routes from "tempo-routes";
import { supabase } from "../supabase/supabase";
import { UserProvider } from "./types/hook/useUserData1";

function App() {


  return (
    <Suspense fallback={<p>Loading...</p>}>
      <>
      <UserProvider>
      <Routes>
          <Route path="/home" element={<Home/>} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
        {import.meta.env.VITE_TEMPO === "true" && useRoutes(routes)}
      </UserProvider>       
      <Routes>
        <Route path="/" element={<LandingPage />} />
         <Route path="/login" element={<LoginPage />} />
      </Routes>
      </>
    </Suspense>
  );
}

export default App;
