import { Routes, Route } from "react-router-dom";
import Header from "./component/Header";

import Home from "./pages/Home";
import SellNow from "./pages/SellNow";
import FAQs from "./pages/FAQs";
import Blogs from "./pages/Blogs";
import About from "./pages/About";

import LocationModal from "./component/LocationModal";
import { useLocation as useAppLocation } from "./context/LocationContext";

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
      </Routes>
    </>
  );
}

export default App;

