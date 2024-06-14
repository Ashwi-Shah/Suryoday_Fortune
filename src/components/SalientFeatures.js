import React from 'react';

const SalientFeatures = () => {
  const featureItems = [
    { name: 'Ideal Location', imageSrc: 'img/file (1).png' },
    { name: 'Close to Requirements', imageSrc: 'img/file (1).png' },
    { name: 'Sufficient Parking', imageSrc: 'img/file (1).png' },
    { name: 'Hospital-Grade Stretcher Lift', imageSrc: 'img/file (1).png' },
    { name: 'Size options from 500-1500 sq.ft.', imageSrc: 'img/file (1).png' },
    { name: 'high ceilings 14ft.', imageSrc: 'img/file (1).png' },
    { name: 'Captivating Elevation Design', imageSrc: 'img/file (1).png' },
    { name: 'High-quality Construction', imageSrc: 'img/file (1).png' },
  ];

  return (
    <div>
      <h2
        className="text-4xl font-serif text-center text-[#0C102D] font-extrabold mb-14 mt-16 uppercase sm:text-3xl md:text-3xl lg:text-4xl"
        id="feature"
      >
        Explore Salient features
      </h2>
      <div className="features grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4 bg-[#0C102D] p-4 h-full rounded-s-2xl rounded-e-2xl">
        {featureItems.map((feature, index) => (
          <FeatureItem key={index} name={feature.name} imageSrc={feature.imageSrc} />
        ))}
      </div>
    </div>
  );
};

const FeatureItem = ({ imageSrc, name }) => {
  return (
    <div className="feature-item flex flex-col items-center pb-8 relative group hover:cursor-pointer">
      <img
        className="w-20 h-20 object-cover group-hover:scale-125 transition duration-300 ease-in-out md:w-16 md:h-16 lg:w-20 lg:h-20"
        src={imageSrc}
        alt=""
      />
      {/* <p className="image-name mt-4 sm:mt-10 text-[#c0a484] text-center text-base sm:text-sm md:text-sm relative w-max"> */}
      <p className="image-name mt-4 sm:mt-6 md:mt-8 lg:mt-10 text-[#c0a484] text-center text-sm sm:text-base md:text-lg lg:text-xl relative w-full min-h-[3rem] flex items-center justify-center">

        <span>{name}</span>
        <span className="absolute -bottom-1.5 left-1/2 w-0 transition-all h-0.5 bg-[#c0a484] group-hover:w-3/6"></span>
        <span className="absolute -bottom-1.5 right-1/2 w-0 transition-all h-0.5 bg-[#c0a484] group-hover:w-3/6"></span>
      </p>
    </div>
  );
};

export default SalientFeatures;

