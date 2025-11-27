/* ===== sketch.js ===== */
// Initialize Supabase
const SUPABASE_URL = "https://mqleqkjgscpzkiyzbtxy.supabase.co"; // replace with your Supabase URL
const SUPABASE_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1xbGVxa2pnc2NwemtpeXpidHh5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjQyNDE5MzUsImV4cCI6MjA3OTgxNzkzNX0.dk5Pvf4RzpEHlM-8WiqmLAp74_6YhVLgWDp_GYN4F-g"; // replace with your anon key
const supabase = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

async function setup() {
  createCanvas(400, 400);
  background(220);

  // Add a sample score
  const { data: insertData, error: insertError } = await supabase
    .from("scores")
    .insert([{ name: "Alice", score: Math.floor(Math.random() * 100) }]);

  if (insertError) console.error("Insert error:", insertError);
  else console.log("Inserted:", insertData);

  // Fetch all scores
  const { data: scores, error: fetchError } = await supabase.from("scores").select("*");
  if (fetchError) console.error("Fetch error:", fetchError);

  displayScores(scores);
}

function displayScores(scores) {
  const scoreboard = document.getElementById("scoreboard");
  scoreboard.innerHTML = "<h2>Scoreboard</h2>";
  scores.forEach((row) => {
    const div = document.createElement("div");
    div.textContent = `${row.name}: ${row.score}`;
    scoreboard.appendChild(div);
  });
}

function draw() {
  // Your p5.js drawing code here
}
