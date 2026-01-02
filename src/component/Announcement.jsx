import { useEffect, useState } from "react";
import banner1 from "../assets/banner1.jpg";
import banner2 from "../assets/banner2.jpg";
import banner3 from "../assets/banner3.jpg";

const BannerSlider = () => {
  const banners = [banner1, banner2, banner3];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) =>
        prev === banners.length - 1 ? 0 : prev + 1
      );
    }, 1000); // 1 second delay

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-[300px] overflow-hidden">
      {banners.map((banner, index) => (
        <img
          key={index}
          src={banner}
          alt="Banner"
          className={`
            absolute top-0 left-0 w-full h-full object-cover
            transition-transform duration-700 ease-in-out
            ${
              index === currentIndex
                ? "translate-x-0"
                : index < currentIndex
                ? "-translate-x-full"
                : "translate-x-full"
            }
          `}
        />
      ))}
    </div>
  );
};

export default BannerSlider;
