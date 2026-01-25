import { ShoppingCart } from "lucide-react";
import { useCart } from "../context/CartContext";

const sofas = [
  { id: 201, title: "Modern Fabric Sofa", price: "$380", image: "/src/assets/Banner/37.jpg" },
  { id: 202, title: "Luxury Leather Sofa", price: "$520", image: "/src/assets/Banner/38.jpg" },
  { id: 203, title: "Classic 3-Seater Sofa", price: "$460", image: "/src/assets/Banner/39.jpg" },
  { id: 204, title: "Compact Living Room Sofa", price: "$300", image: "/src/assets/Banner/40.jpg" },
  { id: 205, title: "Sectional Corner Sofa", price: "$680", image: "/src/assets/Banner/41.jpg" },
  { id: 206, title: "Minimal Grey Sofa", price: "$410", image: "/src/assets/Banner/42.jpg" },
  { id: 207, title: "Luxury Velvet Sofa", price: "$740", image: "/src/assets/Banner/43.jpg" },
  { id: 208, title: "Fabric Family Sofa", price: "$560", image: "/src/assets/Banner/44.jpg" },

  { id: 209, title: "Modern L-Shape Sofa", price: "$820", image: "/src/assets/Banner/45.jpg" },
  { id: 210, title: "Compact Apartment Sofa", price: "$340", image: "/src/assets/Banner/46.jpg" },
  { id: 211, title: "Wood Trim Sofa", price: "$490", image: "/src/assets/Banner/47.jpg" },
  { id: 212, title: "Luxury Recliner Sofa", price: "$910", image: "/src/assets/Banner/48.jpg" },
  { id: 213, title: "Scandinavian Sofa", price: "$630", image: "/src/assets/Banner/49.jpg" },
  { id: 214, title: "Modern Chesterfield Sofa", price: "$780", image: "/src/assets/Banner/50.jpg" },
  { id: 215, title: "Simple Guest Sofa", price: "$360", image: "/src/assets/Banner/51.jpg" },
  { id: 216, title: "Premium Leather Sofa", price: "$980", image: "/src/assets/Banner/52.jpg" },

  { id: 217, title: "Classic Brown Sofa", price: "$520", image: "/src/assets/Banner/54.jpg" },
  { id: 218, title: "Modern White Sofa", price: "$610", image: "/src/assets/Banner/53.jpg" },
  { id: 219, title: "Soft Cushion Sofa", price: "$450", image: "/src/assets/Banner/55.jpg" },
  { id: 220, title: "Designer Living Sofa", price: "$890", image: "/src/assets/Banner/56.jpg" },
];

const Sofa = () => {
  const { addToCart } = useCart();

  return (
    <div className="min-h-screen bg-[#f9fafb] px-4 sm:px-6 py-12">
      
      {/* Title */}
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#272343] mb-8 sm:mb-10 text-center">
        Sofa Collection
      </h1>

      {/* RESPONSIVE GRID */}
      <div
        className="
          max-w-7xl mx-auto
          grid grid-cols-1
          sm:grid-cols-2
          md:grid-cols-2
          lg:grid-cols-3
          xl:grid-cols-4
          gap-6
        "
      >
        {sofas.map((sofa) => (
          <div
            key={sofa.id}
            className="bg-white p-4 sm:p-5 rounded-2xl shadow-sm hover:shadow-lg transition"
          >
            {/* Image */}
            <img
              src={sofa.image}
              alt={sofa.title}
              className="
                w-full
                h-40 sm:h-44 md:h-48 lg:h-52
                object-cover
                rounded-xl
                mb-4
              "
            />

            {/* Info */}
            <h2 className="text-base sm:text-lg font-semibold text-[#272343] mb-1">
              {sofa.title}
            </h2>

            <p className="text-sm sm:text-base text-[#636270] mb-4">
              {sofa.price}
            </p>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row items-stretch gap-2 sm:gap-3">
              <button
                onClick={() => addToCart(sofa)}
                className="flex-1 bg-[#272343] text-white py-2 sm:py-2.5 rounded-lg hover:bg-[#3b3b5a] transition text-sm sm:text-base"
              >
                Add to Cart
              </button>

              <button
                onClick={() => addToCart(sofa)}
                className="bg-[#007580] p-3 rounded-lg flex justify-center items-center hover:opacity-90 transition"
              >
                <ShoppingCart size={18} color="#fff" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sofa;