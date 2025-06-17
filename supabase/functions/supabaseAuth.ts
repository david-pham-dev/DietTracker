import { supabase } from "../supabase";
export const handleLogin = async() =>{
    const { data, error } = await supabase.auth.signInWithOAuth({
        provider: "google",
        options: {
            redirectTo: "https://diet-tracker-foxx.vercel.app/dashboard",
        },
    });
    if (error) {
        console.error("Error signing in with Google:", error);
        return { error: "Failed to sign in with Google" };
    }
    return { data };
}

