import React from "react";
import Image from "next/image";
import homeWebFlowData from "./webFlowData"; // Ensure Correct Import

const HomeWebFlow = () => {
  return (
    <div className="relative w-full h-[63vh] md:h-[75vh] lg:h-[80vh] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={homeWebFlowData.image}
          alt="Full-width Background"
          fill
          sizes="100vw"
          className="object-cover"
          priority
        />
      </div>

      {/* Text Overlay */}
      <div className="relative z-10 flex items-center px-6 md:px-12 lg:px-20 h-full ">
        <div className="max-w-[55%] text-white space-y-6">
          <button className="bg-gray-900 text-yellow-400 text-xl px-6 py-3 rounded-lg font-semibold hover:bg-gray-700 transition duration-300">
            {homeWebFlowData.buttonLabel}
          </button>

          <h2 className="font-bold text-4xl md:text-7xl lg:text-7xl">
            {homeWebFlowData.heading}
          </h2>

          <p className="text-lg md:text-xl lg:text-4xl leading-relaxed">
            {homeWebFlowData.description}
          </p>

          <button className="bg-indigo-600 hover:bg-white text-white hover:text-indigo-600 transition-all px-3 font-bold py-4 text-lg rounded-lg">
            {homeWebFlowData.consultationButton}
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomeWebFlow;
