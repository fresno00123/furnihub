import { createContext, useContext, useState } from "react";
import toast from "react-hot-toast";
const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  // Add to cart
 const addToCart = (product) => {
  setCart((prev) => [...prev, product]);

  toast.success("Added to cart 🛒", {
    duration: 2000,
  });
};
  // Remove from cart
  const removeFromCart = (index) => {
    setCart((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        cartCount: cart.length,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);