import Image from "next/image";
import React, { useState } from "react";
import { FaPlus } from "react-icons/fa";
import Container from "../Container";
import Link from "next/link";

const MultiPagesSection = ({ data }: any) => {
  const [openSection, setOpenSection] = useState<number | null>(null);

  const toggleSection = (index: number) => {
    setOpenSection(openSection === index ? null : index);
  };

  return (
    <div className="">
      {/* Hero Section */}
      <div className="relative w-full py-20">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src={data?.Hero[0]?.HeroImage}
            alt="Full-width Background"
            width={1000}
            height={1000}
            className="w-full h-full object-cover"
            priority
            loader={({ src }) => src}
          />
        </div>
        <Container>
          {/* Text Overlay */}
          <div className="relative z-10 flex items-center  h-full">
            <div className="max-w-[70%] text-white space-y-6">
              <h2 className="font-bold text-4xl md:text-5xl lg:text-6xl">
                {data?.Hero[0]?.HeroHeading}
              </h2>

              <p className="text-lg md:text-xl lg:text-2xl leading-relaxed ">
                {data?.Hero[0]?.HeroSubHeading}
              </p>
              <Link href={'/contact'}>
                <button className="bg-primary mt-5 text-white font-semibold rounded-lg shadow-md hover:bg-transparent hover:text-primary border border-primary transition duration-300 py-4 px-6">
                  {data?.Hero[0]?.HeroButton}
                </button>
              </Link>
            </div>
          </div>
        </Container>
      </div>

      {/* Accordion Section */}
      <div className="flex flex-col lg:flex-row justify-between mt-12 lg:mt-40 px-6 md:px-10 py-10">
        {/* Left Section */}
        <div className="max-w-full lg:max-w-[500px] mb-8 lg:mb-0">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900">
            {data?.AccordianSection[0]?.heading}
          </h1>
          <h5 className="text-xl mt-6 text-gray-700">
            {data?.AccordianSection[0]?.subHeading}
          </h5>
        </div>

        {/* Right Section - Accordion */}
        <div className="flex flex-col space-y-4 lg:max-w-[600px]">
          {data?.AccordianSection[0] &&
            [
              "accordianHeading1",
              "accordianHeading2",
              "accordianHeading3",
              "accordianHeading4",
            ].map((heading, index) => (
              <div
                key={index}
                className={`p-6 border border-blue-500 rounded-3xl transition-all duration-300 ease-in-out 
                  bg-white hover:bg-gray-100 group overflow-hidden
                  ${openSection === index ? "bg-gray-200 shadow-md" : ""}`}
              >
                <h5
                  className="flex justify-between items-center cursor-pointer"
                  onClick={() => toggleSection(index)}
                >
                  <p
                    className={`text-xl font-bold transition duration-300 px-[10px]  
                      ${
                        openSection === index
                          ? "text-blue-600"
                          : "text-gray-900"
                      } 
                      group-hover:text-blue-600`}
                  >
                    {data?.AccordianSection[0]?.[heading]}
                  </p>
                  <div>
                    <FaPlus
                      className={`text-2xl text-gray-900 group-hover:text-blue-600 transition-all duration-300 
                         ${openSection === index ? "rotate-45" : "rotate-0"}`}
                    />
                  </div>
                </h5>
                <div
                  className="transition-all duration-500 ease-in-out overflow-hidden"
                  style={{
                    maxHeight: openSection === index ? "300px" : "0px",
                    opacity: openSection === index ? 1 : 0,
                    padding: openSection === index ? "24px 10px" : "0 32px",
                  }}
                >
                  <p className="text-gray-800 text-lg font-sans">
                    {data?.AccordianSection[0]?.[`${heading}Ans`]}
                  </p>
                </div>
              </div>
            ))}
        </div>
      </div>

      {/* Image with Text Section */}
      <Container>
        <div className="flex flex-col lg:flex-row justify-between items-center py-10 gap-5">
          <div className="max-w-full lg:max-w-[500px]">
            <h2 className="text-4xl sm:text-5xl font-bold">
              {data?.ImageWithText[0]?.heading}
            </h2>
            <p className="mt-2 max-w-full lg:max-w-[600px]">
              {data?.ImageWithText[0]?.subheading}
            </p>
            <button className="mt-4 px-6 py-2 bg-blue-500 text-white rounded-lg">
              {data?.ImageWithText[0]?.button}
            </button>
          </div>
          <div className="w-full max-w-[600px]">
            <Image
              src={data?.ImageWithText[0]?.Image}
              alt="Image"
              width={1000}
              height={1000}
              className="w-full rounded-lg object-cover max-h-[500px]"
              loader={({ src }) => src}
            />
          </div>
        </div>
      </Container>

      {/* Cards Section */}
      <div className="py-20">
        <h2 className="text-5xl font-bold text-center">
          {data?.cardsSection[0]?.heading}
        </h2>
        <p className="mt-2 text-center text-xl">
          {data?.cardsSection[0]?.subHeading}
        </p>

        <div className="w-full mx-auto max-w-[1300px] px-4 sm:px-8">
          <div className="flex flex-wrap sm:grid sm:grid-cols-1 lg:grid-cols-3 gap-10 mt-8">
            {data?.cardsSection[0]?.cardsDetail.map((card: any, index: any) => (
              <div
                key={index}
                className="w-full sm:max-w-full lg:max-w-xs p-6 hover:shadow-xl transition duration-300 ease-in-out border hover:border-blue-500 rounded-md"
              >
                <div className="text-6xl mb-4 text-blue-600">
                  <Image src={card.imgae} alt="" width={100} height={100} />
                </div>
                <h4 className="text-xl sm:text-2xl lg:text-3xl font-bold pb-4">
                  {card.heading}
                </h4>
                <p className="text-gray-700 text-lg font-medium break-words">
                  {card.des}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MultiPagesSection;
