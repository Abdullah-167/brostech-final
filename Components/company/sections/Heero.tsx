import React from "react";
import Image from "next/image";

export default function Heero() {
  return (
    <div className="heero flex flex-col items-center text-center px-6 md:px-12 lg:px-16 mb-10">
      <div className="mb-6 py-3">
        <button className="bg-green-500 px-6 py-3 text-xl md:text-2xl font-bold rounded-lg">
          Concerning
        </button>
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold py-5">
          Where Innovation Meets Excellence
        </h1>
        <h2 className="text-lg md:text-2xl px-4 md:px-0">
          Everyone has a path… Here is ours, evolving into a top Software Development Agency
        </h2>
      </div>
      <div className="relative w-full max-w-[1400px] h-[45vh] sm:h-[50vh] lg:h-[55vh] flex justify-center items-center">
        <Image
          src="/team_banner.avif" // Replace with your actual image path
          alt="Description of image"
          layout="fill" // Ensures it covers the container
          objectFit="cover" // Makes sure image fills container properly
          className="rounded-lg"
          priority
        />
      </div>
    </div>
  );
}
