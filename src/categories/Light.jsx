import { ShoppingCart } from "lucide-react";
import { useCart } from "../context/CartContext";
import light1 from "/src/assets/Banner/17.jpg"
import light2 from "/src/assets/Banner/18.jpg"
import light3 from "/src/assets/Banner/19.jpg"
import light4 from "/src/assets/Banner/20.jpg"
import light5 from "/src/assets/Banner/21.jpg"
import light6 from "/src/assets/Banner/22.jpg"
import light7 from "/src/assets/Banner/23.jpg"
import light8 from "/src/assets/Banner/24.jpg"
import light9 from "/src/assets/Banner/25.jpg"
import light10 from "/src/assets/Banner/26.jpg"
import light11 from "/src/assets/Banner/27.jpg"
import light12 from "/src/assets/Banner/28.jpg"
import light13 from "/src/assets/Banner/29.jpg"
import light14 from "/src/assets/Banner/30.jpg"
import light15 from "/src/assets/Banner/31.jpg"
import light16 from "/src/assets/Banner/32.jpg"
const lights = [
  { id: 401, title: "Modern Pendant Light", price: "$120", image: light1 },
  { id: 402, title: "Luxury Ceiling Light", price: "$180", image: light2 },
  { id: 403, title: "Minimal Table Lamp", price: "$90", image: light3 },
  { id: 404, title: "Classic Wall Sconce", price: "$110", image: light4 },

  { id: 405, title: "Elegant Floor Lamp", price: "$160", image: light5 },
  { id: 406, title: "Industrial Hanging Light", price: "$140", image: light6 },
  { id: 407, title: "LED Smart Light", price: "$200", image: light7 },
  { id: 408, title: "Modern Desk Lamp", price: "$75", image: light8 },

  { id: 409, title: "Scandinavian Pendant Lamp", price: "$150", image: light9 },
  { id: 410, title: "Modern Track Lighting", price: "$230", image: light10 },
  { id: 411, title: "Luxury Crystal Chandelier", price: "$420", image: light11 },
  { id: 412, title: "Minimal Bedside Lamp", price: "$85", image: light12 },

  { id: 413, title: "Contemporary Ceiling Lamp", price: "$190", image: light13 },
  { id: 414, title: "Designer Table Lamp", price: "$135", image: light14 },
  { id: 415, title: "Outdoor Garden Light", price: "$170", image: light15 },
  { id: 416, title: "Smart LED Ceiling Light", price: "$260", image: light16 },

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