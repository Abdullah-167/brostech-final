import React from "react";
import topNotchData from "./topNotchData"; // Import data

const TopNotchDesign = () => {
  return (
    <div className="topnotch flex justify-center items-center bg-black text-white mt-20">
      <div className="text-center transform transition duration-500 hover:scale-105 pt-10 pb-10 lg:pt-20 lg:pb-20 px-4 lg:px-20">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 pt-10">
          {topNotchData.heading}
        </h1>
        <p className="text-xl md:text-2xl lg:text-3xl mb-6 pt-3 font-semibold">
          {topNotchData.description}
        </p>
        <button className="bg-blue-700 text-white py-2 px-6 lg:py-3 lg:px-8 text-lg md:text-xl lg:text-2xl rounded-lg hover:bg-blue-800 transition">
          {topNotchData.buttonText}
        </button>
      </div>
    </div>
  );
};

export default TopNotchDesign;
