import React from "react";
import { MessageCircle } from "lucide-react";

const StayUpdated = () => {
  return (
    <section className="w-full bg-green-50 py-20 px-4">
      <div className="max-w-3xl mx-auto text-center space-y-6">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-black">
          Stay Updated With Selsmart
        </h2>

        {/* Subtext */}
        <p className="text-gray-600 text-base md:text-lg">
          Sign up for free to receive updates, tips, and the latest offers from
          Selsmart via WhatsApp!
        </p>

        <p className="text-gray-500 text-sm">
          Rest assured; we won’t spam you with messages :)
        </p>

        {/* Input + Button */}
        <div className="flex items-center justify-center mt-8">
          <div className="flex w-full max-w-xl rounded-xl overflow-hidden shadow-sm border border-gray-200 bg-white">
            <input
              type="tel"
              placeholder="Enter your number"
              className="flex-1 px-5 py-4 text-sm outline-none"
            />

            <button className="bg-green-700 px-6 flex items-center justify-center hover:bg-green-800 transition">
              <MessageCircle className="w-6 h-6 text-white" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StayUpdated;
