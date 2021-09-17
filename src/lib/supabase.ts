import { createClient } from "@supabase/supabase-js";

export const supabase = createClient(
    "https://gyzsdrtgmzeiwhtxnkwz.supabase.co",
    process.env.NEXT_PUBLIC_SUPABASE_KEY!,
);
