"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import SwiperCore from "swiper/core";


export default function VerticalScrollSlider() {
  const [swiper, setSwiper] = useState<SwiperCore | null>(null);
  const [lastScroll, setLastScroll] = useState(0);

  const slides = [
    {
      id: 1,
      title: "Shopify",
      description:
        "Shopify empowers businesses with a seamless e-commerce experience, combining advanced tools and intuitive design to create stunning online stores effortlessly",
      buttonText: "Read More",
      link: "/lorenzo-veratti",
      image: "/slider1.avif", // Replace with actual image path
    },
    {
      id: 2,
      title: "WordPress",
      description:
        "WordPress offers a powerful and flexible content management system, blending user-friendly customization with dynamic functionality for websites of all kinds",
      buttonText: "Shop Now",
      link: "/new-arrivals",
      image: "/slider2.avif", // Replace with actual image path
    },
    {
      id: 3,
      title: "Mern Stack",
      description:
        "The MERN stack delivers a modern web development framework, integrating MongoDB, Express, React, and Node.js to build scalable, high-performance applications.",
      buttonText: "Discover More",
      link: "/exclusive-offers",
      image: "/slider3.avif", // Replace with actual image path
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const vh = window.innerHeight;
      const pageHeight = document.body.scrollHeight - vh;
      setLastScroll(scrollY);

      if (!swiper) return;

      const scrollPercentage = (scrollY / pageHeight) * 100;
      let targetSlide = 0;

      if (scrollPercentage >= 50) {
        targetSlide = 2;
      } else if (scrollPercentage >= 43) {
        targetSlide = 1;
      } else if (scrollPercentage >= 35) {
        targetSlide = 0;
      }

      if (targetSlide !== swiper.activeIndex) {
        swiper.slideTo(targetSlide, 1000);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [swiper, lastScroll]);

  return (
    <div className="w-full min-h-[300vh] bg-gray-100">
      <div className="sticky top-0 h-screen flex justify-center items-center">
        <Swiper
          direction="vertical"
          modules={[Pagination]}
          pagination={{
            clickable: true,
            type: "progressbar",
            verticalClass: "swiper-pagination-vertical",
          }}
          slidesPerView={1}
          speed={1200}
          className="w-[90%] h-[80vh] rounded-xl shadow-2xl"
          onSwiper={setSwiper}
        >
          {slides.map((slide) => (
            <SwiperSlide key={slide.id}>
              <div className="flex items-center justify-between p-12 bg-gray-200 rounded-xl shadow-lg h-full">
                {/* Left Side - Text */}
                <div className="w-1/2 p-6">
                  <h2 className="text-4xl font-bold mb-4 text-black">
                    {slide.title}
                  </h2>
                  <p className="text-lg text-gray-700 mb-6">
                    {slide.description}
                  </p>
                  <Link href={slide.link}>
                    <span className="text-blue-600 font-semibold hover:underline cursor-pointer">
                      {slide.buttonText}
                    </span>
                  </Link>
                </div>

                {/* Right Side - Image */}
                <div className="w-1/2 flex justify-center">
                  <div className="relative w-[90%] h-[500px] rounded-2xl overflow-hidden border border-gray-300 shadow-md">
                    <Image
                      src={slide.image}
                      alt={slide.title}
                      fill
                      style={{ objectFit: "cover" }}
                    />
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
