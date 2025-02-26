import React from "react";
import { motion } from "framer-motion";
import { FaWordpress, FaNodeJs, FaReact, FaShopify } from "react-icons/fa";
import { SiWebflow, SiFlutter, SiLaravel } from "react-icons/si";
import Container from "@/Components/Container";

export default function Technologies() {
  return (
    <Container>
      <div className="flex flex-col lg:flex-row items-center justify-between px-10 py-20 ">
        {/* Left Side - Text Section */}
        <div className="lg:w-1/2 space-y-6">
          <h1 className="text-5xl font-bold">Technologies & Platforms</h1>
          <p className="text-lg text-gray-600">
            We leverage a diverse range of web development platforms, delivering
            tailored solutions that align with your unique needs and goals.
          </p>
          <button className="bg-primary text-white px-6 py-3 rounded-md font-semibold text-lg hover:bg-transparent hover:text-primary border hover:border-primary">
            View All Technologies
          </button>
        </div>

        {/* Animated Icons Section */}
        <div className="hidden md:flex flex-col items-center justify-center py-10 max-h-[400px] overflow-hidden">
          {/* First Row */}
          <div className="flex gap-20 mb-6">
            <motion.div
              initial={{ opacity: 0, y: -70 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <FaWordpress className="text-blue-500 text-6xl" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: -70 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <SiWebflow className="text-indigo-600 text-6xl" />
            </motion.div>
          </div>

          {/* Second Row */}
          <div className="flex items-center gap-20 mb-6">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <FaShopify className="text-green-600 text-6xl" />
            </motion.div>

            <h2 className="text-4xl font-bold">
              <span className="italic text-black">shopify</span>
              <span className="text-yellow-500">plus</span>
            </h2>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <SiLaravel className="text-red-500 text-6xl" />
            </motion.div>
          </div>

          {/* Third Row */}
          <div className="flex gap-20">
            <motion.div
              initial={{ opacity: 0, y: 70 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.0 }}
            >
              <SiFlutter className="text-blue-400 text-6xl" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 70 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
            >
              <FaNodeJs className="text-green-500 text-6xl" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 70 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.4 }}
            >
              <FaReact className="text-blue-300 text-6xl" />
            </motion.div>
          </div>
        </div>
      </div>
    </Container>
  );
}
