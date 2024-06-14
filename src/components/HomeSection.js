import React, { useState, useEffect, useRef } from 'react';
import 'intersection-observer'; // Import the polyfill if needed

const HomeSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          } else {
            setIsVisible(false);
          }
        });
      },
      {
        threshold: 0.5, 
      }
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

  return (
    <section
      id="home"
      className="flex flex-col items-center justify-center h-screen relative"
      ref={sectionRef}
    >
      <div
        className="absolute top-0 left-0 w-full h-full bg-cover bg-no-repeat bg-center z-0"
        style={{ backgroundImage: `url(public/img/i3.jpg)` }}
      >
        <div className="absolute top-0 left-0 w-full h-full bg-gray-800 opacity-75 z-10"></div>
      </div>
      <div className="relative max-w-2xl mx-auto py-20 text-center text-[#c0a484] sm:w-80">
        <img src="/img/logo.png" alt="Logo" className="logo h-32 mx-auto mb-3 -mt-20" />
        <h2
          className={`text-4xl font-semibold mx-52 mb-1 sm:ml-16 font-sans transition-transform duration-[2000ms] ${
            isVisible ? 'translate-x-0' : '-translate-x-full sm:-translate-x-16 md:-translate-x-44 lg:-translate-x-60 xl:-translate-x-80 2xl:-translate-x-96'
          }`}
        >
          SURYODAY
        </h2>
        <h1
          className={`text-6xl font-semibold mx-52 mb-20 sm:ml-8 md:ml-6 transition-transform duration-[2000ms] ${
            isVisible ? 'translate-x-0' : 'translate-x-full sm:translate-x-10 md:translate-x-36 lg:translate-x-56 xl:translate-x-80 2xl:translate-x-96'
          }`}
        >
          FORTUNE
        </h1>
        <h3
          className={`font-medium text-3xl mb-12 transition-opacity duration-[2000ms] ${
            isVisible ? 'opacity-100' : 'opacity-0'
          }`}
        >
          WHERE <br /> THE SUN RISES <br /> THE BUSINESS SHINES
        </h3>
        <h4
          className={`text-xl font-medium mb-0 md:-mx-20 lg:-mx-72 transition-opacity duration-[2000ms] ${
            isVisible ? 'opacity-100' : 'opacity-0'
          }`}
        >
          Suryoday Party Plot, Nr. Motipura Circle, N.H. No:48, Himatnagar(S.K)
        </h4>
      </div>
    </section>
  );
};

export default HomeSection;
