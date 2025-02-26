import React, { useState } from "react";
import { FaPlus } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import bespokeData from "./bespokeData"; // Import data
import Container from "@/Components/Container";

const Bespoke = () => {
  // ✅ Explicitly set state type to number | null
  const [openSection, setOpenSection] = useState<number | null>(null);

  const toggleSection = (index: number) => {
    setOpenSection(openSection === index ? null : index);
  };

  return (
    <div className="flex lg:flex-nowrap flex-wrap justify-between gap-8 md:gap-20 xl:gap-x-[50px] mt-40 m-10 pt-10  py-10">
      {/* Left Section */}
      <div className="">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900">
          {bespokeData.heading}
        </h1>
        <h5 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl mt-10 text-gray-700">
          {bespokeData.description}
        </h5>
      </div>

      {/* Right Section - Accordion */}
      <div className="flex flex-col space-y-4 max-w-[800px]">
        {bespokeData.sections.map((item, index) => (
          <div
            key={index}
            className={`p-6 border border-blue-500 rounded-3xl transition-all duration-300 ease-in-out 
        bg-white hover:bg-gray-100 group overflow-hidden
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
              <div>
                <FaPlus
                  className={`text-2xl text-gray-900 group-hover:text-blue-600 transition-all duration-300 
                 ${openSection === index ? " rotate-45" : "rotate-0"}`}
                />{" "}
              </div>
            </h5>

            {/* Content with height animation */}
            <div
              className="transition-all duration-500 ease-in-out overflow-hidden"
              style={{
                maxHeight: openSection === index ? "300px" : "0px",
                opacity: openSection === index ? 1 : 0,
                padding: openSection === index ? "24px 32px" : "0 32px",
              }}
            >
              <p className="text-gray-800 text-xl sm:text-2xl md:text-2xl lg:text-2xl font-sans">
                {item.content}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Bespoke;
