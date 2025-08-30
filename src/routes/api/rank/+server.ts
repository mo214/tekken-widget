const PLAYER_ID = process.env.DENO_PLAYER_ID ?? "4h82NY2LT3a4";

interface RankData {
  rank: string;
  rankNumber: number;
  prowess: string;
  lastUpdated: string;
  progress?: {
    current: number;
    total: number;
    percentage: number;
    nextRank?: string;
  };
}

let cache: { data: RankData; timestamp: number } | null = null;
const CACHE_DURATION = 5 * 60 * 1000; // 5 minutes

export async function GET() {
  const now = Date.now();

  if (cache && now - cache.timestamp < CACHE_DURATION) {
    return new Response(JSON.stringify(cache.data), {
      headers: {
        "content-type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    });
  }

  try {
    const res = await fetch(`https://kekken.com/@${PLAYER_ID}`);
    if (!res.ok) throw new Error(`Failed to fetch Kekken: ${res.status}`);
    const html = await res.text();

    // Tekken rank hierarchy with numerical values
    const rankHierarchy = {
      "Beginner": 0,
      "1st Dan": 1,
      "2nd Dan": 2,
      "Fighter": 3,
      "Strategist": 4,
      "Combatant": 5,
      "Brawler": 6,
      "Ranger": 7,
      "Cavalry": 8,
      "Warrior": 9,
      "Assailant": 10,
      "Dominator": 11,
      "Vanquisher": 12,
      "Destroyer": 13,
      "Eliminator": 14,
      "Garyu": 15,
      "Shinryu": 16,
      "Tenryu": 17,
      "Mighty Ruler": 18,
      "Flame Ruler": 19,
      "Battle Ruler": 20,
      "Fujin": 21,
      "Raijin": 22,
      "Kishin": 23,
      "Bushin": 24,
      "Tekken King": 25,
      "Tekken Emperor": 26,
      "Tekken God": 27,
      "Tekken God Supreme": 28,
      "God of Destruction": 100
    };

    // Rank - look for Tekken rank names (complete list)
    let rank = "Unknown";
    let rankNumber = -1;
    
    // Check for ranks in reverse order (highest first) to avoid false matches
    const rankEntries = Object.entries(rankHierarchy).sort((a, b) => b[1] - a[1]);
    
    for (const [rankName, rankValue] of rankEntries) {
      if (html.includes(rankName)) {
        rank = rankName;
        rankNumber = rankValue;
        break;
      }
    }

    // Prowess - look for pattern after "Prowess" label
    let prowess = "Unknown";
    const prowessMatch = html.match(/Prowess<\/p>\s*<p[^>]*>([^<]+)<\/p>/);
    if (prowessMatch) {
      prowess = prowessMatch[1].trim();
    }

    const data: RankData = {
      rank,
      rankNumber,
      prowess,
      lastUpdated: new Date().toISOString(),
    };

    cache = { data, timestamp: now };

    return new Response(JSON.stringify(data), {
      headers: {
        "content-type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    });
  } catch (err) {
    console.error("Error fetching Kekken rank:", err);
    return new Response(
      JSON.stringify({ error: "Failed to fetch rank data", details: String(err) }),
      {
        status: 500,
        headers: {
          "content-type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
      }
    );
  }
}
