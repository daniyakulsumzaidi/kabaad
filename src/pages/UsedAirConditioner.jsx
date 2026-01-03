import { useState } from "react";
import { useNavigate } from "react-router-dom";

const CATEGORY_OPTIONS = ["Split Air Conditioner", "Window Air Conditioner"];

const CAPACITY_OPTIONS = [
  "Up to 1 Ton",
  "1.1 Ton – 1.9 Ton",
  "2 Ton and Above",
];

const BRAND_OPTIONS = {
  "Split Air Conditioner": [
    "Daikin",
    "Samsung",
    "Haier",
    "LG",
    "OGeneral",
    "Others",
  ],
  "Window Air Conditioner": ["Daikin", "Samsung", "Haier", "LG", "Others"],
};

const SellUsedAirConditioner = () => {
  const navigate = useNavigate();

  // 🔹 Form State
  const [category, setCategory] = useState("");
  const [capacity, setCapacity] = useState("");
  const [brand, setBrand] = useState("");

  return (
    <section className="w-full bg-white">
      {/* ===== Breadcrumb ===== */}
      <div className="max-w-7xl mx-auto px-4 py-4 text-sm text-slate-500">
        Home / Sell Now /{" "}
        <span className="text-slate-900">Air Conditioner</span>
      </div>

      {/* ===== Banner ===== */}
      <div
        className="w-full h-[260px] md:h-[300px] bg-cover bg-center"
        style={{
          backgroundImage:
            "url(https://selsmart.in/assets/category/AC_1766576593.jpg)",
        }}
      />

      {/* ===== Main Card ===== */}
      <div className="max-w-7xl mx-auto px-16 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Left */}
        <div className="md:col-span-2 border rounded-xl p-6 flex flex-col md:flex-row gap-6">
          <img
            src="https://selsmart.in/assets/category/Image_Split_AC_1738160290.jpg"
            alt="Air Conditioner"
            className="h-36 object-contain"
          />

          <div className="flex-1 space-y-6">
            <h2 className="text-xl font-semibold">Air Conditioner</h2>

            {/* Category */}
            <div>
              <label className="block text-sm font-medium mb-2">
                Category <span className="text-red-500">*</span>
              </label>
              <select
                value={category}
                onChange={(e) => {
                  setCategory(e.target.value);
                  setCapacity("");
                  setBrand("");
                }}
                className="w-full border rounded-lg px-4 py-2 outline-none"
              >
                <option value="">Select category</option>
                {CATEGORY_OPTIONS.map((item) => (
                  <option key={item} value={item}>
                    {item}
                  </option>
                ))}
              </select>
            </div>

            {/* Product Capacity */}
            {category && (
              <div>
                <label className="block text-sm font-medium mb-2">
                  Product Capacity <span className="text-red-500">*</span>
                </label>
                <select
                  value={capacity}
                  onChange={(e) => {
                    setCapacity(e.target.value);
                    setBrand("");
                  }}
                  className="w-full border rounded-lg px-4 py-2 outline-none"
                >
                  <option value="">Select Product Capacity</option>
                  {CAPACITY_OPTIONS.map((item) => (
                    <option key={item} value={item}>
                      {item}
                    </option>
                  ))}
                </select>
              </div>
            )}

            {/* Brand */}
            {category && capacity && (
              <div>
                <label className="block text-sm font-medium mb-2">
                  Brand <span className="text-red-500">*</span>
                </label>
                <select
                  value={brand}
                  onChange={(e) => setBrand(e.target.value)}
                  className="w-full border rounded-lg px-4 py-2 outline-none"
                >
                  <option value="">Select Brand</option>
                  {BRAND_OPTIONS[category].map((item) => (
                    <option key={item} value={item}>
                      {item}
                    </option>
                  ))}
                </select>
              </div>
            )}
          </div>
        </div>

        {/* Right */}
        <div className="border rounded-xl p-6">
          <div className="text-lg font-semibold mb-2">
            Up to <span className="text-2xl">₹ 6,000</span>
          </div>
          <p className="text-sm text-slate-500 mb-6">Excluding pickup fee</p>

          <button
            onClick={() => navigate("/login")}
            className="w-full bg-slate-400 text-white py-2 rounded-lg cursor-not-allowed"
          >
            Login
          </button>

          <p className="text-xs text-red-500 mt-2">**To get exact value.</p>
        </div>
      </div>

      {/* ===== Content Section (unchanged) ===== */}
      <div className="max-w-5xl mx-auto px-4 pb-20 text-slate-700 space-y-8">
        {/* Intro */}
        <div>
          <h3 className="font-semibold text-lg mb-2">
            Sell Your Used Air Conditioner Quickly on Trash2Cash
          </h3>
          <p className="text-sm leading-relaxed">
            Looking to sell your used air conditioner? Trash2Cash offers a
            hassle-free way to sell split or window air conditioners with
            product capacities up to 1 Ton, 1–2 Ton, and above 2 Ton from brands
            such as Daikin, O General, Haier, Voltas, LG, Samsung, Hitachi, and
            more.
          </p>
        </div>

        {/* Why Choose */}
        <div>
          <h3 className="font-semibold mb-2">Why Choose Trash2Cash?</h3>
          <ul className="list-disc list-inside text-sm space-y-1">
            <li>
              <strong>Instant Payment:</strong> Quick payments upon pickup.
            </li>
            <li>
              <strong>Convenient Doorstep Pickup:</strong> Scheduled service.
            </li>
            <li>
              <strong>Clear Pricing:</strong> Competitive valuation.
            </li>
            <li>
              <strong>Secure Transactions:</strong> Safe payments.
            </li>
          </ul>
        </div>

        {/* Extra Value */}
        <div>
          <h3 className="font-semibold mb-2">Extra Value with Every Sale</h3>
          <p className="text-sm">
            Eligible orders can receive exclusive vouchers worth over ₹3,000.
          </p>
        </div>

        {/* How to Sell */}
        <div>
          <h3 className="font-semibold mb-2">How to Sell</h3>
          <ol className="list-decimal list-inside text-sm space-y-1">
            <li>
              <strong>Check Your Offer</strong>
            </li>
            <li>
              <strong>Schedule Pickup</strong>
            </li>
            <li>
              <strong>Receive Instant Payment</strong>
            </li>
          </ol>
        </div>

        {/* Similar */}
        <div>
          <h3 className="font-semibold mb-2">Browse Similar Categories</h3>
          <ul className="list-disc list-inside text-sm text-blue-600">
            <li className="cursor-pointer">Washing Machine</li>
            <li className="cursor-pointer">Refrigerator</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default SellUsedAirConditioner;
