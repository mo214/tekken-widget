// Simple test to see the kekken.com HTML structure
const PLAYER_ID = "4h82NY2LT3a4";

async function testScrape() {
  try {
    const res = await fetch(`https://kekken.com/@${PLAYER_ID}`);
    const html = await res.text();
    
    // Look for rank and prowess patterns
    console.log("=== RANK PATTERN SEARCH ===");
    const rankPatterns = [
      /text-2xl font-bold/,
      /rank/i,
      /class.*text.*2xl/i
    ];
    
    rankPatterns.forEach((pattern, i) => {
      const match = html.match(pattern);
      console.log(`Pattern ${i + 1}:`, match ? "FOUND" : "NOT FOUND");
      if (match) console.log("  Context:", html.substring(match.index - 50, match.index + 50));
    });
    
    console.log("\n=== PROWESS PATTERN SEARCH ===");
    const prowessPatterns = [
      /Prowess/,
      /prowess/i
    ];
    
    prowessPatterns.forEach((pattern, i) => {
      const match = html.match(pattern);
      console.log(`Pattern ${i + 1}:`, match ? "FOUND" : "NOT FOUND");
      if (match) console.log("  Context:", html.substring(match.index - 50, match.index + 50));
    });
    
  } catch (err) {
    console.error("Error:", err);
  }
}

testScrape();
