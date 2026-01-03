import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import ApplianceCard from "./ApplianceCard";

const appliances = [
  {
    title: "Sell Geyser",
    price: "550",
    image: "src/assets/small/geyser.jpg",
  },
  {
    title: "Sell Fan",
    price: "250",
    image: "src/assets/small/fan.jpg",
  },
  {
    title: "Sell Heater",
    price: "500",
    image: "src/assets/small/heater.jpg",
  },
  {
    title: "Sell Food Processor",
    price: "300",
    image: "src/assets/small/processor.jpg",
  },
];

export const SmallAppliances = () => {
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
          Sell Small Appliances
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
