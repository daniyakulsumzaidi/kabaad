import { useState } from "react";
import { useNavigate } from "react-router-dom";

/* ================= CONFIG ================= */

const CATEGORY_OPTIONS = ["Dishwashers"];

const CAPACITY_OPTIONS = [
  "Up to 8 Place Settings",
  "9 – 12 Place Settings",
  "13 Place Settings and Above",
];

const BRAND_OPTIONS = ["Samsung", "LG", "Bosch", "IFB", "Others"];

/* ================= PAGE ================= */

const SellUsedDishwasher = () => {
  const navigate = useNavigate();

  const [category, setCategory] = useState("");
  const [capacity, setCapacity] = useState("");
  const [brand, setBrand] = useState("");

  return (
    <section className="w-full bg-white">
      {/* ===== Breadcrumb ===== */}
      <div className="max-w-7xl mx-auto px-4 py-4 text-sm text-slate-500">
        Home / Sell Now / <span className="text-slate-900">Dishwasher</span>
      </div>

      {/* ===== Banner ===== */}
      <div
        className="w-full h-[260px] md:h-[300px] bg-cover bg-center"
        style={{
          backgroundImage:
            "url(https://selsmart.in/assets/category/Dishwasher_1766576265.jpg)",
        }}
      />

      {/* ===== Main Card ===== */}
      <div className="max-w-7xl mx-auto px-16 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Left */}
        <div className="md:col-span-2 border rounded-xl p-6 flex flex-col md:flex-row gap-6">
          <img
            src="https://selsmart.s3.ap-south-1.amazonaws.com/live/category/Image_Dishwasher_1741088722.jpg"
            alt="Dishwasher"
            className="h-36 object-contain"
          />

          <div className="flex-1 space-y-6">
            <h2 className="text-xl font-semibold">Dishwasher</h2>

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

            {/* Capacity */}
            {category && (
              <div>
                <label className="block text-sm font-medium mb-2">
                  Capacity <span className="text-red-500">*</span>
                </label>
                <select
                  value={capacity}
                  onChange={(e) => {
                    setCapacity(e.target.value);
                    setBrand("");
                  }}
                  className="w-full border rounded-lg px-4 py-2 outline-none"
                >
                  <option value="">Select Capacity</option>
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
                  {BRAND_OPTIONS.map((item) => (
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
            Up to <span className="text-2xl">₹ 1,050</span>
          </div>
          <p className="text-sm text-slate-500 mb-6">Excluding pickup fee</p>

          <button
            onClick={() => navigate("/login")}
            className="w-full bg-slate-400 text-white py-2 rounded-lg cursor-not-allowed"
          >
            Login
          </button>

          <p className="text-xs text-red-500 mt-2">**To get Exact Value.</p>
        </div>
      </div>

      {/* ===== Content Section ===== */}
      <div className="max-w-5xl mx-auto px-4 pb-20 text-slate-700 space-y-8">
        <div>
          <h3 className="font-semibold text-lg mb-2">
            Sell Your Old Dishwasher Online with Trash2Cash
          </h3>
          <p className="text-sm leading-relaxed">
            Switching to a newer dishwasher or no longer using the old one?
            Don’t let it occupy space—sell your used dishwasher online with
            Trash2Cash and get instant payment.
          </p>
        </div>

        <div>
          <h3 className="font-semibold mb-2">
            Why Sell Your Used Dishwasher with Trash2Cash?
          </h3>
          <ul className="list-disc list-inside text-sm space-y-1">
            <li>
              <strong>Best Price Instantly</strong>
            </li>
            <li>
              <strong>Convenient Pickup</strong>
            </li>
            <li>
              <strong>Fast Online Payment</strong>
            </li>
            <li>
              <strong>Safe & Transparent</strong>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-2">How It Works – 3 Easy Steps</h3>
          <ol className="list-decimal list-inside text-sm space-y-1">
            <li>Check Price</li>
            <li>Book Pickup</li>
            <li>Get Paid Instantly</li>
          </ol>
        </div>

        <div>
          <h3 className="font-semibold mb-2">Sell Other Appliances</h3>
          <ul className="list-disc list-inside text-sm text-blue-600">
            <li className="cursor-pointer">Kitchen Appliances</li>
            <li className="cursor-pointer">Refrigerator</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default SellUsedDishwasher;
