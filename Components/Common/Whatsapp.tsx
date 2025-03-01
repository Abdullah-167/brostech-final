"use client";
import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppButton() {
  const phoneNumber = "+923364987786"; // Replace with your WhatsApp number

  const handleWhatsAppClick = () => {
    window.open(`https://wa.me/${phoneNumber}`, "_blank");
  };

  return (
    <button
      onClick={handleWhatsAppClick}
      className="fixed z-[2000] bottom-5 left-5 bg-green-500 text-white p-3 rounded-full shadow-lg hover:bg-green-600 transition"
    >
      <FaWhatsapp size={30} />
    </button>
  );
}
