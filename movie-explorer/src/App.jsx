import { useState, useEffect, useMemo } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SearchBar from './components/SearchBar';
import MovieGrid from './components/MovieGrid';
import MovieModal from './components/MovieModal';
import Footer from './components/Footer';
import { fetchAllShows, searchShows } from './services/tvmazeApi';
import { Sparkles, Film, ArrowRight } from 'lucide-react';

export default function App() {
  const [activePage, setActivePage] = useState('home');
  const [movies, setMovies] = useState([]);
  const [displayedMovies, setDisplayedMovies] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedGenre, setSelectedGenre] = useState('All');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedMovie, setSelectedMovie] = useState(null);

  useEffect(() => {
    const loadMovies = async () => {
      setLoading(true);
      setError(null);
      try {
        const data = await fetchAllShows();
        setMovies(data || []);
        setDisplayedMovies(data || []);
      } catch (err) {
        console.error(err);
        setError('Failed to load movies. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    loadMovies();
  }, []);

  const handleSearch = async (query) => {
    setSearchQuery(query);
    if (!query.trim()) {
      setDisplayedMovies(movies);
      return;
    }

    setLoading(true);
    setError(null);
    try {
      const results = await searchShows(query);
      setDisplayedMovies(results || []);
    } catch (err) {
      console.error(err);
      setError(`Failed to search for "${query}"`);
    } finally {
      setLoading(false);
    }
  };

  const filteredMovies = useMemo(() => {
    if (selectedGenre === 'All') return displayedMovies;
    return displayedMovies.filter(
      (item) => item.genres && item.genres.includes(selectedGenre)
    );
  }, [displayedMovies, selectedGenre]);

  const goToMovies = () => {
    setActivePage('movies');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans">
      <Navbar activePage={activePage} setActivePage={setActivePage} />

      <main className="flex-grow max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {activePage === 'home' ? (
          <div className="space-y-12">
            <Hero onExploreClick={goToMovies} />

            <section className="space-y-6">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-slate-800/80 pb-4">
                <div>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight flex items-center gap-2">
                    <Sparkles className="w-6 h-6 text-indigo-400" />
                    <span>Featured Shows</span>
                  </h2>
                  <p className="text-sm text-slate-400 mt-1">
                    Explore popular TV shows and movies currently trending.
                  </p>
                </div>

                <button
                  onClick={goToMovies}
                  className="inline-flex items-center space-x-2 text-indigo-400 hover:text-indigo-300 font-semibold text-sm group"
                >
                  <span>Browse All</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>

              <MovieGrid
                shows={movies.slice(0, 8)}
                isLoading={loading}
                error={error}
                onSelectDetails={(movie) => setSelectedMovie(movie)}
              />
            </section>
          </div>
        ) : (
          <div className="space-y-8">
            <div className="text-center max-w-2xl mx-auto space-y-3 mb-6">
              <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
                Movie <span className="text-indigo-500">Explorer</span>
              </h1>
              <p className="text-slate-400 text-sm sm:text-base">
                Find your favorite movies and shows from around the world.
              </p>
            </div>

            <SearchBar
              searchQuery={searchQuery}
              setSearchQuery={setSearchQuery}
              onSearchSubmit={handleSearch}
              selectedGenre={selectedGenre}
              setSelectedGenre={setSelectedGenre}
            />

            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <h2 className="text-lg font-bold text-slate-200 flex items-center gap-2">
                <Film className="w-5 h-5 text-indigo-400" />
                {searchQuery ? (
                  <span>Results for "<span className="text-indigo-400">{searchQuery}</span>"</span>
                ) : (
                  <span>All Shows ({filteredMovies.length})</span>
                )}
              </h2>
            </div>

            <MovieGrid
              shows={filteredMovies}
              isLoading={loading}
              error={error}
              onSelectDetails={(movie) => setSelectedMovie(movie)}
            />
          </div>
        )}
      </main>

      {selectedMovie && (
        <MovieModal
          show={selectedMovie}
          onClose={() => setSelectedMovie(null)}
        />
      )}

      <Footer />
    </div>
  );
}