import React, { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import ApplianceCard from "./ApplianceCard";

const appliances = [
  {
    title: "Sell Window AC",
    price: "5500",
    image: "src/assets/large/window-ac.jpg",
  },
  {
    title: "Sell Washing Machine",
    price: "1800",
    image: "src/assets/large/washing-machine.jpg",
  },
  {
    title: "Sell Split AC",
    price: "6000",
    image: "src/assets/large/split-ac.jpg",
  },
  {
    title: "Sell Refrigerator",
    price: "2200",
    image: "src/assets/large/refrigerator.jpg",
  },
  {
    title: "Dishwasher",
    price: "1050",
    image: "src/assets/large/dishwasher.jpg",
  },
];

export const LargeAppliances = () => {
  const sliderRef = useRef(null);
  const CARD_WIDTH = 280; // card + gap

  const scrollNext = () => {
    sliderRef.current.scrollBy({ left: CARD_WIDTH, behavior: "smooth" });
  };

  const scrollPrev = () => {
    sliderRef.current.scrollBy({ left: -CARD_WIDTH, behavior: "smooth" });
  };

  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-center">
          Sell Large Appliances
        </h1>

        <div className="flex items-center justify-end mb-8">
          <div className="flex gap-3">
            <button
              onClick={scrollPrev}
              className="p-2 rounded-full border hover:bg-slate-100"
            >
              <ChevronLeft />
            </button>
            <button
              onClick={scrollNext}
              className="p-2 rounded-full border hover:bg-slate-100"
            >
              <ChevronRight />
            </button>
          </div>
        </div>

        <div
          ref={sliderRef}
          className="flex gap-6 scroll-smooth scrollbar-hide overflow-x-hidden px-8"
        >
          {appliances.map((item, index) => (
            <div key={index} className="min-w-[260px]">
              <ApplianceCard
                title={item.title}
                price={item.price}
                image={item.image}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
