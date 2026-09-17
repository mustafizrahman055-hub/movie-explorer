/**
 * TVMaze API Service
 * Base URL: https://api.tvmaze.com
 */

const BASE_URL = 'https://api.tvmaze.com';

/**
 * Fetch all top/trending shows
 * @returns {Promise<Array>} List of show objects
 */
export async function fetchAllShows() {
  try {
    const response = await fetch(`${BASE_URL}/shows`);
    if (!response.ok) {
      throw new Error(`Failed to fetch shows: ${response.statusText}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching all shows:', error);
    throw error;
  }
}

/**
 * Search shows by title query
 * Endpoint: GET /search/shows?q=:query
 * @param {string} query - The search query term
 * @returns {Promise<Array>} Array of { score, show } items
 */
export async function searchShows(query) {
  if (!query || !query.trim()) {
    return [];
  }
  try {
    const response = await fetch(`${BASE_URL}/search/shows?q=${encodeURIComponent(query.trim())}`);
    if (!response.ok) {
      throw new Error(`Search failed: ${response.statusText}`);
    }
    const data = await response.json();
    // Return standard show objects mapped from the search result format
    return data.map((item) => item.show);
  } catch (error) {
    console.error('Error searching shows:', error);
    throw error;
  }
}

/**
 * Fetch detailed show information including cast details
 * Endpoint: GET /shows/:id?embed=cast
 * @param {number|string} showId 
 * @returns {Promise<Object>} Show object with _embedded.cast
 */
export async function fetchShowDetails(showId) {
  try {
    const response = await fetch(`${BASE_URL}/shows/${showId}?embed=cast`);
    if (!response.ok) {
      throw new Error(`Failed to fetch show details: ${response.statusText}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(`Error fetching show ${showId}:`, error);
    throw error;
  }
}
