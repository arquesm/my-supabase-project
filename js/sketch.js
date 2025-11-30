// --- PUT YOUR SUPABASE KEYS HERE ---
const SUPABASE_URL = 'https://mqleqkjgscpzkiyzbtxy.supabase.co';
const SUPABASE_ANON = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1xbGVxa2pnc2NwemtpeXpidHh5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjQyNDE5MzUsImV4cCI6MjA3OTgxNzkzNX0.dk5Pvf4RzpEHlM-8WiqmLAp74_6YhVLgWDp_GYN4F-g';

// Initialize supabase client
const supabase = supabase.createClient(SUPABASE_URL, SUPABASE_ANON);

// A variable to store the message from the database
let dbMessage = "Loading...";

// p5.js sketch
function setup() {
  createCanvas(400, 200);
  background(220);

  textSize(16);
  text("p5.js is working!", 20, 50);

// Load data from Supabase
  loadMessage();
  
// Draw the message from the database
  text("DB Message: " + dbMessage, 20, 100);
}

// Fetch 1 row from Supabase and update p5
async function loadMessage() {
  const { data, error } = await supabase
    .from("scores")   // your table
    .select("name")     // the column
    .eq("id", 1)        // select specific row
    .single();

  if (error) {
    dbMessage = "Error: " + error.message;
    return;
  }

  dbMessage = data.text;
}
