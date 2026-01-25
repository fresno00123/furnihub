import { ShoppingCart } from "lucide-react";
import { useCart } from "../context/CartContext";

const chairs = [
  { id: 1, title: "Modern Library Chair", price: "$120", image: "/src/assets/Banner/b.jpg"},
  { id: 2, title: "Comfort Stool Chair", price: "$150", image: "/src/assets/Banner/a.jpg" },
  { id: 3, title: "Classic Wooden Chair", price: "$180", image: "/src/assets/Banner/c.jpg" },
  { id: 4, title: "Luxury Lounge Chair", price: "$220", image: "/src/assets/Banner/d.jpg" },

  { id: 5, title: "Minimal Study Chair", price: "$140", image: "/src/assets/Banner/e.jpg" },
  { id: 6, title: "Soft Cushion Chair", price: "$160", image: "/src/assets/Banner/f.jpg" },
  { id: 7, title: "Modern Plastic Chair", price: "$110", image: "/src/assets/Banner/g.jpg" },
  { id: 8, title: "Elegant Dining Chair", price: "$190", image: "/src/assets/Banner/h.jpg" },

  { id: 9, title: "Office Work Chair", price: "$210", image: "/src/assets/Banner/i.jpg" },
  { id: 10, title: "Compact Apartment Chair", price: "$130", image: "/src/assets/Banner/j.jpg" },
  { id: 11, title: "Wooden Arm Chair", price: "$200", image: "/src/assets/Banner/k.jpg" },
  { id: 12, title: "Luxury Recliner Chair", price: "$260", image: "/src/assets/Banner/l.jpg" },

  { id: 13, title: "Scandinavian Chair", price: "$175", image: "/src/assets/Banner/m.jpg" },
  { id: 14, title: "Modern Accent Chair", price: "$230", image: "/src/assets/Banner/q.jpg" },
  { id: 15, title: "Simple Guest Chair", price: "$125", image: "/src/assets/Banner/o.jpg" },
  { id: 16, title: "Premium Leather Chair", price: "$280", image: "/src/assets/Banner/p.jpg" },

];

const Chair = () => {
  const { addToCart } = useCart();

  return (
    <div className="min-h-screen bg-[#f9fafb] px-4 sm:px-6 py-12">

      {/* Title */}
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#272343] mb-8 sm:mb-10 text-center">
        Chairs Collection
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
        {chairs.map((chair) => (
          <div
            key={chair.id}
            className="bg-white p-4 sm:p-5 rounded-2xl shadow-sm hover:shadow-lg transition"
          >
            {/* Image */}
            <img
              src={chair.image}
              alt={chair.title}
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
              {chair.title}
            </h2>

            <p className="text-sm sm:text-base text-[#636270] mb-4">
              {chair.price}
            </p>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
              <button
                onClick={() => addToCart(chair)}
                className="flex-1 bg-[#272343] text-white py-2 sm:py-2.5 rounded-lg hover:bg-[#3b3b5a] transition text-sm sm:text-base"
              >
                Add to Cart
              </button>

              <button
                onClick={() => addToCart(chair)}
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

export default Chair;
