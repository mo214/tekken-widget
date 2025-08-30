<script lang="ts">
  import { onMount } from 'svelte';

  let rankData: {
    rank: string;
    rankNumber: number;
    prowess: string;
    lastUpdated: string;
  } | null = null;
  let loading = true;
  let error: string | null = null;

  const GOAL_RANK = "Tekken King";
  const GOAL_RANK_NUMBER = 25;

  async function fetchRankData() {
    try {
      loading = true;
      const response = await fetch('/api/rank');
      if (!response.ok) throw new Error('Failed to fetch rank data');
      rankData = await response.json();
      error = null;
    } catch (err) {
      error = err instanceof Error ? err.message : 'Unknown error';
      console.error('Error fetching rank:', err);
    } finally {
      loading = false;
    }
  }
// new version 1.0 
  function calculateProgress() {
    if (!rankData || rankData.rankNumber === -1) return 0;
    
    const currentRank = rankData.rankNumber;
    const progress = (currentRank / GOAL_RANK_NUMBER) * 100;
    return Math.min(Math.max(progress, 0), 100);
  }

  function getNextRank() {
    if (!rankData || rankData.rankNumber === -1) return "Unknown";
    
    const nextRankNumber = rankData.rankNumber + 1;
    const rankHierarchy = {
      0: "Beginner", 1: "1st Dan", 2: "2nd Dan", 3: "Fighter", 4: "Strategist",
      5: "Combatant", 6: "Brawler", 7: "Ranger", 8: "Cavalry", 9: "Warrior",
      10: "Assailant", 11: "Dominator", 12: "Vanquisher", 13: "Destroyer",
      14: "Eliminator", 15: "Garyu", 16: "Shinryu", 17: "Tenryu", 18: "Mighty Ruler",
      19: "Flame Ruler", 20: "Battle Ruler", 21: "Fujin", 22: "Raijin", 23: "Kishin",
      24: "Bushin", 25: "Tekken King", 26: "Tekken Emperor", 27: "Tekken God",
      28: "Tekken God Supreme", 100: "God of Destruction"
    };
    
    return rankHierarchy[nextRankNumber as keyof typeof rankHierarchy] || "Unknown";
  }

  onMount(() => {
    fetchRankData();
    // Refresh every 5 minutes
    const interval = setInterval(fetchRankData, 5 * 60 * 1000);
    return () => clearInterval(interval);
  });
</script>

<svelte:head>
  <style>
    :global(body) {
      margin: 0;
      padding: 0;
      background: transparent;
      font-family: 'Arial', sans-serif;
      color: white;
      text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.8);
    }
  </style>
</svelte:head>

<div class="twitch-widget">
  {#if loading}
    <div class="loading">Loading rank data...</div>
  {:else if error}
    <div class="error">Error: {error}</div>
  {:else if rankData}
    <div class="widget-content">
      <div class="current-rank">
        <h2>Current Rank: {rankData.rank}</h2>
        <div class="prowess">Prowess: {rankData.prowess}</div>
      </div>
      
      <div class="progress-container">
        <div class="progress-header">
          <span>Progress to {GOAL_RANK}</span>
          <span>{calculateProgress().toFixed(1)}%</span>
        </div>
        <div class="progress-bar">
          <div 
            class="progress-fill" 
            style={`width: ${calculateProgress()}%`}
          ></div>
        </div>
        <div class="progress-labels">
          <span>{rankData.rank} ({rankData.rankNumber})</span>
          <span>{GOAL_RANK} ({GOAL_RANK_NUMBER})</span>
        </div>
        <div class="next-rank">
          Next: {getNextRank()}
        </div>
      </div>
      
      <div class="last-updated">
        Updated: {new Date(rankData.lastUpdated).toLocaleTimeString()}
      </div>
    </div>
  {/if}
</div>

<style>
  .twitch-widget {
    width: 400px;
    padding: 20px;
    background: linear-gradient(135deg, #1a1a1a, #2a2a2a);
    border: 3px solid #ff6a00;
    border-radius: 8px;
    box-shadow: 0 4px 20px rgba(255, 106, 0, 0.3);
  }

  .widget-content {
    text-align: center;
  }

  .current-rank h2 {
    margin: 0 0 5px 0;
    color: #ff6a00;
    font-size: 1.5em;
    text-shadow: 0 0 10px rgba(255, 106, 0, 0.7);
    font-weight: bold;
  }

  .prowess {
    font-size: 1.2em;
    color: #ffd700;
    margin-bottom: 20px;
    text-shadow: 0 0 8px rgba(255, 215, 0, 0.6);
  }

  .progress-container {
    margin: 20px 0;
  }

  .progress-header {
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
    font-weight: bold;
    color: #ffffff;
    text-shadow: 0 0 5px rgba(255, 255, 255, 0.5);
  }

  .progress-bar {
    width: 100%;
    height: 25px;
    background: #333;
    border-radius: 5px;
    overflow: hidden;
    border: 2px solid #555;
    box-shadow: inset 0 0 10px rgba(0, 0, 0, 0.5);
  }

  .progress-fill {
    height: 100%;
    background: linear-gradient(90deg, #ff0000, #ff6a00, #ffd700);
    border-radius: 3px;
    transition: width 0.5s ease;
    box-shadow: 0 0 10px rgba(255, 106, 0, 0.6);
  }

  .progress-labels {
    display: flex;
    justify-content: space-between;
    margin-top: 8px;
    font-size: 0.9em;
    color: #cccccc;
    text-shadow: 0 0 3px rgba(255, 255, 255, 0.3);
  }

  .next-rank {
    margin-top: 12px;
    font-style: italic;
    color: #ff6a00;
    text-shadow: 0 0 5px rgba(255, 106, 0, 0.5);
    font-weight: bold;
  }

  .last-updated {
    margin-top: 15px;
    font-size: 0.8em;
    color: #888888;
    text-shadow: 0 0 3px rgba(136, 136, 136, 0.3);
  }

  .loading, .error {
    text-align: center;
    padding: 20px;
    color: #ffffff;
  }

  .error {
    color: #ff4444;
    text-shadow: 0 0 5px rgba(255, 68, 68, 0.5);
  }
</style>
