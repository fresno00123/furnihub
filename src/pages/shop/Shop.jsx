import { useCart } from "../../context/CartContext";
import shop1 from "/src/assets/Banner/k.jpg"
import shop2 from "/src/assets/Banner/15.jpg"
import shop3 from "/src/assets/Banner/40.jpg"
import shop4 from "/src/assets/Banner/b.jpg"
import shop5 from "/src/assets/Banner/h.jpg"
import shop6 from "/src/assets/Banner/16.jpg"
import shop7 from "/src/assets/Banner/10.jpg"
import shop8 from "/src/assets/Banner/42.jpg"
import shop9 from "/src/assets/Banner/g.jpg"
import shop10 from "/src/assets/Banner/h.jpg"
import shop11 from "/src/assets/Banner/q.jpg"
import shop12 from "/src/assets/Banner/15.jpg"
import shop13 from "/src/assets/Banner/41.jpg"
const products = [
  {
    id: 1,
    title: "Modern Chair",
    price: "$120",
    image: shop1,
  },
  {
    id: 2,
    title: "Wooden Table",
    price: "$250",
    image: shop2,
  },
  {
    id: 3,
    title: "Comfort Sofa",
    price: "$400",
    image: shop3,
  },
 
  {
    id: 4,
    title: "Office Chair",
    price: "$180",
    image: shop4,
  },
  {
    id: 5,
    title: "Dining Chair",
    price: "$95",
   image: shop5,
   },
  {
    id: 6,
    title: "Study Desk",
    price: "$220",
    image: shop6,
  },  
  {
    id: 7,
    title: "Coffee Table",
    price: "$160",
    image: shop7,
  },
 
  {
    id: 8,
    title: "Recliner Sofa",
    price: "$520",
    image: shop8,
  },
  
  {
    id:9,
    title: "Accent Chair",
    price: "$210",
    image: shop9,
  },
  {
    id: 10,
    title: "Bar Stool",
    price: "$85",
    image: shop10,
  },
  {
    id: 11,
    title: "Lounge Chair",
    price: "$275",
    image: shop11,
  },
  {
    id: 12,
    title: "Wooden Bench",
    price: "$140",
    image: shop12,
  },
  {
    id: 13,
    title: "Corner Sofa",
    price: "$780",
    image: shop13,
  },
];

const Shop = () => {
  const { addToCart } = useCart();

  return (
    <div className="min-h-screen bg-[#f9fafb] px-4 sm:px-6 py-12">
      {/* Page Title */}
      <h1 className="text-3xl sm:text-4xl font-bold text-[#272343] mb-10 text-center">
        Shop Our Products
      </h1>

      {/* Products Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white p-5 rounded-2xl shadow-sm hover:shadow-lg transition"
          >
            {/* Image */}
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-48 object-cover rounded-xl mb-5"
            />

            {/* Info */}
            <h2 className="text-lg font-semibold text-[#272343] mb-2">
              {product.title}
            </h2>

            <p className="text-[#636270] mb-4">{product.price}</p>

            {/* Add to Cart */}
            <button
              onClick={() => addToCart(product)}
              className="w-full bg-[#272343] text-white py-2.5 rounded-lg hover:bg-[#3b3b5a] transition"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Shop;