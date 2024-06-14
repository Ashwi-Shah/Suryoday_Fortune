import React from 'react';
import useIntersectionObserver from './useIntersectionObserver';

const FooterDetails = () => {
  const { containerRef: img1Ref, isVisible: isImg1Visible } = useIntersectionObserver();
  const { containerRef: img2Ref, isVisible: isImg2Visible } = useIntersectionObserver();
  const { containerRef: contactRef, isVisible: isContactVisible } = useIntersectionObserver();
  const { containerRef: siteAddressRef, isVisible: isSiteAddressVisible } = useIntersectionObserver();

  return (
    <div className="footer-details bg-gray-200 flex flex-col md:flex-row justify-between items-center py-4 relative">
      <img
        src="img/footer1.png"
        alt="Logo 1"
        ref={img1Ref}
        className={`logo h-16 sm:h-24 md:h-24 xl:h-32 2xl:h-36 mb-4 md:mb-0 md:absolute left-0 transition-opacity duration-1000 ${
          isImg1Visible ? 'opacity-100' : 'opacity-0'
        }`}
      />
      <div className="center-content flex flex-col items-center text-center mx-auto">
        <div
          ref={contactRef}
          className={`contact mb-4 transition-opacity duration-1000 ${
            isContactVisible ? 'fade-in-down' : 'opacity-0'
          }`}
        >
          <h4 className="text-black font-serif font-semibold text-lg sm:text-3xl md:text-2xl xl:text-4xl mt-4 mb-2 hover:text-[#c0a484]">Contact Details</h4>
          <span className="email flex items-center text-lg text-gray-700 ml-4 md:text-lg xl:text-xl">
            <i className="fas fa-envelope mr-2"></i>
            <a href="mailto:info@suryodayfortune.com" className="text-black hover:underline">info@suryodayfortune.com</a>
          </span>
          <span className="email flex items-center text-lg text-gray-700 ml-4 md:text-lg xl:text-xl">
            <i className="fa-solid fa-globe mr-2"></i>
            <a href="http://www.suryodayfortune.com" className="text-black hover:underline">www.suryodayfortune.com</a>
          </span>
          <span className="phone flex items-center text-lg text-gray-700 ml-4 md:text-lg xl:text-xl">
            <i className="fas fa-phone mr-2"></i>
            +91 98250 22584
          </span>
        </div>
        <div
          ref={siteAddressRef}
          className={`site-add mb-4 transition-opacity duration-1000 ${
            isSiteAddressVisible ? 'fade-in-down' : 'opacity-0'
          }`}
        >
          <h4 className="text-black font-serif font-semibold text-lg sm:text-3xl md:text-2xl xl:text-4xl mt-5 mb-3 hover:text-[#c0a484]">Site Address</h4>
          <p className="address text-gray-700 ml-12 mr-8 md:text-lg xl:text-xl">Suryoday Party Plot, Nr. Motipura Circle, N.H. No: 48, Himatnagar. (S.K)</p>
        </div>
      </div>
      <img
        src="img/footer2.png"
        alt="Logo 2"
        ref={img2Ref}
        className={`logo h-16 sm:h-24 md:h-24 xl:h-32 2xl:h-36 md:absolute right-0 transition-opacity duration-1000 ${
          isImg2Visible ? 'opacity-100' : 'opacity-0'
        }`}
      />
    </div>
  );
};

export default FooterDetails;
