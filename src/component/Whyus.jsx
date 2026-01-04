import React from "react";
import {
  IndianRupee,
  ShoppingCart,
  Truck,
  ShieldCheck,
  Handshake,
} from "lucide-react";

const features = [
  {
    title: "Transparent Pricing",
    desc: "No hidden charges—what you see is what you get",
    icon: IndianRupee,
  },
  {
    title: "As Easy as Grocery Shopping",
    desc: "Experience a simple way to sell your used electronics",
    icon: ShoppingCart,
  },
  {
    title: "Fastest Pickup",
    desc: "Get your old appliance picked up within 24–48 hours",
    icon: Truck,
  },
  {
    title: "Secure Transactions",
    desc: "Payments are processed securely and reliably",
    icon: ShieldCheck,
  },
  {
    title: "Trusted Across India",
    desc: "Serving customers nationwide with reliability and satisfaction",
    icon: Handshake,
  },
];

const Whyus = () => {
  return (
    <section className="w-full bg-white py-20 px-4">
      {/* Heading */}
      <div className="max-w-6xl mx-auto text-center mb-14">
        <h2 className="text-3xl md:text-4xl font-bold text-black">
          Why Choose Selsmart?
        </h2>
        <p className="text-gray-600 mt-3">
          Eco-Friendly Recycling by India’s largest E-waste Recycler
        </p>
      </div>

      {/* Content */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left Image */}
        <div className="flex justify-center">
          <img
            src="https://selsmart.in/static/media/why%20choose%20us%20JPEG%20(2).d078077013937432240e.jpg"
            alt="Why choose Selsmart"
            className="max-w-full h-auto rounded-xl"
          />
        </div>

        {/* Right Features */}
        <div className="space-y-6">
          {features.map((item, index) => {
            const Icon = item.icon;
            return (
              <div key={index} className="flex gap-4 items-start">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-green-100 flex items-center justify-center">
                  <Icon className="w-6 h-6 text-green-600" strokeWidth={1.8} />
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-black">
                    {item.title}
                  </h4>
                  <p className="text-gray-600 text-sm mt-1 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Whyus;
