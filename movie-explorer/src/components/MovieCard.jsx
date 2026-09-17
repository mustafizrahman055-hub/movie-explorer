import React from 'react';
import { Star, Calendar, Info } from 'lucide-react';
import { getPosterImage, getReleaseYear, getRatingScore } from '../utils/formatters';

/**
 * MovieCard Component
 * Displays individual show poster, title, rating, release year, genre badges, and [ See Details ] button.
 */
export default function MovieCard({ show, onSelectDetails }) {
  const posterUrl = getPosterImage(show.image);
  const releaseYear = getReleaseYear(show.premiered);
  const ratingScore = getRatingScore(show.rating);

  return (
    <div className="group glass-card rounded-2xl overflow-hidden flex flex-col h-full border border-slate-800 hover:border-indigo-500/50 hover:shadow-2xl hover:shadow-indigo-500/10 hover:-translate-y-1.5 transition-all duration-300">
      
      {/* Poster Image Container */}
      <div className="relative aspect-[2/3] w-full overflow-hidden bg-slate-900">
        <img
          src={posterUrl}
          alt={show.name || 'Movie Poster'}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-300" />
        
        {/* Rating Badge */}
        <div className="absolute top-3 right-3 flex items-center space-x-1 px-2.5 py-1 rounded-full bg-slate-950/80 backdrop-blur-md border border-amber-500/30 text-amber-400 text-xs font-bold shadow-lg">
          <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
          <span>{ratingScore}</span>
        </div>

        {/* Primary Genre Tag */}
        {show.genres && show.genres[0] && (
          <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-indigo-950/80 backdrop-blur-md border border-indigo-500/30 text-indigo-300 text-xs font-semibold shadow-lg">
            {show.genres[0]}
          </div>
        )}
      </div>

      {/* Card Details Body */}
      <div className="p-5 flex flex-col flex-grow justify-between">
        <div>
          {/* Title */}
          <h3 className="text-lg font-bold text-white group-hover:text-indigo-400 transition-colors line-clamp-1 mb-2">
            {show.name}
          </h3>

          {/* Metadata Row: Rating & Release Year */}
          <div className="flex items-center space-x-3 text-xs text-slate-400 mb-4">
            <div className="flex items-center space-x-1 text-amber-400 font-semibold">
              <Star className="w-3.5 h-3.5 fill-amber-400" />
              <span>{ratingScore}</span>
            </div>
            <span className="text-slate-600">•</span>
            <div className="flex items-center space-x-1">
              <Calendar className="w-3.5 h-3.5 text-slate-400" />
              <span>{releaseYear}</span>
            </div>
          </div>
        </div>

        {/* CTA Button matching wireframe */}
        <button
          onClick={() => onSelectDetails(show)}
          className="w-full mt-2 flex items-center justify-center space-x-2 bg-slate-800/80 hover:bg-indigo-600 text-slate-200 hover:text-white py-2.5 px-4 rounded-xl font-semibold text-sm border border-slate-700/60 hover:border-indigo-500 transition-all duration-200 shadow-md group/btn"
        >
          <Info className="w-4 h-4 text-indigo-400 group-hover/btn:text-white transition-colors" />
          <span>[ See Details ]</span>
        </button>
      </div>
    </div>
  );
}
