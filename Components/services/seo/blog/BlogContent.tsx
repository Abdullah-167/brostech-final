import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Image from "next/image";
import { Pagination, Navigation } from "swiper/modules";
import blogData from "./blogData"; // Import data

export async function getStaticProps() {
  return {
    props: {},
  };
}

export default function BlogContent() {
  return (
    <div className="relative max-w-4xl mx-auto py-12 px-4 bg-white mt-30">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        pagination={{ clickable: true }}
        navigation={{ prevEl: ".swiper-button-prev", nextEl: ".swiper-button-next" }}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {/* Dynamic Swiper Slides */}
        {blogData.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="p-4">
              {/* Circular Image at the top left */}
              <div className="w-20 h-20 overflow-hidden border-2 border-gray-300 mb-4">
                <Image src={item.image} alt="Image" width={80} height={80} objectFit="cover" />
              </div>
              {/* Content */}
              <div className="text-4xl font-semibold py-6 px-4 bg-gray-100 rounded-lg leading-loose">
                {item.content}
              </div>
              {/* Name and Company */}
              <div className="mt-4">
                <p className="text-2xl font-medium mt-5">{item.name}</p>
                <p className="text-blue-600 text-2xl font-medium mt-5">{item.company}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="absolute bottom-6 left-6 flex items-center space-x-5 z-10 pt-30">
        {/* Swiper Navigation Buttons (Left Corner) */}
        <button className="swiper-button-prev w-14 h-14 mt-30 flex items-center justify-center bg-gray-200 text-black rounded-full shadow-md hover:bg-gray-300 transition-all duration-300">
          <span className="text-lg">&lt;</span>
        </button>
        <button className="swiper-button-next w-14 h-14 flex items-center justify-center bg-gray-200 text-black rounded-full shadow-md hover:bg-gray-300 transition-all duration-300">
          <span className="text-lg">&gt;</span>
        </button>
      </div>

      {/* Review Section (Right Corner) */}
      <div className="absolute bottom-6 right-6 flex items-center space-x-3 z-10">
        <div className="flex items-center space-x-2">
          <div className="flex flex-col">
            <p className="text-lg text-gray-600">Reviewed on</p>
            <h1 className="text-2xl font-semibold text-black">Clutch</h1>
          </div>
          <Image src="/red-star.png" alt="Clutch" width={100} height={180} className="rounded-md" />
        </div>

        <div className="flex items-center space-x-3 ml-10">
          {/* Google Icon */}
          <Image src="/googleicon.svg" alt="Google" width={40} height={40} className="rounded-md" />

          {/* Rating Text and Stars */}
          <div className="flex flex-col">
            <p className="text-sm text-gray-600">Google Rating</p>
            <div className="flex items-center space-x-1 mt-1">
              <p className="text-lg font-bold text-black">4.8</p>
              <Image src="/yellow-star.svg" alt="Star" width={15} height={15} />
              <Image src="/yellow-star.svg" alt="Star" width={15} height={15} />
              <Image src="/yellow-star.svg" alt="Star" width={15} height={15} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
