import React from "react";

const stats = [
  {
    value: "15+ Years of Experience",
    desc: "India’s largest recycler for e-waste and EV batteries",
  },
  {
    value: "25+ Cities",
    desc: "Convenient doorstep pickup services all over India",
  },
  {
    value: "1,50,000+ Items*",
    desc: "On track to collect and recycle used electronics every month",
  },
];

const OurJourney = () => {
  return (
    <section className="w-full bg-[#3f5f45] py-20 px-4">
      {/* Heading */}
      <div className="max-w-6xl mx-auto text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-white">
          Our Journey So Far
        </h2>
        <p className="text-white/80 mt-4 text-base md:text-lg">
          Experience the Joy of Effortlessly Selling Your Old Electronics
        </p>
      </div>

      {/* Stats */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
        {stats.map((item, index) => (
          <div key={index} className="space-y-4">
            <h3 className="text-2xl md:text-3xl font-bold text-white">
              {item.value}
            </h3>
            <p className="text-white/80 text-sm md:text-base leading-relaxed">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurJourney;
