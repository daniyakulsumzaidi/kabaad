import ApplianceCard from "../component/ApplianceCard";

const SellAllAppliances = () => {
  const appliances = [
    // Large appliances
    {
      title: "Dishwasher",
      price: 1050,
      image: "src/assets/large/dishwasher.jpg",
    },
    {
      title: "Sell Refrigerator",
      price: 2200,
      image: "src/assets/large/refrigerator.jpg",
    },
    {
      title: "Sell Split AC",
      price: 6000,
      image: "src/assets/large/split-ac.jpg",
    },
    {
      title: "Sell Washing Machine",
      price: 1800,
      image: "src/assets/large/washing-machine.jpg",
    },
    {
      title: "Sell Window AC",
      price: 5500,
      image: "src/assets/large/window-ac.jpg",
    },

    // Small appliances
    {
      title: "Sell Fan",
      price: 250,
      image: "src/assets/small/fan.jpg",
    },
    {
      title: "Sell Food Processor",
      price: 300,
      image: "src/assets/small/processor.jpg",
    },
    {
      title: "Sell Geyser",
      price: 550,
      image: "src/assets/small/geyser.jpg",
    },
    {
      title: "Sell Heater",
      price: 500,
      image: "src/assets/small/heater.jpg",
    },

    // Electronics
    {
      title: "Sell Laptop",
      price: 700,
      image: "src/assets/electronic/laptop.jpg",
    },
    {
      title: "Sell Mobile",
      price: 150,
      image: "src/assets/electronic/mobile.jpg",
    },
    {
      title: "Sell Tablet",
      price: 150,
      image: "src/assets/electronic/tablet.jpg",
    },
  ];

  const sortedAppliances = [...appliances].sort((a, b) =>
    a.title.localeCompare(b.title)
  );

  return (
    <section className="w-full bg-slate-50 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-slate-900">
            Sell Used Appliances
          </h1>
          <p className="text-slate-600 mt-2">
            Choose your product and get instant value
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
          {sortedAppliances.map((item, index) => (
            <ApplianceCard
              key={index}
              title={item.title}
              price={item.price}
              image={item.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SellAllAppliances;
