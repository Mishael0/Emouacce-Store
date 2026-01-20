import { useState, useMemo } from 'react';
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import ProductCard from '../components/product/ProductCard';
import FilterSidebar from '../components/product/FilterSidebar';
import { useParams } from "react-router-dom";
import { productItems } from '../data/products';
import { ChevronRight, SlidersHorizontal, X } from 'lucide-react';
import { Link } from 'react-router-dom';

function CategoryPage() {
    const { category, subcategory } = useParams();
    const [sortBy, setSortBy] = useState('featured');
    const [isFilterOpen, setIsFilterOpen] = useState(false);
    const [filters, setFilters] = useState({
        priceRange: [0, 5000],
        selectedBrands: [],
        minRating: null,
        inStock: false
    });

    // Compute available brands (derived state)
    const availableBrands = useMemo(() => {
        const categoryProducts = productItems.filter(p => {
            if (p.category !== category) return false;
            if (subcategory && p.subcategory !== subcategory) return false;
            return true;
        });

        return [...new Set(categoryProducts.map(p => p.brand))].sort();
    }, [category, subcategory]);

    // Compute filtered and sorted products (derived state)
    const filteredProducts = useMemo(() => {
        let filtered = productItems.filter(product => {
            // Match category
            if (product.category !== category) return false;
            
            // Match subcategory if provided
            if (subcategory && product.subcategory !== subcategory) return false;
            
            // Price filter
            if (product.price < filters.priceRange[0] || product.price > filters.priceRange[1]) {
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

        // Sort products
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
            default: // featured
                filtered.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
        }

        return filtered;
    }, [category, subcategory, filters, sortBy]);

    // Handle filter changes
    const handleFilterChange = (newFilters) => {
        setFilters(prev => ({ ...prev, ...newFilters }));
    };

    const handleClearFilters = () => {
        setFilters({
            priceRange: [0, 5000],
            selectedBrands: [],
            minRating: null,
            inStock: false
        });
        setSortBy('featured');
    };

    // Format category name for display
    const formatName = (str) => {
        return str
            .split('-')
            .map(word => word.charAt(0).toUpperCase() + word.slice(1))
            .join(' ');
    };

    // Rest of component...


  return (
    <div className="min-h-screen bg-gray-50 ">
      <Navbar />

        <div className="max-w-7xl mx-auto px-6 py-8">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-gray-700 mb-6">
          <Link to="/" className="hover:text-gray-800">
            Home
          </Link>
          <ChevronRight size={16} />
          <Link to={`/productItems/${category}`} className="hover:text-gray-800">
            {formatName(category)} </Link> {subcategory && ( <> <ChevronRight size={16} /> <span className="text-gray-900 font-medium"> {formatName(subcategory)} </span> </> )} </nav>
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
      <div>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          {subcategory ? formatName(subcategory) : formatName(category)}
        </h1>
        <p className="text-gray-600">
          Showing {filteredProducts.length} products
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
              className="text-gray-800 hover:text-gray-800"
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
  )
}

export default CategoryPage
