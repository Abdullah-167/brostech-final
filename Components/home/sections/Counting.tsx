import React, { useEffect, useState, useRef } from "react";

export default function CompleteSection() {
  const [startCount, setStartCount] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStartCount(true);
        }
      },
      { threshold: 0.5 } // Trigger when 50% of the section is visible
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  // Function to animate numbers
  const animateCount = (end: any, duration: any) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      if (!startCount) return;
      let start = 0;
      const increment = end / (duration / 16); // Smooth animation based on 60 FPS

      const counter = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(counter);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);

      return () => clearInterval(counter);
    }, [startCount]);

    return count;
  };

  return (
    <div ref={sectionRef} className="w-full lg:mt-20">
      {/* Counting Section */}
      <div className="w-full bg-white py-10">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-wrap justify-center md:justify-between items-center text-center gap-6 md:gap-10">
            <div className="hidden md:block w-px h-16 bg-gray-300"></div>

            {/* Years of Experience */}
            <div className="flex flex-col items-center">
              <p className="text-4xl md:text-5xl font-bold text-black">
                {animateCount(5, 2000)}+
              </p>
              <p className="text-gray-700 text-lg font-medium">Years</p>
              <p className="text-gray-500">Proven Track Record</p>
            </div>

            <div className="hidden md:block w-px h-16 bg-gray-300"></div>

            {/* Customer Satisfaction */}
            <div className="flex flex-col items-center">
              <p className="text-4xl md:text-5xl font-bold text-black">
                {animateCount(100, 2000)}%
              </p>
              <p className="text-gray-700 text-lg font-medium">
                Customer Satisfaction
              </p>
            </div>

            <div className="hidden md:block w-px h-16 bg-gray-300"></div>

            {/* Completed Projects */}
            <div className="flex flex-col items-center">
              <p className="text-4xl md:text-5xl font-bold text-black">
                {animateCount(2000, 2000)}
              </p>
              <p className="text-gray-700 text-lg font-medium">Projects</p>
              <p className="text-gray-500">We Have Completed</p>
            </div>

            <div className="hidden md:block w-px h-16 bg-gray-300"></div>

            {/* Average Answer Time */}
            <div className="flex flex-col items-center">
              <p className="text-4xl md:text-5xl font-bold text-black">
                {animateCount(3, 2000)}
              </p>
              <p className="text-gray-700 text-lg font-medium">Mins</p>
              <p className="text-gray-500">Average Answer Time</p>
            </div>
          </div>
        </div>
      </div>

      {/* Black Background Section */}
      <div className="w-full bg-black py-16 px-6 lg:mt-20">
        <div className="max-w-7xl lg:mx-20 text-white relative">
          <div className="max-w-3xl">
            <button className="bg-lime-500 text-black font-semibold px-4 py-1 rounded">
              WHAT WE DO
            </button>
            <h2 className="text-4xl font-bold lg:mt-20 md:mt-10">
              Simplifying IT <br /> for a complex world.
            </h2>
          </div>

          {/* Pattern Design (Right Side) */}
          <div className="absolute bottom-4 right-4">
            <div className="flex flex-col gap-1">
              {Array.from({ length: 6 }).map((_, row) => (
                <div key={row} className="flex gap-1 justify-center">
                  {Array.from({ length: row + 1 }).map((_, col) => (
                    <div
                      key={col}
                      className="w-4 h-4 bg-yellow-500 rounded-sm"
                    ></div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
