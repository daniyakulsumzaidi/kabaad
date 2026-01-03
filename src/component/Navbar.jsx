import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLocation } from "../context/LocationContext";
import { MapPin } from "lucide-react";

function Navbar({ onNavigate }) {
  const appliances = [
    { title: "Dishwasher" },
    { title: "Refrigerator" },
    { title: "Split AC" },
    { title: "Washing Machine" },
    { title: "Window AC" },
    { title: "Fan" },
    { title: "Food Processor" },
    { title: "Geyser" },
    { title: "Heater" },
    { title: "Laptop" },
    { title: "Mobile" },
    { title: "Tablet" },
  ];

  const navigate = useNavigate();
  const { city, selectCity, setShowModal } = useLocation();

  const [showCity, setShowCity] = useState(false);
  const [search, setSearch] = useState("");
  const [showResults, setShowResults] = useState(false);

  const cities = ["Delhi", "Mumbai", "Bangalore", "Hyderabad", "Chennai"];

  // 🔍 Filter by TITLE ONLY
  const filteredAppliances = appliances.filter((item) =>
    item.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <nav className="flex flex-wrap items-center gap-4 px-4 sm:px-6 md:px-10 py-4 bg-white relative">
      {/* Logo */}
      <div
        className="text-[22px] sm:text-[24px] md:text-[26px] font-bold text-[#0b132b] cursor-pointer whitespace-nowrap"
        onClick={() => onNavigate(navigate, "/")}
      >
        Trash2Cash
      </div>

      {/* City Selector */}
      <div className="relative whitespace-nowrap">
        <span
          className="cursor-pointer text-[#1c2541]"
          onClick={() => setShowCity(!showCity)}
        >
          <p className="flex gap-2 items-center text-sm sm:text-base">
            <MapPin size={18} /> {city || "Select City"}
          </p>
        </span>

        {showCity && (
          <ul className="absolute top-8 left-0 bg-white rounded-lg shadow-xl p-2 w-48 z-50">
            {cities.map((c) => (
              <li
                key={c}
                className="px-3 py-2 cursor-pointer hover:bg-slate-100 rounded"
                onClick={() => {
                  selectCity(c);
                  setShowCity(false);
                }}
              >
                {c}
              </li>
            ))}

            <li
              className="px-3 py-2 cursor-pointer hover:bg-slate-100 rounded text-sm text-gray-600"
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
      {/* Search */}
      <div className="relative flex-1 min-w-[200px]">
        <input
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
            setShowResults(true);
          }}
          onBlur={() => setTimeout(() => setShowResults(false), 150)}
          className="w-full px-4 py-2 rounded-full border border-gray-300 outline-none text-sm sm:text-base"
          placeholder="Search products"
        />

        {/* Search Results */}
        {search && showResults && filteredAppliances.length > 0 && (
          <ul className="absolute top-11 left-0 w-full bg-white border border-gray-200 rounded-xl shadow-lg z-50 max-h-60 overflow-y-auto">
            {filteredAppliances.map((item, index) => (
              <li
                key={index}
                className="px-4 py-2 cursor-pointer hover:bg-slate-100 text-sm"
                onClick={() => {
                  setSearch("");
                  setShowResults(false);
                  onNavigate(
                    navigate,
                    `/sell/${item.title.toLowerCase().replace(/\s+/g, "-")}`
                  );
                }}
              >
                {item.title}
              </li>
            ))}
          </ul>
        )}

        {/* No result */}
        {search && showResults && filteredAppliances.length === 0 && (
          <div className="absolute top-11 left-0 w-full bg-white border border-gray-200 rounded-xl shadow-lg z-50 px-4 py-3 text-sm text-gray-500">
            No product found
          </div>
        )}
      </div>

      {/* Menu */}
      <ul className="flex flex-wrap gap-4 sm:gap-5 list-none text-sm sm:text-base">
        <li
          className="cursor-pointer text-[#1c2541] whitespace-nowrap"
          onClick={() => onNavigate(navigate, "/")}
        >
          Home
        </li>
        <li
          className="cursor-pointer text-[#1c2541] whitespace-nowrap"
          onClick={() => onNavigate(navigate, "/sell")}
        >
          Sell Now
        </li>
        <li
          className="cursor-pointer text-[#1c2541] whitespace-nowrap"
          onClick={() => onNavigate(navigate, "/faqs")}
        >
          FAQs
        </li>
        <li
          className="cursor-pointer text-[#1c2541] whitespace-nowrap"
          onClick={() => onNavigate(navigate, "/blogs")}
        >
          Blogs
        </li>
        <li
          className="cursor-pointer text-[#1c2541] whitespace-nowrap"
          onClick={() => onNavigate(navigate, "/about")}
        >
          About Us
        </li>
      </ul>

      {/* Login */}
      <button
        className="bg-[#0b132b] text-slate-100 px-4 sm:px-5 py-2 rounded-full text-sm sm:text-base whitespace-nowrap"
        onClick={() => onNavigate(navigate, "/login")}
      >
        Login
      </button>
    </nav>
  );
}

export default Navbar;
