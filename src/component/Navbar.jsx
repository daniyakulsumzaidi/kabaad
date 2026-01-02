import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLocation } from "../context/LocationContext";

function Navbar({ onNavigate }) {
  const navigate = useNavigate();
  const { city, selectCity, setShowModal } = useLocation();

  const [showCity, setShowCity] = useState(false);

  const cities = ["Delhi", "Mumbai", "Bangalore", "Hyderabad", "Chennai"];

  return (
    <nav className="navbar">
      {/* Logo */}
      <div
        className="logo"
        style={{ cursor: "pointer" }}
        onClick={() => onNavigate(navigate, "/")}
      >
        Trash2Cash
      </div>

      {/* City Selector */}
      <div className="city-box">
        <span
          onClick={() => setShowCity(!showCity)}
          style={{ cursor: "pointer" }}
        >
          📍 {city || "Select City"}
        </span>

        {showCity && (
          <ul className="city-dropdown">
            {cities.map((c) => (
              <li
                key={c}
                onClick={() => {
                  selectCity(c);
                  setShowCity(false);
                }}
              >
                {c}
              </li>
            ))}

            <li
              className="manual-select"
              onClick={() => {
                setShowCity(false);
                setShowModal(true);
              }}
            >
              Select via Pincode
            </li>
          </ul>
        )}
      </div>

      {/* Search */}
      <input className="search" placeholder="Search 'Products'" />

      {/* Menu */}
      <ul className="menu">
        <li onClick={() => onNavigate(navigate, "/")}>Home</li>
        <li onClick={() => onNavigate(navigate, "/sell")}>Sell Now</li>
        <li onClick={() => onNavigate(navigate, "/faqs")}>FAQs</li>
        <li onClick={() => onNavigate(navigate, "/blogs")}>Blogs</li>
        <li onClick={() => onNavigate(navigate, "/about")}>About Us</li>
      </ul>

      {/* Login */}
      <button
        className="login-btn"
        onClick={() => onNavigate(navigate, "/login")}
      >
        Login
      </button>
    </nav>
  );
}

export default Navbar;
