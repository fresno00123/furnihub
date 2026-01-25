import { ShoppingCart } from "lucide-react";
import { useCart } from "../context/CartContext";

const beds = [
  { id: 301, title: "Modern Queen Bed", price: "$580", image: "/src/assets/Banner/57.jpg" },
  { id: 302, title: "Luxury King Size Bed", price: "$820", image: "/src/assets/Banner/58.jpg" },
  { id: 303, title: " Classic Bed", price: "$650", image: "/src/assets/Banner/71.jpg" },
  { id: 304, title: "Minimal Platform Bed", price: "$480", image: "/src/assets/Banner/59.jpg" },
  { id: 305, title: "Upholstered Bed Frame", price: "$720", image: "/src/assets/Banner/60.jpg" },
  { id: 306, title: "Storage Bed", price: "$690", image: "/src/assets/Banner/61.jpg" },
  { id: 307, title: "Simple Guest Bed", price: "$420", image: "/src/assets/Banner/62.jpg" },
  { id: 308, title: "Classic Iron Bed", price: "$560", image: "/src/assets/Banner/63.jpg" },

  { id: 309, title: "Deluxe Queen Bed", price: "$610", image: "/src/assets/Banner/64.jpg" },
  { id: 310, title: "Luxury Wooden Bed", price: "$790", image: "/src/assets/Banner/65.jpg" },
  { id: 311, title: "Modern King Platform Bed", price: "$860", image: "/src/assets/Banner/66.jpg" },
  { id: 312, title: "Compact Apartment Bed", price: "$460", image: "/src/assets/Banner/67.jpg" },
  { id: 313, title: "Designer Bed Set", price: "$930", image: "/src/assets/Banner/68.jpg" },
  { id: 314, title: "Simple Metal Bed", price: "$410", image: "/src/assets/Banner/69.jpg" },
  { id: 315, title: "Classic Panel Bed", price: "$640", image: "/src/assets/Banner/70.jpg" },
  { id: 316, title: "Luxury Upholstered Bed", price: "$870", image: "/src/assets/Banner/71.jpg" },

  { id: 317, title: "Minimal Wooden Bed", price: "$550", image: "/src/assets/Banner/72.jpg" },
  { id: 318, title: "Modern Storage King Bed", price: "$900", image: "/src/assets/Banner/64.jpg" },
  { id: 319, title: "Elegant Guest Room Bed", price: "$480", image: "/src/assets/Banner/58.jpg" },
  { id: 320, title: "Premium Designer Bed", price: "$980", image: "/src/assets/Banner/69.jpg" },
];

const Bed = () => {
  const { addToCart } = useCart();

  return (
    <div className="min-h-screen bg-[#f9fafb] px-4 sm:px-6 py-12">
      
      {/* Title */}
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#272343] mb-8 sm:mb-10 text-center">
        Bed Collection
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
        {beds.map((bed) => (
          <div
            key={bed.id}
            className="bg-white p-4 sm:p-5 rounded-2xl shadow-sm hover:shadow-lg transition"
          >
            {/* Image */}
            <img
              src={bed.image}
              alt={bed.title}
              className="
                w-full
                h-40 sm:h-44 md:h-48 lg:h-52
                object-cover
                rounded-xl
                mb-4
              "
            />

            {/* Content */}
            <h2 className="text-base sm:text-lg font-semibold text-[#272343] mb-1">
              {bed.title}
            </h2>

            <p className="text-sm sm:text-base text-[#636270] mb-4">
              {bed.price}
            </p>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row items-stretch gap-2 sm:gap-3">
              <button
                onClick={() => addToCart(bed)}
                className="flex-1 bg-[#272343] text-white py-2 sm:py-2.5 rounded-lg hover:bg-[#3b3b5a] transition text-sm sm:text-base"
              >
                Add to Cart
              </button>

              <button
                onClick={() => addToCart(bed)}
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

export default Bed;