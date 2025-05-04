import { useState, useEffect } from "react";
import { useRouter } from "next/router";

const Animation = ({ onAnimationEnd }: any) => {
  return (
    <div
      className="splash-screen"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: "black",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 9999,
      }}
    >
      <video
        autoPlay
        muted
        onEnded={onAnimationEnd}
        style={{ width: "100%", height: "100%", objectFit: "cover" }}
      >
        <source src="/broshanimi.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default Animation;
