import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaDribbble,
} from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

// Footer Data
const footerData = {
  solutions: [
    "Webflow Design & Development",
    "Creative Branding",
    "Shopify Plus",
    "Shopify Mobile Apps",
    "WordPress Development",
    "Custom Mobile Apps",
    "Full Stack Development",
    "SEO / SMM / SEM",
  ],
  company: ["About", "Team", "FAQs"],
  joinUs: { text: "We are hiring", link: "#" },
  policies: [
    { text: "Privacy Policy", link: "#" },
    { text: "Terms & Conditions", link: "#" },
    { text: "Refund Policy", link: "#" },
  ],
};

export default function Scedule() {
  return (
    <footer className="bg-black text-white py-16 ">
      {/* Header Section */}
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16 mt-10">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white leading-tight">
            Ready to transform your Ideas into
          </h1>
          <h1 className="text-4xl md:text-5xl font-extrabold text-lime-400 leading-tight mt-4">
            Innovative Software Solutions?
          </h1>
          <button className="mt-10  px-4 py-4 md:px-10 md:py-5 bg-[#54d119] hover:bg-yellow-500 text-white text-lg md:text-xl font-semibold rounded-md transition">
            Schedule a Free Consultation Today
          </button>
        </div>
      </div>

      {/* Footer Links */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-16 border-t border-gray-700 pt-10 px-6 md:px-20 lg:px-40">
        {/* Solutions */}
        <div>
          <h2 className="text-2xl md:text-3xl font-semibold mb-4">Solutions</h2>
          <ul className="grid grid-cols-2 gap-4 text-gray-300 text-sm md:text-lg">
            {footerData.solutions.map((item, index) => (
              <li key={index}>
                <Link href="#" className="hover:text-lime-400 transition">
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Company */}
        <div>
          <h2 className="text-2xl md:text-3xl font-semibold mb-4">Company</h2>
          <ul className="grid grid-cols-1 gap-4 text-gray-300 text-sm md:text-lg">
            {footerData.company.map((item, index) => (
              <li key={index}>
                <Link href="#" className="hover:text-lime-400 transition">
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Join Us */}
        <div className="text-center md:text-left">
          <h2 className="text-2xl md:text-3xl font-semibold mb-4">Join us</h2>
          <Link
            href={footerData.joinUs.link}
            className="inline-block px-8 py-4 md:px-10 md:py-5 bg-primary hover:bg-blue-700 text-white text-sm md:text-lg font-semibold rounded-md transition"
          >
            {footerData.joinUs.text}
          </Link>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="mt-16 border-t border-gray-700 pt-6 flex flex-col md:flex-row justify-between items-center px-6 md:px-20 lg:px-40">
        {/* Copyright */}
        <p className="text-gray-400 text-sm md:text-2xl mb-4 md:mb-0">
          © 2025 BroshTech Solutions
        </p>

        {/* Policies */}
        <div className="flex flex-wrap justify-center md:justify-start space-x-4 md:space-x-6 text-gray-400 text-sm md:text-lg">
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

        {/* Social Media Icons */}
        <div className="flex space-x-3 md:space-x-4 mt-4 md:mt-0">
          <Link
            href="#"
            className="bg-lime-400 p-3 rounded-full hover:scale-110 transition hover:bg-black hover:text-white"
          >
            <FaLinkedinIn className="w-5 h-5 md:w-6 md:h-6 text-black hover:text-white" />
          </Link>
          <Link
            href="#"
            className="bg-lime-400 p-3 rounded-full hover:scale-110 transition hover:bg-black hover:text-white"
          >
            <FaFacebookF className="w- h-5 md:w-6 md:h-6 text-black hover:text-white" />
          </Link>
          <Link
            href="#"
            className="bg-lime-400 p-3 rounded-full hover:scale-110 transition hover:bg-black hover:text-white"
          >
            <FaInstagram className="w-5 h-5 md:w-6 md:h-6 text-black hover:text-white" />
          </Link>
          <Link
            href="#"
            className="bg-lime-400 p-3 rounded-full hover:scale-110 transition hover:bg-black hover:text-white"
          >
            <FaDribbble className="w-5 h-5 md:w-6 md:h-6 text-black hover:text-white" />
          </Link>
        </div>
      </div>
    </footer>
  );
}

const pagesData = [
  {
    pagetitile: "Graphics Desiging",
    pageSectionsData: [
      {
        Hero: [
          {
            HeroImage: "/",
            HeroHeading: "",
            HearoSubHeading: "",
            HeroButton: "",
          },
        ],
        AccordianSection: [
          {
            heading: "",
            subHeading: "",
            accordianHeading1: "",
            accordianHeading1Ans: "",
            accordianHeading2: "",
            accordianHeading2Ans: "",
            accordianHeading3: "",
            accordianHeading3Ans: "",
            accordianHeading4: "",
            accordianHeading4Ans: "",
          },
        ],
        ImageWithText: [
          {
            heading: "",
            subheading: "",
            button: "",
            Image: "/",
          },
        ],
        cardsSection: [
          {
            heading: "",
            subHeading: "",
            cardsDetail: [
              {
                imgae: "/",
                heading: "",
                des: "",
              },
              {
                imgae: "/",
                heading: "",
                des: "",
              },
              {
                imgae: "/",
                heading: "",
                des: "",
              },
              {
                imgae: "/",
                heading: "",
                des: "",
              },
              {
                imgae: "/",
                heading: "",
                des: "",
              },
              {
                imgae: "/",
                heading: "",
                des: "",
              },
            ],
          },
        ],
        footerBannerSection: [
          {
            heading: "",
            subHeading: "",
            button: "",
            image: "/",
          },
        ],
      },
      {},
    ],
  },
  {
    pagetitile: "Custome Development",
    pageSectionsData: [
      {
        Hero: [
          {
            HeroImage: "/",
            HeroHeading: "",
            HearoSubHeading: "",
            HeroButton: "",
          },
        ],
        AccordianSection: [
          {
            heading: "",
            subHeading: "",
            accordianHeading1: "",
            accordianHeading1Ans: "",
            accordianHeading2: "",
            accordianHeading2Ans: "",
            accordianHeading3: "",
            accordianHeading3Ans: "",
            accordianHeading4: "",
            accordianHeading4Ans: "",
          },
        ],
        ImageWithText: [
          {
            heading: "",
            subheading: "",
            button: "",
            Image: "/",
          },
        ],
        cardsSection: [
          {
            heading: "",
            subHeading: "",
            cardsDetail: [
              {
                imgae: "/",
                heading: "",
                des: "",
              },
              {
                imgae: "/",
                heading: "",
                des: "",
              },
              {
                imgae: "/",
                heading: "",
                des: "",
              },
              {
                imgae: "/",
                heading: "",
                des: "",
              },
              {
                imgae: "/",
                heading: "",
                des: "",
              },
              {
                imgae: "/",
                heading: "",
                des: "",
              },
            ],
          },
        ],
        footerBannerSection: [
          {
            heading: "",
            subHeading: "",
            button: "",
            image: "/",
          },
        ],
      },
      {},
    ],
  },
  {
    pagetitile: "Digital Marketing",
    pageSectionsData: [
      {
        Hero: [
          {
            HeroImage: "/",
            HeroHeading: "",
            HearoSubHeading: "",
            HeroButton: "",
          },
        ],
        AccordianSection: [
          {
            heading: "",
            subHeading: "",
            accordianHeading1: "",
            accordianHeading1Ans: "",
            accordianHeading2: "",
            accordianHeading2Ans: "",
            accordianHeading3: "",
            accordianHeading3Ans: "",
            accordianHeading4: "",
            accordianHeading4Ans: "",
          },
        ],
        ImageWithText: [
          {
            heading: "",
            subheading: "",
            button: "",
            Image: "/",
          },
        ],
        cardsSection: [
          {
            heading: "",
            subHeading: "",
            cardsDetail: [
              {
                imgae: "/",
                heading: "",
                des: "",
              },
              {
                imgae: "/",
                heading: "",
                des: "",
              },
              {
                imgae: "/",
                heading: "",
                des: "",
              },
              {
                imgae: "/",
                heading: "",
                des: "",
              },
              {
                imgae: "/",
                heading: "",
                des: "",
              },
              {
                imgae: "/",
                heading: "",
                des: "",
              },
            ],
          },
        ],
        footerBannerSection: [
          {
            heading: "",
            subHeading: "",
            button: "",
            image: "/",
          },
        ],
      },
      {},
    ],
  },
];
