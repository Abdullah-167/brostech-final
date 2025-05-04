const Animation = ({ onAnimationEnd }: any) => {
  return (
    <div
      className="fixed inset-0 bg-white flex justify-center items-center z-[9999]"
    >
      <video
        autoPlay
        muted
        playsInline
        onEnded={onAnimationEnd}
        className="w-full max-w-[400px] md:max-w-full h-auto object-contain"
      >
        <source src="/broshanimi.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default Animation;
