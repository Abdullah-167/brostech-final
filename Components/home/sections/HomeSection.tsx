import React from "react";
import Image from "next/image";
import Link from "next/link";
import Container from "@/Components/Container";
import { motion, useScroll, useTransform } from "framer-motion";

export default function HomeSection() {
  // Create a reference and scroll progress tracker
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // Transform scroll progress into motion values
  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]);
  const xText = useTransform(scrollYProgress, [0, 1], ["0%", "-20%"]);
  const xImage = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const opacityText = useTransform(scrollYProgress, [0, 0.5], [1, 0.3]);
  const opacityImage = useTransform(scrollYProgress, [0, 0.5], [1, 0.3]);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        ease: "easeOut",
        duration: 0.5,
      },
    },
  };

  const hoverScale = {
    scale: 1.05,
    transition: { type: "spring", stiffness: 400, damping: 10 },
  };

  const buttonHover = {
    y: -3,
    transition: { type: "spring", stiffness: 400, damping: 10 },
  };

  return (
    <Container>
      <motion.div
        ref={ref}
        className="home-section flex flex-wrap lg:flex-nowrap justify-between items-center w-full mt-8"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        style={{ y: yText }}
      >
        {/* Left Section - Text */}
        <motion.div
          className="w-full text-left"
          variants={containerVariants}
          style={{
            x: xText,
            opacity: opacityText,
          }}
        >
          <motion.h1
            className="text-3xl md:text-5xl font-bold pb-2 sm:pb-7"
            variants={itemVariants}
          >
            We build your{" "}
            <motion.span
              className="text-primary text-4xl md:text-6xl"
              whileHover={hoverScale}
            >
              Brand
            </motion.span>
            , so you can focus on{" "}
            <motion.span
              className="text-primary text-4xl md:text-6xl"
              whileHover={hoverScale}
            >
              Success.
            </motion.span>
          </motion.h1>

          <motion.h3
            className="lg:text-4xl text-2xl sm:pb-4"
            variants={itemVariants}
          >
            Premier Web & Digital Marketing Agency
          </motion.h3>

          {/* Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row justify-center md:justify-start gap-4 mt-5"
            variants={itemVariants}
          >
            <Link href={"/contact"}>
              <motion.button
                className="bg-primary text-white font-semibold rounded-lg shadow-md hover:bg-white hover:text-primary border hover:border-primary transition duration-300 py-3 px-6"
                whileHover={buttonHover}
                whileTap={{ scale: 0.95 }}
              >
                Schedule a Free Consultation
              </motion.button>
            </Link>
            <Link href={"/services"}>
              <motion.button
                className="relative hidden lg:flex h-[50px] w-40 items-center justify-center overflow-hidden bg-white text-primary shadow-2xl transition-all before:absolute before:h-0 before:w-0 before:rounded-full before:bg-primary before:duration-500 hover:text-white border border-primary rounded-md before:ease-out hover:shadow-primary hover:before:h-56 hover:before:w-56"
                whileHover={buttonHover}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10">Services</span>
              </motion.button>
            </Link>
          </motion.div>
        </motion.div>

        {/* Right Section - Responsive Image */}
        <motion.div
          className="w-full hidden lg:flex justify-center md:justify-end pt-10 lg:pt-5"
          style={{
            x: xImage,
            opacity: opacityImage,
          }}
        >
          <motion.div>
            <Image
              src="/heromain.png"
              alt="Description of the image"
              width={1000}
              height={1000}
              className="md:max-h-[500px] w-full md:w-auto"
              priority
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </Container>
  );
}
