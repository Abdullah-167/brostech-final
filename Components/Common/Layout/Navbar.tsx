import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { IoIosArrowDown, IoIosMenu } from "react-icons/io";
import Image from "next/image";
import { FaShopify, FaBullhorn, FaCode } from "react-icons/fa";
import { MdOutlinePhoneAndroid } from "react-icons/md";
import Container from "../../Container";

const Navbar = () => {
  const [selectedItem, setSelectedItem] = useState<string>("home");
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

  const timeoutId = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = (title: string) => {
    if (timeoutId.current) clearTimeout(timeoutId.current);
    setHoveredItem(title);
  };

  const handleMouseLeave = () => {
    timeoutId.current = setTimeout(() => {
      setHoveredItem(null);
    }, 100);
  };

  return (
    <div className="fixed w-full bg-white z-[1000]">
      <Container>
        <div className="flex flex-col lg:flex-row justify-between items-center bg-white border-b py-3">
          {/* Logo and Mobile Menu Icon */}
          <div className="flex items-center justify-between w-full lg:w-auto">
            <div className="flex items-center">
              <Link href={"/"}>
                <Image
                  src="/mainlogo.png"
                  alt="BroshTech Logo"
                  className="max-h-[70px] object-cover"
                  width={200}
                  height={200}
                />
              </Link>
            </div>
            <div className="lg:hidden">
              <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                <IoIosMenu className="text-2xl" />
              </button>
            </div>
          </div>
          <div
            className={`${
              isMobileMenuOpen ? "block" : "hidden"
            } lg:flex flex-col lg:flex-row gap-5 lg:gap-10 text-xl lg:text-lg font-medium mt-5 lg:mt-0`}
          >
            <p
              className={`cursor-pointer ${
                selectedItem === "home" || hoveredItem === "home"
                  ? "text-primary"
                  : "text-black"
              }`}
              onClick={() => setSelectedItem("home")}
              onMouseEnter={() => setHoveredItem("home")}
              onMouseLeave={() => setHoveredItem(null)}
            >
              <Link href="/" legacyBehavior>
                <a className="hover:text-primary transition duration-300">
                  Home
                </a>
              </Link>
            </p>

            {/* Solution Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => handleMouseEnter("solution")}
              onMouseLeave={handleMouseLeave}
            >
              <p
                className={`flex items-center gap-1 cursor-pointer ${
                  selectedItem === "solution" || hoveredItem === "solution"
                    ? "text-primary"
                    : "text-black"
                }`}
                onClick={() => setSelectedItem("solution")}
              >
                <Link href="/services" legacyBehavior>
                  <a className="hover:text-primary transition duration-300">
                    Solution
                  </a>
                </Link>
                <IoIosArrowDown
                  className={`${
                    hoveredItem === "solution" ? "rotate-180" : ""
                  } transition-transform`}
                />
              </p>
              {hoveredItem === "solution" && (
                <div className="fixed top-[20px] left-0 mt-10  w-screen   lg:w-screen pt-20 lg:pt-20 top-25 bg-white shadow-lg rounded-md p-5 flex flex-col lg:flex-row gap-10 z-50 px-4 lg:px-60">
                  <div className="w-full lg:w-1/3">
                    <h3 className="text-3xl lg:text-2xl font-bold mb-3">
                      Services
                    </h3>
                    <ul className="space-y-5 lg:space-y-5 mt-5 lg:mt-5 flex flex-col">
                      <Link
                        className="hover:text-primary"
                        href="/services/wordpress"
                      >
                        WordPress Development
                      </Link>

                      <Link
                        className="hover:text-primary"
                        href="/services/graphics-designing"
                      >
                        UI/UX for Mobile Apps
                      </Link>

                      <Link
                        className="hover:text-primary"
                        href="/services/graphics-designing"
                      >
                        Creative Branding
                      </Link>

                      <Link
                        className="hover:text-primary"
                        href="/services/digital-marketing"
                      >
                        SEO
                      </Link>
                    </ul>
                  </div>

                  {/* Business Challenges (Visible only on Large Screens) */}
                  <div className="hidden lg:block w-full">
                    <h3 className="text-2xl font-bold mb-5">
                      Business Challenges
                    </h3>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                      <div className="border p-5 flex flex-col">
                        <FaShopify className="text-primary text-3xl" />
                        <p className="mt-2 font-semibold ">
                          <Link href="/services/shopify-development">
                            {" "}
                            Shopify Design & Development
                          </Link>
                        </p>
                      </div>
                      <div className="border p-5 flex flex-col">
                        <MdOutlinePhoneAndroid className="text-primary text-3xl" />
                        <p className="mt-2 font-semibold ">
                          <Link href="/services/mobile-app-development">
                            {" "}
                            Mobile Apps Development
                          </Link>
                        </p>
                      </div>
                      <div className="border p-5 flex flex-col">
                        <FaBullhorn className="text-primary text-3xl" />
                        <p className="mt-2 font-semibold ">
                          <Link href="/services/digital-marketing">
                            Digital Marketing
                          </Link>
                        </p>
                      </div>
                      <div className="border p-5 flex flex-col">
                        <FaCode className="text-primary text-3xl" />
                        <p className="mt-2 font-semibold ">
                          <Link href="/services/custom-development">
                            {" "}
                            Full Stack Development
                          </Link>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Company Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => handleMouseEnter("company")}
              onMouseLeave={handleMouseLeave}
            >
              <p
                className={`flex items-center gap-1 cursor-pointer ${
                  selectedItem === "company" || hoveredItem === "company"
                    ? "text-primary"
                    : "text-black"
                }`}
                onClick={() => setSelectedItem("company")}
              >
                <p className="hover:text-primary transition duration-300">
                  <Link href="/company" legacyBehavior>
                    Company
                  </Link>
                </p>

                <IoIosArrowDown
                  className={`${
                    hoveredItem === "company" ? "rotate-180" : ""
                  } transition-transform`}
                />
              </p>
              {hoveredItem === "company" && (
                <div className="fixed top-[22px] mt-10 top-25 bg-white shadow-lg rounded-md p-5 items-center flex flex-col lg:flex-row gap-10 z-50 px-4 ">
                  <div className="flex flex-col gap-y-1">
                    <div>
                      <Link className="hover:text-primary" href="/company">
                        About us
                      </Link>
                    </div>
                    <div>
                      <Link className="hover:text-primary" href="#">
                        Team
                      </Link>
                    </div>
                  </div>
                  {/* Cloud Services (Visible only on Large Screens) */}
                </div>
              )}
            </div>

            <p
              className={`cursor-pointer ${
                selectedItem === "career" || hoveredItem === "career"
                  ? "text-primary"
                  : "text-black"
              }`}
              onClick={() => setSelectedItem("career")}
              onMouseEnter={() => setHoveredItem("career")}
              onMouseLeave={() => setHoveredItem(null)}
            >
              <Link href="/contact" legacyBehavior>
                <a className="hover:text-primary transition duration-300">
                  Contact Us
                </a>
              </Link>
            </p>
          </div>

          {/* Schedule Button (Visible on Large Screens) */}
          <div className="hidden lg:block mt-5 lg:mt-0">
            <Link href={"/contact"}>
              <button className="bg-primary text-white font-semibold rounded-lg shadow-md hover:bg-white hover:text-primary border hover:border-primary transition duration-300 py-4 px-6">
                Schedule a Free Consultation
              </button>
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
