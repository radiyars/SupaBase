import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://nasetragoaqsptaxjpby.supabase.co";
const supabaseKey = process.env.REACT_APP_ANON_KEY;
const supabase = createClient(supabaseUrl, supabaseKey as string);

export default supabase;
