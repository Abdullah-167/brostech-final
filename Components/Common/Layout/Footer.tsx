import React from "react";
import { useRouter } from "next/router";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaDribbble,
} from "react-icons/fa";
import Link from "next/link";
import Container from "@/Components/Container";

const footerData = {
  solutions: [
    {
      name: "Creative Branding",
      link: "/services/graphics-designing",
    },
    {
      name: "Shopify",
      link: "/services/shopify-development",
    },
    {
      name: "WordPress Development",
      link: "/services/wordpress",
    },
    {
      name: "Full Stack Development",
      link: "/services/custom-development",
    },
    {
      name: "SEO / SMM / SEM",
      link: "/services/digital-marketing",
    },
  ],
  company: [
    { title: "About", link: "/company" },
    { title: "Team", link: "/team" },
  ],
  joinUs: { text: "We are hiring", link: "#" },
  policies: [
    { text: "Privacy Policy", link: "/policies/privacy-policy" },
    { text: "Terms & Conditions", link: "/policies/terms-conditions" },
  ],
};

export default function Footer() {
  const router = useRouter();
  const isContactPage = router.pathname === "/contact";

  return (
    <footer
      className={`bg-black text-white  ${
        isContactPage ? " pt-0 pb-16" : "pt-16 pb-5"
      }`}
    >
      {/* Hide this section if on the Contact page */}
      <div
        className={`max-w-6xl mx-auto px-6 ${isContactPage ? " hidden " : ""}`}
      >
        <div className="text-center mb-16 mt-10">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight">
            Ready to transform your Ideas into
          </h1>
          <h1 className="text-4xl md:text-6xl font-extrabold text-lime-400 leading-tight mt-4 mb-7">
            Innovative Software Solutions?
          </h1>
          <button className="bg-primary text-white text-lg font-semibold rounded-lg shadow-md hover:bg-transparent hover:text-primary border border-primary transition duration-300 py-3 px-6">
            Schedule a Free Consultation Today
          </button>
        </div>
      </div>
      <Container>
        {/* Footer Links */}
        <div className="flex flex-wrap md:flex-nowrap justify-between gap-10 md:gap-16 border-t border-gray-700 pt-10 ">
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold mb-4">
              Solutions
            </h2>
            <ul className="flex flex-col gap-4 text-gray-300 text-md">
              {footerData.solutions.map((item, index) => (
                <li key={index}>
                  <Link
                    href={item.link}
                    className="hover:text-lime-400 transition"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-2xl md:text-3xl font-semibold mb-4">Company</h2>
            <ul className="grid grid-cols-1 gap-4 text-gray-300 text-sm md:text-lg">
              {footerData.company.map((item, index) => (
                <li key={index}>
                  <Link
                    href={item.link}
                    className="hover:text-lime-400 transition"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="text-center md:text-left">
            <h2 className="text-2xl md:text-3xl font-semibold mb-4">About</h2>
            <p className=" text-gray-300 text-sm md:text-lg max-w-[400px]">
              At Broshtech, we innovate, inspire, and redefine possibilities,
              shaping the future with creativity and vision.
            </p>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-16 border-t border-gray-700 pt-6 flex flex-col md:flex-row justify-between items-center ">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">© 2025 BroshTech</p>

          <div className="flex flex-wrap justify-center md:justify-start space-x-4 md:space-x-6 text-gray-400 text-sm">
            {footerData.policies.map((policy, index) => (
              <Link
                key={index}
                href={policy.link}
                className="hover:text-white transition"
              >
                {policy.text}
              </Link>
            ))}
          </div>

          <div className="flex space-x-3 md:space-x-4 mt-4 md:mt-0 ">
            <Link
              href="https://www.linkedin.com/company/broshtech/"
              className="bg-primary p-2 rounded-full hover:scale-110 transition border border-primary group hover:bg-black"
            >
              <FaLinkedinIn className="w-4 h-4 text-black group-hover:text-primary" />
            </Link>
            <Link
              href="https://www.facebook.com/profile.php?id=61569795868977"
              className="bg-primary p-2 rounded-full hover:scale-110 transition border border-primary group hover:bg-black"
            >
              <FaFacebookF className="w-4 h-4 text-black group-hover:text-primary" />
            </Link>
            <Link
              href="https://www.instagram.com/broshtech/"
              className="bg-primary p-2 rounded-full hover:scale-110 transition border border-primary group hover:bg-black"
            >
              <FaInstagram className="w-4 h-4 text-black group-hover:text-primary" />
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
