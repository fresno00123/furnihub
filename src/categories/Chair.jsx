import { ShoppingCart } from "lucide-react";
import { useCart } from "../context/CartContext";
import chair1 from "/src/assets/Banner/b.jpg"
import chair2 from "/src/assets/Banner/a.jpg"
import chair3 from "/src/assets/Banner/c.jpg"
import chair4 from "/src/assets/Banner/d.jpg"
import chair5 from "/src/assets/Banner/e.jpg"
import chair6 from "/src/assets/Banner/f.jpg"
import chair7 from "/src/assets/Banner/g.jpg"
import chair8 from "/src/assets/Banner/h.jpg"
import chair9 from "/src/assets/Banner/i.jpg"
import chair10 from "/src/assets/Banner/j.jpg"
import chair11 from "/src/assets/Banner/k.jpg"
import chair12 from "/src/assets/Banner/l.jpg"
import chair13 from "/src/assets/Banner/m.jpg"
import chair14 from "/src/assets/Banner/q.jpg"
import chair15 from "/src/assets/Banner/o.jpg"
import chair16 from "/src/assets/Banner/p.jpg"

const chairs = [
  { id: 1, title: "Modern Library Chair", price: "$120", image: chair1},
  { id: 2, title: "Comfort Stool Chair", price: "$150", image: chair2 },
  { id: 3, title: "Classic Wooden Chair", price: "$180", image: chair3 },
  { id: 4, title: "Luxury Lounge Chair", price: "$220", image: chair4 },

  { id: 5, title: "Minimal Study Chair", price: "$140", image: chair5 },
  { id: 6, title: "Soft Cushion Chair", price: "$160", image: chair6 },
  { id: 7, title: "Modern Plastic Chair", price: "$110", image: chair7 },
  { id: 8, title: "Elegant Dining Chair", price: "$190", image: chair8 },

  { id: 9, title: "Office Work Chair", price: "$210", image: chair9 },
  { id: 10, title: "Compact Apartment Chair", price: "$130", image: chair10 },
  { id: 11, title: "Wooden Arm Chair", price: "$200", image: chair11 },
  { id: 12, title: "Luxury Recliner Chair", price: "$260", image: chair12 },

  { id: 13, title: "Scandinavian Chair", price: "$175", image: chair13 },
  { id: 14, title: "Modern Accent Chair", price: "$230", image: chair14 },
  { id: 15, title: "Simple Guest Chair", price: "$125", image: chair15 },
  { id: 16, title: "Premium Leather Chair", price: "$280", image: chair16 },

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
