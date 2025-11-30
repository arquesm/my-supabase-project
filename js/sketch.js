// --- PUT YOUR SUPABASE KEYS HERE ---
const SUPABASE_URL = 'https://mqleqkjgscpzkiyzbtxy.supabase.co';
const SUPABASE_ANON = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1xbGVxa2pnc2NwemtpeXpidHh5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjQyNDE5MzUsImV4cCI6MjA3OTgxNzkzNX0.dk5Pvf4RzpEHlM-8WiqmLAp74_6YhVLgWDp_GYN4F-g';

// Initialize supabase client
const supabase = supabase.createClient(SUPABASE_URL, SUPABASE_ANON);

// p5.js sketch
function setup() {
  createCanvas(400, 200);
  background(220);

  textSize(16);
  text("p5.js is working!", 20, 50);

  loadDataFromSupabase();
}

async function loadDataFromSupabase() {
  const output = document.getElementById("db-output");

  const { data, error } = await supabase
    .from("scores")       // 🔥 your table name
    .select("*");

  if (error) {
    output.textContent = "Error: " + error.message;
    return;
  }

  if (!data || data.length === 0) {
    output.textContent = "No data found.";
    return;
  }

  output.textContent = "First row: " + JSON.stringify(data[0]);
}
