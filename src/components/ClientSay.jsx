import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { clientData } from "../../utils/client";
import arrow from "../assets/arrow.png";
import { motion } from "framer-motion";

const ClientSay = () => {
  return (
    <div className="flex flex-col items-center justify-center mt-[100px] px-4 text-center">
      {/* Button */}
      <button
        style={{
          backgroundColor: "#E1E1E1",
          borderRadius: "70px",
          paddingTop: "5px",
          paddingBottom: "5px",
          fontSize: "17px",
        }}
        className="px-4"
      >
        Testimonials
      </button>

      {/* Heading */}
      <motion.h3
        className="text-[2.5rem] font-semibold mt-4 leading-snug"
        initial={{ opacity: 0, scale: 0.95, rotate: -1 }}
        whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
        transition={{
          duration: 0.8,
          ease: "easeOut",
          delay: 0.2,
        }}
        viewport={{ once: true, amount: 0.5 }}
      >
        What our Clients Say
      </motion.h3>

      {/* Paragraph */}
      <motion.p
        className="font-light mt-4"
        style={{ fontSize: "18px" }}
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.8,
          ease: "easeOut",
          delay: 0.2,
        }}
        viewport={{ once: true, amount: 0.5 }}
      >
        Real feedback from companies we’ve helped grow.
      </motion.p>
      <br />

      <div className="w-full max-w-6xl mx-auto px-4 py-10">
        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          breakpoints={{
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
        >
          {clientData.map((client, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white rounded-xl shadow-md p-6 h-full flex flex-col justify-between">
                <p className="text-gray-700 mb-4">"{client.testimonial}"</p>
                <div className="flex items-center mt-auto">
                  <img
                    src={client.img}
                    alt={client.name}
                    className="w-10 h-10 rounded-full object-cover mr-4"
                  />
                  <div>
                    <p className="font-semibold text-sm">{client.name}</p>
                    <p className="text-xs text-gray-500">{client.business}</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="flex items-center justify-center mt-10">
        <button className="bg-[#D9F273] hover:bg-brandGreen h-10 flex items-center gap-2 px-4 rounded-full border transition-colors duration-300">
          Contact us
          <img src={arrow} alt="arrow" className="h-5" />
        </button>
      </div>
    </div>
  );
};

export default ClientSay;
