import React, { useState, useEffect } from "react";
import Head from "next/head";
import Animation from "../Components/Animation/BroshAnimi";
import MainHome from "../Components/home/MainHome";

export default function HomePage() {
  const [showSplash, setShowSplash] = useState(true);

  const handleAnimationEnd = () => {
    setShowSplash(false);
  };


  return (
    <>
      <Head>
        <title>Home - BroshTech</title>
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
      </Head>

      {showSplash ? (
        <Animation onAnimationEnd={handleAnimationEnd} />
      ) : (
        <MainHome />
      )}
    </>
  );
}
