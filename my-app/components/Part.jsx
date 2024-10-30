"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; // Swiper core styles
import "swiper/css/navigation"; // Swiper navigation styles
import { Navigation, Autoplay } from "swiper/modules"; // Import Navigation and Autoplay
import './Slider.css'; // Import your custom CSS for arrow styling
import './Part.css'
const Slider = () => {
  const images = [
    "/lost-vape.webp",
    "/vaporesso (4).webp",
    "/voopoo.webp",
    "/vozol.webp",
    "/wotofo.webp",
    "/lava.webp",
    "/eco-vape.webp",
    "/fighter-fuel.webp",
    "/fruity-fuel.webp",
    "/geekvape.webp",
  ];

  return (
    <div className="relative w-full max-w-screen-lg mx-auto -mb-20 sm:mt-7 sm:mb-0">
      <Swiper
        modules={[Navigation, Autoplay]}
        spaceBetween={10}
        slidesPerView={1}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
        autoplay={{ delay: 2000, disableOnInteraction: false }}
        loop={true}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 6 },
        }}
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <img
              src={image}
              alt={`Slide ${index + 1}`}
              className="w-full h-auto object-contain"
            />
          </SwiperSlide>
        ))}

        {/* Navigation buttons */}
        <div className="swiper-button-prev custom-nav"></div>
        <div className="swiper-button-next custom-nav"></div>
      </Swiper>
    </div>
  );
};

export default Slider;
