import React from "react";
import Image from "next/image";

export default function Team() {
  return (
    <>
      <div className="flex flex-col items-center text-center px-4 mb-20">
        <div className="max-w-[800px] py-20">
          <h5 className="text-xl sm:px-0 md:px-0 lg:px-30 font-medium">
            Driven by an enduring commitment to facilitate your business
            success, bolstered by extensive technical expertise and our tailored
            solutions, methodologies, and unmatched customer support, we
            consistently achieve exceptional results.
          </h5>
        </div>
        <div className="img w-[60vw] h-[67vh] flex justify-center">
          <Image
            src="/company_team.jpg" // Replace with your actual image path
            alt="Description of image"
            layout="intrinsic" // Ensures responsiveness
            width={900} // Adjusted for better scaling
            height={400} // Adjusted for 40% height equivalent
            className="rounded-lg shadow-lg w-full h-full object-cover"
            priority // Optimizes loading
          />
        </div>
      </div>
    </>
  );
}
