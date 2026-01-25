import SectionTitle from "./SectionTitle";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { User } from "lucide-react";

const Client = () => {

  const clientSays = [
    {
      id: 1,
      description:
        "This company completely transformed the way we work. Their service is fast, reliable, and very professional.",
      name: "John Doe",
      position: "CEO, AlphaTech",
    },
    {
      id: 2,
      description:
        "I was impressed by the quality of support we received. Every issue was handled quickly and with care.",
      name: "Sarah Williams",
      position: "Marketing Director, BrightAds",
    },
    {
      id: 3,
      description:
        "Their team exceeded our expectations. We saw a huge improvement in productivity after using their solution.",
      name: "Michael Brown",
      position: "Operations Manager, WorkFlow Ltd",
    },
    {
      id: 4,
      description:
        "Highly recommended! The platform is easy to use and the results speak for themselves.",
      name: "Emily Johnson",
      position: "Founder, StartSmart",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 1800,
    speed: 500,
    slidesToScroll: 1,
    slidesToShow: 2,
    responsive: [
      {
        breakpoint: 1024, // md
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 640, // sm
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section className="w-full py-10 md:py-14 lg:py-20">
      <div className="w-full max-w-7xl mx-auto px-4">

        <SectionTitle
          title="What our client says about us"
          mb="mb-6 md:mb-11"
        />

        <div className="w-full">
          <Slider {...settings}>
            {clientSays.map((client) => (
              <div key={client.id} className="px-2 md:px-4">
                <div className="h-full border border-[#e1e1e3] rounded-lg p-5 sm:p-6 md:p-8 lg:p-10 bg-white">

                  {/* Description */}
                  <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-[#636270] font-normal mb-6 leading-relaxed">
                    {client.description}
                  </p>

                  {/* User info */}
                  <div className="flex items-center gap-4">
                    <div className="flex-shrink-0">
                      <User className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 text-[#272343]" />
                    </div>

                    <div>
                      <h4 className="text-lg sm:text-xl font-medium text-[#272343]">
                        {client.name}
                      </h4>
                      <p className="text-sm sm:text-base text-[#9a9caa]">
                        {client.position}
                      </p>
                    </div>
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

export default Client;