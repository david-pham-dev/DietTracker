import { supabase } from "../../../supabase/supabase";

export const getImageUrl = (path:any) =>
   { return supabase
.storage
.from('mystorymedia')
.getPublicUrl(path)
.data
.publicUrl;
   }