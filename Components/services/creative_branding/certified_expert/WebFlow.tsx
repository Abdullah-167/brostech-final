import React from 'react';
import Image from 'next/image';
import ExpertsData from './ExpertData'; // Import the data

const WebFlow = () => {
  return (
    <>
      <div className="expert">
        <div className="flex justify-center mt-40">
          <h1 className='text-6xl font-extrabold'>How we can help you?</h1>
        </div>
        <h3 className="text-center text-2xl font-normal mt-5">
        We provide clients with Award-Winning services.
        </h3>

        {/* Display Expert Data in Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 mt-8 px-10 lg:px-20">
          {ExpertsData.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center p-6 px-6 hover:shadow-xl transition duration-300 ease-in-out"
            >
              {/* Icon */}
              <div className="text-6xl mb-4 text-blue-600">{item.icon}</div> {/* Increased size and color blue */}
              {/* Title */}
              <h4 className="text-xl md:text-2xl lg:text-3xl font-bold text-center mb-4">
                {item.title}
              </h4>
              {/* Content */}
              <p className="text-center text-gray-700 text-lg md:text-xl lg:text-xl font-medium">
                {item.content}
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default WebFlow;
