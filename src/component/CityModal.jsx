import { useLocation } from "../context/LocationContext";

function CityModal() {
  const { setCity, setShowModal } = useLocation();

  const selectCity = () => {
    setCity("Mumbai"); // example
    setShowModal(false);
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl p-6 w-[400px] text-center">
        <h2 className="text-xl font-bold mb-4">Select Your City</h2>

        <button
          onClick={selectCity}
          className="border px-4 py-2 rounded w-full mb-3"
        >
          📍 Detect My Location
        </button>

        <input
          placeholder="Enter Pincode"
          className="border w-full p-2 rounded"
        />
      </div>
    </div>
  );
}

export default CityModal;
