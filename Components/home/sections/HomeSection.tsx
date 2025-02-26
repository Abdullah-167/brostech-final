import React from "react";
import Image from "next/image";
import Link from "next/link";
import Container from "@/Components/Container";

export default function HomeSection() {
  return (
    <Container>
      <div className="home-section flex flex-wrap lg:flex-nowrap justify-between items-center w-full mt-8">
        {/* Left Section - Text */}
        <div className=" w-full text-left">
          <h1 className=" text-3xl md:text-5xl font-bold pb-2 sm:pb-7">
            We build your{" "}
            <span className="text-primary text-4xl md:text-6xl"> Brand </span>,
            so you can focus on{" "}
            <span className="text-primary text-4xl md:text-6xl">
              {" "}
              Success.{" "}
            </span>
          </h1>
          <h3 className="lg:text-4xl text-2xl sm:pb-4">
            Premier Web & Digital Marketing Agency
          </h3>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4 mt-5">
            <Link href={"/contact"}>
              <button className="bg-primary text-white font-semibold rounded-lg shadow-md hover:bg-white hover:text-primary border hover:border-primary transition duration-300 py-3 px-6">
                Schedule a Free Consultation
              </button>
            </Link>
            <Link href={'/services'}>
            <button className="relative hidden lg:flex h-[50px] w-40 items-center justify-center overflow-hidden bg-white text-primary shadow-2xl transition-all before:absolute before:h-0 before:w-0 before:rounded-full before:bg-primary before:duration-500 hover:text-white border border-primary rounded-md before:ease-out hover:shadow-primary hover:before:h-56 hover:before:w-56">
              <span className="relative z-10">Services</span>
            </button>
            </Link>
          </div>
        </div>

        {/* Right Section - Responsive Image */}
        <div className=" w-full hidden lg:flex justify-center md:justify-end pt-10 lg:pt-5">
          <Image
            src="/heromain.png" // Replace with your image path
            alt="Description of the image"
            width={1000} // Default width for large screens
            height={1000} // Default height for large screens
            className="md:max-h-[500px] w-full md:w-auto"
            priority // Optimizes image loading
          />
        </div>
      </div>
    </Container>
  );
}
