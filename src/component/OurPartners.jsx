import React from "react";

const partners = [
  {
    name: "Daikin",
    logo: "https://logos-world.net/wp-content/uploads/2023/01/Daikin-Logo.png",
  },
  {
    name: "Blue Star",
    logo: "https://anbisolutions.com/wp-content/uploads/2020/09/Blue_Star_primary_logo.png",
  },
  {
    name: "Orient Electric",
    logo: "https://companieslogo.com/img/orig/ORIENTELEC.NS_BIG-170a4acd.png?t=1655919047",
  },
  {
    name: "Voltas",
    logo: "https://i.pinimg.com/736x/bb/08/0e/bb080e4e0f6588240fdb0f5e1b57d2ca.jpg",
  },
];

const OurPartners = () => {
  return (
    <section className="w-full bg-white py-16 px-4">
      {/* Heading */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-black">
          Our Partners
        </h2>
      </div>

      {/* Logos */}
      <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-8">
        {partners.map((partner, index) => (
          <div
            key={index}
            className="flex items-center justify-center bg-white rounded-2xl border border-gray-200 h-32 shadow-sm hover:shadow-md transition"
          >
            <img
              src={partner.logo}
              alt={partner.name}
              className="max-h-12 md:max-h-14 object-contain"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurPartners;
