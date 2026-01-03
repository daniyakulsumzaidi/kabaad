import { useState } from "react";
import { useNavigate } from "react-router-dom";

/* ================= OPTIONS ================= */

const CATEGORY_OPTIONS = ["Ceiling Fan", "Table/Side-Mount Fan", "Exhaust Fan"];

const CONDITION_OPTIONS = ["Any Condition"];

const PRODUCT_TYPE_OPTIONS = ["Metal Body", "Plastic Body"];

const BRAND_OPTIONS = {
  "Ceiling Fan": [
    "Others",
    "Bajaj",
    "Havells",
    "Crompton",
    "Orient Electric",
    "Usha",
  ],
  "Table/Side-Mount Fan": [
    "Others",
    "Bajaj",
    "Havells",
    "Orient Electric",
    "Crompton",
    "Usha",
  ],
  "Exhaust Fan": ["Others", "Bajaj", "Havells", "Orient Electric", "Crompton"],
};

/* ================= PAGE ================= */

const SellUsedFan = () => {
  const navigate = useNavigate();

  // 🔹 Form State
  const [category, setCategory] = useState("");
  const [condition, setCondition] = useState("");
  const [productType, setProductType] = useState("");
  const [brand, setBrand] = useState("");

  return (
    <section className="w-full bg-white">
      {/* ===== Breadcrumb ===== */}
      <div className="max-w-7xl mx-auto px-4 py-4 text-sm text-slate-500">
        Home / Sell Now / <span className="text-slate-900">Fan</span>
      </div>

      {/* ===== Banner ===== */}
      <div
        className="w-full h-[260px] md:h-[300px] bg-cover bg-center"
        style={{
          backgroundImage:
            "url(https://selsmart.in/assets/category/_English__Fan_1767177354.jpg)",
        }}
      />

      {/* ===== Main Card ===== */}
      <div className="max-w-7xl mx-auto px-16 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Left */}
        <div className="md:col-span-2 border rounded-xl p-6 flex gap-6">
          <img
            src="https://selsmart.s3.ap-south-1.amazonaws.com/live/category/Image_Ceiling_Fan_1738163245.jpg"
            alt="Fan"
            className="h-36 object-contain"
          />

          <div className="flex-1 space-y-6">
            <h2 className="text-xl font-semibold">Fan</h2>

            {/* Category */}
            <div>
              <label className="block text-sm font-medium mb-2">
                Category <span className="text-red-500">*</span>
              </label>
              <select
                value={category}
                onChange={(e) => {
                  setCategory(e.target.value);
                  setCondition("");
                  setProductType("");
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

            {/* Ceiling / Table Fan → Condition */}
            {(category === "Ceiling Fan" ||
              category === "Table/Side-Mount Fan") && (
              <div>
                <label className="block text-sm font-medium mb-2">
                  Product Condition <span className="text-red-500">*</span>
                </label>
                <select
                  value={condition}
                  onChange={(e) => {
                    setCondition(e.target.value);
                    setBrand("");
                  }}
                  className="w-full border rounded-lg px-4 py-2 outline-none"
                >
                  <option value="">Select Product Condition</option>
                  {CONDITION_OPTIONS.map((item) => (
                    <option key={item} value={item}>
                      {item}
                    </option>
                  ))}
                </select>
              </div>
            )}

            {/* Exhaust Fan → Product Type */}
            {category === "Exhaust Fan" && (
              <div>
                <label className="block text-sm font-medium mb-2">
                  Product Type <span className="text-red-500">*</span>
                </label>
                <select
                  value={productType}
                  onChange={(e) => {
                    setProductType(e.target.value);
                    setBrand("");
                  }}
                  className="w-full border rounded-lg px-4 py-2 outline-none"
                >
                  <option value="">Select Product Type</option>
                  {PRODUCT_TYPE_OPTIONS.map((item) => (
                    <option key={item} value={item}>
                      {item}
                    </option>
                  ))}
                </select>
              </div>
            )}

            {/* Brand */}
            {category &&
              ((condition && category !== "Exhaust Fan") ||
                (productType && category === "Exhaust Fan")) && (
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
            Up to <span className="text-2xl">₹ 250</span>
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
      <div className="max-w-5xl mx-auto px-4 pb-20 text-slate-700 space-y-8">
        <div>
          <h3 className="font-semibold text-lg mb-2">
            Sell Your Old Ceiling Fan Online with Selsmart
          </h3>
          <p className="text-sm leading-relaxed">
            Upgrading your ceiling fans or replacing old ones? Don’t let them go
            to waste. With Selsmart, you can easily sell your used ceiling fan
            online and get instant payment—all from the comfort of your home.
          </p>
          <p className="text-sm leading-relaxed mt-2">
            Whether it’s running perfectly or not working anymore, we accept
            ceiling fans in all conditions from top brands like Havells,
            Crompton, Usha, Bajaj, Orient, and more.
          </p>
        </div>

        <div>
          <h3 className="font-semibold mb-2">
            Why Sell Your Used Ceiling Fan with Selsmart?
          </h3>
          <ul className="list-disc list-inside text-sm space-y-1">
            <li>
              <strong>Best Price Instantly:</strong> Fair and competitive offer
              in a few clicks.
            </li>
            <li>
              <strong>Convenient Doorstep Pickup:</strong> Pickup within 24–48
              hours.
            </li>
            <li>
              <strong>Instant Online Payment:</strong> Secure payment after
              pickup.
            </li>
            <li>
              <strong>Transparent Process:</strong> No hidden deductions.
            </li>
          </ul>

          <p className="text-sm mt-3">
            Please note that your old ceiling fan must be uninstalled from your
            end before pickup to avoid cancellation and ensure a smooth
            experience.
          </p>
        </div>

        <div>
          <h3 className="font-semibold mb-2">How It Works – 3 Easy Steps</h3>
          <ol className="list-decimal list-inside text-sm space-y-1">
            <li>
              <strong>Check Price:</strong> View estimated value online.
            </li>
            <li>
              <strong>Book Pickup:</strong> Choose a suitable slot.
            </li>
            <li>
              <strong>Get Paid Instantly:</strong> Payment after pickup.
            </li>
          </ol>
        </div>

        <div>
          <h3 className="font-semibold mb-2">Browse Similar Categories</h3>
          <ul className="list-disc list-inside text-sm text-blue-600">
            <li className="cursor-pointer">Microwave OTG</li>
            <li className="cursor-pointer">Washing Machine</li>
          </ul>
        </div>

        <p className="text-sm">
          Make room, earn money, and let Selsmart take care of the rest.
        </p>

        <p className="text-blue-600 text-sm cursor-pointer font-medium">
          Sell Your Old Ceiling Fan Now
        </p>
      </div>
    </section>
  );
};

export default SellUsedFan;
