export const FALLBACK_POSTER = 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?q=80&w=600&auto=format&fit=crop';
export const FALLBACK_BACKDROP = 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?q=80&w=1200&auto=format&fit=crop';

export function stripHtml(html) {
  if (!html) return 'No summary available.';
  if (typeof window !== 'undefined' && window.DOMParser) {
    const doc = new DOMParser().parseFromString(html, 'text/html');
    return doc.body.textContent || '';
  }
  return html.replace(/<[^>]*>?/gm, '');
}

export function getReleaseYear(dateStr) {
  if (!dateStr) return 'N/A';
  return dateStr.split('-')[0] || dateStr;
}

export function getRatingScore(rating) {
  if (rating && typeof rating.average === 'number') {
    return rating.average.toFixed(1);
  }
  return 'N/A';
}

export function getPosterImage(image) {
  if (!image) return FALLBACK_POSTER;
  return image.original || image.medium || FALLBACK_POSTER;
}

export function getBackdropImage(image) {
  if (!image) return FALLBACK_BACKDROP;
  return image.original || image.medium || FALLBACK_BACKDROP;
}
