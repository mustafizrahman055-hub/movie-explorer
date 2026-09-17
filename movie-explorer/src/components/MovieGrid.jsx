import React from 'react';
import MovieCard from './MovieCard';
import { Film, AlertCircle } from 'lucide-react';

/**
 * MovieGrid Component
 * Displays grid of MovieCards with responsive column layout, loading state skeletons, and empty state handlers.
 */
export default function MovieGrid({ shows, isLoading, error, onSelectDetails }) {
  // Loading Skeletons
  if (isLoading) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8 my-8">
        {Array.from({ length: 8 }).map((_, idx) => (
          <div 
            key={idx} 
            className="glass-card rounded-2xl p-4 flex flex-col h-[420px] animate-pulse border border-slate-800/60"
          >
            <div className="w-full h-64 bg-slate-800/80 rounded-xl mb-4" />
            <div className="h-5 bg-slate-800/80 rounded w-3/4 mb-3" />
            <div className="h-4 bg-slate-800/60 rounded w-1/2 mb-6" />
            <div className="mt-auto h-10 bg-slate-800/80 rounded-xl" />
          </div>
        ))}
      </div>
    );
  }

  // Error State
  if (error) {
    return (
      <div className="my-16 p-8 glass-panel rounded-3xl text-center max-w-xl mx-auto border border-rose-500/20">
        <AlertCircle className="w-12 h-12 text-rose-400 mx-auto mb-4" />
        <h3 className="text-xl font-bold text-white mb-2">Failed to load movies</h3>
        <p className="text-slate-400 text-sm mb-4">{error}</p>
        <p className="text-xs text-slate-500">Please check your internet connection or try searching again.</p>
      </div>
    );
  }

  // Empty Search Results State
  if (!shows || shows.length === 0) {
    return (
      <div className="my-16 p-12 glass-panel rounded-3xl text-center max-w-xl mx-auto border border-slate-800">
        <Film className="w-16 h-16 text-indigo-400/50 mx-auto mb-4 animate-bounce" />
        <h3 className="text-2xl font-bold text-white mb-2">No Movies Found</h3>
        <p className="text-slate-400 text-base mb-6">
          We couldn't find any titles matching your query. Try searching for popular shows like "Superman", "Girls", "Batman", or "Breaking Bad".
        </p>
      </div>
    );
  }

  // Active Movie Cards Grid Layout
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8 my-8">
      {shows.map((show) => (
        <MovieCard
          key={show.id}
          show={show}
          onSelectDetails={onSelectDetails}
        />
      ))}
    </div>
  );
}
