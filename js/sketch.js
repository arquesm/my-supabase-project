// --- PUT YOUR SUPABASE KEYS HERE ---
const SUPABASE_URL = 'https://mqleqkjgscpzkiyzbtxy.supabase.co';
const SUPABASE_ANON = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1xbGVxa2pnc2NwemtpeXpidHh5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjQyNDE5MzUsImV4cCI6MjA3OTgxNzkzNX0.dk5Pvf4RzpEHlM-8WiqmLAp74_6YhVLgWDp_GYN4F-g';

// Initialize supabase client
const supabaseClient = supabase.createClient(SUPABASE_URL, SUPABASE_ANON);

async function testSupabase() {
  const { data, error } = await supabaseClient.from("scores").select("*");
  if (error) {
    console.error("Supabase error:", error);
  } else {
    console.log("Fetched rows:", data);
  }
}

testSupabase();

function setup() {
  createCanvas(600, 300);
  textSize(18);
}

function draw() {
  background(220);

  if (scoresData.length === 0) {
    text("Loading scores...", 20, 50);
    return;
  }

  text("Scores:", 20, 30);

  for (let i = 0; i < scoresData.length; i++) {
    const s = scoresData[i];

    // Draw name
    text(s.name, 20, 70 + i * 40);

    // Draw a horizontal bar proportional to the score
    fill(100, 150, 250);
    rect(150, 55 + i * 40, s.score * 5, 25);

    // Draw numeric score at the end
    fill(0);
    text(s.score, 160 + s.score * 5, 75 + i * 40);
  }
}
