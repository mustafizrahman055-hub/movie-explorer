import { useEffect, useState } from 'react';
import { X, Star, Calendar, Clock, Globe, Users } from 'lucide-react';
import { stripHtml, getReleaseYear, getRatingScore, getBackdropImage } from '../utils/formatters';
import { fetchShowDetails } from '../services/tvmazeApi';

export default function MovieModal({ show, onClose }) {
  const [cast, setCast] = useState([]);

  useEffect(() => {
    if (!show) return;

    document.body.style.overflow = 'hidden';

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);

    let isMounted = true;
    fetchShowDetails(show.id)
      .then((data) => {
        if (isMounted && data?._embedded?.cast) {
          setCast(data._embedded.cast.slice(0, 6));
        }
      })
      .catch((err) => console.log('Cast load error:', err));

    return () => {
      isMounted = false;
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [show, onClose]);

  if (!show) return null;

  const backdropUrl = getBackdropImage(show.image);
  const releaseYear = getReleaseYear(show.premiered);
  const ratingScore = getRatingScore(show.rating);
  const overviewText = stripHtml(show.summary);

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-slate-950/85 backdrop-blur-md transition-opacity duration-300"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-3xl glass-panel rounded-3xl overflow-hidden shadow-2xl border border-slate-700/80 my-8 text-slate-100 flex flex-col max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-slate-950/80 text-slate-300 hover:text-white hover:bg-slate-900 border border-slate-700/80 backdrop-blur-md transition-all duration-200"
          title="Close"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="overflow-y-auto custom-scrollbar flex-grow">
          <div className="relative h-64 sm:h-80 w-full overflow-hidden bg-slate-900">
            <img
              src={backdropUrl}
              alt={show.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-transparent to-slate-950/50" />

            <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between">
              <div>
                <span className="text-xs uppercase tracking-widest font-bold text-indigo-400 mb-1 block">
                  MOVIE BACKDROP
                </span>
                <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
                  {show.name}
                </h2>
              </div>
            </div>
          </div>

          <div className="p-6 sm:p-8 space-y-6">
            <div className="flex flex-wrap items-center gap-4 text-sm sm:text-base font-semibold pb-4 border-b border-slate-800">
              <div className="flex items-center space-x-1.5 px-3 py-1 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-400">
                <Star className="w-4 h-4 fill-amber-400" />
                <span>Rating: {ratingScore}</span>
              </div>
              <span className="text-slate-700">|</span>
              <div className="flex items-center space-x-1.5 px-3 py-1 rounded-xl bg-indigo-500/10 border border-indigo-500/30 text-indigo-300">
                <Calendar className="w-4 h-4 text-indigo-400" />
                <span>Release: {releaseYear}</span>
              </div>
              {show.runtime && (
                <>
                  <span className="text-slate-700">|</span>
                  <div className="flex items-center space-x-1.5 text-slate-400">
                    <Clock className="w-4 h-4" />
                    <span>{show.runtime} min</span>
                  </div>
                </>
              )}
            </div>

            {show.genres && show.genres.length > 0 && (
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider mr-1">Genres:</span>
                {show.genres.map((genre) => (
                  <span
                    key={genre}
                    className="px-3 py-1 rounded-full bg-slate-800/80 border border-slate-700/60 text-slate-300 text-xs font-medium"
                  >
                    {genre}
                  </span>
                ))}
              </div>
            )}

            <div>
              <h4 className="text-base font-bold text-white uppercase tracking-wider mb-2">
                Overview:
              </h4>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-normal bg-slate-900/60 p-4 rounded-2xl border border-slate-800/80">
                {overviewText}
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-xs sm:text-sm">
              <div className="bg-slate-900/40 p-3 rounded-xl border border-slate-800/60">
                <span className="text-slate-400 font-medium block">Language</span>
                <span className="text-white font-semibold">{show.language || 'English'}</span>
              </div>
              <div className="bg-slate-900/40 p-3 rounded-xl border border-slate-800/60">
                <span className="text-slate-400 font-medium block">Status</span>
                <span className="text-white font-semibold">{show.status || 'Ended'}</span>
              </div>
              <div className="bg-slate-900/40 p-3 rounded-xl border border-slate-800/60 col-span-2 sm:col-span-1">
                <span className="text-slate-400 font-medium block">Network</span>
                <span className="text-white font-semibold">{show.network?.name || show.webChannel?.name || 'N/A'}</span>
              </div>
            </div>

            {cast.length > 0 && (
              <div>
                <h4 className="text-sm font-bold text-slate-300 uppercase tracking-wider mb-3 flex items-center gap-2">
                  <Users className="w-4 h-4 text-indigo-400" />
                  Cast:
                </h4>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {cast.map((item, i) => (
                    <div key={i} className="flex items-center space-x-2 bg-slate-900/50 p-2 rounded-xl border border-slate-800/50">
                      {item.person.image ? (
                        <img src={item.person.image.medium} alt={item.person.name} className="w-8 h-8 rounded-full object-cover" />
                      ) : (
                        <div className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center text-xs font-bold text-slate-400">
                          {item.person.name[0]}
                        </div>
                      )}
                      <div className="truncate">
                        <p className="text-xs font-semibold text-white truncate">{item.person.name}</p>
                        <p className="text-[10px] text-slate-400 truncate">{item.character?.name}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {show.officialSite && (
              <div className="pt-2">
                <a
                  href={show.officialSite}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center space-x-2 text-indigo-400 hover:text-indigo-300 text-xs font-semibold underline underline-offset-4"
                >
                  <Globe className="w-3.5 h-3.5" />
                  <span>Official Website</span>
                </a>
              </div>
            )}
          </div>
        </div>

        <div className="p-4 sm:p-5 bg-slate-950/90 border-t border-slate-800 flex justify-end items-center">
          <button
            onClick={onClose}
            className="flex items-center space-x-2 bg-rose-600/20 hover:bg-rose-600 text-rose-300 hover:text-white px-6 py-2.5 rounded-xl font-bold text-sm border border-rose-500/40 transition-all duration-200"
          >
            <X className="w-4 h-4" />
            <span>[ X Close ]</span>
          </button>
        </div>
      </div>
    </div>
  );
}
