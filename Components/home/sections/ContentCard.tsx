"use client";
import Container from "@/Components/Container";
import React from "react";
import { motion } from "framer-motion";

export default function ContentCard() {
  return (
    <Container>
      <div className="flex flex-col lg:flex-row gap-10 items-center justify-center min-h-screen p-5 overflow-hidden">
        {/* Left Box */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="bg-primary text-black rounded-3xl shadow-lg p-12 max-w-[700px]"
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className="text-5xl font-bold"
          >
            We use latest
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
            className="text-5xl font-bold"
          >
            technologies to run
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            viewport={{ once: true }}
            className="text-5xl font-bold"
          >
            your project
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            viewport={{ once: true }}
            className="text-5xl font-bold mb-8"
          >
            smoothly
          </motion.p>

          <div className="flex flex-wrap gap-2">
            {technologies.map((tech, index) => (
              <motion.button
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{
                  delay: 0.6 + index * 0.1,
                  duration: 0.3,
                }}
                viewport={{ once: true }}
                className="bg-black text-white p-3 rounded-3xl mx-1"
              >
                {tech}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Right Box */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="sm:max-w-[520px] w-full h-full bg-black text-white rounded-3xl shadow-lg py-[74px] px-5"
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
            className="text-4xl font-bold"
          >
            We help brands grow & stand out through strategic design, compelling
            storytelling, and data-driven marketing.
          </motion.h1>
        </motion.div>
      </div>
    </Container>
  );
}

const technologies = [
  "WordPress",
  "Shopify",
  "Shopify Plus",
  "Angular js",
  "React",
  "Laravel",
  "Vue Js Plus",
  "Flutter",
  "Next Js",
];
