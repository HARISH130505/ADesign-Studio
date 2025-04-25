"use client";
import React, { useState, useEffect, useRef } from "react";

const backgroundImages = ["/1.jpg", "/2.jpg", "/3.jpg"];

const Page = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [previousImageIndex, setPreviousImageIndex] = useState<number | null>(null);
  const timeoutRef = useRef<number | null>(null);
  
  useEffect(() => {
    backgroundImages.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setPreviousImageIndex(currentImageIndex);
      setCurrentImageIndex((prev) => (prev + 1) % backgroundImages.length);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      timeoutRef.current = window.setTimeout(() => {
        setPreviousImageIndex(null);
      }, 2000);
    }, 5000);

    return () => {
      clearInterval(interval);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [currentImageIndex]);

  return (
    <div className="fixed top-0 left-0 w-full h-screen overflow-hidden z-0">
      {previousImageIndex !== null && (
        <div
          className="absolute top-0 left-0 w-full h-full bg-cover bg-center transition-opacity duration-1000 ease-in-out"
          style={{
            backgroundImage: `url('${backgroundImages[previousImageIndex]}')`,
            zIndex: 10,
          }}
        />
      )}
      <div
        className="absolute top-0 left-0 w-full h-full bg-cover bg-center transition-opacity duration-1000 ease-in-out"
        style={{
          backgroundImage: `url('${backgroundImages[currentImageIndex]}')`,
          zIndex: 20,
        }}
      />
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 z-30" />
      <div className="absolute bottom-10 left-5 text-white p-4 z-30">
        <h1 className="text-4xl  mb-2 font-julietta">Adithya Devi P</h1>
        <p className="text-md font-gowun">SUSTAINABLE ARCHITECT</p>
      </div>
    </div>
  );
};

export default Page;