import Merch from '../assets/images/featuredproducts/Merch.webp';
import footballboot from '../assets/images/featuredproducts/footballboot.webp';
import philipairpro from '../assets/images/featuredproducts/philipairpro.webp';
import Vintageshirt from '../assets/images/featuredproducts/Vintageshirt.webp';
import Wristwatch from '../assets/images/featuredproducts/Wristwatch.webp';
import iphone16pro from '../assets/images/featuredproducts/iphone16pro.webp';
import Jagaforce from '../assets/images/featuredproducts/Jagaforce.webp';
import stockPalms from '../assets/images/featuredproducts/stockPalms.webp';
import casual from '../assets/images/categoryPage/casual.png';
import Boot from '../assets/images/products/Boot.png';
import allbirds from '../assets/images/products/allbirds.png';
import sneak from '../assets/images/products/sneak.png';
import adidas from '../assets/images/products/adidas.png';
import classic from '../assets/images/products/classic.png';
import sweater from '../assets/images/products/sweater.jpg';
import jacket from '../assets/images/products/jacket.png';
import Shirt from '../assets/images/products/Shirt.webp';
import blueMerch from '../assets/images/products/blueMerch.webp';
import Jacketjean from '../assets/images/products/Jacketjean.webp';
import teamJac from '../assets/images/products/teamJac.jpg';
import trouser from '../assets/images/products/trouser.png';





