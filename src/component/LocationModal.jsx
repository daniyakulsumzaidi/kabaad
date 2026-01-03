import { MapPin } from "lucide-react";
import { useLocation } from "../context/LocationContext";

function LocationModal() {
  const { setShowModal, selectCity } = useLocation();

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white w-[420px] rounded-2xl p-6 text-center shadow-2xl">
        {/* Heading */}
        <h2 className="text-2xl font-bold text-[#0b132b] mb-4">
          Select Your City
        </h2>

        {/* Detect Button */}
        <button
          className="w-full mb-4 px-5 py-3 rounded-full border border-[#1c2541] text-[#1c2541] font-medium hover:bg-[#1c2541] hover:text-white transition"
          onClick={() => selectCity("Detected City")}
        >
          <p className="flex gap-2">
            <MapPin /> Detect My Location
          </p>
        </button>

        {/* OR */}
        <p className="text-sm text-gray-400 mb-3">OR</p>

        {/* Pincode Input */}
        <input
          placeholder="Enter Pincode"
          className="w-full px-4 py-3 rounded-full border border-gray-300 outline-none focus:ring-2 focus:ring-[#0b132b]/30"
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              selectCity("Manual City");
            }
          }}
        />

        {/* Close */}
        <button
          className="mt-5 text-sm text-gray-500 hover:text-[#0b132b]"
          onClick={() => setShowModal(false)}
        >
          Close
        </button>
      </div>
    </div>
  );
}

export default LocationModal;
