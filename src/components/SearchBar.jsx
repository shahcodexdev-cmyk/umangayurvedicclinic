import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, X, ArrowRight } from 'lucide-react';
import { searchSite } from '../utils/searchIndex';

const SearchBar = ({ className = '', isMobile = false, onCloseMobile }) => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (query.trim().length > 0) {
      const hits = searchSite(query);
      setResults(hits);
      setIsOpen(true);
    } else {
      setResults([]);
      setIsOpen(false);
    }
  }, [query]);

  // Click outside listener
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (containerRef.current && !containerRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSelect = (path) => {
    navigate(path);
    setQuery('');
    setIsOpen(false);
    if (onCloseMobile) onCloseMobile();
  };

  const handleClear = () => {
    setQuery('');
    setResults([]);
    setIsOpen(false);
  };

  return (
    <div ref={containerRef} className={`relative ${className}`}>
      <div className="relative flex items-center">
        <Search
          size={16}
          className="absolute left-3 text-gray-400 pointer-events-none"
        />
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => {
            if (query.trim().length > 0) setIsOpen(true);
          }}
          placeholder="खोजें... (e.g. piles, joint pain, बवासीर)"
          className="w-full pl-9 pr-8 py-1.5 text-xs md:text-sm bg-gray-50 hover:bg-gray-100 focus:bg-white text-gray-800 rounded-full border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all placeholder:text-gray-400"
        />
        {query && (
          <button
            onClick={handleClear}
            className="absolute right-2.5 text-gray-400 hover:text-gray-600 focus:outline-none"
            type="button"
          >
            <X size={14} />
          </button>
        )}
      </div>

      {/* Results Dropdown */}
      {isOpen && (
        <div
          className={`absolute left-0 mt-2 bg-white rounded-xl shadow-2xl border border-gray-100 overflow-hidden z-50 ${
            isMobile ? 'w-full' : 'w-80 md:w-96 right-0 left-auto'
          }`}
        >
          <div className="px-3 py-2 bg-gray-50 border-b border-gray-100 flex items-center justify-between text-xs text-gray-500">
            <span>खोज परिणाम ({results.length})</span>
            <span className="text-[10px] text-gray-400">Hindi & English</span>
          </div>

          <div className="max-h-72 overflow-y-auto divide-y divide-gray-100">
            {results.length > 0 ? (
              results.map((item) => (
                <div
                  key={item.id}
                  onClick={() => handleSelect(item.path)}
                  className="p-3 hover:bg-green-50/60 cursor-pointer transition-colors group"
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-semibold text-xs text-primary group-hover:text-primary-dark">
                      {item.title}
                    </span>
                    <span className="text-[10px] uppercase font-bold tracking-wide px-1.5 py-0.5 rounded bg-green-100 text-green-800">
                      {item.category}
                    </span>
                  </div>
                  <p className="text-[11px] text-gray-600 line-clamp-1">
                    {item.description}
                  </p>
                  <div className="flex items-center text-[10px] text-secondary font-medium mt-1">
                    <span>विस्तार से देखें</span>
                    <ArrowRight size={10} className="ml-1 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              ))
            ) : (
              <div className="p-4 text-center text-xs text-gray-500">
                <p className="font-medium text-gray-700">कोई परिणाम नहीं मिला</p>
                <p className="text-[11px] mt-1 text-gray-500">
                  कृपया दूसरा शब्द खोजें या सीधे हमारे डॉक्टर से व्हाट्सएप पर परामर्श लें।
                </p>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchBar;
