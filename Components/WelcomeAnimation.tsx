import React from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/router";

const WelcomeAnimation = () => {
  const router = useRouter();
  const [animationComplete, setAnimationComplete] = React.useState(false);

  // Letter animation variants
  const letterVariants = {
    hidden: { 
      opacity: 0,
      y: 50,
      rotate: 5
    },
    visible: (i : any) => ({
      opacity: 1,
      y: 0,
      rotate: 0,
      transition: {
        delay: i * 0.1,
        type: "spring",
        stiffness: 100,
        damping: 12,
        mass: 0.5
      }
    })
  };

  // Glow animation
  const glowVariants = {
    hidden: { 
      opacity: 0,
      scale: 0.8
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delay: 1.2,
        duration: 1.5,
        repeat: Infinity,
        repeatType: "reverse"
      }
    }
  };

  // Background shine
  const shineVariants = {
    hidden: { 
      backgroundPosition: "0% 0%" 
    },
    visible: {
      backgroundPosition: "100% 100%",
      transition: {
        duration: 2,
        ease: "linear"
      }
    }
  };

  // Company name letters
  const companyName = "Broshtech".split("");

  return (
    <div className="w-full h-screen flex items-center justify-center  overflow-hidden relative">
      {/* Animated background */}
      <motion.div
        className="absolute inset-0"
        variants={shineVariants}
        initial="hidden"
        animate="visible"
      />
      
      {/* Main container */}
      <div className="relative z-10 text-center">
        {/* Company name */}
        <motion.div 
          className="flex justify-center mb-8"
          onAnimationComplete={() => setAnimationComplete(true)}
        >
          {companyName.map((letter, i) => (
            <motion.span
              key={i}
              className="text-7xl md:text-9xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-600"
              custom={i}
              variants={letterVariants}
              initial="hidden"
              animate="visible"
            >
              {letter}
            </motion.span>
          ))}
        </motion.div>

        {/* Glow effect */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 to-purple-600/20 blur-3xl rounded-full -z-10"
          variants={glowVariants}
          initial="hidden"
          animate="visible"
        />

        {/* Tagline - appears after main animation */}
        <motion.p
          className="text-xl md:text-2xl text-gray-300 mt-12"
          initial={{ opacity: 0, y: 20 }}
          animate={animationComplete ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1.5, duration: 0.8 }}
        >
          Building Digital Excellence
        </motion.p>

        {/* Continue button */}
        <motion.button
          className="mt-16 px-8 py-3 rounded-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold shadow-lg hover:shadow-cyan-500/30 transition-all"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={animationComplete ? { opacity: 1, scale: 1 } : {}}
          transition={{ delay: 1.8, type: "spring" }}
          onClick={() => router.push("/home")}
        >
          Enter Site
        </motion.button>
      </div>
    </div>
  );
};

export default WelcomeAnimation;