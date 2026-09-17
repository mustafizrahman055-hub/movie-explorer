import React from 'react';
import { Film, Clapperboard, Compass } from 'lucide-react';

/**
 * Navbar Component
 * Displays brand logo, navigation links, and CTA button to navigate to Movie Listing Page.
 */
export default function Navbar({ activePage, setActivePage }) {
  return (
    <header className="sticky top-0 z-40 w-full glass-panel border-b border-slate-800/80 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        {/* Brand Logo */}
        <div 
          onClick={() => setActivePage('home')}
          className="flex items-center space-x-3 cursor-pointer group"
        >
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 via-indigo-600 to-purple-600 flex items-center justify-center shadow-lg shadow-indigo-500/20 group-hover:scale-105 transition-transform duration-300">
            <Clapperboard className="w-6 h-6 text-white" />
          </div>
          <span className="text-xl sm:text-2xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white via-slate-100 to-slate-400">
            Movie<span className="text-indigo-500">Explorer</span>
          </span>
        </div>

        {/* Navigation Links */}
        <nav className="flex items-center space-x-2 sm:space-x-6">
          <button
            onClick={() => setActivePage('home')}
            className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
              activePage === 'home'
                ? 'text-indigo-400 bg-indigo-500/10 border border-indigo-500/20'
                : 'text-slate-300 hover:text-white hover:bg-slate-800/50'
            }`}
          >
            Home
          </button>
          
          <button
            onClick={() => setActivePage('movies')}
            className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
              activePage === 'movies'
                ? 'text-indigo-400 bg-indigo-500/10 border border-indigo-500/20'
                : 'text-slate-300 hover:text-white hover:bg-slate-800/50'
            }`}
          >
            Movies
          </button>

          {/* Prominent CTA Button to navigate to Movie Listing Page */}
          <button
            onClick={() => setActivePage('movies')}
            className="flex items-center space-x-2 bg-gradient-to-r from-indigo-600 to-blue-600 hover:from-indigo-500 hover:to-blue-500 text-white px-4 py-2 sm:px-5 sm:py-2.5 rounded-xl font-semibold text-sm shadow-md shadow-indigo-600/30 hover:shadow-indigo-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
          >
            <Compass className="w-4 h-4" />
            <span>[ Movies ]</span>
          </button>
        </nav>
      </div>
    </header>
  );
}
