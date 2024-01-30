// import React from "react";

// const Hero = () => {
//   return (
//     <div
//       id="indicators-carousel"
//       className="relative w-full"
//       data-carousel="static"
//     >
//       <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
//         <div
//           className="hidden duration-700 ease-in-out"
//           data-carousel-item="active"
//         >
//           <div>
//             <h1 className="text-4xl font-bold text-white">Squbix</h1>

//             <img
//               src="https://squbix.com/static/media/OurProducts.280be9f036a51e2f908c.gif"
//               className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
//               alt="..."
//             />
//           </div>
//         </div>
//         <div className="hidden duration-700 ease-in-out" data-carousel-item>
//           <img
//             src="/docs/images/carousel/carousel-2.svg"
//             className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
//             alt="..."
//           />
//         </div>
//         <div className="hidden duration-700 ease-in-out" data-carousel-item>
//           <img
//             src="/docs/images/carousel/carousel-3.svg"
//             className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
//             alt="..."
//           />
//         </div>
//       </div>
//       <div className="absolute z-30 flex -translate-x-1/2 space-x-3 rtl:space-x-reverse bottom-5 left-1/2">
//         <button
//           type="button"
//           className="w-3 h-3 rounded-full"
//           aria-current="true"
//           aria-label="Slide 1"
//           data-carousel-slide-to="0"
//         ></button>
//         <button
//           type="button"
//           className="w-3 h-3 rounded-full"
//           aria-current="false"
//           aria-label="Slide 2"
//           data-carousel-slide-to="1"
//         ></button>
//         <button
//           type="button"
//           className="w-3 h-3 rounded-full"
//           aria-current="false"
//           aria-label="Slide 3"
//           data-carousel-slide-to="2"
//         ></button>
//       </div>
//       <button
//         type="button"
//         className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
//         data-carousel-prev
//       >
//         <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
//           <svg
//             className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
//             aria-hidden="true"
//             xmlns="http://www.w3.org/2000/svg"
//             fill="none"
//             viewBox="0 0 6 10"
//           >
//             <path
//               stroke="currentColor"
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth="2"
//               d="M5 1 1 5l4 4"
//             />
//           </svg>
//           <span className="sr-only">Previous</span>
//         </span>
//       </button>
//       <button
//         type="button"
//         className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
//         data-carousel-next
//       >
//         <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
//           <svg
//             className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
//             aria-hidden="true"
//             xmlns="http://www.w3.org/2000/svg"
//             fill="none"
//             viewBox="0 0 6 10"
//           >
//             <path
//               stroke="currentColor"
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth="2"
//               d="m1 9 4-4-4-4"
//             />
//           </svg>
//           <span className="sr-only">Next</span>
//         </span>
//       </button>
//     </div>
//   );
// };

// export default Hero;

import React, { useState } from "react";
import { Slide } from "./Slide";

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handlePrevClick = () => {
    setCurrentSlide((prevSlide) => (prevSlide === 0 ? 2 : prevSlide - 1));
  };

  const handleNextClick = () => {
    setCurrentSlide((prevSlide) => (prevSlide === 2 ? 0 : prevSlide + 1));
  };

  return (
    <div
      id="indicators-carousel"
      className=" w-full h-full items-center flex justify-between"
      data-carousel="static"
    >
      <button
        type="button"
        className=" flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        onClick={handlePrevClick}
        data-carousel-prev
      >
        <svg
          className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 6 10"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M5 1 1 5l4 4"
          />
        </svg>
      </button>
      <div className="relative h-56 overflow-hidden flex items-center rounded-lg md:h-96 ">
        <div
          className={`duration-700 ease-in-out ${
            currentSlide === 0 ? "block" : "hidden"
          }`}
          data-carousel-item="active"
        >
          {/* Slide 1 content */}
          <Slide
            title={"Products | Solutions | Services"}
            desc={
              "Blockchain, Cloud, Testing, Web & Mobile Development, and more, delivering ingenious solutions for business challenges."
            }
            img={
              "https://squbix.com/static/media/OurProducts.280be9f036a51e2f908c.gif"
            }
          />
        </div>
        <div
          className={`duration-700 ease-in-out ${
            currentSlide === 1 ? "block" : "hidden"
          }`}
          data-carousel-item
        >
          <Slide
            title={"Blockchain Consultant"}
            desc={
              "At Squbix, we recognize the indomitable potential of Blockchain, with expertise in wallet development, CBDC, and core Blockchain development."
            }
            img={
              "https://squbix.com/static/media/Consultancy.ff859984439a013883e4.gif"
            }
          />
        </div>
        <div
          className={`duration-700 ease-in-out ${
            currentSlide === 2 ? "block" : "hidden"
          }`}
          data-carousel-item
        >
          <Slide
            title={"Training & Education"}
            desc={
              "Industry-standard training in BLOCKCHAIN and AI, hands-on experience in developing real-world products like wallets, coins, and exchange platforms with expert guidance."
            }
            img={
              "https://squbix.com/static/media/TrainingAndEdu.33feca9190168ab80dda.gif"
            }
          />
        </div>
      </div>
      <button
        type="button"
        className=" flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        onClick={handleNextClick}
        data-carousel-next
      >
        <svg
          className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 6 10"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m1 9 4-4-4-4"
          />
        </svg>
      </button>
    </div>
  );
};

export default Hero;
