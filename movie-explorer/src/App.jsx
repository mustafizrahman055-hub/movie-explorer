import { useState } from 'react';

function App() {
  const [movies] = useState([
    {
      id: 1,
      title: "Superman",
      year: "1988",
      language: "English",
      rating: "7.2",
      poster: "https://image.tmdb.org/t/p/w500/d7px1FQxW4tngBACCxdHxEmVxeF.jpg"
    },
    {
      id: 2,
      title: "Superman & Lois",
      year: "2021",
      language: "English",
      rating: "7.8",
      poster: "https://image.tmdb.org/t/p/w500/vlv1gn98GqOU1PE66UKUM88YVY5.jpg"
    }
  ]);

  return (
    <div className="min-h-screen bg-gray-900 text-white font-sans p-6">
      <div className="max-w-6xl mx-auto">
        
        <h1 className="text-4xl md:text-5xl font-bold text-center text-blue-500 mb-8 tracking-wider">
          Movie Explorer
        </h1>

        <div className="flex justify-center items-center mb-10">
          <input 
            type="text" 
            className="px-4 py-3 w-64 md:w-96 rounded-l-lg bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 text-white placeholder-gray-400" 
            placeholder="Search movies..." 
          />
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-r-lg font-semibold transition-all">
            Search
          </button>
        </div>

        <h2 className="text-2xl font-semibold mb-6 text-center md:text-left border-l-4 border-blue-500 pl-3">
          Search Results
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
          {movies.map((movie) => (
            <div key={movie.id} className="bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300 flex flex-col">
              <img 
                src={movie.poster} 
                alt={movie.title} 
                className="w-full h-80 object-cover" 
              />
              
              <div className="p-5 flex flex-col flex-grow items-center text-center">
                <span className="text-yellow-400 font-bold mb-2 text-sm tracking-wide">
                  ★ {movie.rating}
                </span>
                
                <h3 className="text-lg font-semibold mb-1 line-clamp-1">
                  {movie.title}
                </h3>
                
                <p className="text-gray-400 text-sm mb-4">
                  {movie.year} • {movie.language}
                </p>
                
                <button className="mt-auto w-full bg-blue-600 hover:bg-blue-700 text-white py-2.5 rounded-lg font-medium transition-colors">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}

export default App;