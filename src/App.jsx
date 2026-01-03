import { Routes, Route } from "react-router-dom";
import Header from "./component/Header";

import Home from "./pages/Home";
import SellNow from "./pages/SellNow";
import FAQs from "./pages/FAQs";
import Blogs from "./pages/Blogs";
import About from "./pages/About";

import LocationModal from "./component/LocationModal";
import { useLocation as useAppLocation } from "./context/LocationContext";
import Footer from "./component/Footer";
import SellUsedAirConditioner from "./pages/UsedAirConditioner";
import SellUsedComputerAccessories from "./pages/UsedComputerAccessories";
import SellDishwasher from "./pages/UsedDishwasher";
import SellUsedFan from "./pages/UsedFan";

function App() {
  const { showModal } = useAppLocation();

  return (
    <>
      {/* Header always visible */}
      <Header />

      {/* Location Modal (global) */}
      {showModal && <LocationModal />}

      {/* App Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sell" element={<SellNow />} />
        <Route path="/faqs" element={<FAQs />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/about" element={<About />} />
        <Route
          path="/sell-used-air-conditioner"
          element={<SellUsedAirConditioner />}
        />
        <Route
          path="/sell-used-computer-accessories"
          element={<SellUsedComputerAccessories />}
        />
        <Route path="/sell-used-dishwasher" element={<SellDishwasher />} />
        <Route path="/sell-used-fan" element={<SellUsedFan />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
