import { Clock3, Percent, ShieldCheck, Truck } from "lucide-react";

const Delivery = () => {
  return (
    <div className="max-w-7xl bg-white mx-auto shadow-md p-5 sm:p-7 rounded-2xl">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

        {/* Discount */}
        <div className="flex items-center gap-4">
          <Percent className="w-8 h-8 sm:w-10 sm:h-10 text-[#007580]" />
          <div>
            <h4 className="text-base text-[#272343] capitalize font-inter font-medium mb-1">
              Discount
            </h4>
            <p className="text-sm text-[#9a9caa]">
              Every week new sales
            </p>
          </div>
        </div>

        {/* Free Delivery */}
        <div className="flex items-center gap-4">
          <Truck className="w-8 h-8 sm:w-10 sm:h-10 text-[#007580]" />
          <div>
            <h4 className="text-base text-[#272343] capitalize font-inter font-medium mb-1">
              Free Delivery
            </h4>
            <p className="text-sm text-[#9a9caa]">
              100% Free for all orders
            </p>
          </div>
        </div>

        {/* Support */}
        <div className="flex items-center gap-4">
          <Clock3 className="w-8 h-8 sm:w-10 sm:h-10 text-[#007580]" />
          <div>
            <h4 className="text-base text-[#272343] capitalize font-inter font-medium mb-1">
              Great Support 24/7
            </h4>
            <p className="text-sm text-[#9a9caa]">
              We care your experience
            </p>
          </div>
        </div>

        {/* Secure Payment */}
        <div className="flex items-center gap-4">
          <ShieldCheck className="w-8 h-8 sm:w-10 sm:h-10 text-[#007580]" />
          <div>
            <h4 className="text-base text-[#272343] capitalize font-inter font-medium mb-1">
              Secure Payment
            </h4>
            <p className="text-sm text-[#9a9caa]">
              100% Secure Payment Method
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Delivery;