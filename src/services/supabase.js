import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://nxurshzugyglrdjuzsde.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im54dXJzaHp1Z3lnbHJkanV6c2RlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzk4NDQ0MTgsImV4cCI6MjA1NTQyMDQxOH0.5sNUOxHUNWU85vn3bCfCJWRD-lcF95EAzDz9qucLq6o";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
