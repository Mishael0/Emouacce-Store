import { useState } from 'react';
import { X } from 'lucide-react';

function FilterSidebar({ 
  filters, 
  availableBrands,
  onFilterChange, 
  onClearFilters,
  isMobileOpen,
  onCloseMobile 
}) {
  const [priceRange, setPriceRange] = useState(filters.priceRange || [0, 5000]);

  const brands = availableBrands || [];

  const handlePriceChange = (e, index) => {
    const newRange = [...priceRange];
    newRange[index] = Number(e.target.value);
    setPriceRange(newRange);
  };

  const applyPriceFilter = () => {
    onFilterChange({ priceRange });
  };

  const handleBrandToggle = (brand) => {
    const currentBrands = filters.selectedBrands || [];
    const newBrands = currentBrands.includes(brand)
      ? currentBrands.filter(b => b !== brand)
      : [...currentBrands, brand];
    
    onFilterChange({ selectedBrands: newBrands });
  };

  return (
    <>
      {isMobileOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={onCloseMobile}
        />
      )}

      <aside
        className={`
          fixed lg:sticky top-14 left-0 h-screen lg:h-auto
          w-80 lg:w-64 bg-white z-50 lg:z-0
          transform transition-transform duration-300 ease-in-out
          ${isMobileOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
          overflow-y-auto
        `}
      >
        <div className="p-6">
          <div className="flex items-center justify-between mb-6 lg:hidden">
            <h2 className="text-lg font-semibold">Filters</h2>
            <button
              onClick={onCloseMobile}
              className="p-2 hover:bg-gray-100 rounded-lg"
            >
              <X size={20} />
            </button>
          </div>

          <div className="hidden lg:flex items-center justify-between mb-6">
            <h2 className="text-lg font-semibold">Filters</h2>
            <button
              onClick={onClearFilters}
              className="text-sm text-gray-800 hover:text-gray-800"
            >
              Clear All
            </button>
          </div>

          <div className="mb-8">
            <h3 className="font-semibold text-gray-900 mb-4">Price Range</h3>
            
            <div className="space-y-4">
              <div>
                <label className="text-sm text-gray-600 mb-1 block">
                  Min: ₦{priceRange[0]}
                </label>
                <input
                  type="range"
                  min="0"
                  max="5000"
                  step="50"
                  value={priceRange[0]}
                  onChange={(e) => handlePriceChange(e, 0)}
                  className="w-full accent-gray-800"
                />
              </div>
        
              <div>
                <label className="text-sm text-gray-600 mb-1 block">
                  Max: ₦{priceRange[1]}
                </label>
                <input
                  type="range"
                  min="0"
                  max="100000"
                  step="50"
                  value={priceRange[1]}
                  onChange={(e) => handlePriceChange(e, 1)}
                  className="w-full accent-gray-800"
                />
              </div>
         
              <button
                onClick={applyPriceFilter}
                className="w-full bg-yellow-800 text-white py-2 rounded-lg hover:bg-yellow-950"
              >
                Apply
              </button>
            </div>
          </div>
          
          {brands.length > 0 && (
            <div className="mb-8">
              <h3 className="font-semibold text-gray-900 mb-4">Brand</h3>
              <div className="space-y-3">
                {brands.map((brand) => (
                  <label
                    key={brand}
                    className="flex items-center gap-3 cursor-pointer"
                  >
                    <input
                      type="checkbox"
                      checked={filters.selectedBrands?.includes(brand) || false}
                      onChange={() => handleBrandToggle(brand)}
                      className="w-4 h-4 rounded border-gray-300 text-gray-800 focus:ring-gray-500"
                    />
                    <span className="text-sm text-gray-800">{brand}</span>
                  </label>
                ))}
              </div>
            </div>
          )}

          <div className="mb-8">
            <h3 className="font-semibold text-gray-900 mb-4">Rating</h3>
            <div className="space-y-3">
              {[4, 3, 2, 1].map((rating) => (
                <label
                  key={rating}
                  className="flex items-center gap-3 cursor-pointer"
                >
                  <input
                    type="radio"
                    name="rating"
                    checked={filters.minRating === rating}
                    onChange={() => onFilterChange({ minRating: rating })}
                    className="w-4 h-4 border-gray-300 text-gray-800 focus:ring-gray-500"
                  />
                  <div className="flex items-center gap-1">
                    <span className="text-sm text-gray-800">{rating}</span>
                    <span className="text-yellow-500">★</span>
                    <span className="text-sm text-gray-800">& up</span>
                  </div>
                </label>
              ))}
            </div>
          </div>
        
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Availability</h3>
            <label className="flex items-center gap-3 cursor-pointer">
              <input
                type="checkbox"
                checked={filters.inStock || false}
                onChange={(e) => onFilterChange({ inStock: e.target.checked })}
                className="w-4 h-4 rounded border-gray-300 text-gray-800 focus:ring-gray-500"
              />
              <span className="text-sm text-gray-800">In Stock Only</span>
            </label>
          </div>
        </div>
      </aside>
    </>
  );
}

export default FilterSidebar;