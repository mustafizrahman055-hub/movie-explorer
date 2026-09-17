import React from 'react';
import { Clapperboard, Code, Share2, Globe, Heart } from 'lucide-react';

/**
 * Footer Component
 * Matches requirements: Application name, Copyright info (© 2026 MovieExplorer), Social/GitHub links.
 */
export default function Footer() {
  return (
    <footer className="w-full mt-auto bg-slate-950 border-t border-slate-800/80 pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-800/60">
          
          {/* Brand Info */}
          <div className="flex items-center space-x-3">
            <div className="w-9 h-9 rounded-xl bg-indigo-600/20 border border-indigo-500/30 flex items-center justify-center">
              <Clapperboard className="w-5 h-5 text-indigo-400" />
            </div>
            <div>
              <span className="text-xl font-bold text-white tracking-tight">
                Movie<span className="text-indigo-500">Explorer</span>
              </span>
              <p className="text-xs text-slate-400 mt-0.5">Powered by TVMaze Free Movie & TV API</p>
            </div>
          </div>

          {/* Copyright Information */}
          <div className="text-sm text-slate-400 text-center md:text-right">
            <p className="font-medium text-slate-300">
              &copy; 2026 MovieExplorer. All rights reserved.
            </p>
            <p className="text-xs text-slate-500 mt-1 flex items-center justify-center md:justify-end gap-1">
              Crafted with <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" /> for movie enthusiasts.
            </p>
          </div>

          {/* Social Media & GitHub Links */}
          <div className="flex items-center space-x-4">
            <a
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:bg-slate-800 hover:border-slate-700 transition-all duration-200"
              aria-label="GitHub Repository"
            >
              <Code className="w-5 h-5" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noreferrer"
              className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:bg-slate-800 hover:border-slate-700 transition-all duration-200"
              aria-label="Twitter"
            >
              <Share2 className="w-5 h-5" />
            </a>
            <a
              href="https://www.tvmaze.com/api"
              target="_blank"
              rel="noreferrer"
              className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:bg-slate-800 hover:border-slate-700 transition-all duration-200"
              aria-label="TVMaze API Documentation"
            >
              <Globe className="w-5 h-5" />
            </a>
          </div>

        </div>
      </div>
    </footer>
  );
}
