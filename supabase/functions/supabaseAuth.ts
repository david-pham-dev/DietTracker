import { supabase } from "../supabase";
const redirectTo =
  typeof window !== 'undefined' ? `${import.meta.env.VITE_BASE_URL}/dashboard`
  : undefined;
export const handleLogin = async() =>{
    const { data, error } = await supabase.auth.signInWithOAuth({
        provider: "google",
        options: {
            // redirectTo: "https://diet-tracker-foxx.vercel.app/dashboard",
            redirectTo: redirectTo
        },
    });
    if (error) {
        console.error("Error signing in with Google:", error);
        return { error: "Failed to sign in with Google" };
    }
    return { data };
}

