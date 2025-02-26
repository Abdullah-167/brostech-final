import React from "react";
import Container from "../Container";
import Image from "next/image";

const Hero = () => {
  return (
    <header className="mt-20">
      <Container>
        <div className="flex justify-center mb-5">
          <button className="text-[15px] bg-gray-300 px-1 py-1 cursor-default ">
            Solutions
          </button>
        </div>
        <div>
          <h1 className="text-6xl font-bold text-center pb-7">
            Services & Solutions
          </h1>
          <p className="text-xl text-center max-w-[800px] mx-auto mb-20">
            At Fillinx Solutions, we're a leading software house specializing in
            website development (Shopify, Webflow, WordPress, Hybrid
            Development, etc.), Mobile Apps Development, Digital Marketing (SEO,
            SEM, SMM), and graphics design. Elevate your online presence with
            our expert solutions.
          </p>
          <div>
            <Image
              className="w-full mb-10"
              src={"/webflow1.jpg"}
              alt={""}
              width={200}
              height={200}
            />
          </div>
          <p className="text-xl text-center max-w-[800px] mx-auto mb-20">
            At Fillinx Solutions, we blend creativity with technical expertise
            to deliver exceptional digital solutions. From crafting visually
            stunning websites on platforms like Shopify, Webflow, and WordPress,
            to driving targeted traffic through SEO, SEM, and SMM, we ensure
            your brand leaves a lasting impression.
          </p>
        </div>
      </Container>
    </header>
  );
};

export default Hero;
