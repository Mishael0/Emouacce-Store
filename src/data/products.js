import Merch from '../assets/images/featuredproducts/Merch.webp';
import footballboot from '../assets/images/featuredproducts/footballboot.webp';
import philipairpro from '../assets/images/featuredproducts/philipairpro.webp';
import Vintageshirt from '../assets/images/featuredproducts/Vintageshirt.webp';
import Wristwatch from '../assets/images/featuredproducts/Wristwatch.webp';
import iphone16pro from '../assets/images/featuredproducts/iphone16pro.webp';
import jagaforce from '../assets/images/featuredproducts/jagaforce.webp';
import stockPalms from '../assets/images/featuredproducts/stockPalms.webp';



export const products = [
  {
    id: 1, // Unique identifier for each product
    name: "Vintage Shirt", // Product name
    category: "Men's", // Product category
    price: 30000, // Price in dollars
    image: Vintageshirt, // Product image URL
    description: "The delivers visible cushioning under every step." // Short description
  },
  {
    id: 2,
    name: "Merch",
    category: "Men's",
    price: 42000,
    image: Merch,
    description: "Classic style meets modern comfort in this vintage design."
  },
  {
    id: 3,
    name: "Pilips Noise Cancelling Airpro",
    category: "Audio & Headphones",
    price: 54000,
    image: philipairpro,
    description: "Iconic style that's been setting trends since 1982."
  },
  {
    id: 4,
    name: "Soccer Boot",
    category: "Shoes",
    price: 78000,
    image: footballboot,
    description: "Engineered to keep your football game time comfortable with soft, responsive cushioning."
  },
  {
    id: 5,
    name: "Wristwatch",
    category: "Accessories",
    price: 37000,
    image: Wristwatch,
    description: "Giannis' signature shoe built for explosive speed and control."
  },
  {
    id: 6,
    name: "iphone16 pro",
    category: "Smartphones & tablets",
    price: 530000,
    image: iphone16pro,
    description: "Responsive cushioning for your daily run routine."
  },
   {
    id: 7,
    name: "Air Max Force",
    category: "Shoes",
    price: 35000,
    image: jagaforce,
    description: "Casual to match wear for your e."
  },
  {
    id: 8,
    name: "Men's Casual Footwear",
    category: "Men's",
    price: 28000,
    image: stockPalms,
    description: "Casual to match wear for your e."
  }
];