import React from 'react';
import useIntersectionObserver from './useIntersectionObserver'; 

const Amenities = () => {
  const { containerRef, isVisible } = useIntersectionObserver({ threshold: 0.5 });
  const amenitiesData = [
    { name: 'Medical Store', icon: 'img/a1.png' },
    { name: 'Corporate Office', icon: 'img/a2.png' },
    { name: 'Fashion', icon: 'img/a3.png' },
    { name: 'Classes', icon: 'img/a4.png' },
    { name: 'Banquet', icon: 'img/a5.png' },
    { name: 'Jewellery', icon: 'img/a6.png' },
    { name: 'Fitness Centre', icon: 'img/a7.png' },
    { name: 'Bank', icon: 'img/a8.png' },
    { name: 'Restaurant', icon: 'img/a9.png' },
    { name: 'Home Accessories', icon: 'img/a10.png' },
    { name: 'Super Market', icon: 'img/a11.png' },
    { name: 'Hospital', icon: 'img/a12.png' },
  ];

  return (
    <div ref={containerRef} className={`amenities-section ${isVisible ? 'fadeInDown' : ''}`}>
      <h2 className="text-4xl font-serif text-center text-[#0C102D] font-extrabold mb-14 mt-16 uppercase">
        Amenities
      </h2>
      <div className="amenities-container grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 mx-auto">
        {amenitiesData.map((amenity, index) => (
          <AmenityBox key={index} name={amenity.name} icon={amenity.icon} />
        ))}
      </div>
    </div>
  );
};

const AmenityBox = ({ name, icon }) => {
  return (
    <div className="amenity-box flex flex-col items-center justify-center p-4 h-full">
      <img
        src={icon}
        alt={`${name} icon`}
        className="w-20 h-20 mb-2 rounded-3xl cursor-pointer amenity-image"
      />
      <p className="text-center text-lg font-medium text-gray-700 leading-tight">{name}</p>
    </div>
  );
};

export default Amenities;
