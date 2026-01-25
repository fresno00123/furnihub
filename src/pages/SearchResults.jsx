import { useSearch } from "../context/SearchContext";
import { products } from "../Data/products";
import  {useCart} from "../context/CartContext";
const SearchResults = () => {
  const {addToCart} = useCart();
  const { query } = useSearch();

  // Filter products by exact match OR partial match (case-insensitive)
  const results = products.filter((item) =>
    item.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="px-6 py-12 max-w-7xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">
        Search results for: <span className="text-[#007580]">{query}</span>
      </h1>

      {results.length === 0 ? (
        <p className="text-gray-500">No results found.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {results.map((product) => (
            <div key={product.id} className="bg-white p-4 rounded-xl shadow">
              <img
                src={product.image || "/src/assets/products/default.png"}
                alt={product.name}
                className="h-44 w-full object-cover rounded-lg mb-4"
              />
              <h2 className="font-semibold mb-2">{product.name}</h2>
              <p className="mb-3">{product.price || "$0"}</p>
              <button onClick={()=> addToCart(product)} className="w-full bg-[#272343] text-white py-2 rounded-lg">Add to Cart</button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchResults;