import Link from "next/link";
import React from "react";

export default function Team_Experience() {
  return (
    <>
      <div className="team-experience bg-gradient-to-r from-purple-100 to-indigo-100">
        <div className="lg:p-32 md:p-16 sm:p-5 lg:mx-48 md:mx-32 sm:mx-14 text-center">
          <h1 className="text-4xl font-bold py-5 text-gray-800">
            Built on Expertise, Driven by Passion
          </h1>
          <h3 className="text-lg text-gray-700">
            Since 2019, we’ve been empowering businesses with innovative, 
            customized solutions—helping them grow, adapt, and lead in their industry 
            with confidence and efficiency.
          </h3>
          {/* Centering the button */}
          <div className="flex justify-center mt-5">
            <Link href={'/team'}>
              <button className="bg-primary text-white px-6 py-3 rounded-md font-semibold transition-all">
                Meet Our Experts
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
