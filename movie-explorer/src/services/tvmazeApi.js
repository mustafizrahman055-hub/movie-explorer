const BASE_URL = 'https://api.tvmaze.com';

export async function fetchAllShows() {
  try {
    const res = await fetch(`${BASE_URL}/shows`);
    if (!res.ok) throw new Error('Failed to fetch shows');
    return await res.json();
  } catch (error) {
    console.error('API Error:', error);
    throw error;
  }
}

export async function searchShows(query) {
  if (!query?.trim()) return [];
  try {
    const res = await fetch(`${BASE_URL}/search/shows?q=${encodeURIComponent(query.trim())}`);
    if (!res.ok) throw new Error('Search failed');
    const data = await res.json();
    return data.map((item) => item.show);
  } catch (error) {
    console.error('Search API Error:', error);
    throw error;
  }
}

export async function fetchShowDetails(id) {
  try {
    const res = await fetch(`${BASE_URL}/shows/${id}?embed=cast`);
    if (!res.ok) throw new Error('Failed to fetch show details');
    return await res.json();
  } catch (error) {
    console.error('Details API Error:', error);
    throw error;
  }
}
