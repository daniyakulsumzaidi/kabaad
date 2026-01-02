import { createContext, useContext, useState, useEffect } from "react";

const LocationContext = createContext();

export const LocationProvider = ({ children }) => {
  const [city, setCity] = useState(null);
  const [showModal, setShowModal] = useState(false);

  // Load city from localStorage on app start
  useEffect(() => {
    const savedCity = localStorage.getItem("selectedCity");
    if (savedCity) {
      setCity(savedCity);
    }
  }, []);

  // Select city (single source of truth)
  const selectCity = (cityName) => {
    setCity(cityName);
    localStorage.setItem("selectedCity", cityName);
    setShowModal(false);
  };

  return (
    <LocationContext.Provider
      value={{
        city,
        showModal,
        setShowModal,
        selectCity,
      }}
    >
      {children}
    </LocationContext.Provider>
  );
};

export const useLocation = () => useContext(LocationContext);
