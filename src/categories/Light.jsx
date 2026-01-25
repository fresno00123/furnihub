import { ShoppingCart } from "lucide-react";
import { useCart } from "../context/CartContext";

const lights = [
  { id: 401, title: "Modern Pendant Light", price: "$120", image: "/src/assets/Banner/17.jpg" },
  { id: 402, title: "Luxury Ceiling Light", price: "$180", image: "/src/assets/Banner/18.jpg" },
  { id: 403, title: "Minimal Table Lamp", price: "$90", image: "/src/assets/Banner/19.jpg" },
  { id: 404, title: "Classic Wall Sconce", price: "$110", image: "/src/assets/Banner/20.jpg" },

  { id: 405, title: "Elegant Floor Lamp", price: "$160", image: "/src/assets/Banner/21.jpg" },
  { id: 406, title: "Industrial Hanging Light", price: "$140", image: "/src/assets/Banner/22.jpg" },
  { id: 407, title: "LED Smart Light", price: "$200", image: "/src/assets/Banner/23.jpg" },
  { id: 408, title: "Modern Desk Lamp", price: "$75", image: "/src/assets/Banner/24.jpg" },

  { id: 409, title: "Scandinavian Pendant Lamp", price: "$150", image: "/src/assets/Banner/25.jpg" },
  { id: 410, title: "Modern Track Lighting", price: "$230", image: "/src/assets/Banner/26.jpg" },
  { id: 411, title: "Luxury Crystal Chandelier", price: "$420", image: "/src/assets/Banner/27.jpg" },
  { id: 412, title: "Minimal Bedside Lamp", price: "$85", image: "/src/assets/Banner/28.jpg" },

  { id: 413, title: "Contemporary Ceiling Lamp", price: "$190", image: "/src/assets/Banner/29.jpg" },
  { id: 414, title: "Designer Table Lamp", price: "$135", image: "/src/assets/Banner/30.jpg" },
  { id: 415, title: "Outdoor Garden Light", price: "$170", image: "/src/assets/Banner/31.jpg" },
  { id: 416, title: "Smart LED Ceiling Light", price: "$260", image: "/src/assets/Banner/32.jpg" },

];

const Light = () => {
  const { addToCart } = useCart();

  return (
    <div className="min-h-screen bg-[#f9fafb] px-4 sm:px-6 py-12">

      {/* Title */}
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#272343] mb-8 sm:mb-10 text-center">
        Light Collection
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
        {lights.map((light) => (
          <div
            key={light.id}
            className="bg-white p-4 sm:p-5 rounded-2xl shadow-sm hover:shadow-lg transition"
          >
            {/* Image */}
            <img
              src={light.image}
              alt={light.title}
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
              {light.title}
            </h2>

            <p className="text-sm sm:text-base text-[#636270] mb-4">
              {light.price}
            </p>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
              <button
                onClick={() => addToCart(light)}
                className="flex-1 bg-[#272343] text-white py-2 sm:py-2.5 rounded-lg hover:bg-[#3b3b5a] transition text-sm sm:text-base"
              >
                Add to Cart
              </button>

              <button
                onClick={() => addToCart(light)}
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

export default Light;