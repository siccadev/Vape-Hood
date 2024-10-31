"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { motion } from "framer-motion"; 
import Slider from "react-slick"; // Import the slider
import "./Product.css"; 

const categories = [
  {
    id: 1,
    name: "PUFF",
    image: "/a.jpg",
    link: "/pages/Puffs",
  },
  {
    id: 2,
    name: "ATOMISEURS",
    image: "/q.jpg",
    link: "/pages/Attomissseurs",
  },
  {
    id: 3,
    name: "E-CIGARETTES",
    image: "/c.jpg",
    link: "/pages/E-cigarettes",
  },
  {
    id: 4,
    name: "E-LIQUIDES",
    image: "/d.jpg",
    link: "/pages/E-liquides",
  },
  {
    id: 5,
    name: "BOX",
    image: "/e.jpg",
    link: "/pages/Box",
  },
  {
    id: 6,
    name: "Accessoires",
    image: "/b01.webp",
    link: "/pages/Accessoires",
  },
];

const Categories3D = () => {
  const [clicked, setClicked] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleClick = (category) => {
    setClicked(category.id);
  };

  // Slider settings
  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2, // Show 2 images per slide for mobile
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
    beforeChange: (current, next) => setActiveIndex(next),
  };

  return (
    <div className="container mx-auto py-12 px-4 -mt-16 -mb-12 sm:mb-16">
      <h2 className="text-4xl font-extrabold tracking-wider text-center mb-8 text-gray-800 uppercase">
        Catégories de Premier Plan
      </h2>

      {/* Slider for mobile view */}
      <div className="lg:hidden">
        <Slider {...sliderSettings}>
          {categories.map((category) => (
            <motion.div
              key={category.id}
              onClick={() => handleClick(category)}
              className="group relative rounded-lg overflow-hidden cursor-pointer transform transition-transform duration-500 px-2"
              initial={{ scale: 1 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              animate={clicked === category.id ? { scale: 1.2, opacity: 0 } : { scale: 1, opacity: 1 }}
              transition={{ duration: 0.7 }}
            >
              <Link href={category.link}>
                <div className="relative overflow-hidden">
                  <Image
                    src={category.image}
                    alt={category.name}
                    layout="responsive"
                    width={150}
                    height={150}
                    className="rounded-lg"
                    style={{ borderRadius: '30%' }}
                  />
                </div>
                <h3 className="text-center mt-2 font-extrabold text-xl font-sans tracking-wider text-black">
                  {category.name}
                </h3>
              </Link>
            </motion.div>
          ))}
        </Slider>
      </div>

      {/* Horizontal layout for larger screens */}
      <div className="hidden lg:flex justify-center gap-4"> {/* Flexbox for single line layout */}
        {categories.map((category) => (
          <motion.div
            key={category.id}
            onClick={() => handleClick(category)}
            className="group relative rounded-lg overflow-hidden cursor-pointer transform transition-transform duration-500"
            initial={{ scale: 1 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            animate={clicked === category.id ? { scale: 1.2, opacity: 0 } : { scale: 1, opacity: 1 }}
            transition={{ duration: 0.7 }}
          >
            <Link href={category.link}>
              <div className="relative border-2 rounded-lg overflow-hidden"> 
                <Image
                  src={category.image}
                  alt={category.name}
                  width={200} // Adjusted width for desktop
                  height={200} // Adjusted height for desktop
                  className="object-cover rounded-lg"
                />
              </div>
              <h3 className="text-center mt-2 font-extrabold text-xl font-sans tracking-wider text-black">
                {category.name}
              </h3>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Categories3D;
