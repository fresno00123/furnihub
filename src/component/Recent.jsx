import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { ShoppingCart } from "lucide-react";
import SectionTitle from "./SectionTitle";
import { useCart } from "../context/CartContext";

const Recent = () => {
  const { addToCart } = useCart();

  const features = [
    {
      title: "library stool",
      status: "New",
      price: "$250",
      image: "/src/assets/features/product_1.png",
      currentPrice: "$200",
    },
    {
      title: "library stool Chair",
      status: "Sales",
      price: "$250",
      image: "/src/assets/features/product_2.png",
    },
    {
      title: "library stool Chair",
      price: "$250",
      image: "/src/assets/features/product_3.png",
    },
    {
      title: "library stool Chair",
      status: "New",
      price: "$250",
      image: "/src/assets/features/product_4.png",
      currentPrice: "$200",
    },
  ];

  const settings = {
    arrows: true,
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 1800,
    pauseOnHover: true,
    slidesToScroll: 1,
    slidesToShow: 4,
    responsive: [
      {
        breakpoint: 1024, // md
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 640, // sm
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className="w-full py-10 md:py-14 lg:py-20">
      <div className="w-full max-w-7xl mx-auto px-4">

        <SectionTitle title="Recently Added" mb="mb-6 md:mb-11" />

        <div className="w-full">
          <Slider {...settings}>
            {features.map((feature, index) => (
              <div key={index} className="px-2 md:px-3">
                <div className="bg-white rounded-lg overflow-hidden">

                  {/* Image */}
                  <div className="relative">
                    <img
                      src={feature.image}
                      alt={feature.title}
                      className="w-full h-[220px] sm:h-[260px] md:h-[280px] object-cover"
                    />

                    {feature.status && (
                      <span className="absolute top-4 left-4 bg-[#007580] text-white px-3 py-1 text-xs sm:text-sm rounded-lg">
                        {feature.status}
                      </span>
                    )}
                  </div>

                  {/* Content */}
                  <div className="p-4 sm:p-5">
                    <div className="flex items-center justify-between gap-3 mb-3">
                      <h4 className="text-sm sm:text-base text-[#007580] capitalize font-inter">
                        {feature.title}
                      </h4>

                      <button
                        onClick={() => addToCart(feature)}
                        className="bg-[#007580] w-10 h-10 sm:w-11 sm:h-11 rounded-lg flex items-center justify-center hover:bg-[#005f66] transition"
                      >
                        <ShoppingCart className="text-white w-5 h-5" />
                      </button>
                    </div>

                    <p className="text-lg sm:text-xl font-semibold text-[#272343] flex items-center gap-2">
                      {feature.price}
                      {feature.currentPrice && (
                        <span className="text-sm text-[#9a9caa] line-through">
                          {feature.currentPrice}
                        </span>
                      )}
                    </p>
                  </div>

                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Recent;