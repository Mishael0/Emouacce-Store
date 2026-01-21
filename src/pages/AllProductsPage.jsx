import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, SlidersHorizontal, X } from 'lucide-react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import ProductCard from '../components/product/ProductCard';
import FilterSidebar from '../components/product/FilterSidebar';
import { productItems } from '../data/products';

function AllProductsPage() {
  const [sortBy, setSortBy] = useState('featured');
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [filters, setFilters] = useState({
    priceRange: [0, 10000000], // Increased max range for Naira prices
    selectedBrands: [],
    minRating: null,
    inStock: false
  });

  // Exchange rate constant
  const EXCHANGE_RATE = 1550;

  // Step 1: Get ONLY featured products (limit to 15)
  const featuredProductsOnly = useMemo(() => {
    return productItems
      .filter(product => product.featured === true)
      .slice(9, 48);
  }, []);

   // Step 2: Get all available brands from these 15 featured products
  const availableBrands = useMemo(() => {
    return [...new Set(featuredProductsOnly.map(p => p.brand))].sort();
  }, [featuredProductsOnly]);

  // Step 3: Apply filters to the 15 featured products
  const filteredProducts = useMemo(() => {
    let filtered = [...featuredProductsOnly]; // Start with featured products

    // Apply filters
    filtered = filtered.filter(product => {
      // Convert price to Naira for filtering
      const priceInNaira = product.price * EXCHANGE_RATE;
      
      // Price filter
      if (priceInNaira < filters.priceRange[0] || priceInNaira > filters.priceRange[1]) {
        return false;
      }
      
      // Brand filter
      if (filters.selectedBrands.length > 0 && !filters.selectedBrands.includes(product.brand)) {
        return false;
      }
    
      // Rating filter
      if (filters.minRating && product.rating < filters.minRating) {
        return false;
      }
      
      // Stock filter
      if (filters.inStock && !product.inStock) {
        return false;
      }
      
      return true;
    });

    // Apply sorting
    switch (sortBy) {
      case 'price-low':
        filtered.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        filtered.sort((a, b) => b.price - a.price);
        break;
      case 'name-az':
        filtered.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case 'name-za':
        filtered.sort((a, b) => b.name.localeCompare(a.name));
        break;
      case 'rating':
        filtered.sort((a, b) => b.rating - a.rating);
        break;
      default: // featured - no sorting needed, already in order
        break;
    }

    return filtered;
  }, [featuredProductsOnly, filters, sortBy, EXCHANGE_RATE]);

  const handleFilterChange = (newFilters) => {
    setFilters(prev => ({ ...prev, ...newFilters }));
  };

  const handleClearFilters = () => {
    setFilters({
      priceRange: [0, 10000000],
      selectedBrands: [],
      minRating: null,
      inStock: false
    });
    setSortBy('featured');
  };


  return (
   <div className="min-h-screen bg-gray-50">
      <Navbar />

      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-gray-700 mb-6">
          <Link to="/" className="hover:text-gray-800">
            Home
          </Link>
          <ChevronRight size={16} />
          <span className="text-gray-900 font-medium">Featured Products</span>
        </nav>

        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              Featured Products
            </h1>
            <p className="text-gray-600">
              Showing {filteredProducts.length} of {featuredProductsOnly.length} featured products
            </p>
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={() => setIsFilterOpen(true)}
              className="lg:hidden flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50"
            >
              <SlidersHorizontal size={18} />
              Filters
            </button>

            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-300"
            >
              <option value="featured">Featured</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="name-az">Name: A to Z</option>
              <option value="name-za">Name: Z to A</option>
              <option value="rating">Highest Rated</option>
            </select>
          </div>
        </div>

        {(filters.selectedBrands.length > 0 || filters.minRating || filters.inStock) && (
          <div className="flex flex-wrap items-center gap-2 mb-6">
            <span className="text-sm text-gray-600">Active filters:</span>
            
            {filters.selectedBrands.map(brand => (
              <span
                key={brand}
                className="inline-flex items-center gap-2 px-3 py-1 bg-gray-200 text-gray-700 rounded-full text-sm"
              >
                {brand}
                <button
                  onClick={() => {
                    const newBrands = filters.selectedBrands.filter(b => b !== brand);
                    handleFilterChange({ selectedBrands: newBrands });
                  }}
                  className="hover:text-orange-900"
                >
                  <X size={14} />
                </button>
              </span>
            ))}

            {filters.minRating && (
              <span className="inline-flex items-center gap-2 px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-sm">
                {filters.minRating}★ & up
                <button
                  onClick={() => handleFilterChange({ minRating: null })}
                  className="hover:text-orange-900"
                >
                  <X size={14} />
                </button>
              </span>
            )}

            {filters.inStock && (
              <span className="inline-flex items-center gap-2 px-3 py-1 bg-orange-100 rounded-full text-sm">
                In Stock Only
                <button
                  onClick={() => handleFilterChange({ inStock: false })}
                  className="hover:text-orange-900"
                >
                  <X size={14} />
                </button>
              </span>
            )}

            <button
              onClick={handleClearFilters}
              className="text-sm text-gray-600 hover:text-gray-900 underline ml-2"
            >
              Clear all
            </button>
          </div>
        )}

        <div className="flex gap-8">
          <FilterSidebar
            filters={filters}
            availableBrands={availableBrands}
            onFilterChange={handleFilterChange}
            onClearFilters={handleClearFilters}
            isMobileOpen={isFilterOpen}
            onCloseMobile={() => setIsFilterOpen(false)}
          />

          <div className="flex-1">
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
                {filteredProducts.map(product => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <p className="text-xl text-gray-600 mb-4">
                  No products found matching your filters
                </p>
                <button
                  onClick={handleClearFilters}
                  className="text-yellow-800 hover:text-yellow-950 font-medium underline"
                >
                  Clear all filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default AllProductsPage;