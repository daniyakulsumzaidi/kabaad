const ApplianceCard = ({ title, price, image }) => {
  return (
    <div className="border border-slate-200 rounded-xl p-5 bg-white w-full">
      {/* Image */}
      <div className="flex justify-center mb-4">
        <img src={image} alt={title} className="h-36 object-contain" />
      </div>

      {/* Title */}
      <h3 className="text-sm font-medium text-slate-900 mb-3">{title}</h3>

      {/* Price + Button */}
      <div className="flex items-center justify-between">
        <div className="text-sm text-slate-500">
          Get Up to :
          <div className="font-semibold text-slate-900">₹ {price}</div>
        </div>

        <button className="border border-green-600 text-green-600 px-5 py-2 rounded-full text-sm font-medium hover:bg-green-600 hover:text-white transition">
          Sell Now
        </button>
      </div>
    </div>
  );
};

export default ApplianceCard;
