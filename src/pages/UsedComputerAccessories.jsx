import { useState } from "react";
import { useNavigate } from "react-router-dom";

const CATEGORY_CONFIG = {
  Laptop: {
    steps: [
      {
        label: "Product Condition",
        key: "condition",
        options: ["Working or Non Working Condition"],
      },
      {
        label: "Brand",
        key: "brand",
        options: ["Others", "Acer", "HP", "Dell"],
      },
    ],
  },

  CPU: {
    steps: [
      {
        label: "Processor Generation",
        key: "generation",
        options: ["All Generation"],
      },
      {
        label: "Brand",
        key: "brand",
        options: ["Others", "Sony", "HP", "Dell", "Lenovo"],
      },
    ],
  },

  Monitor: {
    steps: [
      {
        label: "Type",
        key: "type",
        options: ["CRT", "LCD/LED"],
      },
      {
        label: "Brand",
        key: "brand",
        options: ["Samsung", "LG", "Sony", "TCL", "Others"],
      },
    ],
  },

  Printer: {
    steps: [
      {
        label: "Print Type",
        key: "printType",
        options: ["Color", "Black and White"],
      },
      {
        label: "Brand",
        key: "brand",
        options: ["Others", "Sony", "HP", "Dell"],
      },
    ],
  },

  UPS: {
    steps: [
      {
        label: "Product Capacity",
        key: "capacity",
        options: ["All Capacity"],
      },
      {
        label: "Brand",
        key: "brand",
        options: ["Others", "HP", "Dell"],
      },
    ],
  },
};

/* ================= PAGE ================= */

const SellUsedComputerAccessories = () => {
  const navigate = useNavigate();

  const [category, setCategory] = useState("");
  const [formData, setFormData] = useState({});

  const handleCategoryChange = (value) => {
    setCategory(value);
    setFormData({});
  };

  const handleFieldChange = (key, value) => {
    setFormData((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const steps = category ? CATEGORY_CONFIG[category].steps : [];

  return (
    <section className="w-full bg-white">
      {/* ===== Breadcrumb ===== */}
      <div className="max-w-7xl mx-auto px-4 py-4 text-sm text-slate-500">
        Home / Sell Now /{" "}
        <span className="text-slate-900">Computer and Accessories</span>
      </div>

      {/* ===== Banner ===== */}
      <div
        className="w-full h-[260px] md:h-[300px] bg-cover bg-center"
        style={{
          backgroundImage:
            "url(https://selsmart.in/assets/uploadedimages/location_banner/_Hindi__Computer_and_Accessories__1__1757675535.jpg)",
        }}
      />

      {/* ===== Main Card ===== */}
      <div className="max-w-7xl mx-auto px-16 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Left */}
        <div className="md:col-span-2 border rounded-xl p-6 flex gap-6">
          <img
            src="https://selsmart.s3.ap-south-1.amazonaws.com/live/category/Image_UPS_1738156905.jpg"
            alt="Computer"
            className="h-36 object-contain"
          />

          <div className="flex-1 space-y-6">
            <h2 className="text-xl font-semibold">Computer and Accessories</h2>

            {/* Category */}
            <div>
              <label className="block text-sm font-medium mb-2">
                Category <span className="text-red-500">*</span>
              </label>
              <select
                value={category}
                onChange={(e) => handleCategoryChange(e.target.value)}
                className="w-full border rounded-lg px-4 py-2 outline-none"
              >
                <option value="">Select category</option>
                {Object.keys(CATEGORY_CONFIG).map((cat) => (
                  <option key={cat} value={cat}>
                    {cat}
                  </option>
                ))}
              </select>
            </div>

            {/* Step-by-step fields (AC-style) */}
            {steps.map((step, index) => {
              // show only if previous step is selected
              if (index > 0 && !formData[steps[index - 1].key]) {
                return null;
              }

              return (
                <div key={step.key}>
                  <label className="block text-sm font-medium mb-2">
                    {step.label} <span className="text-red-500">*</span>
                  </label>
                  <select
                    value={formData[step.key] || ""}
                    onChange={(e) =>
                      handleFieldChange(step.key, e.target.value)
                    }
                    className="w-full border rounded-lg px-4 py-2 outline-none"
                  >
                    <option value="">Select {step.label}</option>
                    {step.options.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right */}
        <div className="border rounded-xl p-6">
          <div className="text-lg font-semibold mb-2">
            Up to <span className="text-2xl">₹ 700</span>
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
            Sell Your Old Computer Accessories Online with Trash2Cash
          </h3>
          <p className="text-sm">
            Turn unused computer accessories into instant money with
            Trash2Cash—fast, simple, and trusted.
          </p>
        </div>

        <div>
          <h3 className="font-semibold mb-2">
            Why Sell Used Computer Accessories with Trash2Cash?
          </h3>
          <ul className="list-disc list-inside text-sm space-y-1">
            <li>Instant Pricing</li>
            <li>Convenient Doorstep Pickup</li>
            <li>Quick Online Payment</li>
            <li>Transparent Process</li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-2">How It Works – 3 Simple Steps</h3>
          <ol className="list-decimal list-inside text-sm space-y-1">
            <li>Confirm Price</li>
            <li>Book Pickup</li>
            <li>Get Paid Instantly</li>
          </ol>
        </div>

        <div>
          <h3 className="font-semibold mb-2">You Can Also Sell</h3>
          <ul className="list-disc list-inside text-sm text-blue-600">
            <li>Mobile Phone</li>
            <li>Laptop</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default SellUsedComputerAccessories;
