import Footer from "../components/layout/Footer";
import Navbar from "../components/layout/Navbar";
import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, SlidersHorizontal, X, Tag } from 'lucide-react';
import ProductCard from '../components/product/ProductCard';
import FilterSidebar from '../components/product/FilterSidebar';
import { productItems } from '../data/products';

function DealsPage() {
  const [sortBy, setSortBy] = useState('discount-high');
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [filters, setFilters] = useState({
    priceRange: [0, 10000000],
    selectedBrands: [],
    minRating: null,
    inStock: false
  });

  const EXCHANGE_RATE = 1550;

  // Get only products with discounts (have originalPrice)
  const dealsProducts = useMemo(() => {
    return productItems.filter(product => product.originalPrice && product.originalPrice > product.price);
  }, []);

  // Get all available brands from deals
  const availableBrands = useMemo(() => {
    return [...new Set(dealsProducts.map(p => p.brand))].sort();
  }, [dealsProducts]);

  // Filter and sort deals
  const filteredProducts = useMemo(() => {
    let filtered = [...dealsProducts];

    // Apply filters
    filtered = filtered.filter(product => {
      const priceInNaira = product.price * EXCHANGE_RATE;
      
      if (priceInNaira < filters.priceRange[0] || priceInNaira > filters.priceRange[1]) {
        return false;
      }
      
      if (filters.selectedBrands.length > 0 && !filters.selectedBrands.includes(product.brand)) {
        return false;
      }
    
      if (filters.minRating && product.rating < filters.minRating) {
        return false;
      }
      
      if (filters.inStock && !product.inStock) {
        return false;
      }
      
      return true;
    });

    // Apply sorting
    switch (sortBy) {
      case 'discount-high':
        // Sort by highest discount percentage
        filtered.sort((a, b) => {
          const discountA = ((a.originalPrice - a.price) / a.originalPrice) * 100;
          const discountB = ((b.originalPrice - b.price) / b.originalPrice) * 100;
          return discountB - discountA;
        });
        break;
      case 'discount-low':
        filtered.sort((a, b) => {
          const discountA = ((a.originalPrice - a.price) / a.originalPrice) * 100;
          const discountB = ((b.originalPrice - b.price) / b.originalPrice) * 100;
          return discountA - discountB;
        });
        break;
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
      default:
        break;
    }

    return filtered;
  }, [dealsProducts, filters, sortBy, EXCHANGE_RATE]);

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
    setSortBy('discount-high');
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
          <span className="text-gray-900 font-medium">Deals</span>
        </nav>

        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <Tag size={32} className="text-red-700" />
              <h1 className="text-3xl font-bold text-gray-900">
                Hot Deals & Discounts
              </h1>
            </div>
            <p className="text-gray-600">
              Showing {filteredProducts.length} of {dealsProducts.length} deals
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
              className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
            >
              <option value="discount-high">Biggest Discount</option>
              <option value="discount-low">Lowest Discount</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="name-az">Name: A to Z</option>
              <option value="name-za">Name: Z to A</option>
              <option value="rating">Highest Rated</option>
            </select>
          </div>
        </div>

        {/* Active Filters */}
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

        {/* Deals Banner */}
        <div className="bg-gradient-to-r from-red-700 to-orange-800 text-white rounded-lg p-6 mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold mb-2">🔥 Limited Time Offers!</h2>
              <p className="text-red-100">Save up to 50% on selected items. Don't miss out!</p>
            </div>
          </div>
        </div>

        {/* Products Grid */}
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
                <Tag size={64} className="mx-auto text-gray-300 mb-4" />
                <p className="text-xl text-gray-600 mb-4">
                  No deals found matching your filters
                </p>
                <button
                  onClick={handleClearFilters}
                  className="text-red-600 hover:text-red-700 font-medium underline"
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

export default DealsPage;