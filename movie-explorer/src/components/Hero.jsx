import React from 'react';
import { Play, Sparkles, Film } from 'lucide-react';

/**
 * Hero Banner Component
 * Matches visual wireframe with movie background image, heading, description, and CTA button.
 */
export default function Hero({ onExploreClick }) {
  return (
    <section className="relative w-full overflow-hidden py-16 sm:py-24 lg:py-32 my-6 rounded-3xl glass-panel border border-slate-800 shadow-2xl">
      {/* Movie Background Poster Layer with Dark Overlay & Blur */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center opacity-25 scale-105 transition-transform duration-1000 filter blur-xs"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1536440136628-849c177e76a1?q=80&w=1920&auto=format&fit=crop')`
        }}
      />
      <div className="absolute inset-0 z-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent" />
      <div className="absolute inset-0 z-0 bg-gradient-to-r from-slate-950 via-slate-950/90 to-transparent" />

      {/* Hero Wireframe Layout & Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center flex flex-col items-center">
        
        {/* Subtitle Badge */}
        <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-400 text-xs sm:text-sm font-medium mb-6 backdrop-blur-md">
          <Sparkles className="w-4 h-4 text-indigo-400 animate-pulse" />
          <span>Unlimited Entertainment Hub</span>
        </div>

        {/* Title Heading matching wireframe */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-white uppercase mb-6 leading-tight">
          DISCOVER <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400">MOVIES</span>
        </h1>

        {/* Short engaging description */}
        <p className="text-base sm:text-xl text-slate-300 max-w-2xl mb-10 leading-relaxed font-normal">
          Explore and discover your favorite movies from around the world.
        </p>

        {/* CTA Button matching wireframe */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={onExploreClick}
            className="w-full sm:w-auto flex items-center justify-center space-x-3 bg-gradient-to-r from-indigo-600 via-indigo-500 to-blue-600 hover:from-indigo-500 hover:to-blue-500 text-white font-bold text-base sm:text-lg px-8 py-4 rounded-2xl shadow-xl shadow-indigo-600/30 hover:shadow-indigo-500/50 hover:scale-105 active:scale-95 transition-all duration-300 group"
          >
            <Play className="w-5 h-5 fill-white group-hover:translate-x-0.5 transition-transform" />
            <span>[ Explore Now ]</span>
          </button>
        </div>

      </div>
    </section>
  );
}
