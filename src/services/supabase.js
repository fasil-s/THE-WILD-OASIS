import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://gclqgyederddvfuoojdc.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdjbHFneWVkZXJkZHZmdW9vamRjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzI4NjgxNzQsImV4cCI6MjA0ODQ0NDE3NH0.hsvymlyf4U3Yza6wp8Y7iePnkGV384VG156ctGM3rOQ";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
