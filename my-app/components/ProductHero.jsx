"use client";
import React from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import Link from "next/link";
import { LazyLoadImage } from 'react-lazy-load-image-component';

const ProductHero = ({ Heroheading, SubHeroheading, vapedata, linkurl }) => {
  return (
    <div id='projects' className="mt-20 -mb-8 sm:mb-20 sm:mt-20">
      <div className="text-center mb-4 sm:mb-6">
        <p className="font-extrabold text-yellow-300 text-2xl tracking-widest uppercase mb-4">
          {Heroheading}
        </p>
        <h1 className="text-5xl font-extrabold tracking-wider text-gray-800 uppercase mt-4 sm:mt-0">
          {SubHeroheading}
        </h1>
      </div>

      <div className="relative mt-10 mx-auto max-w-7xl px-4">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          autoplay={{ delay: 1350, disableOnInteraction: false }}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 50,
            },
          }}
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }}
          pagination={{ clickable: true, el: '.swiper-pagination', dynamicBullets: true }}
        >
          {vapedata.map((data, index) => (
            <SwiperSlide key={index}>
              <div className="p-4 flex flex-col justify-center items-center text-center border max-h-64 border-gray-300 rounded-xl bg-white transition transform z-50">
                <a href={data.link} target="_blank" rel="noopener noreferrer">
                  <Image
                    src={data.image}
                    alt={data.title}
                    loading="lazy"
                    quality={85}
                    className="rounded-lg"
                    width={160}
                    height={160}
                  />
                </a>
                <div className="p-4">
                  <h2 className="text-sm font-semibold text-gray-700">{data.title}</h2>
                  <p className="text-lg text-black mt-2 font-medium">{data.price}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Navigation Buttons with Font Awesome */}
        {/* 
        <div className="swiper-button-prev absolute top-1/2 transform -translate-y-1/2 left-0 z-10 w-12 h-12 flex items-center justify-center text-white rounded-full cursor-pointer">
          <FontAwesomeIcon icon={faChevronLeft} size="lg" />
        </div>
        <div className="swiper-button-next absolute top-1/2 transform -translate-y-1/2 right-0 z-10 w-12 h-12 flex items-center justify-center text-white rounded-full cursor-pointer">
          <FontAwesomeIcon icon={faChevronRight} size="lg" />
        </div>
        */}

        <div className="swiper-pagination mt-6 flex justify-center"></div>
      </div>

      {linkurl && (
        <div className="flex justify-end -mt-20 sm:-mt-10 mr-2 sm:mr-20">
          <Link
            href={linkurl}
            className="px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-100 transition-all z-10"
            style={{ touchAction: 'manipulation' }}
          >
            Voir plus<span className="ml-2">{">"}</span>
          </Link>
        </div>
      )}
    </div>
  );
};

export default ProductHero;
