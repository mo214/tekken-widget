// More specific test for rank pattern
const PLAYER_ID = "4h82NY2LT3a4";

async function testRankPattern() {
  try {
    const res = await fetch(`https://kekken.com/@${PLAYER_ID}`);
    const html = await res.text();
    
    console.log("Looking for rank patterns...");
    
    // Try to find the player's rank
    const rankPatterns = [
      /Tekken King/,
      /Tekken God/,
      /Mighty Ruler/,
      /Fujin/,
      /Raijin/,
      /Emperor/,
      /Vanquisher/,
      /Destroyer/,
      /Warrior/,
      /Initiate/,
      /class="[^"]*text-[^"]*[2-4]xl[^"]*"[^>]*>([^<]+)<\/div>/i,
      /<h[1-4][^>]*>([^<]+)<\/h[1-4]>/i
    ];
    
    for (let i = 0; i < rankPatterns.length; i++) {
      const match = html.match(rankPatterns[i]);
      if (match) {
        console.log(`Found rank with pattern ${i + 1}:`, match[1] || match[0]);
        break;
      }
    }
    
    // Look for prowess more specifically
    const prowessMatch = html.match(/Prowess<\/p>\s*<p[^>]*>([^<]+)<\/p>/);
    if (prowessMatch) {
      console.log("Prowess found:", prowessMatch[1]);
    }
    
  } catch (err) {
    console.error("Error:", err);
  }
}

testRankPattern();
