import { FaFacebook, FaInstagram, FaYoutube} from 'react-icons/fa';
import { X} from 'lucide-react';

export const footerLinks = {
    shop: [
      { name: "New Arrivals", href: "#" },
      { name: "Best Sellers", href: "/deals" },
      { name: "Men's Fashion", href: "/products/fashion/mens-clothing" },
      { name: "Women's Fashion", href: "/products/fashion/womens-clothing" },
      { name: "Electronics", href: "/products/electronics" },
      { name: "Home & Living", href: "/products/home-living" }
    ],
    customerService: [
      { name: "Contact Us", href: "#" },
      { name: "Shipping Info", href: "#" },
      { name: "Returns & Exchanges", href: "#" },
      { name: "Size Guide", href: "#" },
      { name: "FAQs", href: "#" },
      { name: "Track Order", href: "#" }
    ],
    company: [
      { name: "About Us", href: "#" },
      { name: "Careers", href: "#" },
      { name: "Store Locations", href: "#" },
      { name: "Our Blog", href: "#" },
      { name: "Sustainability", href: "#" },
      { name: "Press", href: "#" }
    ]
  };

 
 export  const socialLinks = [
    { icon: FaFacebook, href: "#", label: "Facebook" },
    { icon: FaInstagram, href: "#", label: "Instagram" },
    { icon: X, href: "#", label: "X" },
    { icon: FaYoutube, href: "#", label: "YouTube" }
  ];
