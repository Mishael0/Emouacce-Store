import { Laptop, Shirt, Home, Dumbbell, Zap } from 'lucide-react';

export const navigationData = {
  categories: [
    {
      id: 'electronics',
      name: 'Electronics',
      icon: Laptop,
      items: [
        { name: 'Laptops', href: '/electronics/laptops' },
        { name: 'Smartphones', href: '/electronics/phones' },
        { name: 'Tablets', href: '/electronics/tablets' },
        { name: 'Audio & Headphones', href: '/electronics/audio' },
        { name: 'Cameras', href: '/electronics/cameras' }
      ]
    },
    {
      id: 'fashion',
      name: 'Fashion',
      icon: Shirt,
      items: [
        { name: 'Men\'s Clothing', href: '/fashion/mens' },
        { name: 'Women\'s Clothing', href: '/fashion/womens' },
        { name: 'Shoes', href: '/fashion/shoes' },
        { name: 'Accessories', href: '/fashion/accessories' },
        { name: 'Jewelry', href: '/fashion/jewelry' }
      ]
    },
    {
      id: 'home',
      name: 'Home & Living',
      icon: Home,
      items: [
        { name: 'Furniture', href: '/home/furniture' },
        { name: 'Decor', href: '/home/decor' },
        { name: 'Kitchen', href: '/home/kitchen' },
        { name: 'Bedding', href: '/home/bedding' },
        { name: 'Storage', href: '/home/storage' }
      ]
    },
    {
      id: 'sports',
      name: 'Sports & Outdoors',
      icon: Dumbbell,
      items: [
        { name: 'Exercise Equipment', href: '/sports/exercise' },
        { name: 'Outdoor Gear', href: '/sports/outdoor' },
        { name: 'Sportswear', href: '/sports/wear' },
        { name: 'Camping', href: '/sports/camping' }
      ]
    }
  ],
  links: [
    { name: 'Deals', href: '/deals', icon: Zap, highlight: false },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' }
  ]
};
