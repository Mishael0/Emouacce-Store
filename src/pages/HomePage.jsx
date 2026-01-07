import Navbar from "../components/layout/Navbar";
import Hero from "../components/common/Hero";
import FeaturedProducts from "../components/product/FeaturedProducts";
import CategorySection from "../components/common/CategorySection";
import Newsletter from "../components/layout/Newsletter";
import Features from "../components/layout/Features";

function HomePage() {
  return (
    <div>
      <Navbar />
      <Hero />
      <FeaturedProducts />
      <CategorySection />
      <Newsletter />
      <Features />
    </div>
  )
}

export default HomePage
