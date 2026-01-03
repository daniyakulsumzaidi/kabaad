import React from "react";

const BulkPickup = () => {
  return (
    <section className="w-full bg-white">
      {/* Top Trust Line */}
      <div className="py-12 text-center border-b border-gray-200">
        <h2 className="text-2xl md:text-3xl font-semibold text-black">
          Trusted by Over 1,00,000 Satisfied Customer
        </h2>
      </div>

      {/* Main Content */}
      <div className="bg-[#3f5f45] py-20 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-white space-y-6">
            <h3 className="text-3xl md:text-4xl font-bold leading-tight">
              Bulk Pickup Made <br /> Easy
            </h3>

            <p className="text-white/80 text-base leading-relaxed max-w-lg">
              Partner with Selsmart for efficient bulk appliance pickups that
              simplify responsible recycling.
            </p>

            <p className="text-white/90 text-sm">
              Housing Societies | Institutions | Offices
            </p>

            <button className="mt-4 inline-block border-2 border-white text-white px-8 py-3 rounded-lg font-medium hover:bg-white hover:text-[#3f5f45] transition">
              Bulk Pickup Request
            </button>
          </div>

          {/* Right Image */}
          <div className="flex justify-center">
            <img
              src="https://images.unsplash.com/photo-1603791440384-56cd371ee9a7"
              alt="Bulk pickup"
              className="rounded-2xl w-full max-w-md object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BulkPickup;
