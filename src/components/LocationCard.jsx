import React, { useEffect, useState } from "react";
import PlaceCard from "./PlaceCard";
import { useNavigate } from "react-router-dom";

const Close = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className="w-6 h-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6 18L18 6M6 6l12 12"
      />
    </svg>
  );
};

const LocationCard = ({ locationData }) => {
  const navigate = useNavigate();
  const [isNotAtTop, setIsNotAtTop] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      // Detect if the page is not at the top
      setIsNotAtTop(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    // Clean up the event listener on unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const clearData = () => {
    navigate("/");
  };

  return (
    <div data-aos="fade-up" className="relative mx-auto max-w-screen-xl">
      <div className={`p-3 bg-gray-300 fixed z-50 top-0 left-0 right-0 w-full ${isNotAtTop && 'bg-opacity-80'}`}>
        <div className="flex justify-between">
          <div className="flex">
            <h2 className="text-3xl font-extrabold leading-tight text-gray-900">
              {locationData["country"]}
            </h2>
            <sup className="text-xs ml-[2px] mb-2">
              {locationData["country abbreviation"]}
            </sup>
          </div>
          <button
            onClick={clearData}
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-2 rounded-full shadow-lg focus:outline-none focus:ring focus:border-blue-300"
          >
            <Close />
          </button>
        </div>
      </div>

      <div className="md:flex pt-[80px]">
        <div className="flex-col w-full md:w-2/3 lg:w-5/6 mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-2 sm:p-4">
            {locationData.places.map((place, index) => (
              <PlaceCard key={index} placeData={place} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LocationCard;
