import { useCart } from "../../context/CartContext";

const Cart = () => {
  const { cart, removeFromCart } = useCart();

  // Calculate total price
  const totalPrice = cart.reduce((acc, item) => {
    // Remove the $ sign and convert to number
    const priceNumber = Number(item.price.replace("$", ""));
    return acc + priceNumber;
  }, 0);

  return (
    <div className="max-w-5xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold mb-6">Your Cart</h1>

      {cart.length === 0 ? (
        <p className="text-gray-500">Your cart is empty.</p>
      ) : (
        <>
          <div className="space-y-4">
            {cart.map((item, index) => (
              <div
                key={index}
                className="flex justify-between items-center bg-white p-4 rounded-lg shadow"
              >
                <div>
                  <h2 className="font-semibold">{item.title || item.name}</h2>
                  <p>{item.price}</p>
                </div>

                <button
                  onClick={() => removeFromCart(index)}
                  className="text-red-500 font-medium cursor-pointer"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>

          <div className="text-right mt-6 font-bold space-y-1">
            <div>Total Items: {cart.length}</div>
            <div>Total Price: ${totalPrice}</div>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;