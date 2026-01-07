import { Link } from 'react-router-dom';
import React, { useState, useEffect, useRef } from 'react';
import { ShoppingCart, Heart, User, Menu, Search, X } from 'lucide-react';
import Logo from '../navigation/Logo';
import DesktopDropdown from '../navigation/DesktopDropdown';
import DesktopMenu from '../navigation/DesktopMenu';
import MobileMenu from '../navigation/MobileMenu';
import SearchOverlay from '../navigation/SearchOverlay';
import { navigationData } from '../../data/categories';

function Navbar() {

    
   const [isShopOpen, setIsShopOpen] = useState(false);
   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
   const [searchIconOpen, setSearchIconOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');

    const searchInputRef = useRef(null);
    const navRef = useRef(null);

     const toggleSearch = () => {
      setSearchIconOpen(!searchIconOpen);
      if (searchIconOpen) setSearchQuery('');  
    };
    
    const closeSearch = () => {
    setSearchIconOpen(false);
    setSearchQuery('');
    };
    
    const  handleSearch = (e) => {
      if (e.key === 'Enter' && searchQuery.trim()) {
        alert(`Searching for: ${searchQuery}`);
        closeSearch();
      }
    };

useEffect(() => {
     const handleClickOutside = (e) => {
       if (isShopOpen && navRef.current && !navRef.current.contains(e.target)) {
         setIsShopOpen(false);
       }
     };

      document.addEventListener('mousedown', handleClickOutside);
     return () => document.removeEventListener('mousedown', handleClickOutside);
   }, [isShopOpen]);
 
   useEffect(() => {
     const handleResize = () => {
       if (window.innerWidth >= 1024 && isMobileMenuOpen) {
         setIsMobileMenuOpen(false);
       }
     };
 
     window.addEventListener('resize', handleResize);
     return () => window.removeEventListener('resize', handleResize);
   }, [isMobileMenuOpen]);


 const handleMobileToggle = () => {
     setIsMobileMenuOpen(!isMobileMenuOpen);
     if (!isMobileMenuOpen) {
       setIsShopOpen(false);
     }
   };


  return (
    <header ref={navRef} className="sticky w-full top-0 z-50 bg-white shadow-md">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-5">
          <div className='h-16 flex items-center gap-2'>
            <button
              onClick={handleMobileToggle}
              className="lg:hidden p-2 -ml-2 text-gray-700 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors"
              aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
            
            <Logo className='w-12 h-12'/>
           <Link to="/"> <h1 className="text-[#413615] text-[1.1rem] sm:text-2xl md:text-2xl font-extrabold tracking-[0.07em]">EMOUACCE</h1></Link>
        </div>

         <DesktopMenu
              onShopHover={setIsShopOpen}
              isShopOpen={isShopOpen}
              links={navigationData.links}
            />

        <div className="flex gap-3 md:gap-5">
          <div className='relative group'>
             <button
                onClick={toggleSearch}
                 aria-label='Search'
                className='search-trigger text-gray-900 hover:text-gray-700  hover:scale-110'>
               <Search size={23} strokeWidth={2} />
             </button>
             <div className='absolute hidden group-hover:block group-focus-within:block text-[#413615] font-bold text-xs py-2 px-4 rounded-md top-1/2 left-1/2 transform -translate-x-1/2 mb-2'>
              Search
            </div>
        </div>
          
          <div className='relative group'>
             <Link>
              <User size={23} 
              strokeWidth={2}
              className='text-gray-900 hover:text-gray-700 hover:scale-110'/>
            </Link>
            <div className='absolute hidden group-hover:block group-focus-within:block text-[#413615] font-bold text-xs py-2 px-4 rounded-md top-1/2 left-1/2 transform -translate-x-1/2 mb-2'>
              Login
            </div>
          </div>
            <div className='relative group'>
             <Link>
              <Heart size={23} 
              strokeWidth={2}
              className='text-gray-900 hover:text-yellow-600 hover:scale-110'/>
             </Link>
             <div className='absolute hidden group-hover:block group-focus-within:block text-[#413615] font-bold text-xs py-2 px-4 rounded-md top-1/2 left-1/2 transform -translate-x-1/2 mb-2'>
              Wishlist
            </div>
             </div>
             <div className='relative group'>
              <Link to="/cart">
              <ShoppingCart size={23} 
              strokeWidth={2}
              className='text-gray-900 hover:text-gray-700  hover:scale-110'/>
               </Link>
             <div className='absolute hidden group-hover:block group-focus-within:block text-[#413615] font-bold text-xs py-2 px-4 rounded-md top-1/2 left-1/2 transform -translate-x-1/2 mb-2'>
              Cart
            </div>
             </div> 
        </div> 
        </div>

        <DesktopDropdown
          isOpen={isShopOpen}
          onClose={(shouldClose) => shouldClose && setIsShopOpen(false)}
          categories={navigationData.categories}
        />
  
        {/* Mobile Menu */}
        <MobileMenu
          isOpen={isMobileMenuOpen}
          onClose={() => setIsMobileMenuOpen(false)}
          categories={navigationData.categories}
          links={navigationData.links}
        />
  
        {/* Search Overlay */}
         {/* OVERLAY */}
     <SearchOverlay 
        isOpen={searchIconOpen}
        onClose={closeSearch} // Pass the close function here
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        handleSearch={handleSearch}
        searchInputRef={searchInputRef}
      />
    </header>
  )
}

export default Navbar
