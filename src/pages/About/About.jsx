import React from "react";
import { CheckCircle } from "lucide-react";

function About() {
  return (
    <div className="min-h-screen bg-gray-50 px-6 py-14">
      <div className="max-w-6xl mx-auto bg-white shadow-lg rounded-3xl p-10">

        {/* Header */}
        <h1 className="text-4xl font-bold text-[#272343] mb-6">
          About Our Furniture Store
        </h1>

        <p className="text-gray-700 leading-relaxed mb-8 max-w-3xl">
          We create premium furniture that blends comfort, quality, and modern
          design. Every piece is crafted to elevate your home and last for
          years.
        </p>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10">
          {[
            { label: "Happy Clients", value: "2,500+" },
            { label: "Products Sold", value: "12k+" },
            { label: "Awards Won", value: "15" },
            { label: "Years Experience", value: "8+" },
          ].map((item, i) => (
            <div key={i} className="text-center p-5 bg-gray-50 rounded-xl">
              <h2 className="text-2xl font-bold text-[#272343]">
                {item.value}
              </h2>
              <p className="text-gray-500 text-sm">{item.label}</p>
            </div>
          ))}
        </div>

        {/* Values */}
        <div className="mb-10">
          <h2 className="text-2xl font-semibold text-[#272343] mb-4">
            Why Choose Us
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              "Premium quality materials",
              "Modern and elegant designs",
              "Fast and reliable delivery",
              "Affordable pricing",
              "Friendly customer support",
              "Eco-friendly production",
            ].map((text, i) => (
              <div key={i} className="flex items-center gap-3">
                <CheckCircle className="text-green-600" size={20} />
                <p className="text-gray-700">{text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Mission */}
        <div className="bg-[#272343] text-white p-8 rounded-2xl">
          <h2 className="text-2xl font-semibold mb-3">Our Mission</h2>
          <p className="leading-relaxed max-w-3xl">
            To deliver stylish, durable, and affordable furniture that helps
            people create spaces they love living in.
          </p>
        </div>

      </div>
    </div>
  );
}

export default About;