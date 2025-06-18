import { supabase } from "../supabase";
const redirectTo =
  typeof window !== 'undefined' && window.location.origin
    ? `${window.location.origin}/dashboard`
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

