import { useState } from "react";
import SectionTitle from "../../component/SectionTitle";
import { ShoppingCart } from "lucide-react";
import { useCart } from "../../context/CartContext";

import product1 from "/src/assets/products/product_5.png";
import product2 from "/src/assets/Banner/57.jpg";
import product3 from "/src/assets/Banner/64.jpg";
import product4 from "/src/assets/Banner/5.jpg";
import product5 from "/src/assets/Banner/9.jpg";
import product6 from "/src/assets/Banner/c.jpg";
import product7 from "/src/assets/Banner/72.jpg";
import product8 from "/src/assets/products/product_8.png";
import product9 from "/src/assets/Banner/64.jpg";
import product10 from "/src/assets/Banner/m.jpg";
import product11 from "/src/assets/Banner/17.jpg";
import product12 from "/src/assets/Banner/22.jpg";
import product13 from "/src/assets/Banner/58.jpg";
import product14 from "/src/assets/Banner/a.jpg";
import product15 from "/src/assets/Banner/d.jpg";
import product16 from "/src/assets/Banner/68.jpg";
import product17 from "/src/assets/Banner/10.jpg";
import product18 from "/src/assets/Banner/59.jpg";
import product19 from "/src/assets/Banner/60.jpg";
import product20 from "/src/assets/Banner/66.jpg";
import product21 from "/src/assets/Banner/13.jpg";
import product22 from "/src/assets/Banner/15.jpg";
import product23 from "/src/assets/Banner/12.jpg";
import product24 from "/src/assets/Banner/6.jpg";

const Product = () => {
  const { addToCart } = useCart();

  const [active, setActive] = useState({
    id: 0,
    product: "all",
  });

  const productTitle = [
    { id: 0, title: "all", product: "all" },
    { id: 1, title: "newest", product: "newest" },
    { id: 2, title: "trending", product: "trending" },
    { id: 3, title: "best seller", product: "best_seller" },
  ];

  const products = [
    { title: "Night Lamp", status: "New", price: "$80", image: product1, currentPrice: "$100", product: "newest" },
    { title: "Modern Queen Bed", status: "Sales", price: "$580", image: product2, product: "newest" },
    { title: "Deluxe Queen Bed", status: "New", price: "$610", image: product3, currentPrice: "$600", product: "newest" },
    { title: "Glass Center Table", status: "Sales", price: "$260", image: product4, product: "newest" },

    { title: "Office Work Desk", status: "Sales", price: "$280", image: product5, product: "trending" },
    { title: "Classic Wooden Chair", status: "New", price: "$180", image: product6, currentPrice: "$200", product: "trending" },
    { title: "Minimal Wooden Bed", status: "Sales", price: "$550", image: product7, product: "trending" },
    { title: "Premium Designer Bed", status: "Sales", price: "$980", image: product8, product: "trending" },

    { title: "Modern Storage King Bed", status: "New", price: "$900", image: product9, currentPrice: "$200", product: "best_seller" },
    { title: "Scandinavian Chair", status: "Sales", price: "$175", image: product10, product: "best_seller" },
    { title: "Modern Pendant Light", status: "Sales", price: "$120", image: product11, product: "best_seller" },
    { title: "Industrial Hanging Light", status: "Sales", price: "$200", image: product12, product: "best_seller" },

    { title: "Compact Laptop Table", status: "Sales", price: "$160", image: product17, product: "all" },
    { title: "Minimal Platform Bed", status: "Sales", price: "$480", image: product18, product: "all" },
    { title: "Upholstered Bed Frame", status: "Sales", price: "$720", image: product19, product: "all" },
    { title: "Round Dining Table", status: "Sales", price: "$390", image: product24, product: "all" },
  ];

  // ✅ allow ALL tab to show everything
  const productFilter =
    active.product === "all"
      ? products
      : products.filter((p) => p.product === active.product);

  return (
    <div className="lg:container mx-auto">

      <div className="flex flex-col items-center justify-center">
        <SectionTitle title={"our product"} textAlign={"center"} mb={"mb-5"} /><div className="flex items-center justify-center gap-6 mb-11 flex-wrap">
          {productTitle.map((title) => (
            <button
              key={title.id}
              onClick={() => setActive(title)}
              className={`text-base font-black uppercase cursor-pointer ${
                active.id === title.id
                  ? "text-[#272343]"
                  : "text-[#9a9caa]"
              }`}
            >
              {title.title}
            </button>
          ))}
        </div>
      </div>

      {/* ✅ Responsive grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {productFilter.map((product, index) => (
          <div key={index} className="p-4">

            {/* image */}
            <div className="mb-4 relative">
              <img
                className="w-full max-h-[312px] rounded-lg object-cover"
                src={product.image}
                alt={product.title}
              />

              {product.status && (
                <div className="absolute top-4 left-4 bg-[#007580] text-white px-2 py-1 rounded-lg text-sm">
                  {product.status}
                </div>
              )}
            </div>

            {/* content */}
            <div>
              <h4 className="text-base text-[#007580] capitalize mb-2">
                {product.title}
              </h4>

              <p className="text-xl text-[#272343] font-semibold mb-3 flex gap-2">
                {product.price}
                {product.currentPrice && (
                  <span className="text-sm text-[#9a9caa]">
                    {product.currentPrice}
                  </span>
                )}
              </p>

              {/* ✅ MOBILE BUTTON (under price) */}
              <button
                onClick={() => addToCart(product)}
                className="md:hidden w-full bg-[#007580]                                                                                                                            text-white py-2 rounded-lg flex items-center justify-center gap-2"
              >
                <ShoppingCart size="1.2rem" />
                Add to Cart
              </button>

              {/* ✅ DESKTOP BUTTON (right side like original) */}
              <div className="hidden md:flex justify-end">
                <span
                  onClick={() => addToCart(product)}
                  className="bg-[#007580] h-[44px] w-[44px] rounded-lg flex items-center justify-center cursor-pointer"
                >
                  <ShoppingCart size="1.5rem" color="#fff" />
                </span>
              </div>

            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Product;