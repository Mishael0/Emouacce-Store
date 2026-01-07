import { Laptop, Shirt, Home, Dumbbell, Zap } from 'lucide-react';
import fashion from '../assets/images/category/fashion.webp';
import living from '../assets/images/category/living.webp';
import outdoor from '../assets/images/category/outdoor.webp';
import electronics from '../assets/images/category/electronics.webp';

export const navigationData = {
  categories: [
    {
      id: 'electronics',
      name: 'Electronics',
      icon: Laptop,
      slug: 'electronics',
      image: electronics,
      items: [
        { name: 'Laptops', slug: 'laptops', href: '/products/electronics/laptops' },
        { name: 'Smartphones & Tablets',   slug: 'smartphones-tablets', href: '/products/electronics/smartphones & tablets' },
        { name: 'Audio & Headphones', slug: 'audio & headphones', href: '/products/electronics/audio & headphones' },
        { name: 'Cameras', slug: 'cameras', href: '/products/electronics/cameras' }
      ]
    },
    {
      id: 'fashion',
      name: 'Fashion',
      icon: Shirt,
      slug: 'fashion',
       image: fashion,
      items: [
        { name: 'Men\'s Clothing',  slug: 'mens-clothing', href: '/products/fashion/mens' },
        { name: 'Women\'s Clothing', slug: 'womens-clothing', href: '/products/fashion/womens' },
        { name: 'Shoes',  slug: 'shoes', href: '/products/fashion/shoes' },
        { name: 'Accessories',  slug: 'accessories', href: '/products/fashion/accessories' }
      ]
    },
    {
      id: 'home',
      name: 'Home & Living',
      icon: Home,
       slug: 'Home-Living',
        image: living,
      items: [
        { name: 'Furniture',  slug: 'furniture', href: '/products/home/furniture' },
        { name: 'Decor', slug: 'decor', href: '/products/Home & Living/decor' },
        { name: 'Kitchen', slug: 'kitchen', href: '/products/Home & Living/kitchen' },
        { name: 'Bedding', slug: 'bedding', href: '/products/Home & Living/bedding' }
      ]
    },
    {
      id: 'sports',
      name: 'Sports & Outdoors',
      icon: Dumbbell,
      slug: 'Sports-Outdoors',
       image: outdoor,
      items: [
        { name: 'Exercise Equipment', slug: 'exercise equipment', href: '/products/Sports & Outdoors/exercise' },
        { name: 'Outdoor Gear', slug: 'outdoor gear', href: '/products/Sports & Outdoors/outdoor' },
        { name: 'Sportswear', slug: 'Sports-Outdoors', href: '/products/Sports & Outdoors/wear' },
        { name: 'Camping', slug: 'camping', href: '/products/Sports & Outdoors/camping' }
      ]
    }
  ],
  links: [
    { name: 'Deals', href: '/deals', icon: Zap, highlight: false },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' }
  ]
};
