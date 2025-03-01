"use client";
import Container from "@/Components/Container";
import { useState } from "react";
type ServiceCategories = "custom" | "cms" | "mobileApps" | "marketing";
import {
  FaLaravel,
  FaReact,
  FaNodeJs,
  FaWordpressSimple,
  FaShopify,
  FaDrupal,
} from "react-icons/fa";
import { RiFlutterFill } from "react-icons/ri";
import { TbBrandReactNative, TbSeo } from "react-icons/tb";
import { GrSwift } from "react-icons/gr";
import { FaClipboardCheck } from "react-icons/fa";
import { MdOutlineMarkEmailRead } from "react-icons/md";

const servicesData: Record<
  ServiceCategories,
  { title: string; description: string; icon: any }[] // Change to JSX.Element to accept React Icons
> = {
  custom: [
    {
      title: "Laravel",
      description:
        "We craft high-performance Laravel applications with secure, scalable, and efficient web solutions.",
      icon: <FaLaravel className="w-12 h-12" />, // Replace icon with React Icon
    },
    {
      title: "React",
      description:
        "Our React development ensures dynamic, responsive, and interactive web experiences with modern UI/UX.",
      icon: <FaReact className="w-12 h-12" />, // Replace icon with React Icon
    },
    {
      title: "Node JS",
      description:
        "We build fast and scalable web applications using Node.js, ensuring seamless backend performance.",
      icon: <FaNodeJs className="w-12 h-12" />, // Replace icon with React Icon
    },
  ],
  cms: [
    {
      title: "WordPress",
      description:
        "We create SEO-friendly, fully customizable WordPress websites for businesses of all sizes.",
      icon: <FaWordpressSimple className="w-12 h-12" />, // Replace icon with React Icon
    },
    {
      title: "Shopify",
      description:
        "Our Shopify solutions help businesses build high-converting, feature-rich eCommerce stores.",
      icon: <FaShopify className="w-12 h-12" />, // Replace icon with React Icon
    },
    {
      title: "Drupal",
      description:
        "We provide enterprise-level Drupal development for secure, robust, and scalable content management.",
      icon: <FaDrupal className="w-12 h-12" />, // Replace icon with React Icon
    },
  ],
  mobileApps: [
    {
      title: "React Native",
      description:
        "We develop cross-platform mobile apps with React Native for high performance and seamless user experience.",
      icon: <TbBrandReactNative className="w-12 h-12" />, // Replace icon with React Icon
    },
    {
      title: "Flutter",
      description:
        "Our Flutter applications offer a visually stunning and smooth mobile experience across platforms.",
      icon: <RiFlutterFill className="w-12 h-12" />, // Replace icon with React Icon
    },
    {
      title: "Swift",
      description:
        "We create fast, scalable, and feature-rich iOS applications using Swift for a native experience.",
      icon: <GrSwift className="w-12 h-12" />, // Replace icon with React Icon
    },
  ],
  marketing: [
    {
      title: "SEO Optimization",
      description:
        "Our SEO strategies improve rankings, drive organic traffic, and enhance online visibility.",
      icon: <TbSeo className="w-12 h-12" />, // Replace icon with React Icon
    },
    {
      title: "Social Media Marketing",
      description:
        "We design impactful social media campaigns to boost engagement and brand awareness.",
      icon: <FaClipboardCheck className="w-12 h-12" />, // Replace icon with React Icon
    },
    {
      title: "Email Marketing",
      description:
        "Our email marketing strategies increase conversions, retention, and customer engagement.",
      icon: <MdOutlineMarkEmailRead className="w-12 h-12" />, // Replace icon with React Icon
    },
  ],
};

export default function AwardWinning() {
  const [selectedCategory, setSelectedCategory] =
    useState<ServiceCategories>("custom");

  return (
    <div className="bg-gradient-to-r from-green-100 to-blue-100 py-16">
      <Container>
        {/* Header Section (Title Left, Buttons Right) */}
        <div className=" flex flex-col md:flex-row justify-between items-center mb-8">
          <h2 className="lg:text-4xl md:text-3xl font-bold text-black text-left max-w-[600px]">
            We deliver Award-Winning Solutions for Our Clients <br />
          </h2>

          {/* Navigation Buttons */}
          <div className="flex flex-wrap gap-4 mt-4 md:mt-0 text-end">
            {["custom", "cms", "mobileApps", "marketing"].map(
              (category: any) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-5 py-2 text-sm font-semibold border rounded-full transition-colors duration-300 ${
                    selectedCategory === category
                      ? "bg-primary text-white"
                      : "bg-white text-black border"
                  }`}
                >
                  {category.charAt(0).toUpperCase() +
                    category.slice(1).replace(/Apps/, " Apps")}
                </button>
              )
            )}
          </div>
        </div>

        {/* Services Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto lg:mt-20">
          {servicesData[selectedCategory].map((service: any, index: any) => (
            <div
              key={index}
              className="p-6 bg-white rounded-lg shadow-lg text-center min-h-[300px]"
            >
              <div className="mb-4 text-primary flex justify-center">
                {service.icon}
              </div>{" "}
              {/* Render the icon */}
              <h3 className="text-lg font-semibold text-black">
                {service.title}
              </h3>
              <p className="text-gray-600 mt-2">{service.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}
