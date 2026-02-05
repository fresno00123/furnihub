import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SectionTitle from "./SectionTitle";
// import { Pause } from "lucide-react";
import Cat1 from "/src/assets/categories/categories_1.png"
import Cat2 from "/src/assets/categories/categories_2.png"
import Cat3 from "/src/assets/categories/categories_3.png"
import Cat4 from "/src/assets/categories/categories_4.png"

const Categories = () => {
  const categories = [
    {
      title: "Wing Chair",
      products: "3,584 Products",
      image: Cat1,
    },
    {
      title: "Wooden Chair",
      products: "157 Products",
      image: Cat2,
    },
    {
      title: "Desk Chair",
      products: "154 Products",
      image: Cat3,
    },
    {
      title: "Park Bench",
      products: "154 Products",
      image: Cat4,
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
    <section className="w-full py-10 sm:py-12 md:py-14 lg:py-20">
      <div className="container mx-auto px-4">
        <SectionTitle title="Top Categories" mb="mb-8 md:mb-11" />

        <div className="relative w-full">
          <Slider {...settings}>
            {categories.map((category, index) => (
              <div key={index} className="px-2 sm:px-3">
                <div className="relative rounded-lg overflow-hidden">

                  {/* IMAGE */}
                  <img
                    src={category.image}
                    alt={category.title}
                    className="
                      w-full
                      h-[220px] sm:h-[260px] md:h-[320px] lg:h-[424px]
                      object-cover
                    "
                  />

                  {/* OVERLAY */}
                  <div className="absolute bottom-0 left-0 w-full bg-black/50 p-3 sm:p-4">
                    <h4 className="text-base sm:text-lg md:text-xl text-white font-semibold capitalize">
                      {category.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-white capitalize">
                      {category.products}
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

export default Categories;