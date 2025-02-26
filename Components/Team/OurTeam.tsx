import Image from "next/image";
import { motion } from "framer-motion";

export default function OurTeam() {
  return (
    <section className="container mx-auto px-6 lg:px-20 py-12">
      <div className="flex flex-col lg:flex-row items-center justify-between space-y-8 lg:space-y-0">
        {/* Left Section (Text Content) */}
        <div className="max-w-xl text-center lg:text-left">
          <h2 className="text-4xl font-bold text-[#3B0764]">
            Our Team Is Here to <br /> Support Your Team
          </h2>
          <p className="text-gray-800 mt-4">
            Drawing from years of IT experience, our team at Fillinx Solutions is composed 
            of skilled developers, project managers, team leads, content creators, and marketing 
            experts to understand your business needs and drive your success forward. Reach out 
            today for an initial consultation, and let’s explore how we can tailor our services 
            to address your most pressing IT challenges.
          </p>
          <button className="mt-6 px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-500 text-white font-semibold rounded-md hover:scale-105 transition-transform duration-300">
            Schedule a Free Consultation
          </button>
        </div>

        {/* Right Section (Image) */}
        <div className="w-full lg:w-[500px]">
          <Image
            src="/company_together.jpg"
            alt="Team Hands"
            width={500}
            height={400}
            className="w-full h-auto"
          />
        </div>
      </div>

      {/* Animated Footer Appearing from the Bottom */}
      <motion.footer
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="mt-12 text-center text-white py-4 bg-gradient-to-r from-[#3B0764] to-[#9333EA] rounded-t-lg"
      >
        <p className="text-lg font-medium">Empowering Teams, Elevating Success 🚀</p>
      </motion.footer>
    </section>
  );
}