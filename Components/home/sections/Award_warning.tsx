"use client";
import Container from "@/Components/Container";
import { useState } from "react";
type ServiceCategories = "custom" | "cms" | "mobileApps" | "marketing";

const servicesData: Record<
  ServiceCategories,
  { title: string; description: string; icon: string }[]
> = {
  custom: [
    {
      title: "Laravel",
      description:
        "We craft high-performance Laravel applications with secure, scalable, and efficient web solutions.",
      icon: "https://cdn.worldvectorlogo.com/logos/laravel-2.svg",
    },
    {
      title: "React",
      description:
        "Our React development ensures dynamic, responsive, and interactive web experiences with modern UI/UX.",
      icon: "https://cdn.worldvectorlogo.com/logos/react-2.svg",
    },
    {
      title: "Node JS",
      description:
        "We build fast and scalable web applications using Node.js, ensuring seamless backend performance.",
      icon: "https://cdn.worldvectorlogo.com/logos/nodejs-icon.svg",
    },
  ],
  cms: [
    {
      title: "WordPress",
      description:
        "We create SEO-friendly, fully customizable WordPress websites for businesses of all sizes.",
      icon: "https://cdn.worldvectorlogo.com/logos/wordpress-blue.svg",
    },
    {
      title: "Shopify",
      description:
        "Our Shopify solutions help businesses build high-converting, feature-rich eCommerce stores.",
      icon: "https://cdn.worldvectorlogo.com/logos/shopify.svg",
    },
    {
      title: "Drupal",
      description:
        "We provide enterprise-level Drupal development for secure, robust, and scalable content management.",
      icon: "https://cdn.worldvectorlogo.com/logos/drupal.svg",
    },
  ],
  mobileApps: [
    {
      title: "React Native",
      description:
        "We develop cross-platform mobile apps with React Native for high performance and seamless user experience.",
      icon: "https://cdn.worldvectorlogo.com/logos/react-2.svg",
    },
    {
      title: "Flutter",
      description:
        "Our Flutter applications offer a visually stunning and smooth mobile experience across platforms.",
      icon: "https://cdn.worldvectorlogo.com/logos/flutter.svg",
    },
    {
      title: "Swift",
      description:
        "We create fast, scalable, and feature-rich iOS applications using Swift for a native experience.",
      icon: "https://cdn.worldvectorlogo.com/logos/swift-15.svg",
    },
  ],
  marketing: [
    {
      title: "SEO Optimization",
      description:
        "Our SEO strategies improve rankings, drive organic traffic, and enhance online visibility.",
      icon: "https://cdn.worldvectorlogo.com/logos/seo.svg",
    },
    {
      title: "Social Media Marketing",
      description:
        "We design impactful social media campaigns to boost engagement and brand awareness.",
      icon: "https://cdn.worldvectorlogo.com/logos/social-media.svg",
    },
    {
      title: "Email Marketing",
      description:
        "Our email marketing strategies increase conversions, retention, and customer engagement.",
      icon: "https://cdn.worldvectorlogo.com/logos/email.svg",
    },
  ],
};

export default function AwardWinning() {
  const [selectedCategory, setSelectedCategory] =
    useState<ServiceCategories>("custom");

  return (
    <div className="bg-gradient-to-r from-green-100   to-blue-100 py-16">
      <Container>
        {/* Header Section (Title Left, Buttons Right) */}
        <div className=" flex flex-col md:flex-row justify-between items-center mb-8">
          <h2 className="lg:text-4xl md:text-3xl font-bold text-black text-left max-w-[600px]">
            We deliver Award-Winning Solutions for Our Clients <br />
          </h2>

          {/* Navigation Buttons */}
          <div className="flex flex-wrap gap-4 mt-4 md:mt-0 text-end">
            {["custom", "cms", "mobileApps", "marketing"].map((category : any) => (
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
            ))}
          </div>
        </div>

        {/* Services Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl   mx-auto lg:mt-20">
          {servicesData[selectedCategory].map((service: any, index: any) => (
            <div
              key={index}
              className="p-6 bg-white rounded-lg shadow-lg text-center min-h-[300px]"
            >
              <img
                src={service.icon}
                alt={service.title}
                className="w-12 h-12 mx-auto mb-4"
              />
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
