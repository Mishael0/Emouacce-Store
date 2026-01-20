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
        { name: 'Smartphones & Tablets', slug: 'smartphones-tablets', href: '/products/electronics/smartphones-tablets' },
        { name: 'Audio & Headphones', slug: 'audio-headphones', href: '/products/electronics/audio-headphones' },
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
        { name: "Men's Clothing", slug: 'mens-clothing', href: '/products/fashion/mens-clothing' },
        { name: "Women's Clothing", slug: 'womens-clothing', href: '/products/fashion/womens-clothing' },
        { name: 'Shoes', slug: 'shoes', href: '/products/fashion/shoes' },
        { name: 'Accessories', slug: 'accessories', href: '/products/fashion/accessories' }
      ]
    },
    {
      id: 'home',
      name: 'Home & Living',
      icon: Home,
      slug: 'home-living',
      image: living,
      items: [
        { name: 'Living Room', slug: 'living-room', href: '/products/home-living/living-room' },
        { name: 'Bedroom', slug: 'bedroom', href: '/products/home-living/bedroom' },
        { name: 'Office', slug: 'office', href: '/products/home-living/office' },
        { name: 'Outdoor', slug: 'outdoor', href: '/products/home-living/outdoor' }
      ]
    },
    {
      id: 'sports',
      name: 'Sports & Outdoors',
      icon: Dumbbell,
      slug: 'sports-outdoors',
      image: outdoor,
      items: [
        { name: 'Camping', slug: 'camping', href: '/products/sports-outdoors/camping' },
        { name: 'Fitness', slug: 'fitness', href: '/products/sports-outdoors/fitness' },
        { name: 'Cycling', slug: 'cycling', href: '/products/sports-outdoors/cycling' },
        { name: 'Water Sports', slug: 'water-sports', href: '/products/sports-outdoors/water-sports' }
      ]
    }
  ],
  links: [
    { name: 'Deals', href: '/deals', icon: Zap, highlight: false },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' }
  ]
};