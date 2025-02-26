import React, { useState } from "react";
import Link from "next/link";
import { IoIosArrowDown, IoIosMenu, IoMdClose } from "react-icons/io";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const ResNav = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState<any>(null);

  return (
    <nav className="fixed md:hidden block w-full bg-white shadow-md z-50">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        {/* Logo */}
        <Link href="/">
          <Image
            src="/mainlogo.png"
            className="max-h-[80px] object-cover"
            alt="Logo"
            width={150}
            height={50}
          />
        </Link>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <IoMdClose className="text-2xl" />
          ) : (
            <IoIosMenu className="text-2xl" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="lg:hidden flex flex-col space-y-4 px-6 py-4 bg-white shadow-md"
          >
            <Link
              href="/"
              className="hover:text-primary"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Home
            </Link>
            <div className="relative">
              <button
                onClick={() =>
                  setDropdownOpen(
                    dropdownOpen === "solution" ? null : "solution"
                  )
                }
                className="flex items-center justify-between w-full"
              >
                Solution{" "}
                <IoIosArrowDown
                  className={`ml-1 ${
                    dropdownOpen === "solution" ? "rotate-180" : ""
                  }`}
                />
              </button>
              <AnimatePresence>
                {dropdownOpen === "solution" && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="pl-4 mt-2 space-y-2"
                  >
                    <Link
                      href="/services/wordpress"
                      className="block"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      WordPress Development
                    </Link>
                    <Link
                      href="/services/graphics-designing"
                      className="block"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      UI/UX for Mobile Apps
                    </Link>
                    <Link
                      href="/services/digital-marketing"
                      className="block"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      SEO
                    </Link>
                    <Link
                      href="/services"
                      className="block"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      All Services
                    </Link>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            <Link
              href="/company"
              className="hover:text-primary"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About Us
            </Link>
            <Link
              href="/team"
              className="hover:text-primary"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Our Team
            </Link>
            <Link
              href="/contact"
              className="hover:text-primary"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact Us
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default ResNav;
