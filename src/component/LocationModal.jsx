import { useLocation } from "../context/LocationContext";

function LocationModal() {
  const { setShowModal, selectCity } = useLocation();

  return (
    <div className="modal-overlay">
      <div className="modal">
        <h2>Select Your City</h2>

        <button
          className="detect-btn"
          onClick={() => selectCity("Detected City")}
        >
          Detect My Location
        </button>

        <p>or</p>

        <input
          placeholder="Enter Pincode"
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              selectCity("Manual City");
            }
          }}
        />

        <button className="close-btn" onClick={() => setShowModal(false)}>
          Close
        </button>
      </div>
    </div>
  );
}

export default LocationModal;
