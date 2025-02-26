import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Heero() {
  return (
    <div className="flex flex-col items-center text-center px-4 md:px-10 lg:px-20 py-10">
      {/* Button Centered with Next.js Link */}
      <Link href="/team" passHref>
        <button className="bg-gray-400 text-white px-6 py-2 rounded-lg text-lg font-semibold mb-4">
          Team
        </button>
      </Link>

      {/* Headings */}
      <h1 className="text-4xl md:text-5xl font-bold mb-3">
        Get to know us better
      </h1>
      <h2 className="text-lg text-gray-700 max-w-2xl">
        Our staff has a variety of industry-recognized certifications and degrees
      </h2>

      {/* Optimized Next.js Image */}
      <div className="w-full max-w-screen-lg mt-6 ">
        <Image
          src="/team.webp" // Replace with your actual image path inside /public folder
          alt="Team"
          width={1200} 
          height={600} 
          className="rounded-lg shadow-lg"
        />
      </div>
      <div className='m-16'>
      <h3 className='text-lg max-w-2xl'>Since 2016, our dedication has been assisting customers, ensuring they receive top-notch custom services tailored to empower them in advancing, expanding, and innovating within their industry.</h3>
      </div>
    </div>
  );
}