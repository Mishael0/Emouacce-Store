import { Link } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';

function DesktopMenu({ onShopHover, isShopOpen, links }) {
  return (
    <nav className="hidden lg:flex items-center space-x-8" role="navigation">
      <div
        className="relative"
        onMouseEnter={() => onShopHover(true)}
      >
        <button
          className="flex items-center gap-1 text-gray-700 hover:text-gray-900 font-medium transition-colors py-2"
          aria-expanded={isShopOpen}
          aria-haspopup="true"
          aria-label="Shop menu"
        >
          Shop
          <ChevronDown
            size={16}
            strokeWidth={2}
            className={`transition-transform duration-300 ${
              isShopOpen ? 'rotate-180' : ''
            }`}
            aria-hidden="true"
          />
        </button>
      </div>

      {links.map((link) => {
        const LinkIcon = link.icon;
        return (
          <Link
            key={link.name}
            to={link.href}
            className={`flex items-center gap-1.5 font-medium transition-colors ${
              link.highlight 
                ? 'text-orange-600 hover:text-orange-700' 
                : 'text-gray-700 hover:text-gray-900'
            }`}
          >
            {LinkIcon && <LinkIcon size={16} />}
            {link.name}
          </Link>
        );
      })}
    </nav>
  );
}

export default DesktopMenu;