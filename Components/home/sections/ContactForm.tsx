import React, { useState } from "react";
import { FiPhone, FiMapPin, FiMail } from "react-icons/fi";
import { motion } from "framer-motion";
import Container from "@/Components/Container";

export default function Career() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e : any) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 2000);
  };

  return (
    <Container>
      <div className="flex  items-center justify-center px-4 py-12 bg-white">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className=" w-full p-8 flex flex-wrap md:flex-nowrap justify-between gap-6 bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200"
        >
          {/* Left Section - Contact Details */}

          {/* Left Section */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.7 }}
            className="flex-1 text-left"
          >
            <h2 className="text-4xl font-extrabold text-[#54d119] mb-4">
              Got a project? <br /> Let’s talk →
            </h2>
            <p className="text-lg text-gray-600 mb-4">info@broshtech.com</p>
            <div className="flex gap-4 text-2xl text-[#54d119]">
              <i className="fa-brands fa-instagram cursor-pointer hover:text-gray-800 transition-transform transform hover:scale-110"></i>
              <i className="fa-brands fa-dribbble cursor-pointer hover:text-gray-800 transition-transform transform hover:scale-110"></i>
              <i className="fa-brands fa-linkedin cursor-pointer hover:text-gray-800 transition-transform transform hover:scale-110"></i>
              <i className="fa-brands fa-facebook cursor-pointer hover:text-gray-800 transition-transform transform hover:scale-110"></i>
              <i className="fa-brands fa-behance cursor-pointer hover:text-gray-800 transition-transform transform hover:scale-110"></i>
            </div>
          </motion.div>

          {/* Right Section - Contact Form / Success Message */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="p-6 lg:col-span-8 bg-white"
          >
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="flex flex-col items-center text-center p-6 bg-gray-100 rounded-lg shadow-md"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1.2 }}
                  transition={{ duration: 0.5 }}
                  className="text-[#54d119] text-5xl"
                >
                  🎉
                </motion.div>
                <h2 className="text-xl md:text-2xl font-semibold text-[#54d119] mt-3">
                  Thank You!
                </h2>
                <p className="text-gray-600 mt-2">
                  Your message has been received. We'll get back to you soon.
                </p>
              </motion.div>
            ) : (
              <>
                <h2 className="text-2xl md:text-3xl font-semibold text-[#54d119] mb-4">
                  Make an Online Enquiry
                </h2>
                <p className="text-gray-600 mb-4">
                  Have a question or project idea? Fill out the form below, and
                  we'll get back to you.
                </p>

                <form
                  onSubmit={handleSubmit}
                  className="grid grid-cols-1 md:grid-cols-2 gap-4"
                >
                  <InputField type="text" placeholder="Full Name" />
                  <InputField type="email" placeholder="Email Address" />
                  <InputField type="text" placeholder="Subject" />
                  <InputField type="date" placeholder="Preferred Date" />
                  <textarea
                    placeholder="Your Message"
                    className="col-span-1 md:col-span-2 p-4 bg-gray-100 text-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#54d119] transition-all duration-300"
                  ></textarea>

                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    type="submit"
                    className="col-span-1 md:col-span-2 bg-black hover:bg-gray-900 text-white font-semibold py-3 rounded-lg transition-all duration-300 flex items-center justify-center"
                  >
                    {loading ? (
                      <motion.span
                        animate={{ rotate: 360 }}
                        transition={{ repeat: Infinity, duration: 1 }}
                        className="mr-2"
                      >
                        ⏳
                      </motion.span>
                    ) : (
                      "Send Message"
                    )}
                  </motion.button>
                </form>
              </>
            )}
          </motion.div>
        </motion.div>
      </div>
    </Container>
  );
}

// function ContactItem({ icon, title, subtitle } : any) {
//   return (
//     <motion.div
//       whileHover={{ scale: 1.05 }}
//       className="flex items-center space-x-3 bg-gray-100 p-3 rounded-lg shadow-md transition-all duration-300"
//     >
//       <div className="text-[#54d119] text-2xl">{icon}</div>
//       <div>
//         <p className="text-lg font-semibold text-[#54d119]">{title}</p>
//         <p className="text-gray-600 text-sm">{subtitle}</p>
//       </div>
//     </motion.div>
//   );
// }

function InputField({ type, placeholder }: any) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className="p-3 bg-gray-100 text-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#54d119] transition-all duration-300 w-full"
    />
  );
}
