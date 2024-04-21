/* eslint-disable @next/next/no-img-element */
"use client"
// components/Carousel.js
// components/ImageSlider.js
import { useEffect, useState } from 'react';

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slides = [
   "https://medeasy.health/_next/image?url=https%3A%2F%2Fcdn.medeasy.health%2Fmedia%2Fsliders%2FArtboard_1.png&w=1920&q=100",
   "https://medeasy.health/_next/image?url=https%3A%2F%2Fcdn.medeasy.health%2Fmedia%2Fsliders%2FArtboard_1_3_8vEJKDn.png&w=1920&q=100",
   "https://medeasy.health/_next/image?url=https%3A%2F%2Fcdn.medeasy.health%2Fmedia%2Fsliders%2FWhatsApp_Image_2023-08-02_at_3.30.20_PM_1.jpeg&w=1920&q=100",
   "https://medeasy.health/_next/image?url=https%3A%2F%2Fcdn.medeasy.health%2Fmedia%2Fsliders%2FArtboard_1_4_onqu8Eb.png&w=1920&q=100",
   "https://medeasy.health/_next/image?url=https%3A%2F%2Fcdn.medeasy.health%2Fmedia%2Fsliders%2FArtboard_1_2_x2dZgyN.png&w=1920&q=100"
  ];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 3000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="overflow-hidden ">
      <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {slides.map((slide, index) => (
          <div key={index} className="min-w-full box-border">
            <img src={slide} alt={`Slide ${index + 1}`} className="w-full" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;


