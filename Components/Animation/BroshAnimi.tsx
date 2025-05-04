import React from "react";

const BroshAnimi = ({ onAnimationEnd }: any) => {
  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        zIndex: 9999,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        overflow: "hidden",
        padding: 0,
        margin: 0,
      }}
    >
      <video
        autoPlay
        muted
        playsInline
        onEnded={onAnimationEnd}
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
        }}
      >
        <source src="/broshanimi.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default BroshAnimi;
