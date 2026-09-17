function App() {
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
      </div>
    </div>
  );
}

export default App;