import { Armchair, Banknote, CreditCard } from "lucide-react";
import { Link } from "react-router-dom";
import { FaFacebook,FaTwitter, FaInstagram, FaYoutube} from 'react-icons/fa';

const Footer = () => {
    return (
    <footer>
  {/* TOP FOOTER */}
  <div className="footer_top w-full border-t border-b border-[#e1e3e5] pt-12 md:pt-16 lg:pt-20 pb-10 md:pb-14">
    <div className="lg:container mx-auto px-4">
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        
        {/* LOGO & ABOUT */}
        <div className="text-center md:text-left">
          <div className="logo_wrapper mb-6 flex justify-center md:justify-start">
            <Link
              to="/"
              className="text-2xl md:text-3xl text-black font-inter font-medium capitalize flex items-center gap-2"
            >
              <Armchair size="2rem" color="#029fae" />
              FurniHub
            </Link>
          </div>

          <p className="text-sm md:text-base text-[#272343] font-inter font-normal mb-4 max-w-[350px] mx-auto md:mx-0">
          FurniHub is your go-to destination for stylish, comfortable, and high-quality furniture. We bring together modern designs and timeless pieces to help you create spaces that feel both elegant and functional. At FurniHub, we focus on quality craftsmanship, fair pricing, and furniture that turns every house into a home.
          </p>

          <div className="footer_social flex items-center justify-center md:justify-start gap-3">
            <Link className="p-3 rounded-full border-[#007580] border">
              <FaFacebook size="1.5rem" color="#007580" />
            </Link>
            <Link className="p-3">
              <FaTwitter size="1.5rem" color="#007580" />
            </Link>
            <Link className="p-3">
              <FaInstagram size="1.5rem" color="#007580" />
            </Link>
            <Link className="p-3">
              <FaYoutube size="1.5rem" color="#007580" />
            </Link>
          </div>
        </div>

        {/* CATEGORY */}
        <div className="footer_wrapper text-center md:text-left">
          <h3 className="text-lg md:text-xl text-[#9a9caa] font-inter font-medium uppercase">
            category
          </h3>
          <ul className="space-y-2 mt-4">
            {["sofa", "chair", "table", "light", "bed"].map(item => (
              <li key={item}>
                <Link
                  className="text-base text-[#272343] font-inter font-normal capitalize"
                  to={`/${item}`}
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* SUPPORT */}
        <div className="footer_wrapper text-center md:text-left">
          <h3 className="text-lg md:text-xl text-[#9a9caa] font-inter font-medium uppercase">
            support
          </h3>
          <ul className="space-y-2 mt-4">
            {[
              "help & support",
              "terms & condition",
              "privacy policy",
              "help",
            ].map(item => (
              <li key={item}>
                <Link
                  className="text-base text-[#272343] font-inter font-normal capitalize"
                  to="/support"
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* NEWSLETTER */}
        <div className="newsletter text-center md:text-left">
          <h3 className="text-lg md:text-xl text-[#9a9caa] font-inter font-medium uppercase mb-4">
            newsletter
          </h3>

          <form className="flex flex-col sm:flex-row items-center gap-3 max-w-[424px] mx-auto md:mx-0">
            <input
              type="email"
              placeholder="Your Email..."
              className="w-full h-[46px] border-[#e1e3e5] border rounded-lg pl-3"
            />
            <button
              type="submit"
              className="w-full sm:w-[127px] h-[46px] bg-[#007580] text-white font-semibold rounded-lg"
            >
              Subscribe
            </button>
          </form>
        </div>

      </div>
    </div>
  </div>

  {/* BOTTOM FOOTER */}
  <div className="footer_bottom w-full py-6">
    <div className="lg:container mx-auto px-4">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
        <p className="text-sm md:text-base text-[#9a9caa] font-inter text-center sm:text-left">
          Designed & Developed by{" "}
          <span className="text-[#272343] font-medium">Udeh Cosmas</span>
        </p>
      </div>
    </div>
  </div>
</footer>
    );
        
};

export default Footer;