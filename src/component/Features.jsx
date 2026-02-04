import SectionTitle from "./SectionTitle";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { ShoppingCart } from "lucide-react";
import { useCart } from "../context/CartContext";

const Features = () => {
  const {addToCart} = useCart();
  const features = [
    {
            title: 'Modern Pendant Light',
            status: 'Sales',
            price: '$120',
            image: '/src/assets/Banner/17.jpg',
      currentPrice: '$200',
    },
    {
            title: 'Glass Center Table',
            status: 'Sales',
            price: '$260',
            image: '/src/assets/Banner/5.jpg',
    },
    {
          title: 'Round Dining Table',
            status: 'Sales',
            price: '$390',
            image: "/src/assets/Banner/6.jpg",
    },
    {
            title: 'Minimal Wooden Bed',
            status: 'Sales',
            price: '$550',
            image: '/src/assets/Banner/72.jpg',
      currentPrice: '$520',
    },
  ];

  const settings = {
    dots: true,
    arrows: true,
    infinite: true,
    speed: 500,
    adaptiveHeight: true,
    slidesToScroll: 1,
    slidesToShow: 3,
    autoplay: true,
    autoplaySpeed: 1800,
    PauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024, // md
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768, // sm
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section className="w-full py-10 md:py-14 lg:py-20">
      <div className="w-full lg:container mx-auto px-4">
        <SectionTitle title="Featured Products" mb="mb-8 md:mb-11" />

        {/* IMPORTANT: w-full */}
        <div className="w-full">
          <Slider {...settings}>
            {features?.map((feature, index) => (
              <div key={index} className="px-2">

                <div className="bg-white rounded-lg shadow-sm p-4 sm:p-5">

                  {/* IMAGE */}
                  <div className="relative mb-4">
                    <img
                      src={feature.image}
                      alt={feature.title}
                      className="w-full h-[220px] sm:h-[250px] md:h-[280px] object-contain"
                    />

                    {feature.status && (
                      <span className="absolute top-3 left-3 bg-[#007580] text-white px-3 py-1 rounded-lg text-xs">
                        {feature.status}
                      </span>
                    )}
                  </div>

                  {/* CONTENT */}
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <h4 className="text-sm sm:text-base text-[#007580] capitalize">
                        {feature.title}
                      </h4>

                      <button onClick={() => addToCart(feature)} className="bg-[#007580] h-9 w-9 sm:h-11 sm:w-11 rounded-lg flex items-center justify-center">
                        <ShoppingCart size={18} color="#fff" />
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

export default Features;