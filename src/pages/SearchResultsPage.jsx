import { useMemo } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import ProductCard from '../components/product/ProductCard';
import { productItems } from '../data/products';

function SearchResultsPage() {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q') || '';

  // Search products by name, category, subcategory, brand, description, and price
  const searchResults = useMemo(() => {
    if (!query.trim()) return [];

    const searchTerm = query.toLowerCase().trim();

    return productItems.filter(product => {
      // Search in name
      if (product.name.toLowerCase().includes(searchTerm)) return true;
      
      // Search in category (convert hyphens to spaces for better matching)
      const categoryFormatted = product.category.replace(/-/g, ' ');
      if (categoryFormatted.toLowerCase().includes(searchTerm)) return true;
      
      // Search in subcategory
      const subcategoryFormatted = product.subcategory.replace(/-/g, ' ');
      if (subcategoryFormatted.toLowerCase().includes(searchTerm)) return true;
      
      // Search in brand
      if (product.brand.toLowerCase().includes(searchTerm)) return true;
      
      // Search in description
      if (product.description.toLowerCase().includes(searchTerm)) return true;
      
      // Search by price (if query is a number, show products at or below that price)
      const queryNumber = parseFloat(searchTerm);
      if (!isNaN(queryNumber) && product.price <= queryNumber) return true;

      return false;
    });
  }, [query]);

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
          <span className="text-gray-900 font-medium">Search Results</span>
        </nav>

        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Search Results for "{query}"
          </h1>
          <p className="text-gray-600">
            Found {searchResults.length} {searchResults.length === 1 ? 'product' : 'products'}
          </p>
        </div>

        {searchResults.length > 0 ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {searchResults.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <p className="text-xl text-gray-600 mb-4">
              No products found for "{query}"
            </p>
            <p className="text-gray-500 mb-6">
              Try searching with different keywords or browse our categories
            </p>
            <Link
              to="/"
              className="inline-block bg-yellow-800 text-white px-6 py-3 rounded-lg hover:bg-yellow-950 transition-colors"
            >
              Continue Shopping
            </Link>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
}

export default SearchResultsPage;