import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/grid";
import "swiper/css/free-mode";
import { Autoplay } from "swiper/modules";

import brand1 from "../assets/brand1.svg";
import brand2 from "../assets/brand2.svg";
import brand3 from "../assets/brand3.svg";
import brand4 from "../assets/brand4.svg";
import brand5 from "../assets/brand5.svg";
import brand6 from "../assets/brand6.svg";
import brand7 from "../assets/brand7.svg";
import brand8 from "../assets/brand8.svg";
import brand9 from "../assets/brand9.svg";
import brand10 from "../assets/brand10.svg";

const brands = [
  brand1,
  brand2,
  brand3,
  brand4,
  brand5,
  brand6,
  brand7,
  brand8,
  brand9,
  brand10,
];

const Innovators = () => {
  return (
    <div
      className="py-10 bg-white text-center "
      style={{ marginTop: "-550px" }}
    >
      <h1 className="text-2xl md:text-3xl font-bold mb-4">
        Trusted by Leading Innovators in the Web3 Space
      </h1>

      <Swiper
        modules={[Autoplay]}
        spaceBetween={30}
        slidesPerView={6}
        loop={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          320: { slidesPerView: 2 },
          640: { slidesPerView: 3 },
          768: { slidesPerView: 4 },
          1024: { slidesPerView: 6 },
        }}
      >
        {brands.map((brand, index) => (
          <SwiperSlide key={index}>
            <img
              src={brand}
              alt={`Brand ${index + 1}`}
              className="h-12 w-auto mx-auto opacity-80 hover:opacity-100 transition-opacity duration-300 mt-10"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Innovators;
