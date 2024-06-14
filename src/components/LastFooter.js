// // import React from 'react';

// // const LastFooter = () => {
// //   return (
// //     <div className="last-footer bg-gray-200">
// //       <div className="container flex flex-col items-center justify-center">
// //         <div className="top-row flex justify-center mb-4 mt-2 cursor-pointer">
// //           <i className="fa-brands fa-square-whatsapp text-2xl mr-4"></i>
// //           <i className="fa-brands fa-square-instagram text-2xl"></i>
// //         </div>
// //         <div className="center-column flex flex-col items-center">
// //           <img src="img/logo.png" alt="Your Logo" className="h-20 mb-4" />
// //           <h2 className="text-gray-400 text-xl font-bold mb-2">SURYODAY</h2>
// //           <h1 className="text-gray-400 text-2xl font-bold">FORTUNE</h1>
// //         </div>
// //         <p className="bottom-text text-gray-400 text-xl mt-4">A PROJECT BY SURYODAY FORTUNE</p>
// //       </div>
// //     </div>
// //   );
// // };

// // export default LastFooter;
// import React from 'react';

// const LastFooter = () => {
//   return (
//     <div className="last-footer bg-gray-200">
//       <div className="container flex flex-col items-center justify-center">
//         <div className="top-row flex justify-center mb-4 mt-2 cursor-pointer">
//           <a href="https://api.whatsapp.com/send?phone=your_whatsapp_number" target="_blank" rel="noopener noreferrer">
//             <i className="fa-brands fa-square-whatsapp text-2xl mr-4"></i>
//           </a>
//           <a href="https://www.instagram.com/your_instagram_profile" target="_blank" rel="noopener noreferrer">
//             <i className="fa-brands fa-square-instagram text-2xl"></i>
//           </a>
//         </div>
//         <div className="center-column flex flex-col items-center">
//           <img src="img/logo.png" alt="Your Logo" className="h-20 mb-4" />
//           <h2 className="text-[#0C102D] text-xl font-bold mb-2 hover:text-[#c0a484]">SURYODAY</h2>
//           <h1 className="text-[#0C102D] text-2xl font-bold hover:text-[#c0a484]">FORTUNE</h1>
//         </div>
//         <p className="bottom-text text-g[#0C102D] text-xl mt-4 hover:text-[#c0a484]">A PROJECT BY SURYODAY FORTUNE</p>
//       </div>
//     </div>
//   );
// };

// export default LastFooter;
import React from 'react';

const LastFooter = () => {
  return (
    <div className="last-footer bg-gray-200 py-4">
      <div className="container mx-auto flex flex-col items-center justify-center">
        <div className="top-row flex justify-center mb-4 mt-2 cursor-pointer">
          <a href="https://api.whatsapp.com/send?phone=your_whatsapp_number" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
            <i className="fa-brands fa-square-whatsapp text-3xl sm:text-4xl mr-4 text-[#0C102D] hover:text-[#25D366]"></i>
          </a>
          <a href="https://www.instagram.com/your_instagram_profile" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <i className="fa-brands fa-square-instagram text-3xl sm:text-4xl text-[#0C102D] hover:text-[#E1306C]"></i>
          </a>
        </div>
        <div className="center-column flex flex-col items-center text-center">
          <img src="img/logo.png" alt="Your Logo" className="h-16 sm:h-20 mb-4" />
          <h2 className="text-[#0C102D] text-lg sm:text-xl font-bold mb-1 sm:mb-2 hover:text-[#c0a484] transition-colors">SURYODAY</h2>
          <h1 className="text-[#0C102D] text-xl sm:text-2xl font-bold hover:text-[#c0a484] transition-colors">FORTUNE</h1>
        </div>
        <p className="bottom-text text-[#0C102D] text-md sm:text-lg mt-4 hover:text-[#c0a484] transition-colors">A PROJECT BY SURYODAY FORTUNE</p>
      </div>
    </div>
  );
};

export default LastFooter;
