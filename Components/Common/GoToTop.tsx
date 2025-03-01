"use client";
import { useState, useEffect } from "react";
import { IoIosArrowUp } from "react-icons/io";

export default function GoToTop() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    showButton && (
      <button
        onClick={scrollToTop}
        className="fixed bottom-5 right-5 bg-primary text-white p-3 rounded-full shadow-lg transition"
      >
        <IoIosArrowUp size={24}/>
      </button>
    )
  );
}