export const productItems = [
  {
    id: 1, 
    name: "Vintage Abstract Cuban Collar Shirt", 
    category: "fashion",
    subcategory: "mens-clothing",
    price: 17, 
    image: Vintageshirt,
    description: "lightweight Rayon-Polyester blend designed for a breathable, relaxed fit.",
    brand: "Vintage Co",
    rating: 4.5,
    reviews: 234,
    stock: 45,
    inStock: true,
    featured: true
  },
  {
    id: 2,
    name: "Heavyweight Streetwear Tracksuit",
    category: "fashion",
    subcategory: "mens-clothing",
    price: 34,
    image: Merch,
    description: "drop-shoulder styling on the hoodie and stacked tapered joggers with an elastic drawstring waist.",
    brand: "StreetWear",
    rating: 4.6,
    reviews: 189,
    stock: 32,
    inStock: true,
    featured: true
  },
  {
    id: 3,
    name: "Philips TAT3509 Noise Cancelling Pro Earbuds",
    category: "electronics",
    subcategory: "audio-headphones",
    price: 72,
    image: philipairpro,
    description: "They feature Adaptive Noise Cancellation (ANC), 8mm drivers, and an IPX4 splash-resistance rating.",
    brand: "Philips",
    rating: 4.7,
    reviews: 567,
    stock: 23,
    inStock: true,
    featured: true
  },
  {
    id: 4,
    name: "Nike Phantom GT2 Academy Shockwave FG/MG",
    category: "fashion",
    subcategory: "shoes",
    price: 58,
    image: footballboot,
    description: "Shockwave Special Edition features a Generative Texture upper for precision grip and an asymmetrical lacing system",
    brand: "Nike",
    rating: 4.8,
    reviews: 432,
    stock: 56,
    inStock: true,
    featured: true
  },
  {
    id: 5,
    name: "COLMI P8 Plus / P28 Plus Smartwatch Series",
    category: "fashion",
    subcategory: "accessories",
    price: 32,
    image: Wristwatch,
    description: "1.69 to 1.9 IPS HD curved display, IP67 waterproofing, and 28+ sport modes.",
    brand: "COLMI",
    rating: 4.4,
    reviews: 298,
    stock: 67,
    inStock: true,
    featured: true
  },
  {
    id: 6,
    name: "iPhone 15 Pro (Natural Titanium (128GB))",
    category: "electronics",
    subcategory: "smartphones-tablets",
    price: 1800,
    image: iphone16pro,
    description: "features the Grade 5 Titanium frame, the Action Button (replacing the mute switch), and the Triple-lens Pro camera system with a LiDAR scanner.",
    brand: "Apple",
    rating: 4.9,
    reviews: 1234,
    stock: 12,
    inStock: true,
    featured: true
  },
  {
    id: 7,
    name: "Nike Air Max 270 White Black Gold (Colorway: AH8050-100)",
    category: "fashion",
    subcategory: "shoes",
    price: 68,
    image: Jagaforce,
    description: "A classic Air Max 270 lifestyle silhouette The upper is a structured engineered mesh for breathability.",
    brand: "Nike",
    rating: 4.7,
    reviews: 789,
    stock: 45,
    inStock: true,
    featured: true
  },
  {
    id: 8,
    name: "Two-Strap Buckle Footbed Slides",
    category: "fashion",
    subcategory: "shoes",
    price: 28,
    image: stockPalms,
    description: "EVA-molded comfort slides featuring an adjustable double-strap design.",
    brand: "Comfort Slides",
    rating: 4.3,
    reviews: 156,
    stock: 89,
    inStock: true,
    featured: true
  },
 {
    id: "elec-laptop-001",
    name: "MacBook Pro 16-inch M3 Max",
    category: "electronics",
    subcategory: "laptops",
    price: 3299.99,
    originalPrice: 3499.99,
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=800",
    description: "Apple M3 Max chip with 16-core CPU and 40-core GPU for extreme workflows.",
    brand: "Apple",
    rating: 4.9,
    reviews: 842,
    stock: 5,
    inStock: true,
    featured: true,
    specifications: { processor: "M3 Max", ram: "36GB", storage: "1TB SSD", display: "Liquid Retina XDR" }
  },
  {
    id: "elec-laptop-002",
    name: "Dell XPS 15 9530",
    category: "electronics",
    subcategory: "laptops",
    price: 1899.00,
    originalPrice: 2199.00,
    image: "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=800",
    description: "3.5K OLED Touch display with Intel Core i9 and NVIDIA RTX 4060 graphics.",
    brand: "Dell",
    rating: 4.6,
    reviews: 420,
    stock: 8,
    inStock: true,
    featured: false,
    specifications: { processor: "i9-13900H", ram: "32GB", storage: "1TB SSD", graphics: "RTX 4060" }
  },
  {
    id: "elec-laptop-003",
    name: "Lenovo ThinkPad X1 Carbon Gen 12",
    category: "electronics",
    subcategory: "laptops",
    price: 1699.99,
    originalPrice: 1899.99,
    image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=500",
    images: [
      "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=500"
    ],
    description: "Business ultrabook with Intel Core Ultra, MIL-STD-810H durability, legendary keyboard, and AI-powered features.",
    brand: "Lenovo",
    rating: 4.8,
    reviews: 523,
    stock: 42,
    inStock: true,
    featured: false,
    specifications: {
      processor: "Intel Core Ultra 7 165U",
      ram: "32GB LPDDR5X",
      storage: "1TB PCIe Gen 4 SSD",
      display: "14-inch WUXGA IPS 1920x1200",
      graphics: "Intel Graphics",
      battery: "Up to 15 hours"
    }
  },
   {
    id: "elec-laptop-004",
    name: "ASUS ROG Zephyrus G16 (2025)",
    category: "electronics",
    subcategory: "laptops",
    price: 2499.99,
    originalPrice: null,
    image: "https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=500",
    images: [
      "https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=500"
    ],
    description: "Premium gaming laptop with Intel Core Ultra 9, NVIDIA RTX 5080, 240Hz OLED display, and sleek aluminum design.",
    brand: "ASUS",
    rating: 4.9,
    reviews: 789,
    stock: 15,
    inStock: true,
    featured: true,
    specifications: {
      processor: "Intel Core Ultra 9 185H",
      ram: "32GB DDR5",
      storage: "2TB PCIe Gen 4 SSD",
      display: "16-inch 2560x1600 OLED 240Hz",
      graphics: "NVIDIA GeForce RTX 5080 16GB",
      battery: "Up to 8 hours productivity"
    }
  },
  {
    id: "elec-laptop-005",
    name: "HP Spectre x360 14 (2025)",
    category: "electronics",
    subcategory: "laptops",
    price: 1499.99,
    originalPrice: 1699.99,
    image: "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=500",
    images: [
      "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=500"
    ],
    description: "Elegant 2-in-1 convertible with Intel Core Ultra, OLED touch display, HP Pen included, and gem-cut design.",
    brand: "HP",
    rating: 4.6,
    reviews: 367,
    stock: 31,
    inStock: true,
    featured: false,
    specifications: {
      processor: "Intel Core Ultra 7 155H",
      ram: "16GB LPDDR5",
      storage: "512GB PCIe Gen 4 SSD",
      display: "13.5-inch 3K2K OLED touch",
      graphics: "Intel Arc integrated",
      battery: "Up to 14 hours"
    }
  },
  {
    id: "elec-laptop-006",
    name: "Microsoft Surface Laptop 7",
    category: "electronics",
    subcategory: "laptops",
    price: 1299.99,
    originalPrice: null,
    image: "https://images.unsplash.com/photo-1484788984921-03950022c9ef?w=500",
    images: [
      "https://images.unsplash.com/photo-1484788984921-03950022c9ef?w=500"
    ],
    description: "Copilot+ PC with Snapdragon X Elite ARM processor, exceptional battery life, PixelSense touchscreen, and Windows 11 AI features.",
    brand: "Microsoft",
    rating: 4.5,
    reviews: 412,
    stock: 38,
    inStock: true,
    featured: false,
    specifications: {
      processor: "Snapdragon X Elite (12 cores)",
      ram: "16GB LPDDR5X",
      storage: "512GB SSD",
      display: "13.8-inch PixelSense 2304x1536 touch",
      graphics: "Qualcomm Adreno integrated",
      battery: "Up to 20 hours"
    }
  },
{
    id: "elec-phone-001",
    name: "Samsung Galaxy S24 Ultra",
    category: "electronics",
    subcategory: "smartphones-tablets",
    price: 1149.99,
    originalPrice: 1299.99,
    image: "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=800",
    description: "Titanium-built flagship with Galaxy AI, 200MP camera, and integrated S-Pen.",
    brand: "Samsung",
    rating: 4.8,
    reviews: 1250,
    stock: 22,
    inStock: true,
    featured: true,
    specifications: { display: "6.8-inch AMOLED", processor: "Snapdragon 8 Gen 3", storage: "512GB", camera: "200MP" }
  },
  {
    id: "elec-phone-002",
    name: "OnePlus 13",
    category: "electronics",
    subcategory: "smartphones-tablets",
    price: 899.99,
    originalPrice: null,
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=500",
    images: [
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=500"
    ],
    description: "Flagship killer with Snapdragon 8 Elite, 6.82-inch 120Hz display, 100W SuperVOOC charging, and Hasselblad camera system.",
    brand: "OnePlus",
    rating: 4.5,
    reviews: 423,
    stock: 41,
    inStock: true,
    featured: false,
    specifications: {
      display: "6.82-inch AMOLED, 120Hz",
      processor: "Snapdragon 8 Elite",
      ram: "12GB",
      storage: "256GB",
      camera: "50MP Wide + 50MP Ultra Wide + 32MP 3x Telephoto",
      battery: "5400mAh, 100W wired + 50W wireless",
      os: "Android 15, OxygenOS 15"
    }
  },
  {
    id: "elec-phone-003",
    name: "Xiaomi 14 Ultra",
    category: "electronics",
    subcategory: "smartphones-tablets",
    price: 1199.99,
    originalPrice: 1299.99,
    image: "https://images.unsplash.com/photo-1580910051074-3eb694886505?w=500",
    images: [
      "https://images.unsplash.com/photo-1580910051074-3eb694886505?w=500"
    ],
    description: "Photography powerhouse with Leica quad-camera system, Snapdragon 8 Gen 3, titanium frame, and variable aperture lens.",
    brand: "Xiaomi",
    rating: 4.7,
    reviews: 334,
    stock: 19,
    inStock: true,
    featured: false,
    specifications: {
      display: "6.73-inch AMOLED, 120Hz",
      processor: "Snapdragon 8 Gen 3",
      ram: "16GB",
      storage: "512GB",
      camera: "50MP Leica Variable Aperture + 50MP Ultra Wide + 50MP 3.2x + 50MP 5x",
      battery: "5300mAh, 90W wired + 80W wireless",
      os: "Android 14, HyperOS"
    }
  },
  {
    id: "elec-phone-004",
    name: "Apple iPhone 16 Pro",
    category: "electronics",
    subcategory: "smartphones-tablets",
    price: 999.99,
    originalPrice: null,
    image: "https://images.unsplash.com/photo-1592286927505-2072425e8a38?w=500",
    images: [
      "https://images.unsplash.com/photo-1592286927505-2072425e8a38?w=500",
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=500"
    ],
    description: "The iPhone 16 Pro features titanium design with A18 Pro chip, 6.3-inch Super Retina XDR display, and advanced 48MP camera system with 5x optical zoom.",
    brand: "Apple",
    rating: 4.8,
    reviews: 1234,
    stock: 45,
    inStock: true,
    featured: true,
    specifications: {
      display: "6.3-inch Super Retina XDR OLED",
      processor: "Apple A18 Pro (3nm)",
      ram: "8GB",
      storage: "256GB",
      camera: "48MP Fusion + 48MP Ultra Wide + 12MP 5x Telephoto",
      battery: "3582mAh, up to 27 hours video playback",
      os: "iOS 18"
    }
  },
  {
    id: "elec-phone-005",
    name: "Samsung Galaxy S25 Ultra",
    category: "electronics",
    subcategory: "smartphones-tablets",
    price: 1299.99,
    originalPrice: null,
    image: "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=500",
    images: [
      "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=500"
    ],
    description: "Samsung's flagship with Snapdragon 8 Elite processor, 6.9-inch Dynamic AMOLED display, 200MP camera, S Pen integration, and Galaxy AI features.",
    brand: "Samsung",
    rating: 4.7,
    reviews: 892,
    stock: 32,
    inStock: true,
    featured: true,
    specifications: {
      display: "6.9-inch Dynamic AMOLED 2X, 120Hz",
      processor: "Snapdragon 8 Elite (3nm)",
      ram: "12GB",
      storage: "256GB",
      camera: "200MP Wide + 50MP Ultra Wide + 10MP 3x + 50MP 5x Telephoto",
      battery: "5000mAh, 45W fast charging",
      os: "Android 15, One UI 7"
    }
  },
  {
    id: "elec-phone-006",
    name: "Google Pixel 9 Pro",
    category: "electronics",
    subcategory: "smartphones-tablets",
    price: 999.99,
    originalPrice: null,
    image: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=500",
    images: [
      "https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=500"
    ],
    description: "Pure Android experience with Google Tensor G4 chip, advanced AI features, exceptional camera with computational photography, and 7 years of updates.",
    brand: "Google",
    rating: 4.6,
    reviews: 567,
    stock: 28,
    inStock: true,
    featured: false,
    specifications: {
      display: "6.3-inch LTPO OLED, 120Hz",
      processor: "Google Tensor G4",
      ram: "12GB",
      storage: "128GB",
      camera: "50MP Wide + 48MP Ultra Wide + 48MP 5x Telephoto",
      battery: "4700mAh, 30W wired charging",
      os: "Android 15"
    }
  },
   {
    id: "elec-audio-001",
    name: "Sony WH-1000XM6",
    category: "electronics",
    subcategory: "audio-headphones",
    price: 399.99,
    originalPrice: null,
    image: "https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=500",
    images: [
      "https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=500"
    ],
    description: "Industry-leading noise cancellation with V2 processor, LDAC Hi-Res audio, 40-hour battery, multipoint connection, and speak-to-chat.",
    brand: "Sony",
    rating: 4.8,
    reviews: 2341,
    stock: 67,
    inStock: true,
    featured: true,
    specifications: {
      type: "Over-ear wireless",
      driver: "40mm dynamic",
      noiseCancel: "Industry-leading ANC with V2 processor",
      battery: "40 hours with ANC, 50 hours without",
      connectivity: "Bluetooth 5.3, LDAC, multipoint",
      features: "Speak-to-chat, adaptive sound control"
    }
  },
  {
    id: "elec-audio-002",
    name: "Apple AirPods Max (2nd Gen)",
    category: "electronics",
    subcategory: "audio-headphones",
    price: 549.99,
    originalPrice: null,
    image: "https://images.unsplash.com/photo-1606841837239-c5a1a4a07af7?w=500",
    images: [
      "https://images.unsplash.com/photo-1606841837239-c5a1a4a07af7?w=500"
    ],
    description: "Premium over-ear headphones with H2 chip, adaptive audio, personalized spatial audio, and USB-C charging.",
    brand: "Apple",
    rating: 4.7,
    reviews: 1567,
    stock: 43,
    inStock: true,
    featured: true,
    specifications: {
      type: "Over-ear wireless",
      driver: "Apple-designed dynamic",
      noiseCancel: "Active Noise Cancellation with H2 chip",
      battery: "20 hours with ANC",
      connectivity: "Bluetooth 5.3, Apple H2 chip",
      features: "Spatial audio, adaptive audio, conversation awareness"
    }
  },
  {
    id: "elec-audio-003",
    name: "Bose QuietComfort Ultra",
    category: "electronics",
    subcategory: "audio-headphones",
    price: 429.99,
    originalPrice: null,
    image: "https://images.unsplash.com/photo-1484704849700-f032a568e944?w=500",
    images: [
      "https://images.unsplash.com/photo-1484704849700-f032a568e944?w=500"
    ],
    description: "Premium comfort with world-class ANC, immersive spatial audio, CustomTune technology, and luxurious materials.",
    brand: "Bose",
    rating: 4.6,
    reviews: 987,
    stock: 51,
    inStock: true,
    featured: false,
    specifications: {
      type: "Over-ear wireless",
      driver: "Proprietary TriPort acoustic",
      noiseCancel: "World-class ANC with CustomTune",
      battery: "24 hours",
      connectivity: "Bluetooth 5.3, multipoint",
      features: "Immersive audio, aware mode, SimpleSync"
    }
  },
  {
    id: "elec-audio-004",
    name: "Sennheiser Momentum 4 Wireless",
    category: "electronics",
    subcategory: "audio-headphones",
    price: 379.99,
    originalPrice: 399.99,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500",
    images: [
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500"
    ],
    description: "Audiophile-grade sound with adaptive ANC, incredible 60-hour battery, foldable design, and hi-res audio support.",
    brand: "Sennheiser",
    rating: 4.7,
    reviews: 734,
    stock: 39,
    inStock: true,
    featured: false,
    specifications: {
      type: "Over-ear wireless",
      driver: "42mm transducer",
      noiseCancel: "Adaptive ANC",
      battery: "60 hours",
      connectivity: "Bluetooth 5.2, aptX Adaptive",
      features: "Hi-Res Audio, Sound Personalization, Wind Noise Reduction"
    }
  },
  {
    id: "elec-audio-005",
    name: "Apple AirPods Pro (3rd Gen)",
    category: "electronics",
    subcategory: "audio-headphones",
    price: 249.99,
    originalPrice: null,
    image: "https://images.unsplash.com/photo-1606841837239-c5a1a4a07af7?w=500",
    images: [
      "https://images.unsplash.com/photo-1606841837239-c5a1a4a07af7?w=500"
    ],
    description: "Premium earbuds with H2 chip, adaptive audio, hearing aid features, personalized spatial audio, and lossless USB-C audio.",
    brand: "Apple",
    rating: 4.8,
    reviews: 3456,
    stock: 89,
    inStock: true,
    featured: true,
    specifications: {
      type: "In-ear wireless",
      driver: "Apple-designed low-distortion",
      noiseCancel: "Active Noise Cancellation with H2 chip",
      battery: "6 hours (30 hours with case)",
      connectivity: "Bluetooth 5.3, H2 chip, USB-C lossless",
      features: "Adaptive audio, conversation awareness, hearing health"
    }
  },
  {
    id: "elec-audio-006",
    name: "JBL Tour One M3",
    category: "electronics",
    subcategory: "audio-headphones",
    price: 349.99,
    originalPrice: 399.99,
    image: "https://images.unsplash.com/photo-1484704849700-f032a568e944?w=500",
    images: [
      "https://images.unsplash.com/photo-1484704849700-f032a568e944?w=500"
    ],
    description: "Premium over-ear with True Adaptive ANC, JBL Spatial 360 audio, 70-hour battery, and aluminum construction.",
    brand: "JBL",
    rating: 4.5,
    reviews: 623,
    stock: 58,
    inStock: true,
    featured: false,
    specifications: {
      type: "Over-ear wireless",
      driver: "40mm dynamic",
      noiseCancel: "True Adaptive Noise Cancelling 2.0",
      battery: "70 hours with ANC off",
      connectivity: "Bluetooth 5.3, LDAC",
      features: "Spatial 360, Personi-Fi 3.0, Smart Talk"
    }
  },
   {
    id: "mens-001",
    name: "Levi's 501 Original Jacket Jeans",
    category: "fashion",
    subcategory: "mens-clothing",
    price: 89.99,
    originalPrice: null,
    image: Jacketjean,
    description: "Iconic straight-leg jeans with button fly, medium wash, 100% cotton denim, and timeless classic fit.",
    brand: "Levi's",
    rating: 4.7,
    reviews: 4567,
    stock: 156,
    inStock: true,
    featured: true,
    specifications: {
      material: "100% Cotton Denim",
      fit: "Original straight fit",
      rise: "Medium rise",
      closure: "Button fly",
      care: "Machine wash cold",
      origin: "Made in multiple countries"
    }
  },
  {
    id: "mens-002",
    name: "Ralph Lauren Trouser",
    category: "fashion",
    subcategory: "mens-clothing",
    price: 58.99,
    originalPrice: null,
    image: trouser,
    description: "Performance Trouser with moisture-wicking Dri-FIT technology, regular fit, and swoosh logo.",
    brand: "Ralph Lauren",
    rating: 4.6,
    reviews: 2345,
    stock: 234,
    inStock: true,
    featured: false,
    specifications: {
      material: "100% Polyester Dri-FIT",
      fit: "Regular fit",
      technology: "Moisture-wicking",
      neckline: "Crew neck",
      care: "Machine washable",
      features: "Quick-dry, breathable"
    }
  },
  {
    id: "mens-003",
    name: "Ralph Lauren Oxford Shirt",
    category: "fashion",
    subcategory: "mens-clothing",
    price: 98.99,
    originalPrice: null,
    image: Shirt,
    description: "Classic button-down Oxford shirt in 100% cotton, slim fit, iconic pony logo, and perfect for business casual.",
    brand: "Ralph Lauren",
    rating: 4.8,
    reviews: 1892,
    stock: 87,
    inStock: true,
    featured: true,
    specifications: {
      material: "100% Cotton Oxford",
      fit: "Slim fit",
      collar: "Button-down",
      sleeves: "Long sleeve",
      care: "Machine wash warm",
      details: "Signature pony embroidery"
    }
  },
  {
    id: "mens-004",
    name: "Patagonia Better Sweater",
    category: "fashion",
    subcategory: "mens-clothing",
    price: 139.99,
    originalPrice: null,
    image: sweater,
    description: "Sustainable quarter-zip fleece made from recycled polyester, Fair Trade Certified, durable water repellent finish.",
    brand: "Patagonia",
    rating: 4.9,
    reviews: 3421,
    stock: 64,
    inStock: true,
    featured: true,
    specifications: {
      material: "100% Recycled polyester fleece",
      fit: "Regular fit",
      features: "DWR finish, wind-resistant",
      zipper: "Quarter-zip",
      sustainability: "Fair Trade Certified, bluesign approved",
      pockets: "Zippered hand pockets"
    }
  },
  {
    id: "mens-005",
    name: "Carhartt Insulated Work Jacket",
    category: "fashion",
    subcategory: "mens-clothing",
    price: 179.99,
    originalPrice: 199.99,
    image: jacket,
    description: "Rugged duck canvas jacket with quilted lining, triple-stitched seams, corduroy collar, and multiple tool pockets.",
    brand: "Carhartt",
    rating: 4.8,
    reviews: 5678,
    stock: 92,
    inStock: true,
    featured: false,
    specifications: {
      material: "12-ounce firm-hand duck canvas",
      lining: "Quilted-flannel with polyester insulation",
      fit: "Original fit",
      pockets: "Multiple interior and exterior",
      durability: "Triple-stitched main seams",
      collar: "Corduroy-trimmed"
    }
  },
   {
    id: "mens-006",
    name: "High Fahion Jacket",
    category: "fashion",
    subcategory: "mens-clothing",
    price: 169.99,
    originalPrice: 179.99,
    image: teamJac,
    description: "Rugged duck canvas jacket, triple-stitched seams, corduroy collar, and multiple tool pockets.",
    brand: "Carhartt",
    rating: 4.8,
    reviews: 5678,
    stock: 92,
    inStock: true,
    featured: false,
    specifications: {
      material: "12-ounce firm-hand duck canvas",
      lining: "Quilted-flannel with polyester insulation",
      fit: "Original fit",
      pockets: "Multiple interior and exterior",
      durability: "Triple-stitched main seams",
      collar: "Corduroy-trimmed"
    }
  },
  {
    id: "mens-007",
    name: "Adidas Tiro 24 Training Pants",
    category: "fashion",
    subcategory: "mens-clothing",
    price: 49.99,
    originalPrice: null,
    image: blueMerch,
    description: "Athletic track pants with AEROREADY moisture management, tapered fit, ankle zips, and signature 3-stripes.",
    brand: "Adidas",
    rating: 4.7,
    reviews: 3156,
    stock: 178,
    inStock: true,
    featured: false,
    specifications: {
      material: "100% Recycled polyester doubleknit",
      fit: "Tapered fit",
      technology: "AEROREADY moisture management",
      pockets: "Zip side pockets",
      features: "Ankle zips, elastic waist with drawcord",
      sustainability: "Made with recycled materials"
    }
  },

  // ==================== FASHION - WOMEN'S CLOTHING (6 products) ====================
  {
    id: "womens-001",
    name: "Lululemon Align High-Rise Pant 28\"",
    category: "fashion",
    subcategory: "womens-clothing",
    price: 108.00,
    originalPrice: null,
    image: "https://images.unsplash.com/photo-1506629082955-511b1aa562c8?w=500",
    images: [
      "https://images.unsplash.com/photo-1506629082955-511b1aa562c8?w=500"
    ],
    description: "Buttery-soft yoga pants in Nulu fabric, high-rise waistband, no-dig waistband, and four-way stretch for yoga and lounging.",
    brand: "Lululemon",
    rating: 4.9,
    reviews: 8934,
    stock: 245,
    inStock: true,
    featured: true,
    specifications: {
      material: "Nulu fabric (81% Nylon, 19% Lycra Elastane)",
      fit: "High-rise, full length 28\"",
      features: "Buttery-soft, weightless, four-way stretch",
      waistband: "Streamlined high-rise",
      pockets: "Hidden waistband pocket",
      care: "Machine wash cold"
    }
  },
  {
    id: "womens-002",
    name: "Zara Tailored Blazer",
    category: "fashion",
    subcategory: "womens-clothing",
    price: 129.00,
    originalPrice: null,
    image: "https://images.unsplash.com/photo-1591369822096-ffd140ec948f?w=500",
    images: [
      "https://images.unsplash.com/photo-1591369822096-ffd140ec948f?w=500"
    ],
    description: "Modern double-breasted blazer with structured shoulders, peak lapels, front welt pockets, and fully lined interior.",
    brand: "Zara",
    rating: 4.6,
    reviews: 1567,
    stock: 73,
    inStock: true,
    featured: true,
    specifications: {
      material: "63% Polyester, 33% Viscose, 4% Elastane",
      fit: "Regular fit, structured",
      closure: "Double-breasted buttons",
      details: "Peak lapels, shoulder pads",
      lining: "Full polyester lining",
      care: "Dry clean recommended"
    }
  },
  {
    id: "womens-003",
    name: "Madewell Perfect Vintage Jean",
    category: "fashion",
    subcategory: "womens-clothing",
    price: 138.00,
    originalPrice: null,
    image: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=500",
    images: [
      "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=500"
    ],
    description: "Authentic vintage-inspired straight-leg jeans with high rise, non-stretch denim, and lived-in wash.",
    brand: "Madewell",
    rating: 4.7,
    reviews: 2456,
    stock: 134,
    inStock: true,
    featured: false,
    specifications: {
      material: "100% Cotton rigid denim",
      fit: "High-rise straight leg",
      rise: "11\" front rise, 14.5\" back rise",
      inseam: "28\" inseam",
      closure: "Button fly",
      care: "Machine wash cold, tumble dry low"
    }
  },
  {
    id: "womens-004",
    name: "Everlane Cashmere Crew Sweater",
    category: "fashion",
    subcategory: "womens-clothing",
    price: 148.00,
    originalPrice: null,
    image: "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=500",
    images: [
      "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=500"
    ],
    description: "Premium Grade-A cashmere sweater, sustainably sourced from Inner Mongolia, ribbed trim, and timeless crew neck.",
    brand: "Everlane",
    rating: 4.8,
    reviews: 3421,
    stock: 56,
    inStock: true,
    featured: true,
    specifications: {
      material: "100% Grade-A Mongolian Cashmere",
      fit: "Relaxed fit",
      details: "Ribbed crew neck, cuffs, and hem",
      weight: "2-ply lightweight",
      care: "Dry clean or hand wash cold",
      sustainability: "Ethically sourced, carbon neutral"
    }
  },
  {
    id: "womens-005",
    name: "Aritzia SuperPuff Shorty Jacket",
    category: "fashion",
    subcategory: "womens-clothing",
    price: 248.00,
    originalPrice: null,
    image: "https://images.unsplash.com/photo-1539533018447-63fcce2678e3?w=500",
    images: [
      "https://images.unsplash.com/photo-1539533018447-63fcce2678e3?w=500"
    ],
    description: "Ultra-warm cropped puffer with premium goose-down fill, water-repellent finish, and signature glossy fabric.",
    brand: "Aritzia",
    rating: 4.9,
    reviews: 6789,
    stock: 41,
    inStock: true,
    featured: true,
    specifications: {
      material: "100% Nylon shell with DWR finish",
      insulation: "Premium 750-fill Canadian white goose down",
      fit: "Cropped length, regular fit",
      features: "Oversized hood, interior pockets",
      closure: "Two-way zipper with snap placket",
      warmth: "Rated for -22°F to 14°F"
    }
  },
  {
    id: "womens-006",
    name: "H&M Linen Blend Midi Dress",
    category: "fashion",
    subcategory: "womens-clothing",
    price: 49.99,
    originalPrice: 69.99,
    image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=500",
    images: [
      "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=500"
    ],
    description: "Breezy summer dress in sustainable linen blend, smocked bodice, adjustable straps, and flowy midi-length skirt.",
    brand: "H&M",
    rating: 4.5,
    reviews: 1234,
    stock: 189,
    inStock: true,
    featured: false,
    specifications: {
      material: "55% Linen, 45% Viscose",
      fit: "Relaxed fit, midi length",
      details: "Smocked bodice, adjustable straps",
      closure: "Pull-on style",
      care: "Machine wash warm",
      sustainability: "LENZING ECOVERO viscose"
    }
  },

  // ==================== FASHION - SHOES (6 products) ====================
  {
    id: "shoes-001",
    name: "Nike Air Max 270",
    category: "fashion",
    subcategory: "shoes",
    price: 159.99,
    originalPrice: null,
    image: casual,
    description: "Iconic lifestyle sneaker with large Max Air unit, mesh upper with synthetic overlays, and all-day comfort.",
    brand: "Nike",
    rating: 4.7,
    reviews: 5678,
    stock: 234,
    inStock: true,
    featured: true,
    specifications: {
      material: "Mesh and synthetic upper",
      cushioning: "Max Air 270 unit",
      sole: "Rubber outsole with waffle pattern",
      fit: "True to size",
      weight: "Approximately 11.5 oz (men's size 10)",
      style: "Lifestyle/casual"
    }
  },
  {
    id: "shoes-002",
    name: "Adidas Ultraboost Light",
    category: "fashion",
    subcategory: "shoes",
    price: 190.00,
    originalPrice: null,
    image: adidas,
    description: "Premium running shoe with lightest Boost midsole ever, Primeknit+ upper, Continental rubber outsole, and 30% lighter design.",
    brand: "Adidas",
    rating: 4.8,
    reviews: 3456,
    stock: 156,
    inStock: true,
    featured: true,
    specifications: {
      material: "Primeknit+ textile upper",
      cushioning: "Light Boost midsole (30% lighter)",
      sole: "Continental rubber outsole",
      support: "Torsion System for midfoot stability",
      weight: "8.9 oz (men's size 9)",
      sustainability: "Made with recycled materials"
    }
  },
  {
    id: "shoes-003",
    name: "Converse Chuck Taylor All Star",
    category: "fashion",
    subcategory: "shoes",
    price: 65.00,
    originalPrice: null,
    image: sneak,
    description: "Timeless high-top sneaker with canvas upper, rubber toe cap, ankle patch logo, and iconic vulcanized sole.",
    brand: "Converse",
    rating: 4.5,
    reviews: 12345,
    stock: 456,
    inStock: true,
    featured: false,
    specifications: {
      material: "100% Canvas upper",
      sole: "Vulcanized rubber",
      closure: "Lace-up",
      ankle: "High-top cut",
      details: "Rubber toe cap, ankle patch",
      care: "Spot clean"
    }
  },
  {
    id: "shoes-004",
    name: "Dr. Martens 1460 Boot",
    category: "fashion",
    subcategory: "shoes",
    price: 179.99,
    originalPrice: null,
    image: Boot,
    description: "Iconic 8-eye boot in smooth leather, Goodyear welt construction, AirWair sole, yellow welt stitching, and heel loop.",
    brand: "Dr. Martens",
    rating: 4.8,
    reviews: 6789,
    stock: 123,
    inStock: true,
    featured: true,
    specifications: {
      material: "Smooth full-grain leather",
      construction: "Goodyear welt (heat-sealed and sewn)",
      sole: "AirWair slip-resistant",
      hardware: "8 eyelets, yellow welt stitching",
      breakin: "Requires break-in period",
      care: "Polish with Dr. Martens Wonder Balsam"
    }
  },
  {
    id: "shoes-005",
    name: "New Balance 990v6",
    category: "fashion",
    subcategory: "shoes",
    price: 199.99,
    originalPrice: null,
    image: classic,
    description: "Heritage high fahion shoe made in USA with premium pigskin and mesh, FuelCell cushioning, and ENCAP midsole technology.",
    brand: "New Balance",
    rating: 4.9,
    reviews: 2345,
    stock: 78,
    inStock: true,
    featured: true,
    specifications: {
      material: "Pigskin and mesh upper",
      cushioning: "FuelCell midsole",
      support: "ENCAP midsole technology",
      sole: "Blown rubber outsole",
      made: "Made in USA with imported materials",
      weight: "12.3 oz (men's size 9)"
    }
  },
  {
    id: "shoes-006",
    name: "Allbirds Tree Dasher 2",
    category: "fashion",
    subcategory: "shoes",
    price: 135.00,
    originalPrice: null,
    image: allbirds,
    description: "Sustainable performance running shoe with eucalyptus tree fiber upper, responsive SweetFoam midsole, carbon-neutral production.",
    brand: "Allbirds",
    rating: 3.5,
    reviews: 1567,
    stock: 167,
    inStock: true,
    featured: false,
    specifications: {
      material: "Eucalyptus tree fiber upper",
      cushioning: "SweetFoam (sugarcane-based EVA)",
      sole: "Natural rubber outsole",
      laces: "Recycled polyester",
      sustainability: "Carbon neutral, machine washable",
      weight: "8.9 oz (men's size 9)"
    }
  },

  // ==================== FASHION - ACCESSORIES (6 products) ====================
  {
    id: "access-001",
    name: "Ray-Ban Wayfarer Classic Sunglasses",
    category: "fashion",
    subcategory: "accessories",
    price: 183.00,
    originalPrice: null,
    image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=500",
    images: [
      "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=500"
    ],
    description: "Iconic acetate frame sunglasses with G-15 green lenses, 100% UV protection, and timeless design since 1952.",
    brand: "Ray-Ban",
    rating: 4.8,
    reviews: 8934,
    stock: 234,
    inStock: true,
    featured: true,
    specifications: {
      frame: "Acetate",
      lens: "Glass G-15 green, 54mm width",
      protection: "100% UV protection",
      dimensions: "54-18-150mm (lens-bridge-temple)",
      features: "Adjustable nose pads, metal hinges",
      includes: "Case and cleaning cloth"
    }
  },
  {
    id: "access-002",
    name: "Fossil Gen 6 Smartwatch",
    category: "fashion",
    subcategory: "accessories",
    price: 299.00,
    originalPrice: null,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500",
    images: [
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500"
    ],
    description: "Stylish Wear OS smartwatch with heart rate, SpO2, GPS, customizable dials, and rapid charging.",
    brand: "Fossil",
    rating: 4.5,
    reviews: 2345,
    stock: 89,
    inStock: true,
    featured: false,
    specifications: {
      os: "Wear OS by Google",
      display: "1.28\" AMOLED touchscreen",
      processor: "Snapdragon Wear 4100+",
      sensors: "Heart rate, SpO2, GPS, altimeter",
      battery: "24+ hours, 80% in 30 minutes",
      compatibility: "iOS and Android"
    }
  },
  {
    id: "access-003",
    name: "Herschel Supply Co. Little America Backpack",
    category: "fashion",
    subcategory: "accessories",
    price: 119.99,
    originalPrice: null,
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500",
    images: [
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500"
    ],
    description: "Modern take on mountaineering pack with 25L capacity, padded laptop sleeve, striped lining, and magnetic strap closures.",
    brand: "Herschel",
    rating: 4.7,
    reviews: 4567,
    stock: 178,
    inStock: true,
    featured: true,
    specifications: {
      capacity: "25 liters",
      material: "Polyester with synthetic leather",
      laptop: "Padded 15\" laptop sleeve",
      pockets: "Front pocket, internal media pocket",
      straps: "Padded contoured shoulder straps",
      dimensions: "19.5\" H x 11.5\" W x 7\" D"
    }
  },
  {
    id: "access-004",
    name: "Kate Spade Morgan Leather Satchel",
    category: "fashion",
    subcategory: "accessories",
    price: 398.00,
    originalPrice: null,
    image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=500",
    images: [
      "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=500"
    ],
    description: "Structured leather satchel with detachable crossbody strap, interior pockets, and signature spade hardware.",
    brand: "Kate Spade",
    rating: 4.8,
    reviews: 1892,
    stock: 45,
    inStock: true,
    featured: true,
    specifications: {
      material: "Pebbled leather",
      closure: "Zipper top",
      straps: "Double handles + detachable crossbody",
      pockets: "Interior zip and slip pockets",
      dimensions: "12.2\" W x 9.5\" H x 5.5\" D",
      hardware: "Gold-tone"
    }
  },
  {
    id: "access-005",
    name: "Casio G-Shock GA-2100 Watch",
    category: "fashion",
    subcategory: "accessories",
    price: 99.00,
    originalPrice: null,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500",
    images: [
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500"
    ],
    description: "Ultra-slim octagonal case with Carbon Core Guard, 200m water resistance, world time, and LED illumination.",
    brand: "Casio",
    rating: 4.9,
    reviews: 6789,
    stock: 267,
    inStock: true,
    featured: true,
    specifications: {
      case: "Carbon Core Guard, 45.4mm",
      water: "200-meter water resistance",
      features: "World time, stopwatch, countdown timer",
      battery: "3 years",
      display: "Analog-digital",
      shock: "Shock resistant"
    }
  },
  {
    id: "access-006",
    name: "Patagonia Nano Puff Scarf",
    category: "fashion",
    subcategory: "accessories",
    price: 79.00,
    originalPrice: null,
    image: "https://images.unsplash.com/photo-1520903920243-00d872a2d1c9?w=500",
    images: [
      "https://images.unsplash.com/photo-1520903920243-00d872a2d1c9?w=500"
    ],
    description: "Insulated recycled nylon scarf with 60-g PrimaLoft insulation, packable design, and Fair Trade Certified sewing.",
    brand: "Patagonia",
    rating: 4.7,
    reviews: 1234,
    stock: 156,
    inStock: true,
    featured: false,
    specifications: {
      material: "100% Recycled nylon ripstop",
      insulation: "60-g PrimaLoft Gold Insulation Eco",
      dimensions: "70\" x 10\"",
      features: "Packable, DWR finish",
      care: "Machine wash cold",
      sustainability: "Fair Trade Certified, bluesign approved"
    }
  },

  // ==================== OUTDOOR & SPORTS - CAMPING (6 products) ====================
  {
    id: "outdoor-camp-001",
    name: "REI Co-op Quarter Dome SL 2 Tent",
    category: "sports-outdoors",
    subcategory: "camping",
    price: 449.95,
    originalPrice: null,
    image: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=500",
    images: [
      "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=500"
    ],
    description: "Ultralight 2-person backpacking tent with double-wall design, two vestibules, color-coded clips, and weighs just 3 lbs 2 oz.",
    brand: "REI Co-op",
    rating: 4.7,
    reviews: 1567,
    stock: 34,
    inStock: true,
    featured: true,
    specifications: {
      capacity: "2-person",
      weight: "3 lbs 2 oz (minimum trail weight)",
      dimensions: "88\" x 52/44\" x 40\"",
      materials: "20D nylon ripstop fly and floor",
      poles: "DAC Featherlite NSL aluminum",
      features: "Two vestibules, two doors, color-coded setup"
    }
  },
  {
    id: "outdoor-camp-002",
    name: "Yeti Tundra 45 Hard Cooler",
    category: "sports-outdoors",
    subcategory: "camping",
    price: 349.99,
    originalPrice: null,
    image: "https://images.unsplash.com/photo-1576023079481-ca53d24b8e7f?w=500",
    images: [
      "https://images.unsplash.com/photo-1576023079481-ca53d24b8e7f?w=500"
    ],
    description: "Rotomolded cooler with 3\" insulation, bear-resistant, T-Rex Lid Latches, holds 26 cans, and certified grizzly-proof.",
    brand: "Yeti",
    rating: 4.9,
    reviews: 3456,
    stock: 67,
    inStock: true,
    featured: true,
    specifications: {
      capacity: "28 quarts (26 cans with 2:1 ice ratio)",
      weight: "23 lbs empty",
      dimensions: "25.5\" x 16\" x 15.5\"",
      insulation: "3\" PermaFrost insulation",
      features: "T-Rex Lid Latches, bear-resistant",
      ice: "Holds ice for days"
    }
  },
  {
    id: "outdoor-camp-003",
    name: "Coleman Camping Chair with Side Table",
    category: "sports-outdoors",
    subcategory: "camping",
    price: 39.99,
    originalPrice: null,
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500",
    images: [
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500"
    ],
    description: "Folding camp chair with built-in cooler, side table with cup holder, supports up to 325 lbs, and includes carry bag.",
    brand: "Coleman",
    rating: 4.6,
    reviews: 5678,
    stock: 234,
    inStock: true,
    featured: false,
    specifications: {
      capacity: "325 lbs",
      dimensions: "24\" x 24\" x 38.2\"",
      cooler: "Built-in 4-can cooler",
      features: "Side table, cup holder, armrests",
      material: "Steel frame, polyester fabric",
      storage: "Folds flat, includes carry bag"
    }
  },
  {
    id: "outdoor-camp-004",
    name: "Black Diamond Storm 500-R Headlamp",
    category: "sports-outdoors",
    subcategory: "camping",
    price: 49.95,
    originalPrice: null,
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=500",
    images: [
      "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=500"
    ],
    description: "Rechargeable 500-lumen headlamp with red night vision mode, IPX67 waterproof, PowerTap dimming, and USB-C charging.",
    brand: "Black Diamond",
    rating: 4.8,
    reviews: 2345,
    stock: 178,
    inStock: true,
    featured: true,
    specifications: {
      lumens: "500 lumens max",
      range: "100 meters",
      battery: "Rechargeable 1800mAh",
      runtime: "4 hours on high, 200 hours on low",
      waterproof: "IPX67 (1m submersion for 30 min)",
      modes: "Proximity, distance, red night vision"
    }
  },
  {
    id: "outdoor-camp-005",
    name: "MSR PocketRocket 2 Camping Stove",
    category: "sports-outdoors",
    subcategory: "camping",
    price: 49.95,
    originalPrice: null,
    image: "https://images.unsplash.com/photo-1504851149312-7a075b496cc7?w=500",
    images: [
      "https://images.unsplash.com/photo-1504851149312-7a075b496cc7?w=500"
    ],
    description: "Ultralight canister stove weighing 2.6 oz, boils 1L in 3.5 minutes, windproof burner, and fits in pocket.",
    brand: "MSR",
    rating: 4.9,
    reviews: 4567,
    stock: 123,
    inStock: true,
    featured: true,
    specifications: {
      weight: "2.6 oz (73g)",
      boilTime: "3.5 minutes for 1 liter",
      output: "8,200 BTU/h",
      fuel: "Isobutane-propane canister (sold separately)",
      dimensions: "2 x 2 x 3.3\" (packed)",
      features: "Windproof burner, pot supports"
    }
  },
  {
    id: "outdoor-camp-006",
    name: "Therm-a-Rest Z Lite Sol Sleeping Pad",
    category: "sports-outdoors",
    subcategory: "camping",
    price: 54.95,
    originalPrice: null,
    image: "https://images.unsplash.com/photo-1487730116645-74489c95b41b?w=500",
    images: [
      "https://images.unsplash.com/photo-1487730116645-74489c95b41b?w=500"
    ],
    description: "Closed-cell foam pad with accordion fold, R-value 2.6, reflective ThermaCapture surface, virtually indestructible.",
    brand: "Therm-a-Rest",
    rating: 4.7,
    reviews: 3421,
    stock: 156,
    inStock: true,
    featured: false,
    specifications: {
      rValue: "2.6 (3-season)",
      weight: "14 oz (Regular)",
      dimensions: "72\" x 20\" x 0.75\" (Regular)",
      material: "Closed-cell foam",
      features: "ThermaCapture reflective surface, accordion fold",
      warranty: "Lifetime"
    }
  },

  // ==================== OUTDOOR & SPORTS - FITNESS (6 products) ====================
  {
    id: "outdoor-fit-001",
    name: "Bowflex SelectTech 552 Adjustable Dumbbells",
    category: "Sport-outdoors",
    subcategory: "fitness",
    price: 399.00,
    originalPrice: null,
    image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=500",
    images: [
      "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=500"
    ],
    description: "Space-saving dumbbells that replace 15 sets, adjustable from 5 to 52.5 lbs with dial system, includes storage tray.",
    brand: "Bowflex",
    rating: 4.7,
    reviews: 8934,
    stock: 45,
    inStock: true,
    featured: true,
    specifications: {
      weightRange: "5 to 52.5 lbs per dumbbell",
      increments: "2.5 lbs (first 25 lbs), 5 lbs (after)",
      replaces: "15 sets of weights",
      dimensions: "15.75\" L x 8\" W x 9\" H (per dumbbell)",
      adjustment: "Dial system (select weight and lift)",
      warranty: "2 years"
    }
  },
  {
    id: "outdoor-fit-002",
    name: "Garmin Forerunner 965 GPS Watch",
    category: "sports-outdoors",
    subcategory: "fitness",
    price: 599.99,
    originalPrice: null,
    image: "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?w=500",
    images: [
      "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?w=500"
    ],
    description: "Premium running watch with AMOLED display, multi-band GPS, training readiness, HRV status, and 23-day battery.",
    brand: "Garmin",
    rating: 4.9,
    reviews: 2345,
    stock: 67,
    inStock: true,
    featured: true,
    specifications: {
      display: "1.4\" AMOLED touchscreen 454x454",
      battery: "23 days smartwatch, 31 hours GPS",
      gps: "Multi-band GNSS (GPS, GLONASS, Galileo)",
      sensors: "Optical HR, Pulse Ox, compass, altimeter",
      features: "Training readiness, HRV status, race predictor",
      sports: "Running, cycling, swimming, triathlon+"
    }
  },
  {
    id: "outdoor-fit-003",
    name: "Manduka PRO Yoga Mat",
    category: "sports-outdoors",
    subcategory: "fitness",
    price: 128.00,
    originalPrice: null,
    image: "https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?w=500",
    images: [
      "https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?w=500"
    ],
    description: "Professional 6mm thick mat with closed-cell surface, lifetime guarantee, dense cushioning, and eco-friendly PVC.",
    brand: "Manduka",
    rating: 4.8,
    reviews: 5678,
    stock: 134,
    inStock: true,
    featured: false,
    specifications: {
      thickness: "6mm",
      dimensions: "71\" x 26\"",
      weight: "7.5 lbs",
      material: "PVC (free of toxic plasticizers)",
      features: "Closed-cell, moisture-resistant, lifetime warranty",
      care: "Wipe with damp cloth"
    }
  },
  {
    id: "outdoor-fit-004",
    name: "TRX Home2 Suspension Training System",
    category: "sports-outdoors",
    subcategory: "fitness",
    price: 169.95,
    originalPrice: null,
    image: "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=500",
    images: [
      "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=500"
    ],
    description: "Bodyweight training straps with door and wall anchors, adjustable foot cradles, includes 35+ workouts and app access.",
    brand: "TRX",
    rating: 4.7,
    reviews: 3456,
    stock: 89,
    inStock: true,
    featured: true,
    specifications: {
      weight: "2 lbs",
      userCapacity: "Up to 350 lbs",
      length: "Adjustable up to 7 feet",
      anchors: "Door and wall mount included",
      handles: "Comfortable rubber grips",
      includes: "8-week workout plan, app access"
    }
  },
  {
    id: "outdoor-fit-005",
    name: "Theragun Pro (5th Gen)",
    category: "sports-outdoors",
    subcategory: "fitness",
    price: 599.00,
    originalPrice: null,
    image: "https://images.unsplash.com/photo-1611016186353-9af58c69a533?w=500",
    images: [
      "https://images.unsplash.com/photo-1611016186353-9af58c69a533?w=500"
    ],
    description: "Professional percussive therapy device with rotating arm, OLED screen, 60 lbs force, QuietForce, and 6 attachments.",
    brand: "Therabody",
    rating: 4.8,
    reviews: 2345,
    stock: 56,
    inStock: true,
    featured: true,
    specifications: {
      force: "60 lbs without stalling",
      amplitude: "16mm",
      speeds: "5 built-in speeds (1750-2400 PPM)",
      battery: "150 minutes per charge",
      noise: "QuietForce technology",
      features: "Rotating arm, OLED screen, Bluetooth"
    }
  },
  {
    id: "outdoor-fit-006",
    name: "Concept2 RowErg Rowing Machine",
    category: "sports-outdoors",
    subcategory: "fitness",
    price: 1245.00,
    originalPrice: null,
    image: "https://images.unsplash.com/photo-1590487988256-9ed24133863e?w=500",
    images: [
      "https://images.unsplash.com/photo-1590487988256-9ed24133863e?w=500"
    ],
    description: "Commercial-quality rower with PM5 monitor, air resistance, separates for storage, used by Olympians and CrossFit athletes.",
    brand: "Concept2",
    rating: 4.9,
    reviews: 6789,
    stock: 23,
    inStock: true,
    featured: true,
    specifications: {
      resistance: "Air resistance (flywheel)",
      monitor: "PM5 Performance Monitor",
      userCapacity: "500 lbs",
      dimensions: "96\" x 24\" (in use), 25\" x 33\" (stored)",
      chain: "Nickel-plated chain",
      warranty: "5 years frame, 2 years parts"
    }
  },

  // ==================== OUTDOOR & SPORTS - CYCLING (6 products) ====================
  {
    id: "outdoor-cycle-001",
    name: "Giro Syntax MIPS 2.0 Helmet",
    category: "sports-outdoors",
    subcategory: "cycling",
    price: 149.95,
    originalPrice: null,
    image: "https://images.unsplash.com/photo-1557296387-5358ad7997bb?w=500",
    images: [
      "https://images.unsplash.com/photo-1557296387-5358ad7997bb?w=500"
    ],
    description: "Road cycling helmet with MIPS Spherical protection, 25 vents, Roc Loc 5 Air fit system, and weighs just 270g.",
    brand: "Giro",
    rating: 4.8,
    reviews: 1234,
    stock: 156,
    inStock: true,
    featured: true,
    specifications: {
      safety: "MIPS Spherical technology",
      weight: "270g (size medium)",
      vents: "25 Wind Tunnel vents",
      fitSystem: "Roc Loc 5 Air with 3-way adjustment",
      sizes: "S, M, L",
      certification: "CPSC, CE EN1078"
    }
  },
  {
    id: "outdoor-cycle-002",
    name: "Shimano Ultegra Di2 Groupset",
    category: "sports-outdoors",
    subcategory: "cycling",
    price: 2299.99,
    originalPrice: null,
    image: "https://images.unsplash.com/photo-1507035895480-2b3156c31fc8?w=500",
    images: [
      "https://images.unsplash.com/photo-1507035895480-2b3156c31fc8?w=500"
    ],
    description: "Electronic 12-speed road groupset with wireless shifting, hydraulic disc brakes, semi-wireless option, performance-level components.",
    brand: "Shimano",
    rating: 4.9,
    reviews: 456,
    stock: 12,
    inStock: true,
    featured: true,
    specifications: {
      speeds: "12-speed (11-30T cassette)",
      shifting: "Electronic Di2, wireless option",
      brakes: "Hydraulic disc (160/140mm rotors)",
      crankset: "52/36T or 50/34T options",
      battery: "500km per charge",
      features: "Auto-trim, Synchro shift, Multi-shift"
    }
  },
  {
    id: "outdoor-cycle-003",
    name: "Wahoo KICKR CORE Smart Trainer",
    category: "sports-outdoors",
    subcategory: "cycling",
    price: 899.99,
    originalPrice: 999.99,
    image: "https://images.unsplash.com/photo-1517649763962-0c623066013b?w=500",
    images: [
      "https://images.unsplash.com/photo-1517649763962-0c623066013b?w=500"
    ],
    description: "Direct-drive smart trainer with 1800W max resistance, simulates 16% grades, +/-1% accuracy, compatible with all apps.",
    brand: "Wahoo",
    rating: 4.8,
    reviews: 2345,
    stock: 34,
    inStock: true,
    featured: true,
    specifications: {
      power: "Up to 1800W max resistance",
      gradient: "Simulates up to 16%",
      accuracy: "+/-1% power accuracy",
      flywheel: "12 lbs",
      connectivity: "ANT+, Bluetooth, ANT+ FE-C",
      compatible: "Zwift, TrainerRoad, Sufferfest, all major apps"
    }
  },
  {
    id: "outdoor-cycle-004",
    name: "Continental Grand Prix 5000 S TR Tires",
    category: "sports-outdoors",
    subcategory: "cycling",
    price: 89.99,
    originalPrice: null,
    image: "https://images.unsplash.com/photo-1485965120184-e220f721d03e?w=500",
    images: [
      "https://images.unsplash.com/photo-1485965120184-e220f721d03e?w=500"
    ],
    description: "Top-rated tubeless-ready road tire with Black Chili compound, Active Comfort Technology, puncture protection, and low rolling resistance.",
    brand: "Continental",
    rating: 4.9,
    reviews: 3456,
    stock: 234,
    inStock: true,
    featured: false,
    specifications: {
      size: "700x25c (also available in 28c, 30c, 32c)",
      type: "Tubeless Ready",
      compound: "Black Chili",
      tpi: "330 TPI",
      weight: "240g (25mm)",
      features: "Lazer Grip, Active Comfort, Vectran breaker"
    }
  },
  {
    id: "outdoor-cycle-005",
    name: "Pearl Izumi Quest Bib Shorts",
    category: "sports-outdoors",
    subcategory: "cycling",
    price: 139.99,
    originalPrice: null,
    image: "https://images.unsplash.com/photo-1530491377426-f4d971c21b9c?w=500",
    images: [
      "https://images.unsplash.com/photo-1530491377426-f4d971c21b9c?w=500"
    ],
    description: "Performance cycling bibs with Elite Escape 1:1 chamois, BioViz reflectivity, silicone leg grippers, and 4-way stretch.",
    brand: "Pearl Izumi",
    rating: 4.7,
    reviews: 1567,
    stock: 178,
    inStock: true,
    featured: false,
    specifications: {
      chamois: "Elite Escape 1:1 Chamois (dual-density)",
      material: "SELECT Transfer fabric (UPF 50+)",
      straps: "Mesh bib straps",
      legGrippers: "Silicone with BioViz reflectivity",
      sizes: "XS to XXL",
      features: "Flatlock seams, 4-way stretch"
    }
  },
  {
    id: "outdoor-cycle-006",
    name: "Garmin Edge 1040 Solar GPS",
    category: "sports-outdoors",
    subcategory: "cycling",
    price: 749.99,
    originalPrice: null,
    image: "https://images.unsplash.com/photo-1575408264798-b50b252663e6?w=500",
    images: [
      "https://images.unsplash.com/photo-1575408264798-b50b252663e6?w=500"
    ],
    description: "Premium cycling computer with solar charging, multi-band GNSS, stamina insights, ClimbPro, 100-hour battery.",
    brand: "Garmin",
    rating: 4.8,
    reviews: 892,
    stock: 45,
    inStock: true,
    featured: true,
    specifications: {
      display: "3.5\" touchscreen (76.8mm diagonal)",
      battery: "100 hours with solar, 45 hours GPS only",
      gps: "Multi-band GNSS with SatIQ",
      maps: "Preloaded worldwide cycling maps",
      features: "ClimbPro, stamina, power guide, training readiness",
      connectivity: "ANT+, Bluetooth, Wi-Fi"
    }
  },

  // ==================== OUTDOOR & SPORTS - WATER SPORTS (6 products) ====================
  {
    id: "outdoor-water-001",
    name: "O'Neill Hyperfreak 3/2mm Wetsuit",
    category: "sports-outdoors",
    subcategory: "water-sports",
    price: 329.99,
    originalPrice: null,
    image: "https://images.unsplash.com/photo-1528479439878-d6b7c00e6e88?w=500",
    images: [
      "https://images.unsplash.com/photo-1528479439878-d6b7c00e6e88?w=500"
    ],
    description: "High-performance surfing wetsuit with TB3X neoprene, seamless paddle zones, minimal water entry, and ultra-flexible.",
    brand: "O'Neill",
    rating: 4.8,
    reviews: 1234,
    stock: 67,
    inStock: true,
    featured: true,
    specifications: {
      thickness: "3/2mm",
      material: "TB3X TechnoButter neoprene",
      seams: "GBS (Glued and Blind Stitched)",
      entry: "Chest zip",
      features: "Seamless paddle zones, F.U.Z.E. entry system",
      waterTemp: "58-68°F (14-20°C)"
    }
  },
  {
    id: "outdoor-water-002",
    name: "Aqua Marina Beast Inflatable SUP",
    category: "sports-outdoors",
    subcategory: "water-sports",
    price: 449.99,
    originalPrice: null,
    image: "https://images.unsplash.com/photo-1509003580453-e5c8a3ee9a06?w=500",
    images: [
      "https://images.unsplash.com/photo-1509003580453-e5c8a3ee9a06?w=500"
    ],
    description: "10'6\" all-around paddle board with dual-action pump, adjustable paddle, leash, backpack, and 350 lb capacity.",
    brand: "Aqua Marina",
    rating: 4.7,
    reviews: 2345,
    stock: 45,
    inStock: true,
    featured: true,
    specifications: {
      dimensions: "10'6\" x 32\" x 6\"",
      capacity: "350 lbs (159 kg)",
      weight: "19.8 lbs",
      material: "Military-grade PVC, drop-stitch core",
      pressure: "15 PSI max",
      includes: "Paddle, pump, leash, repair kit, backpack"
    }
  },
  {
    id: "outdoor-water-003",
    name: "Speedo Fastskin LZR Racer Elite 2",
    category: "sports-outdoors",
    subcategory: "water-sports",
    price: 549.99,
    originalPrice: null,
    image: "https://images.unsplash.com/photo-1519315901367-f34ff9154487?w=500",
    images: [
      "https://images.unsplash.com/photo-1519315901367-f34ff9154487?w=500"
    ],
    description: "FINA-approved competition racing suit with compression, hydrodynamic design, and used by Olympic athletes.",
    brand: "Speedo",
    rating: 4.9,
    reviews: 456,
    stock: 23,
    inStock: true,
    featured: true,
    specifications: {
      material: "Woven fabric with compression zones",
      fit: "Knee-length (men), full-leg (women)",
      approval: "FINA approved for competition",
      features: "Streamlined seams, internal drawstring",
      care: "Rinse after use, air dry",
      use: "Racing and competition only"
    }
  },
  {
    id: "outdoor-water-004",
    name: "NRS Chinook Fishing PFD",
    category: "sports-outdoors",
    subcategory: "water-sports",
    price: 149.95,
    originalPrice: null,
    image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=500",
    images: [
      "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=500"
    ],
    description: "Type III life jacket with 15 pockets, rod holder, USCG approved, adjustable fit, and designed for kayak fishing.",
    brand: "NRS",
    rating: 4.8,
    reviews: 1567,
    stock: 89,
    inStock: true,
    featured: false,
    specifications: {
      buoyancy: "16.5 lbs (Type III)",
      pockets: "15 total (10 front, 2 cargo, 2 fleece-lined)",
      fit: "Adjustable shoulders and sides",
      features: "Rod holder, knife lash tab, mesh lower back",
      approval: "USCG approved",
      sizes: "S/M, L/XL, XXL"
    }
  },
  {
    id: "outdoor-water-005",
    name: "GoPro HERO12 Black",
    category: "sports-outdoors",
    subcategory: "water-sports",
    price: 399.99,
    originalPrice: null,
    image: "https://images.unsplash.com/photo-1544733733-1ff6ac5f2b98?w=500",
    images: [
      "https://images.unsplash.com/photo-1544733733-1ff6ac5f2b98?w=500"
    ],
    description: "Waterproof action camera with 5.3K60 video, HyperSmooth 6.0 stabilization, 33ft waterproof without housing, and HDR.",
    brand: "GoPro",
    rating: 4.7,
    reviews: 6789,
    stock: 178,
    inStock: true,
    featured: true,
    specifications: {
      video: "5.3K60, 4K120, 2.7K240",
      photo: "27MP photos",
      stabilization: "HyperSmooth 6.0 with AutoBoost",
      waterproof: "33ft (10m) without housing",
      battery: "Enduro battery included (longer in cold)",
      features: "Night effect, HDR video, horizon lock"
    }
  },
  {
    id: "outdoor-water-006",
    name: "Sea to Summit Ultra-Sil Dry Sack",
    category: "sports-outdoors",
    subcategory: "water-sports",
    price: 24.95,
    originalPrice: null,
    image: "https://images.unsplash.com/photo-1622597467836-f3285f2131b8?w=500",
    images: [
      "https://images.unsplash.com/photo-1622597467836-f3285f2131b8?w=500"
    ],
    description: "Ultra-lightweight waterproof dry bag with roll-top closure, fully seam-sealed, weighs just 1.1 oz for 8L size.",
    brand: "Sea to Summit",
    rating: 4.8,
    reviews: 3421,
    stock: 267,
    inStock: true,
    featured: false,
    specifications: {
      capacity: "8 liters",
      weight: "1.1 oz (31g)",
      material: "30D Ultra-Sil nylon with siliconized coating",
      waterproof: "Fully seam-sealed",
      closure: "Roll-top with Hypalon strap",
      features: "Oval base, packable, multiple colors"
    }
  },

  //==================== Home & Living - LIVING ROOM (6 products) ====================
  {
    id: "furn-living-001",
    name: "Article Sven Charme Tan Sofa",
    category: "home-living",
    subcategory: "living-room",
    price: 2499.00,
    originalPrice: null,
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=500",
    images: [
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=500"
    ],
    description: "Mid-century modern sofa with full-grain leather, tufted cushions, solid wood legs, and timeless Scandinavian design.",
    brand: "Article",
    rating: 4.8,
    reviews: 1567,
    stock: 12,
    inStock: true,
    featured: true,
    specifications: {
      dimensions: "85\" W x 34\" D x 32\" H",
      seating: "3-seater, 71\" W seat",
      material: "Full-grain aniline leather",
      frame: "Kiln-dried hardwood",
      legs: "Solid oak, mid-century style",
      assembly: "Legs attach, 10 minutes"
    }
  },
  {
    id: "furn-living-002",
    name: "West Elm Mid-Century Coffee Table",
    category: "home-living",
    subcategory: "living-room",
    price: 699.00,
    originalPrice: null,
    image: "https://images.unsplash.com/photo-1532372320572-cda25653a26d?w=500",
    images: [
      "https://images.unsplash.com/photo-1532372320572-cda25653a26d?w=500"
    ],
    description: "Iconic design with solid wood, walnut finish, angled legs, storage shelf, and FSC-certified wood.",
    brand: "West Elm",
    rating: 4.7,
    reviews: 2345,
    stock: 34,
    inStock: true,
    featured: true,
    specifications: {
      dimensions: "48\" W x 24\" D x 18\" H",
      material: "Solid wood with wood veneer top",
      finish: "Walnut or white oak",
      features: "Lower shelf for storage",
      certification: "FSC-certified wood",
      assembly: "Minimal assembly required"
    }
  },
  {
    id: "furn-living-003",
    name: "CB2 Peekaboo Acrylic Console Table",
    category: "home-living",
    subcategory: "living-room",
    price: 399.00,
    originalPrice: null,
    image: "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?w=500",
    images: [
      "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?w=500"
    ],
    description: "Modern clear acrylic console that disappears in any space, sleek design, easy to clean, and no assembly required.",
    brand: "CB2",
    rating: 4.6,
    reviews: 892,
    stock: 23,
    inStock: true,
    featured: true,
    specifications: {
      dimensions: "38.5\" W x 11.75\" D x 29\" H",
      material: "0.75\" thick clear acrylic",
      weight: "35 lbs",
      features: "No assembly, one-piece construction",
      care: "Wipe with soft damp cloth",
      style: "Modern, minimalist"
    }
  },
  {
    id: "furn-living-004",
    name: "Floyd Shelving System 3-High",
    category: "home-living",
    subcategory: "living-room",
    price: 895.00,
    originalPrice: null,
    image: "https://images.unsplash.com/photo-1594026112284-02bb6f3ea08c?w=500",
    images: [
      "https://images.unsplash.com/photo-1594026112284-02bb6f3ea08c?w=500"
    ],
    description: "Modular powder-coated steel shelving with sustainably-sourced wood, tool-free assembly, expandable design.",
    brand: "Floyd",
    rating: 4.9,
    reviews: 1234,
    stock: 18,
    inStock: true,
    featured: true,
    specifications: {
      dimensions: "36\" W x 12\" D x 58\" H",
      shelves: "3 shelves included",
      material: "Powder-coated steel frame, birch or walnut shelves",
      assembly: "Tool-free, connects with wedge locks",
      capacity: "75 lbs per shelf",
      expandable: "Add more shelves or sections"
    }
  },
  {
    id: "furn-living-005",
    name: "Pottery Barn Pearce Upholstered Armchair",
    category: "home-living",
    subcategory: "living-room",
    price: 1299.00,
    originalPrice: null,
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=500",
    images: [
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=500"
    ],
    description: "Classic roll-arm chair with kiln-dried hardwood frame, eight-way hand-tied springs, and performance fabric options.",
    brand: "Pottery Barn",
    rating: 4.7,
    reviews: 2567,
    stock: 29,
    inStock: true,
    featured: false,
    specifications: {
      dimensions: "38\" W x 40\" D x 37\" H",
      seat: "21\" H x 25\" D",
      frame: "Kiln-dried hardwood",
      springs: "Eight-way hand-tied",
      cushions: "Down-blend or poly-wrapped",
      fabric: "Performance or standard upholstery"
    }
  },
  {
    id: "furn-living-006",
    name: "IKEA BILLY Bookcase with Glass Doors",
    category: "home-living",
    subcategory: "living-room",
    price: 229.00,
    originalPrice: null,
    image: "https://images.unsplash.com/photo-1594026112284-02bb6f3ea08c?w=500",
    images: [
      "https://images.unsplash.com/photo-1594026112284-02bb6f3ea08c?w=500"
    ],
    description: "Iconic bookcase with tempered glass doors, adjustable shelves, surface treatment protects against scratches.",
    brand: "IKEA",
    rating: 4.6,
    reviews: 8934,
    stock: 234,
    inStock: true,
    featured: false,
    specifications: {
      dimensions: "31.5\" W x 11\" D x 79.5\" H",
      shelves: "5 adjustable shelves",
      material: "Particleboard, paper foil, tempered glass",
      doors: "Glass with aluminum frame",
      capacity: "30 kg per shelf",
      assembly: "Required, instructions included"
    }
  },

  // ==================== FURNITURE - BEDROOM (6 products) ====================
  {
    id: "furn-bed-001",
    name: "Casper Wave Hybrid Mattress Queen",
    category: "home-living",
    subcategory: "bedroom",
    price: 2295.00,
    originalPrice: null,
    image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=500",
    images: [
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=500"
    ],
    description: "Luxury hybrid with gel pods for targeted support, zoned support, breathable cover, and 100-night trial.",
    brand: "Casper",
    rating: 4.7,
    reviews: 5678,
    stock: 23,
    inStock: true,
    featured: true,
    specifications: {
      size: "Queen (60\" x 80\" x 13\")",
      type: "Hybrid (foam + springs)",
      support: "Gel pods in 3 ergonomic zones",
      cooling: "Breathable AirScape perforated foam",
      trial: "100-night risk-free trial",
      warranty: "10-year limited warranty"
    }
  },
  {
    id: "furn-bed-002",
    name: "Tuft & Needle Original Adaptive Foam Pillow",
    category: "home-living",
    subcategory: "bedroom",
    price: 75.00,
    originalPrice: null,
    image: "https://images.unsplash.com/photo-1578898886225-c7c7cafad3c5?w=500",
    images: [
      "https://images.unsplash.com/photo-1578898886225-c7c7cafad3c5?w=500"
    ],
    description: "Supportive foam pillow with cooling gel and graphite, responsive support for all sleep positions, machine washable cover.",
    brand: "Tuft & Needle",
    rating: 4.6,
    reviews: 3456,
    stock: 178,
    inStock: true,
    featured: false,
    specifications: {
      dimensions: "Standard (26\" x 18\" x 5.5\")",
      fill: "Adaptive foam with gel and graphite",
      cover: "100% cotton, machine washable",
      support: "Medium-firm, all sleep positions",
      cooling: "Heat-wicking materials",
      warranty: "3-year limited warranty"
    }
  },
  {
    id: "furn-bed-003",
    name: "Brooklinen Luxe Core Sheet Set Queen",
    category: "home-living",
    subcategory: "bedroom",
    price: 149.00,
    originalPrice: null,
    image: "https://images.unsplash.com/photo-1615800098779-1be32e60cca3?w=500",
    images: [
      "https://images.unsplash.com/photo-1615800098779-1be32e60cca3?w=500"
    ],
    description: "480-thread count long-staple cotton sateen, hotel-quality, includes fitted and flat sheets plus two pillowcases.",
    brand: "Brooklinen",
    rating: 4.8,
    reviews: 6789,
    stock: 134,
    inStock: true,
    featured: true,
    specifications: {
      size: "Queen (fitted, flat, 2 standard pillowcases)",
      threadCount: "480",
      material: "100% long-staple cotton sateen",
      weave: "Sateen (smooth, lustrous finish)",
      care: "Machine wash cold, tumble dry low",
      certifications: "OEKO-TEX certified"
    }
  },
  {
    id: "furn-bed-004",
    name: "Crate & Barrel Andes Queen Storage Bed",
    category: "home-living",
    subcategory: "bedroom",
    price: 1899.00,
    originalPrice: null,
    image: "https://images.unsplash.com/photo-1505693314120-0d443867891c?w=500",
    images: [
      "https://images.unsplash.com/photo-1505693314120-0d443867891c?w=500"
    ],
    description: "Modern platform bed with upholstered headboard, four under-bed storage drawers, and sustainably-sourced wood frame.",
    brand: "Crate & Barrel",
    rating: 4.7,
    reviews: 892,
    stock: 8,
    inStock: true,
    featured: true,
    specifications: {
      size: "Queen (64.5\" W x 88.5\" D x 48\" H)",
      headboard: "Upholstered in performance fabric",
      storage: "4 drawers on smooth-gliding tracks",
      frame: "Engineered wood with wood veneer",
      support: "Wood slats (no box spring needed)",
      assembly: "Assembly required"
    }
  },
  {
    id: "furn-bed-005",
    name: "Parachute Down Duvet Insert Lightweight",
    category: "home-living",
    subcategory: "bedroom",
    price: 279.00,
    originalPrice: null,
    image: "https://images.unsplash.com/photo-1631049421450-348ccd7f8949?w=500",
    images: [
      "https://images.unsplash.com/photo-1631049421450-348ccd7f8949?w=500"
    ],
    description: "European white down comforter with 600 fill power, 100% cotton shell, baffle-box construction, and hypoallergenic.",
    brand: "Parachute",
    rating: 4.8,
    reviews: 2345,
    stock: 67,
    inStock: true,
    featured: false,
    specifications: {
      size: "Queen (90\" x 90\")",
      fill: "European white down, 600 fill power",
      shell: "100% cotton sateen (300 thread count)",
      construction: "Baffle-box stitching",
      weight: "Lightweight (ideal for warm sleepers)",
      care: "Dry clean or machine wash gentle"
    }
  },
  {
    id: "furn-bed-006",
    name: "Target Threshold 6-Drawer Dresser",
    category: "home-living",
    subcategory: "bedroom",
    price: 279.99,
    originalPrice: 329.99,
    image: "https://images.unsplash.com/photo-1595428774223-ef52624120d2?w=500",
    images: [
      "https://images.unsplash.com/photo-1595428774223-ef52624120d2?w=500"
    ],
    description: "Modern dresser with wood finish, metal drawer pulls, anti-tip hardware included, and budget-friendly price.",
    brand: "Threshold (Target)",
    rating: 4.5,
    reviews: 4567,
    stock: 89,
    inStock: true,
    featured: false,
    specifications: {
      dimensions: "47.2\" W x 15.7\" D x 31.9\" H",
      drawers: "6 drawers with metal glides",
      material: "Engineered wood",
      finish: "Rustic oak or white",
      safety: "Anti-tip hardware included",
      assembly: "Required, 1-2 hours"
    }
  },

  // ==================== FURNITURE - OFFICE (6 products) ====================
  {
    id: "furn-office-001",
    name: "Herman Miller Aeron Chair Remastered",
    category: "home-living",
    subcategory: "office",
    price: 1795.00,
    originalPrice: null,
    image: "https://images.unsplash.com/photo-1580480055273-228ff5388ef8?w=500",
    images: [
      "https://images.unsplash.com/photo-1580480055273-228ff5388ef8?w=500"
    ],
    description: "Legendary ergonomic chair with 8Z Pellicle suspension, PostureFit SL, adjustable arms, 12-year warranty.",
    brand: "Herman Miller",
    rating: 4.9,
    reviews: 3456,
    stock: 34,
    inStock: true,
    featured: true,
    specifications: {
      size: "Size B (medium, fits most 5'3\" to 6')",
      material: "8Z Pellicle elastomeric suspension",
      support: "PostureFit SL sacral and lumbar",
      adjustments: "Height, tilt, arms, tilt tension",
      capacity: "350 lbs",
      warranty: "12-year manufacturer warranty"
    }
  },
  {
    id: "furn-office-002",
    name: "Uplift V2 Standing Desk 60x30\"",
    category: "home-living",
    subcategory: "office",
    price: 849.00,
    originalPrice: null,
    image: "https://images.unsplash.com/photo-1595514535116-02a04c8e0a8c?w=500",
    images: [
      "https://images.unsplash.com/photo-1595514535116-02a04c8e0a8c?w=500"
    ],
    description: "Electric height-adjustable desk with dual motors, programmable memory, 355 lb capacity, and 15-year warranty.",
    brand: "Uplift",
    rating: 4.8,
    reviews: 5678,
    stock: 45,
    inStock: true,
    featured: true,
    specifications: {
      dimensions: "60\" W x 30\" D",
      heightRange: "25.3\" to 50.9\"",
      capacity: "355 lbs",
      motor: "Dual motor, electric lift",
      controls: "Advanced keypad with 4 memory presets",
      warranty: "15-year warranty"
    }
  },
  {
    id: "furn-office-003",
    name: "Steelcase Series 1 Office Chair",
    category: "home-living",
    subcategory: "office",
    price: 490.00,
    originalPrice: null,
    image: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=500",
    images: [
      "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=500"
    ],
    description: "Affordable ergonomic chair with LiveBack technology, 4D arms, weight-activated recline, and sustainable materials.",
    brand: "Steelcase",
    rating: 4.6,
    reviews: 2345,
    stock: 89,
    inStock: true,
    featured: false,
    specifications: {
      dimensions: "26\" W x 24\" D x 38-42\" H",
      back: "LiveBack flexor system",
      arms: "4D adjustable",
      controls: "Weight-activated recline, seat depth",
      capacity: "300 lbs",
      warranty: "12-year limited warranty"
    }
  },
  {
    id: "furn-office-004",
    name: "BenQ ScreenBar Plus Monitor Light",
    category: "Home & Living",
    subcategory: "office",
    price: 139.00,
    originalPrice: null,
    image: "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=500",
    images: [
      "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=500"
    ],
    description: "Space-saving LED lamp that mounts on monitor, auto-dimming, wireless controller, eliminates screen glare.",
    brand: "BenQ",
    rating: 4.8,
    reviews: 6789,
    stock: 234,
    inStock: true,
    featured: true,
    specifications: {
      lighting: "LED with auto-dimming sensor",
      colorTemp: "2700K to 6500K adjustable",
      brightness: "500 lux",
      power: "USB powered (5V/1A)",
      mounting: "Clip design fits monitors up to 4cm thick",
      controls: "Wireless puck controller"
    }
  },
  {
    id: "furn-office-005",
    name: "Fully Jarvis Bamboo Desk Top Only",
    category: "Home & Living",
    subcategory: "office",
    price: 329.00,
    originalPrice: null,
    image: "https://images.unsplash.com/photo-1595515106969-1ce29566ff1c?w=500",
    images: [
      "https://images.unsplash.com/photo-1595515106969-1ce29566ff1c?w=500"
    ],
    description: "Sustainable bamboo desktop with eco-friendly finish, pre-drilled for Jarvis frame, available in multiple sizes.",
    brand: "Fully",
    rating: 4.7,
    reviews: 1892,
    stock: 67,
    inStock: true,
    featured: false,
    specifications: {
      dimensions: "60\" W x 30\" D x 1\" thick",
      material: "FSC-certified bamboo",
      finish: "Natural eco-friendly coating",
      edge: "Beveled edge",
      compatibility: "Pre-drilled for Jarvis frame",
      care: "Wipe with damp cloth, avoid harsh chemicals"
    }
  },
  {
    id: "furn-office-006",
    name: "Poppin Stow File Cabinet 3-Drawer",
    category: "home & living",
    subcategory: "office",
    price: 329.00,
    originalPrice: null,
    image: "https://images.unsplash.com/photo-1595428774223-ef52624120d2?w=500",
    images: [
      "https://images.unsplash.com/photo-1595428774223-ef52624120d2?w=500"
    ],
    description: "Modern rolling file cabinet in bold colors, holds letter/legal files, lockable, soft-close drawers.",
    brand: "Poppin",
    rating: 4.5,
    reviews: 1234,
    stock: 123,
    inStock: true,
    featured: false,
    specifications: {
      dimensions: "16\" W x 20\" D x 24\" H",
      drawers: "2 box drawers, 1 file drawer",
      files: "Letter or legal hanging files",
      features: "Locking, soft-close, rolling casters",
      colors: "White, charcoal, aqua, red, yellow",
      assembly: "Minimal assembly required"
    }
  },

  // ==================== Home & Living - OUTDOOR (6 products) ====================
  {
    id: "furn-outdoor-001",
    name: "Yardbird Lily Outdoor Sectional",
    category: "home-living",
    subcategory: "outdoor",
    price: 4695.00,
    originalPrice: null,
    image: "https://images.unsplash.com/photo-1600494603989-9650cf6dca19?w=500",
    images: [
      "https://images.unsplash.com/photo-1600494603989-9650cf6dca19?w=500"
    ],
    description: "Modular outdoor sectional with aluminum frame, all-weather cushions, Sunbrella fabric, and modern design.",
    brand: "Yardbird",
    rating: 4.9,
    reviews: 892,
    stock: 8,
    inStock: true,
    featured: true,
    specifications: {
      configuration: "5-piece sectional (reconfigurable)",
      dimensions: "112\" W x 70\" D x 28\" H",
      frame: "Powder-coated aluminum",
      cushions: "High-density foam, quick-dry",
      fabric: "Sunbrella performance",
      warranty: "5-year limited warranty"
    }
  },
  {
    id: "furn-outdoor-002",
    name: "Weber Genesis EPX-335 Smart Grill",
    category: "home-living",
    subcategory: "outdoor",
    price: 1549.00,
    originalPrice: null,
    image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=500",
    images: [
      "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=500"
    ],
    description: "Smart gas grill with Weber Connect, WEBER CRAFTED compatibility, sear station, side burner, 787 sq in cooking area.",
    brand: "Weber",
    rating: 4.8,
    reviews: 2345,
    stock: 23,
    inStock: true,
    featured: true,
    specifications: {
      burners: "3 stainless steel + sear + side burner",
      cookingArea: "787 square inches",
      smart: "Weber Connect with app guidance",
      grates: "Porcelain-enameled cast iron",
      features: "CRAFTED compatibility, warming rack",
      warranty: "10-year limited warranty"
    }
  },
  {
    id: "furn-outdoor-003",
    name: "Sunbrella Classic Patio Umbrella 9'",
    category: "home-living",
    subcategory: "outdoor",
    price: 379.00,
    originalPrice: null,
    image: "https://images.unsplash.com/photo-1621946401629-24e883d77f05?w=500",
    images: [
      "https://images.unsplash.com/photo-1621946401629-24e883d77f05?w=500"
    ],
    description: "Market umbrella with Sunbrella fabric, aluminum pole, push-button tilt, fade-resistant, and 5-year warranty.",
    brand: "Sunbrella",
    rating: 4.7,
    reviews: 3456,
    stock: 134,
    inStock: true,
    featured: false,
    specifications: {
      diameter: "9 feet",
      fabric: "Sunbrella acrylic (fade and mildew resistant)",
      pole: "1.5\" aluminum with powder coat",
      tilt: "Push-button auto-tilt",
      opening: "Crank lift system",
      warranty: "5-year fabric, 2-year frame"
    }
  },
  {
    id: "furn-outdoor-004",
    name: "Polywood Adirondack Chair",
    category: "home-living",
    subcategory: "outdoor",
    price: 349.00,
    originalPrice: null,
    image: "https://images.unsplash.com/photo-1602748329425-759c969e5c98?w=500",
    images: [
      "https://images.unsplash.com/photo-1602748329425-759c969e5c98?w=500"
    ],
    description: "Classic Adirondack made from recycled HDPE lumber, fade-resistant, weatherproof, never needs painting or staining.",
    brand: "Polywood",
    rating: 4.8,
    reviews: 5678,
    stock: 89,
    inStock: true,
    featured: true,
    specifications: {
      dimensions: "35.75\" W x 29\" D x 36\" H",
      material: "90% recycled HDPE lumber",
      features: "Fade, crack, chip, and peel resistant",
      maintenance: "Soap and water clean, no painting",
      assembly: "Some assembly required",
      warranty: "20-year residential warranty"
    }
  },
  {
    id: "furn-outdoor-005",
    name: "Fire Sense HotSpot Patio Heater",
    category: "home-living",
    subcategory: "outdoor",
    price: 189.99,
    originalPrice: null,
    image: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=500",
    images: [
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=500"
    ],
    description: "Propane patio heater with 40,000 BTU, covers 18-foot diameter, automatic shut-off, wheels for portability.",
    brand: "Fire Sense",
    rating: 4.6,
    reviews: 2345,
    stock: 67,
    inStock: true,
    featured: false,
    specifications: {
      output: "40,000 BTU",
      coverage: "18-foot diameter heating",
      fuel: "Propane (20 lb tank, not included)",
      safety: "Tip-over shut-off, pilot safety valve",
      dimensions: "87\" H",
      features: "Wheels, adjustable heat, push-button ignition"
    }
  },
  {
    id: "furn-outdoor-006",
    name: "Frontgate Resort Chaise Lounge Set",
    category: "home-living",
    subcategory: "outdoor",
    price: 1799.00,
    originalPrice: null,
    image: "https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?w=500",
    images: [
      "https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?w=500"
    ],
    description: "Set of 2 luxury chaise lounges with multi-position backs, cushions, wheels, and rust-resistant aluminum frame.",
    brand: "Frontgate",
    rating: 4.7,
    reviews: 1234,
    stock: 16,
    inStock: true,
    featured: false,
    specifications: {
      set: "2 chaise lounges with cushions",
      dimensions: "80\" L x 27\" W x 14\" H (each)",
      frame: "Powder-coated aluminum",
      positions: "5-position adjustable back",
      cushions: "Sunbrella fabric, quick-dry foam",
      features: "Wheels for easy moving, stacking"
    }
  }
];

export const getFeaturedProducts = () => {
  return productItems
    .filter(product => product.featured === true).slice(0, 8); // ✅ Only get first 8 featured products
};