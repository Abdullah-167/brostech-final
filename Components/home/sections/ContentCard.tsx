import Container from "@/Components/Container";
import React from "react";

export default function ContentCard() {
  return (
    <Container>
      <div className="flex flex-col lg:flex-row  gap-10 items-center justify-center min-h-screen p-5">
        {/* Left Column (First & Third Box) */}

        <div className=" bg-primary text-black rounded-3xl shadow-lg p-12 max-w-[700px]">
          <h1 className="text-5xl font-bold">We use latest</h1>
          <p className="text-5xl font-bold"> technologies to run</p>
          <h2 className="text-5xl font-bold">your project</h2>
          <p className="text-5xl font-bold mb-8"> smoothly</p>
          <div className="flex flex-wrap gap-2">
            <button className="bg-black p-3 text-white rounded-3xl mx-1">
              WordPress
            </button>
            <button className="bg-black p-3 text-white rounded-3xl mx-1">
              Shopify
            </button>
            <button className="bg-black p-3 text-white rounded-3xl mx-1">
              Shopify Plus
            </button>
            <button className="bg-black p-3 text-white rounded-3xl mx-1">
              {" "}
              Angular js
            </button>
            <button className="bg-black p-3 text-white rounded-3xl mx-1">
              React
            </button>
            <button className="bg-black p-3 text-white rounded-3xl mx-1">
              Laravel
            </button>
            <button className="bg-black p-3 text-white rounded-3xl mx-1">
              Vue Js Plus
            </button>
            <button className="bg-black p-3 text-white rounded-3xl mx-1">
              Flutter
            </button>
            <button className="bg-black p-3 text-white rounded-3xl mx-1">
              Next Js
            </button>
          </div>
        </div>

        {/* Right Column (Second & Fourth Box with Margin on Top) */}
        <div className="sm:max-w-[520px] w-full h-full  bg-black text-white rounded-3xl shadow-lg py-[74px] px-5">
          <h1 className="text-4xl font-bold">
            We help brands grow & stand out through strategic design, compelling
            storytelling, and data-driven marketing.
          </h1>
        </div>
      </div>
    </Container>
  );
}

const buttons = [
  "Custom Web Development",
  "eCommerce Store Development",
  "Branding & Logo Design",
  "UI/UX Design",
  "SEO & Digital Marketing",
  "Conversion Rate Optimization",
  "Social Media Marketing",
  "Performance Advertising",
  "Content Strategy",
];
