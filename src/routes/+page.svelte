<script lang="ts">
  import { onMount } from 'svelte';
  
  interface RankData {
    rank?: string;
    prowess?: string;
    lastUpdated?: string;
  }
  
  let rankData: RankData = {};
  let loading = false;
  let error: string | null = null;

  async function fetchRank() {
    loading = true;
    error = null;
    
    try {
      const response = await fetch('/api/rank');
      if (!response.ok) {
        throw new Error(`Failed to fetch rank: ${response.status}`);
      }
      rankData = await response.json();
    } catch (err) {
      if (err instanceof Error) {
        error = err.message;
      } else {
        error = String(err);
      }
      console.error('Error fetching rank:', err);
    } finally {
      loading = false;
    }
  }

  // Fetch rank data when component mounts (client-side only)
  onMount(() => {
    fetchRank();
  });
</script>

<h1>Tekken Rank Tracker</h1>

{#if loading}
  <p>Loading rank data...</p>
{:else if error}
  <p style="color: red;">Error: {error}</p>
  <button on:click={fetchRank}>Try Again</button>
{:else if rankData}
  <div class="rank-card">
    <h2>Current Rank</h2>
    <p class="rank">{rankData.rank}</p>
    <p class="prowess">Prowess: {rankData.prowess}</p>
    <p class="last-updated">Last updated: {rankData.lastUpdated ? new Date(rankData.lastUpdated).toLocaleString() : 'Unknown'}</p>
  </div>
  <button on:click={fetchRank}>Refresh</button>
{:else}
  <p>No rank data available</p>
  <button on:click={fetchRank}>Fetch Rank</button>
{/if}

<style>
  .rank-card {
    border: 2px solid #333;
    border-radius: 8px;
    padding: 20px;
    margin: 20px 0;
    background: #f5f5f5;
  }
  
  .rank {
    font-size: 2rem;
    font-weight: bold;
    color: #007acc;
    margin: 0;
  }
  
  .prowess {
    font-size: 1.2rem;
    color: #666;
    margin: 10px 0;
  }
  
  .last-updated {
    font-size: 0.9rem;
    color: #999;
    margin: 0;
  }
  
  button {
    background: #007acc;
    color: white;
    border: none;
    padding: 10px 20px;
    border-radius: 4px;
    cursor: pointer;
    font-size: 1rem;
  }
  
  button:hover {
    background: #005a9e;
  }
</style>
