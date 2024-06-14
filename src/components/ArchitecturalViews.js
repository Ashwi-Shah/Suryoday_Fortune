import React from 'react';
import useIntersectionObserver from './useIntersectionObserver';

const ArchitecturalViews = () => {
  const { containerRef, isVisible } = useIntersectionObserver({
    threshold: 0.1,
  });

  const images = [
    'img/i1.jpg',
    'img/i2.jpg',
    'img/i3.jpg',
    'img/i4.jpg',
    'img/i5.jpg',
    'img/i6.jpg',
  ];

  return (
    <div ref={containerRef}>
      <h2 className="text-4xl font-serif text-center text-[#0C102D] font-extrabold mb-14 mt-20 sm:text-3xl md:text-4xl">
        ARCHITECTURAL VIEWS
      </h2>
      <div className="image-collages grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 m-4 md:gap-6 md:m-10 cursor-pointer">
        {images.map((src, index) => (
          <div
            key={index}
            className={`relative overflow-hidden transition-transform duration-300 ease-in-out ${
              isVisible
                ? `animate-slide-in-${index + 1}`
                : 'opacity-0'
            }`}
          >
            <img
              src={src}
              alt={`Building Image ${index + 1}`}
              className="w-full h-auto object-cover"
            />
            <div className="absolute inset-0 group overflow-hidden">
              <div className="absolute top-0 -inset-full h-full w-1/2 z-10 transform -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-40 group-hover:animate-shine" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ArchitecturalViews;
