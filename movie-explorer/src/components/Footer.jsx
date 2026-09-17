import { Clapperboard, Code, Share2, Globe } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="w-full mt-auto bg-slate-950 border-t border-slate-800/80 pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-800/60">
          <div className="flex items-center space-x-3">
            <div className="w-9 h-9 rounded-xl bg-indigo-600/20 border border-indigo-500/30 flex items-center justify-center">
              <Clapperboard className="w-5 h-5 text-indigo-400" />
            </div>
            <div>
              <span className="text-xl font-bold text-white tracking-tight">
                Movie<span className="text-indigo-500">Explorer</span>
              </span>
              <p className="text-xs text-slate-400 mt-0.5">Powered by TVMaze API</p>
            </div>
          </div>

          <div className="text-sm text-slate-400 text-center md:text-right">
            <p className="font-medium text-slate-300">
              &copy; 2026 MovieExplorer. All rights reserved.
            </p>
          </div>

          <div className="flex items-center space-x-4">
            <a
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:bg-slate-800 transition-all duration-200"
              aria-label="GitHub"
            >
              <Code className="w-5 h-5" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noreferrer"
              className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:bg-slate-800 transition-all duration-200"
              aria-label="Twitter"
            >
              <Share2 className="w-5 h-5" />
            </a>
            <a
              href="https://www.tvmaze.com/api"
              target="_blank"
              rel="noreferrer"
              className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:bg-slate-800 transition-all duration-200"
              aria-label="API"
            >
              <Globe className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
