import React, { useState, useEffect, useMemo } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SearchBar from './components/SearchBar';
import MovieGrid from './components/MovieGrid';
import MovieModal from './components/MovieModal';
import Footer from './components/Footer';
import { fetchAllShows, searchShows } from './services/tvmazeApi';
import { Sparkles, Film, ArrowRight } from 'lucide-react';

export default function App() {
  const [activePage, setActivePage] = useState('home'); // 'home' | 'movies'
  const [allShows, setAllShows] = useState([]);
  const [displayedShows, setDisplayedShows] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedGenre, setSelectedGenre] = useState('All');
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedShow, setSelectedShow] = useState(null);

  // Initial Data Fetch from TVMaze API (/shows)
  useEffect(() => {
    async function loadInitialShows() {
      setIsLoading(true);
      setError(null);
      try {
        const data = await fetchAllShows();
        setAllShows(data || []);
        setDisplayedShows(data || []);
      } catch (err) {
        console.error(err);
        setError('Failed to fetch movies from TVMaze database.');
      } finally {
        setIsLoading(false);
      }
    }
    loadInitialShows();
  }, []);

  // Handle Search Submission against TVMaze (/search/shows?q=:query)
  const handleSearchSubmit = async (query) => {
    setSearchQuery(query);
    if (!query.trim()) {
      setDisplayedShows(allShows);
      return;
    }

    setIsLoading(true);
    setError(null);
    try {
      const results = await searchShows(query);
      setDisplayedShows(results || []);
    } catch (err) {
      console.error(err);
      setError(`Failed to search for "${query}".`);
    } finally {
      setIsLoading(false);
    }
  };

  // Filter shows by selected genre tag
  const filteredShows = useMemo(() => {
    if (selectedGenre === 'All') return displayedShows;
    return displayedShows.filter(
      (show) => show.genres && show.genres.includes(selectedGenre)
    );
  }, [displayedShows, selectedGenre]);

  // Navigate to Movies listing view
  const navigateToMovies = () => {
    setActivePage('movies');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans">
      
      {/* Global Navbar */}
      <Navbar 
        activePage={activePage} 
        setActivePage={setActivePage} 
      />

      {/* Main Content Area */}
      <main className="flex-grow max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6">
        
        {activePage === 'home' ? (
          /* ================= HOME PAGE ================= */
          <div className="space-y-12">
            
            {/* Hero Section */}
            <Hero onExploreClick={navigateToMovies} />

            {/* Featured Showcase Section */}
            <section className="space-y-6">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-slate-800/80 pb-4">
                <div>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight flex items-center gap-2">
                    <Sparkles className="w-6 h-6 text-indigo-400" />
                    <span>Featured Shows</span>
                  </h2>
                  <p className="text-sm text-slate-400 mt-1">
                    Handpicked top-rated movies and series popular around the globe.
                  </p>
                </div>

                <button
                  onClick={navigateToMovies}
                  className="inline-flex items-center space-x-2 text-indigo-400 hover:text-indigo-300 font-semibold text-sm group"
                >
                  <span>Browse All Movies</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>

              {/* Grid preview of top shows */}
              <MovieGrid 
                shows={allShows.slice(0, 8)}
                isLoading={isLoading}
                error={error}
                onSelectDetails={(show) => setSelectedShow(show)}
              />
            </section>

          </div>
        ) : (
          /* ================= MOVIE LISTING PAGE ================= */
          <div className="space-y-8 animate-fadeIn">
            
            {/* Search Header */}
            <div className="text-center max-w-2xl mx-auto space-y-3 mb-6">
              <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
                Browse & Search <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-blue-400">Movies</span>
              </h1>
              <p className="text-slate-400 text-sm sm:text-base">
                Search through thousands of titles in our database using title queries.
              </p>
            </div>

            {/* Search Bar & Genre Filters Component */}
            <SearchBar 
              searchQuery={searchQuery}
              setSearchQuery={setSearchQuery}
              onSearchSubmit={handleSearchSubmit}
              selectedGenre={selectedGenre}
              setSelectedGenre={setSelectedGenre}
            />

            {/* Grid Header Info */}
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <h2 className="text-lg font-bold text-slate-200 flex items-center gap-2">
                <Film className="w-5 h-5 text-indigo-400" />
                {searchQuery ? (
                  <span>Search Results for "<span className="text-indigo-400">{searchQuery}</span>"</span>
                ) : (
                  <span>All Movies & TV Shows ({filteredShows.length})</span>
                )}
              </h2>
            </div>

            {/* Movie Grid */}
            <MovieGrid 
              shows={filteredShows}
              isLoading={isLoading}
              error={error}
              onSelectDetails={(show) => setSelectedShow(show)}
            />

          </div>
        )}

      </main>

      {/* Movie Details Modal */}
      {selectedShow && (
        <MovieModal 
          show={selectedShow} 
          onClose={() => setSelectedShow(null)} 
        />
      )}

      {/* Global Footer */}
      <Footer />

    </div>
  );
}