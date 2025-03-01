import React from "react";
import Image from "next/image";
import ExpertsData from "./ExpertData"; // Import the data
import Container from "../Container";

const Services = () => {
  return (
    <>
      <div className="py-20">
        <div className="flex justify-center mt-5">
        </div>
        <h3 className="text-center text-2xl sm:text-4xl font-medium mt-5 max-w-[900px] mx-auto">
          We offer a range of sub-services to enhance website creation and
          management
        </h3>

        {/* Display Expert Data in Cards */}
        <div className="w-full mx-auto max-w-[1300px]">
          <div className="w-full flex flex-wrap sm:flex-nowrap justify-center sm:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-8 px-4 sm:px-8">
            {ExpertsData.map((item, index) => (
              <div
                key={index}
                className="max-w-full w-full p-6 hover:shadow-xl transition duration-300 ease-in-out border hover:border-primary rounded-md"
              >
                <div className="text-6xl mb-4 text-primary">{item.icon}</div>
                <h4 className="text-xl md:text-2xl lg:text-3xl font-bold pb-4">
                  {item.title}
                </h4>
                <p className="text-gray-700 text-lg md:text-xl lg:text-xl font-medium break-words overflow-wrap: break-word">
                  {item.content}
                </p>
                {/* If you have images, add max-width: 100% */}
                {/* <img src={item.image} alt="" className="max-w-full" /> */}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
