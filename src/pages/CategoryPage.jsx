import Navbar from "../components/layout/Navbar";
import { useParams } from "react-router-dom";


function CategoryPage() {
    const { category, subcategory } = useParams();

  return (
    <div>
      <Navbar />
    </div>
  )
}

export default CategoryPage
