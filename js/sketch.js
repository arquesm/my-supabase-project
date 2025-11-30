// --- PUT YOUR SUPABASE KEYS HERE ---
const SUPABASE_URL = 'https://mqleqkjgscpzkiyzbtxy.supabase.co';
const SUPABASE_ANON = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1xbGVxa2pnc2NwemtpeXpidHh5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjQyNDE5MzUsImV4cCI6MjA3OTgxNzkzNX0.dk5Pvf4RzpEHlM-8WiqmLAp74_6YhVLgWDp_GYN4F-g';

// Initialize supabase client
const supabase = supabase.createClient(SUPABASE_URL, SUPABASE_ANON);

let scoresData = []; // store fetched rows

async function loadScores() {
  const { data, error } = await supabase.from("scores").select("*");
  if (error) {
    console.error("Supabase error:", error);
  } else {
    scoresData = data;
    console.log("Scores loaded:", scoresData);
  }
}

loadScores();

console.log("Scores loaded:", scoresData);

async function testSupabase() {
  const { data, error } = await supabase.from("scores").select("*");
  if (error) {
    console.error("Supabase error:", error);
  } else {
    console.log("Fetched rows:", data);
  }
}

testSupabase();
