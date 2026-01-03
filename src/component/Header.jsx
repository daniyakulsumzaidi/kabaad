import Navbar from "./Navbar";
import Announcement from "./Announcement";
import Hero from "./Hero";
import { useLocation as useAppLocation } from "../context/LocationContext";

function Header() {
  const { city, setShowModal } = useAppLocation();

  /**
   * This function will be used by Navbar
   * to protect navigation when city is not selected
   */
  const handleProtectedNav = (navigateFn, path) => {
    if (!city) {
      setShowModal(true);
    } else {
      navigateFn(path);
    }
  };

  return (
    <>
      <Navbar onNavigate={handleProtectedNav} />
    </>
  );
}

export default Header;
