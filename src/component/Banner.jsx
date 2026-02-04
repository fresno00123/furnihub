import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { MoveRight } from "lucide-react";

import banner1 from '/src/assets/Banner/banner_image.png';
import banner2 from '/src/assets/Banner/h.jpg';
import banner3 from '/src/assets/Banner/p.jpg';
import banner4 from '/src/assets/Banner/q.jpg'; 


const Banner = () => {
  
  const products = [
    {
      id: 1,
      title: "Best Furniture collection for your interior",
      subTitle: "welcome to chairs",
      image: banner1,
    },
    {
      id: 2,
      title: "Best Furniture collection for your interior",
      subTitle: "welcome to chairs",
      image: banner2,
    },
    {
      id: 3,
      title: "Best Furniture collection for your interior",
      subTitle: "welcome to chairs",
      image: banner3,
    },
    {
      id: 4,
      title: "Best Furniture collection for your interior",
      subTitle: "welcome to chairs",
      image: banner4,
    },
  ]

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 3000,
    PauseOnHover: true,
  };

  return (
    <div className="w-full">
      <div className="lg:container mx-auto px-4">
        <Slider {...settings}>
          {products.map((product) => (
            <div key={product.id} className="border-none">

              {/* SLIDE */}
              <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-8 py-8 md:py-12 lg:py-20">

                {/* TEXT */}
                <div className="w-full md:w-1/2 text-center md:text-left">
                  <p className="text-xs sm:text-sm uppercase text-[#272343] mb-2">
                    {product.subTitle}
                  </p>

                  <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold text-[#272343] leading-tight max-w-full lg:max-w-[631px] mb-6">
                    {product.title}
                  </h3>

                  <button className="mx-auto md:mx-0 max-w-[140px] sm:max-w-[160px] lg:max-w-[171px] w-full h-[44px] sm:h-[48px] lg:h-[52px] bg-[#029fae] rounded-lg capitalize text-white flex items-center justify-center gap-2 hover:bg-gray-400 transition">
                    shop now
                    <MoveRight size={18} />
                  </button>
                </div>

                {/* IMAGE */}
                <div className=" w-full md:w-1/2 flex justify-center md:justify-end">
                 <div className='flex items-center justify-center rounded-full bg-white w-[250px] h-[250px] sm:w-[300px] sm:h-[300px] md:w-[360px] md:h-[360px] lg:w-[420px] lg:h-[460px] shadow-lg'>

                  <img 
                    src={product.image}
                    alt={product.title}
                    className="w-[160px] sm:w-[200px] md:w-[260px] lg:w-[320px] object-contain"
                  />
                  </div>
                </div>

              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  )
}

export default Banner