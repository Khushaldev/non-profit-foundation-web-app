// // carousel.tsx
// "use client";
// import Image from "next/image";
// import React, { useEffect, useRef, useState } from "react";

// const Carousel = ({
//   data,
// }: {
//   data: {
//     image: string;
//   }[];
// }) => {
//   // State and Ref initialization
//   const [currentImg, setCurrentImg] = useState(0);
//   const [carouselSize, setCarouselSize] = useState({ width: 0, height: 0 });
//   const carouselRef = useRef(null);

//   // useEffect to get the initial carousel size
//   useEffect(() => {
//     let elem = carouselRef.current as unknown as HTMLDivElement;
//     let { width, height } = elem.getBoundingClientRect();
//     if (carouselRef.current) {
//       setCarouselSize({
//         width,
//         height,
//       });
//     }
//   }, []);

//   return (
//     <div>
//       {/* Carousel container */}
//       <div className="relative h-screen w-full overflow-hidden ">
//         {/* Image container */}
//         <div
//           ref={carouselRef}
//           style={{
//             left: -currentImg * carouselSize.width,
//           }}
//           className="absolute flex h-full w-full transition-all duration-300"
//         >
//           {/* Map through data to render images */}
//           {data.map((v, i) => (
//             <div key={i} className="relative h-full w-full shrink-0">
//               <Image
//                 className="pointer-events-none"
//                 alt={`carousel-image-${i}`}
//                 fill
//                 src={v.image}
//               />
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Navigation buttons */}
//       <div className="mt-3 flex justify-center">
//         <button
//           disabled={currentImg === 0}
//           onClick={() => setCurrentImg((prev) => prev - 1)}
//           className={`border px-4 py-2 font-bold ${currentImg === 0 && "opacity-50"}`}
//         >
//           {"<"}
//         </button>
//         <button
//           disabled={currentImg === data.length - 1}
//           onClick={() => setCurrentImg((prev) => prev + 1)}
//           className={`border px-4 py-2 font-bold ${currentImg === data.length - 1 && "opacity-50"}`}
//         >
//           {">"}
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Carousel;

// carousel.tsx
"use client";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";

const Carousel = ({
  data,
}: {
  data: {
    image: string;
  }[];
}) => {
  // State and Ref initialization
  const [currentImg, setCurrentImg] = useState(0);
  const [carouselSize, setCarouselSize] = useState({ width: 0, height: 0 });
  const carouselRef = useRef(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  // useEffect to get the initial carousel size
  useEffect(() => {
    let elem = carouselRef.current as unknown as HTMLDivElement;
    let { width, height } = elem.getBoundingClientRect();
    if (carouselRef.current) {
      setCarouselSize({
        width,
        height,
      });
    }
  }, []);

  // Auto-play effect
  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setCurrentImg((prev) => (prev + 1) % data.length);
    }, 3000); // Change image every 3 seconds

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [data.length]);

  return (
    <div>
      {/* Carousel container */}
      <div className="relative h-80 lg:h-screen w-full overflow-hidden">
        {/* Image container */}
        <div
          ref={carouselRef}
          style={{
            left: -currentImg * carouselSize.width,
          }}
          className="absolute flex h-full w-full transition-all duration-300"
        >
          {/* Map through data to render images */}
          {data.map((v, i) => (
            <div key={i} className="relative h-full w-full shrink-0">
              <Image
                className="pointer-events-none"
                alt={`carousel-image-${i}`}
                fill
                src={v.image}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
