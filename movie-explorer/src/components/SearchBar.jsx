import { useState } from 'react';
import { Search, X, SlidersHorizontal } from 'lucide-react';

const GENRES = ['All', 'Drama', 'Action', 'Comedy', 'Sci-Fi', 'Thriller', 'Romance', 'Crime', 'Anime', 'Adventure'];

export default function SearchBar({ searchQuery, setSearchQuery, onSearchSubmit, selectedGenre, setSelectedGenre }) {
  const [term, setTerm] = useState(searchQuery || '');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearchSubmit(term);
  };

  const handleClear = () => {
    setTerm('');
    setSearchQuery('');
    onSearchSubmit('');
  };

  return (
    <div className="w-full max-w-4xl mx-auto mb-10">
      <form 
        onSubmit={handleSubmit}
        className="relative flex items-center shadow-2xl rounded-2xl overflow-hidden glass-panel border border-indigo-500/20 focus-within:border-indigo-500 focus-within:ring-4 focus-within:ring-indigo-500/20 transition-all duration-300"
      >
        <div className="pl-5 text-slate-400">
          <Search className="w-5 h-5 sm:w-6 sm:h-6 text-indigo-400" />
        </div>

        <input
          type="text"
          value={term}
          onChange={(e) => setTerm(e.target.value)}
          placeholder="Search for a movie..."
          className="w-full py-4 px-4 bg-transparent text-white text-base sm:text-lg placeholder-slate-400 focus:outline-none"
        />

        {term && (
          <button
            type="button"
            onClick={handleClear}
            className="p-2 text-slate-400 hover:text-white hover:bg-slate-800/60 rounded-lg mr-2 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        )}

        <button
          type="submit"
          className="bg-gradient-to-r from-indigo-600 to-blue-600 hover:from-indigo-500 hover:to-blue-500 text-white font-semibold px-6 sm:px-8 py-4 text-sm sm:text-base flex items-center space-x-2 transition-all duration-200"
        >
          <span>Search</span>
        </button>
      </form>

      <div className="mt-5 flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
        <span className="text-xs uppercase font-bold text-slate-400 flex items-center gap-1 shrink-0 mr-1">
          <SlidersHorizontal className="w-3.5 h-3.5 text-indigo-400" />
          Genres:
        </span>
        {GENRES.map((genre) => (
          <button
            key={genre}
            onClick={() => setSelectedGenre(genre)}
            className={`px-3.5 py-1.5 rounded-full text-xs font-medium shrink-0 transition-all duration-200 ${
              selectedGenre === genre
                ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/30'
                : 'bg-slate-900/80 text-slate-400 hover:text-slate-200 border border-slate-800'
            }`}
          >
            {genre}
          </button>
        ))}
      </div>
    </div>
  );
}
