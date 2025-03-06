import React from "react";
import Image from "next/image";

export default function Team() {
  return (
    <div className="flex flex-col items-center text-center px-4 mb-20">
      <div className="max-w-[800px] py-10">
        <h5 className="text-xl font-medium px-4 sm:px-0">
          Committed to helping your business succeed, we combine expert knowledge 
          with tailored solutions, smart strategies, and top-notch support to consistently 
          deliver great results.
        </h5>
      </div>
      <div className="w-full max-w-[90vw] sm:max-w-[80vw] md:max-w-[70vw] lg:max-w-[60vw] flex justify-center">
        <Image
          src="/modify_team2.avif" // Replace with your actual image path
          alt="Team Image"
          width={900} 
          height={500} 
          className="rounded-lg shadow-lg w-full h-auto object-cover"
          priority 
        />
      </div>
    </div>
  );
}
