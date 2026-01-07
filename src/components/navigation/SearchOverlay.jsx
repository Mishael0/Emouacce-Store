import React, { useEffect, useRef } from 'react';
import { Search } from 'lucide-react';

function SearchOverlay({ isOpen, onClose, searchQuery, setSearchQuery, handleSearch, searchInputRef }) {

  const overlayInnerRef = useRef(null);


 useEffect(() => {
    // 1. Handle "Click Outside" logic
    const handleClickOutside = (event) => {
      // If the overlay is open and the click is NOT inside the search box
      if (isOpen && overlayInnerRef.current && !overlayInnerRef.current.contains(event.target)) {
        // Only close if we didn't click the trigger button (handled by class check)
        if (!event.target.closest('.search-trigger')) {
          onClose();
        }
      }
    };

    // 2. Handle "Escape" key logic
    const handleEscape = (e) => {
      if (e.key === 'Escape') onClose();
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('keydown', handleEscape);
      // Auto-focus input
      setTimeout(() => searchInputRef.current?.focus(), 100);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen, onClose, searchInputRef]);

  
  return (
     <div
         className={`fixed top-16 left-0 right-0 z-40 bg-white hadow-lg transition-all duration-300 ease-in-out ${isOpen
          ? "translate-y-0 opacity-100 visible" : "translate-y-full opacity-0 invisible"}
         `}>
          <div ref={overlayInnerRef} className="max-w-6xl mx-auto px-6 py-10">
          <div className='flex items-center border-2 border-gray-300 rounded-lg gap-4 mx-auto px-6 py-6 focus-within:border-gray-500 transition-colors'>
            <Search size={23} className='text-gray-400' strokeWidth={2} />
            <input 
                   ref={searchInputRef}
                   type="text"
                   value={searchQuery}
                   onChange={(e) => setSearchQuery(e.target.value)}
                   onKeyDown={handleSearch}
                   placeholder='Search for products'
                   className='flex-1 bg-transparent border-none outline-none text-gray-900 text-lg placeholder:text-gray-900'
            
            />
          </div>

           <div className="mt-6">
            <h3 className="text-gray-500 text-sm font-semibold mb-3 pl-2">
              Popular Searches
            </h3>
            <div className="flex flex-wrap gap-2">
              {['Sneakers', 'Headphones', 'Laptop', 'Phone'].map((term) => (
                <button
                  key={term}
                  onClick={() => {
                    setSearchQuery(term);
                    searchInputRef.current?.focus();
                  }}
                  className="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-full text-sm transition-all border-ray-100"
                >
                  {term}
                </button>
              ))}
            </div>
          </div>
         </div>
         </div>
  )
}

export default SearchOverlay
