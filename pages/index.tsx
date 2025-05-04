import React, { useState, useEffect } from "react";
import Head from "next/head";
import Animation from "../Components/Animation/BroshAnimi";
import MainHome from "../Components/home/MainHome";

export default function HomePage() {
  const [showSplash, setShowSplash] = useState(true);

  const handleAnimationEnd = () => {
    setShowSplash(false);
  };

  useEffect(() => {
    // Optionally add a timeout in case the video fails to load
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 10000); // Fallback after 10 seconds

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Head>
        <title>Home - BroshTech</title>
        <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
      </Head>

      {showSplash ? (
        <Animation onAnimationEnd={handleAnimationEnd} />
      ) : (
        <MainHome />
      )}
    </>
  );
}
