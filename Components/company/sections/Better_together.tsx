import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Better_together() {
  return (
    <>
      <div className="main-div mt-24">
        <div className="lg:flex md:flex px-4 gap-20 m-14">
          {/* Text Section */}
          <div>
            <h1 className="lg:text-5xl md:text-3xl sm:text-xl font-bold lg:py-5 md:py-3 sm:py-1 text-gray-900">
              Stronger Through Collaboration
            </h1>
            <h1 className="lg:text-lg md:text-sm lg:py-7 md:py-3 sm:py-1 text-gray-700">
              Success isn’t built alone—it thrives on collaboration. We forge meaningful 
              partnerships, combining expertise, creativity, and innovation to tackle challenges 
              and create impactful solutions.
            </h1>
            <h1 className="lg:text-lg md:text-sm text-gray-700">
              Passion fuels our work, and our mission is to empower businesses while enjoying 
              every step of the journey.
            </h1>
            <div className="flex lg:mt-5 sm:pt-1">
              <Link href={"/contact"}>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="bg-primary text-white px-6 py-3 rounded-md font-semibold shadow-lg transition-all"
                >
                  Let's Connect
                </motion.button>
              </Link>
            </div>
          </div>
          {/* Image Section */}
          <div className="lg:w-[200vw] md:w-[200vw] h-[60vh] flex justify-center">
            <Image
              src="/heromain.png" // Replace with your actual image path
              alt="Team Collaboration"
              layout="intrinsic"
              width={1400}
              height={400}
              className="rounded-lg shadow-lg w-full h-full object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </>
  );
}
