import React from "react";
import Image from "next/image";

const FilSoultion = () => {
  return (
    <div className="relative w-full h-[63vh] md:h-[75vh] lg:h-[80vh] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={"/webflow1.jpg"}
          alt="Full-width Background"
          fill
          sizes="100vw"
          className="object-cover"
          priority
        />
      </div>

      {/* Text Overlay */}
      <div className="relative max-w-[1300px] mx-auto z-10 flex items-center px-6 md:px-12 lg:px-20 h-full ">
        <div className=" text-white space-y-6">
          <h2 className="font-bold text-2xl md:text-3xl lg:text-6xl">
            Fillinx Solutions is a place to grow
          </h2>
          <p className="text-lg md:text-xl lg:text-2xl leading-relaxed max-w-[700px]">
            Fillinx Solutions is rapidly growing across the country, both
            organically and by bringing in like-minded managed IT service
            providers (MSPs). We’re building a national network that can provide
            exceptional levels of service to our clients.
          </p>
        </div>
        
      </div>
    </div>
  );
};

export default FilSoultion;
