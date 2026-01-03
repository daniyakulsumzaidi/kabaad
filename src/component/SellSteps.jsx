import React from "react";
import { BadgeIndianRupee, Truck, Zap } from "lucide-react";

const steps = [
  {
    title: "Get the Best Offer",
    desc: "Find out your product's value in just a few clicks",
    icon: BadgeIndianRupee,
  },
  {
    title: "Doorstep Pickup",
    desc: "Schedule now, and we’ll pick up your product within 24–48 hours",
    icon: Truck,
  },
  {
    title: "Instant Payment",
    desc: "Receive your payment online immediately",
    icon: Zap,
  },
];

const SellSteps = () => {
  return (
    <section className="w-full bg-white py-16 px-4">
      {/* Heading */}
      <div className="max-w-6xl mx-auto text-center mb-14">
        <h2 className="text-3xl md:text-4xl font-bold text-black">
          Sell Used Electronics in 3 Simple Steps
        </h2>
        <p className="text-gray-600 mt-3">
          India’s largest online platform for selling used electronics
        </p>
      </div>

      {/* Cards */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {steps.map((step, index) => {
          const Icon = step.icon;
          return (
            <div
              key={index}
              className="bg-green-50 rounded-2xl p-8 text-center shadow-sm hover:shadow-lg transition-all duration-300"
            >
              {/* Icon */}
              <div className="w-24 h-24 mx-auto mb-6 flex items-center justify-center bg-green-100 rounded-full">
                <Icon className="w-12 h-12 text-green-600" strokeWidth={1.8} />
              </div>

              {/* Text */}
              <h3 className="text-xl font-semibold text-black mb-3">
                {step.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {step.desc}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default SellSteps;
