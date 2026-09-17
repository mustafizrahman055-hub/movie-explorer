/**
 * Utility functions for formatting TVMaze data
 */

// Fallback image for movies/shows missing poster artwork
export const FALLBACK_POSTER = 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?q=80&w=600&auto=format&fit=crop';
export const FALLBACK_BACKDROP = 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?q=80&w=1200&auto=format&fit=crop';

/**
 * Strips HTML tags (e.g. <p>, <b>, <i>) from TVMaze summary strings
 * @param {string} html 
 * @returns {string} Plain text summary
 */
export function stripHtml(html) {
  if (!html) return 'No description available for this title.';
  // Remove HTML tags using DOMParser if in browser environment or regex fallback
  if (typeof window !== 'undefined' && window.DOMParser) {
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, 'text/html');
    return doc.body.textContent || '';
  }
  return html.replace(/<[^>]*>?/gm, '');
}

/**
 * Extracts premiered year from date string (e.g. "2024-03-15" -> "2024")
 * @param {string} dateStr 
 * @returns {string} Year or N/A
 */
export function getReleaseYear(dateStr) {
  if (!dateStr) return 'N/A';
  return dateStr.split('-')[0] || dateStr;
}

/**
 * Gets formatted rating score
 * @param {Object} ratingObj 
 * @returns {string} Score formatted e.g. "8.5" or "N/A"
 */
export function getRatingScore(ratingObj) {
  if (ratingObj && typeof ratingObj.average === 'number' && !isNaN(ratingObj.average)) {
    return ratingObj.average.toFixed(1);
  }
  return 'N/A';
}

/**
 * Safely gets poster image URL or fallback
 * @param {Object} imageObj 
 * @returns {string} Image URL
 */
export function getPosterImage(imageObj) {
  if (!imageObj) return FALLBACK_POSTER;
  return imageObj.original || imageObj.medium || FALLBACK_POSTER;
}

/**
 * Safely gets backdrop image URL or fallback
 * @param {Object} imageObj 
 * @returns {string} Image URL
 */
export function getBackdropImage(imageObj) {
  if (!imageObj) return FALLBACK_BACKDROP;
  return imageObj.original || imageObj.medium || FALLBACK_BACKDROP;
}
