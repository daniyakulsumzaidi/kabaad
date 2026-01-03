import { MapPin } from "lucide-react";
import { useLocation } from "../context/LocationContext";

function CityModal() {
  const { setCity, setShowModal } = useLocation();

  const selectCity = () => {
    setCity("Mumbai"); // example
    setShowModal(false);
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 px-4">
      <div className="bg-white rounded-2xl p-6 w-full max-w-md shadow-2xl">
        {/* Header */}
        <h2 className="text-xl font-bold text-slate-800 mb-1">
          Select Your City
        </h2>
        <p className="text-sm text-slate-500 mb-5">
          Choose your city to see nearby services
        </p>

        {/* Detect Location */}
        <button
          onClick={selectCity}
          className="w-full mb-4 flex items-center justify-center gap-2 border border-slate-300 px-4 py-3 rounded-xl font-medium hover:bg-slate-50 transition"
        >
          <p className="flex gap-2">
            <MapPin /> Detect My Location
          </p>
        </button>

        {/* Divider */}
        <div className="flex items-center gap-3 mb-4">
          <div className="flex-1 h-px bg-slate-200" />
          <span className="text-xs text-slate-400">OR</span>
          <div className="flex-1 h-px bg-slate-200" />
        </div>

        {/* Pincode Input */}
        <input
          type="text"
          placeholder="Enter Pincode"
          className="w-full border border-slate-300 px-4 py-3 rounded-xl outline-none focus:ring-2 focus:ring-slate-300"
        />

        {/* Footer */}
        <button
          onClick={() => setShowModal(false)}
          className="mt-5 w-full text-sm text-slate-500 hover:text-slate-700"
        >
          Cancel
        </button>
      </div>
    </div>
  );
}

export default CityModal;
