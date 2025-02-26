import React, { useState } from "react";
import { FaPlus } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import bespokeData from "./bespokeData"; // Import data

const Bespoke = () => {
    const [openSection, setOpenSection] = useState<number | null>(null);

    const toggleSection = (index: number) => {
      setOpenSection(openSection === index ? null : index);
    };

  return (
    <div className="bespoke grid grid-cols-1 md:grid-cols-10 gap-10 justify-center mt-40 m-10 pt-10 p-20 py-10">
      {/* Left Section */}
      <div className="left col-span-1 md:col-span-5">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900">
          {bespokeData.heading}
        </h1>
        <h5 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl mt-10 text-gray-700">
          {bespokeData.description}
        </h5>
      </div>

      {/* Right Section - Accordion */}
      <div className="right col-span-1 md:col-span-5 space-y-4">
        {bespokeData.sections.map((item, index) => (
          <div
            key={index}
            className={`p-6 border border-blue-500 rounded-3xl transition duration-300 
              bg-white hover:bg-gray-100 group 
              ${openSection === index ? "bg-gray-200 shadow-md" : ""}`}
          >
            {/* Title & Icon */}
            <h5
              className="flex justify-between items-center cursor-pointer"
              onClick={() => toggleSection(index)}
            >
              <p
                className={`text-xl sm:text-2xl md:text-2xl lg:text-3xl font-bold transition duration-300 px-10  
                  ${openSection === index ? "text-blue-600" : "text-gray-900"} 
                  group-hover:text-blue-600`}
              >
                {item.title}
              </p>
              {openSection === index ? (
                <IoMdClose
                  className="text-2xl transition duration-300 text-blue-600 group-hover:text-blue-600"
                />
              ) : (
                <FaPlus className="text-2xl text-gray-900 group-hover:text-blue-600 transition duration-300" />
              )}
            </h5>

            {/* Content */}
            {openSection === index && (
              <p className="m-6 text-gray-800 text-xl sm:text-2xl md:text-2xl lg:text-2xl font-sans px-8">
                {item.content}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Bespoke;
