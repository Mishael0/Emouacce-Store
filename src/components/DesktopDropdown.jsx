import { useRef } from "react";

function DesktopDropdown({ isOpen, onClose, categories }) {
  const dropdownRef = useRef(null);
  
    if (!isOpen) return null;
  
    return (
      <div
        ref={dropdownRef}
        className="absolute top-full left-0 right-0 bg-white shadow-2xl border-t border-gray-100 z-50"
        onMouseEnter={() => onClose(false)}
        onMouseLeave={() => onClose(true)}
        role="menu"
        aria-label="Shop categories"
      >
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="grid grid-cols-4 gap-8">
            {categories.map((category) => {
              const IconComponent = category.icon;
              return (
                <div key={category.id} className="space-y-3">
                  <h3 className="font-semibold text-gray-900 text-lg flex items-center gap-2">
                    <IconComponent size={20} className="text-gray-950 font-medium" strokeWidth={2}/>
                    {category.name}
                  </h3>
                  <ul className="space-y-2">
                    {category.items.map((item) => (
                      <li key={item.name}>
                        <a
                          href={item.href}
                          className="text-sm text-gray-600 hover:text-gray-900 hover:translate-x-1 inline-block transition-all duration-200"
                          role="menuitem"
                        >
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
          <div className="mt-6 pt-6 border-t border-gray-100">
            <a
              href="/shop/all"
              className="text-gray-500 hover:text-gray-950 font-medium inline-flex items-center gap-2 group"
            >
              View All Categories
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </a>
          </div>
        </div>
      </div>
    );
 };
 

export default DesktopDropdown
