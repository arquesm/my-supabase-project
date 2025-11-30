/* ===== sketch.js ===== */
// Initialize Supabase
const SUPABASE_URL = "https://mqleqkjgscpzkiyzbtxy.supabase.co/auth/v1/callback"; // replace with your Supabase URL
const SUPABASE_KEY =
  "2aa3071279491552f7f7318562473334ec11d7b7"; // replace with your anon key
const supabase = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

async function setup() {
  createCanvas(400, 400);
  background(220);

  // Add a sample score
const { data: scores, error: fetchError } = await supabase.from("scores").select("*");

  if (fetchError) console.error("Fetch error:", fetchError);
  else {
    if (scores.length === 0) {
      await supabase.from("scores").insert([{ name: "Alice", score: 42 }]);
      console.log("Inserted Alice");
    }
    displayScores(scores);
  }
}



// --- PUT YOUR SUPABASE KEYS HERE ---
const SUPABASE_URL = 'https://mqleqkjgscpzkiyzbtxy.supabase.co/auth/v1/callback';
const SUPABASE_ANON = '2aa3071279491552f7f7318562473334ec11d7b7';

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
