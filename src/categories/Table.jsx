import { ShoppingCart } from "lucide-react";
import { useCart } from "../context/CartContext";
import table1 from "/src/assets/Banner/1.jpg"
import table2 from "/src/assets/Banner/2.jpg"
import table3 from "/src/assets/Banner/3.jpg"
import table4 from "/src/assets/Banner/4.jpg" 
import table5 from "/src/assets/Banner/5.jpg"
import table6 from "/src/assets/Banner/6.jpg"
import table7 from "/src/assets/Banner/7.jpg"
import table8 from "/src/assets/Banner/8.jpg"
import table9 from "/src/assets/Banner/9.jpg"
import table10 from "/src/assets/Banner/10.jpg"
import table11 from "/src/assets/Banner/11.jpg"
import table12 from "/src/assets/Banner/12.jpg"
import table13 from "/src/assets/Banner/13.jpg"
import table14 from "/src/assets/Banner/14.jpg"
import table15 from "/src/assets/Banner/15.jpg"
import table16 from "/src/assets/Banner/16.jpg"
  
const tables = [
  { id: 101, title: "Modern Dining Table", price: "$320", image: table1 },
  { id: 102, title: "Wooden Coffee Table", price: "$180", image: table2 },
  { id: 103, title: "Minimal Study Table", price: "$220", image: table3 },
  { id: 104, title: "Luxury Marble Table", price: "$450", image: table4 },

  { id: 105, title: "Glass Center Table", price: "$260", image: table5 },
  { id: 106, title: "Round Dining Table", price: "$390", image: table6 },
  { id: 107, title: "Foldable Study Table", price: "$200", image: table7 },
  { id: 108, title: "Classic Wooden Table", price: "$310", image: table8 },

  { id: 109, title: "Office Work Desk", price: "$280", image: table9 },
  { id: 110, title: "Compact Laptop Table", price: "$160", image: table10 },
  { id: 111, title: "Industrial Style Table", price: "$340", image: table11 },
  { id: 112, title: "Luxury Conference Table", price: "$620", image: table12 },

  { id: 113, title: "Scandinavian Table", price: "$370", image: table13 },
  { id: 114, title: "Minimal Side Table", price: "$140", image: table14 },
  { id: 115, title: "Marble Coffee Table", price: "$420", image: table15 },
  { id: 116, title: "Glass Dining Table", price: "$510", image: table16 },


];

const Table = () => {
  const { addToCart } = useCart();

  return (
    <div className="min-h-screen bg-[#f9fafb] px-4 sm:px-6 py-12">
      
      {/* Title */}
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#272343] mb-8 sm:mb-10 text-center">
        Tables Collection
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
        {tables.map((table) => (
          <div
            key={table.id}
            className="bg-white p-4 sm:p-5 rounded-2xl shadow-sm hover:shadow-lg transition"
          >
            {/* Image */}
            <img
              src={table.image}
              alt={table.title}
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
              {table.title}
            </h2>

            <p className="text-sm sm:text-base text-[#636270] mb-4">
              {table.price}
            </p>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
              <button
                onClick={() => addToCart(table)}
                className="flex-1 bg-[#272343] text-white py-2 sm:py-2.5 rounded-lg hover:bg-[#3b3b5a] transition text-sm sm:text-base"
              >
                Add to Cart
              </button>

              <button
                onClick={() => addToCart(table)}
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

export default Table;