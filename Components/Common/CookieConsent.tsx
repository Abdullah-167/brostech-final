"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie_consent");
    if (!consent) {
      setVisible(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem("cookie_consent", "true");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-6 left-4 right-4 md:left-8 md:right-8 z-50 animate-fadeIn">
      <div className="bg-neutral-900 border border-neutral-700 text-white rounded-2xl p-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 shadow-xl backdrop-blur-md">
        <div className="flex-1">
          <p className="text-sm md:text-base font-medium text-gray-300">
            This website uses cookies to ensure you get the best experience. By continuing, you agree to our use of cookies.
          </p>
          <Link
            href="/policies/privacy-policy"
            className="mt-2 inline-block text-lime-400 text-sm hover:underline"
          >
            Learn more in our Privacy Policy
          </Link>
        </div>
        <button
          onClick={acceptCookies}
          className="bg-lime-400 hover:bg-lime-500 text-black font-semibold text-sm md:text-base px-5 py-2 rounded-xl transition duration-200"
        >
          Accept All Cookies
        </button>
      </div>
    </div>
  );
}
