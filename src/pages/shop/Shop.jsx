import { useCart } from "../../context/CartContext";

const products = [
  {
    id: 1,
    title: "Modern Chair",
    price: "$120",
    image: "/src/assets/Banner/k.jpg",
  },
  {
    id: 2,
    title: "Wooden Table",
    price: "$250",
    image: "/src/assets/Banner/15.jpg",
  },
  {
    id: 3,
    title: "Comfort Sofa",
    price: "$400",
    image: "/src/assets/Banner/40.jpg",
  },
 
  {
    id: 5,
    title: "Office Chair",
    price: "$180",
    image: "/src/assets/Banner/b.jpg",
  },
  {
    id: 6,
    title: "Dining Chair",
    price: "$95",
   image: "/src/assets/Banner/h.jpg",
   },
  {
    id: 7,
    title: "Study Desk",
    price: "$220",
    image: "/src/assets/Banner/16.jpg",
  },
  {
    id: 8,
    title: "Coffee Table",
    price: "$160",
    image: "/src/assets/Banner/10.jpg",
  },
 
  {
    id: 10,
    title: "Recliner Sofa",
    price: "$520",
    image: "/src/assets/Banner/42.jpg",
  },
  
  {
    id: 14,
    title: "Accent Chair",
    price: "$210",
    image: "/src/assets/Banner/g.jpg",
  },
  {
    id: 15,
    title: "Bar Stool",
    price: "$85",
    image: "/src/assets/Banner/h.jpg",
  },
  {
    id: 16,
    title: "Lounge Chair",
    price: "$275",
    image: "/src/assets/Banner/q.jpg",
  },
  {
    id: 17,
    title: "Wooden Bench",
    price: "$140",
    image: "/src/assets/Banner/15.jpg",
  },
  {
    id: 18,
    title: "Corner Sofa",
    price: "$780",
    image: "/src/assets/Banner/41.jpg",
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