"use client";
import Container from "@/Components/Container";
import {
  FaDumbbell,
  FaPaintBrush,
  FaTshirt,
  FaUtensils,
  FaHandsHelping,
  FaBuilding,
  FaChalkboardTeacher,
  FaCar,
  FaGlobeAmericas,
  FaWallet,
  FaMicrochip,
} from "react-icons/fa";
import { motion } from "framer-motion";

const cardVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.95 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      delay: i * 0.1,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

export default function Solving() {
  const industries = [
    {
      name: "Health & Fitness",
      image: "/images/health-fitness.jpg",
      icon: <FaDumbbell />,
      description: "Empowering wellness brands with digital innovation.",
    },
    {
      name: "Beauty & Cosmetics",
      image: "/images/beauty-cosmetics.jpg",
      icon: <FaPaintBrush />,
      description: "Helping beauty brands shine in the digital space.",
    },
    {
      name: "Fashion",
      image: "/images/fashion.jpg",
      icon: <FaTshirt />,
      description: "Crafting stylish online experiences for fashion brands.",
    },
    {
      name: "Food & Drinks",
      image: "/images/food-drinks.jpg",
      icon: <FaUtensils />,
      description: "Serving up fresh digital solutions for food businesses.",
    },
    {
      name: "Consulting Providers",
      image: "/images/consulting.jpg",
      icon: <FaHandsHelping />,
      description: "Supporting consultants with smart, scalable digital tools.",
    },
    {
      name: "Non-Profit",
      image: "/images/nonprofit.jpg",
      icon: <FaBuilding />,
      description: "Helping non-profits amplify their impact online.",
    },
    {
      name: "Education",
      image: "/images/education.jpg",
      icon: <FaChalkboardTeacher />,
      description: "Transforming e-learning with cutting-edge technology.",
    },
    {
      name: "Real Estate",
      image: "/images/realestate.jpg",
      icon: <FaBuilding />,
      description: "Enhancing property businesses with digital strategies.",
    },
    {
      name: "Automotive",
      image: "/images/automotive.jpg",
      icon: <FaCar />,
      description: "Driving growth for automotive brands through innovation.",
    },
    {
      name: "Travel & Tourism",
      image: "/images/travel.jpg",
      icon: <FaGlobeAmericas />,
      description: "Inspiring wanderlust with engaging travel experiences.",
    },
    {
      name: "Finance",
      image: "/images/finance.jpg",
      icon: <FaWallet />,
      description: "Providing financial brands with secure digital solutions.",
    },
    {
      name: "Technology & Startups",
      image: "/images/technology.jpg",
      icon: <FaMicrochip />,
      description:
        "Empowering tech innovators with cutting-edge digital solutions.",
    },
  ];

  return (
    <Container>
      <div className="flex flex-col items-center text-center pt-10 pb-16 px-4">
        {/* Animated Heading */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="py-16 p-4 mb-5"
        >
          <h1 className="text-3xl md:text-5xl font-bold text-black mb-5">
            Solving IT challenges in every <br className="hidden md:inline" />
            industry, every day.
          </h1>
        </motion.div>

        {/* Animated Industry Cards */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-wrap justify-center md:grid grid-cols-2 lg:grid-cols-3 gap-4 mt-6"
        >
          {industries.map((industry, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              custom={index}
              className="p-4 border border-primary rounded-lg text-start bg-white shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <div className="icon text-3xl mb-2 text-primary">
                {industry.icon}
              </div>
              <h3 className="text-lg font-semibold mt-2">{industry.name}</h3>
              <p className="text-sm text-gray-600 mt-1">
                {industry.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </Container>
  );
}
