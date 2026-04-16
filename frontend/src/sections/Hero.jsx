import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Play, Pause } from "lucide-react";

import seating from "../assets/images/seating_1.jpg";
import side from "../assets/images/sideangle_1.jpg";

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  const slides = [
    { type: "video", src: "/videos/27.mp4", alt: "Resort Pool View" },
    { type: "image", src: seating, alt: "Beach Resort" },
    { type: "image", src: side, alt: "Mountain View" },
    { type: "video", src: "/videos/32.mp4", alt: "Resort Video" },
    { type: "video", src: "/videos/30.mp4", alt: "Resort Pool View" },
    { type: "video", src: "/videos/1.mp4", alt: "Beachfront Villa" },
    { type: "video", src: "/videos/23.mp4", alt: "Modern Resort Interior" },
  ];

  useEffect(() => {
    if (isPlaying) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [isPlaying, slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Slider Background */}
      <div className="absolute inset-0">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            {slide.type === "image" ? (
              <img
                src={slide.src}
                alt={slide.alt}
                className="w-full h-full object-cover"
              />
            ) : (
              <video
                src={slide.src}
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover"
              />
            )}

            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/40"></div>
          </div>
        ))}
      </div>

      {/* EMPTY Content Overlay */}
      <div className="relative z-10 flex items-center justify-center min-h-screen"></div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 md:left-8 top-1/2 transform -translate-y-1/2 z-20 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white p-3 rounded-full transition-all duration-300 hover:scale-110"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 md:right-8 top-1/2 transform -translate-y-1/2 z-20 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white p-3 rounded-full transition-all duration-300 hover:scale-110"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Play / Pause */}
      <button
        onClick={togglePlayPause}
        className="absolute top-20 md:top-24 right-4 md:right-8 z-20 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white p-3 rounded-full transition-all duration-300 hover:scale-110"
      >
        {isPlaying ? (
          <Pause className="w-5 h-5" />
        ) : (
          <Play className="w-5 h-5" />
        )}
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full  transition-all duration-300 ${
              index === currentSlide
                ? "bg-white shadow-lg"
                : "bg-white /40 hover:bg-white/60"
            }`}
          ></button>
        ))}
      </div>

      {/* Centered Resort Text */}
      <div className="absolute bottom-10 left-1/2 z-30 w-[90%] max-w-3xl -translate-x-1/2 transform rounded-xl bg-black/40 px-4 py-4 text-center backdrop-blur-sm md:bottom-14">
        <h2 className="text-white text-2xl md:text-3xl font-bold">HF Pool Resorto</h2>
        <p className="mt-2 text-white/90 text-sm md:text-base leading-relaxed">
          HF Pool Resort empowers guests to transform raw relaxation into clear,
          compelling experiences — making luxury easier to share, understand, and
          enjoy.
        </p>
      </div>
    </div>
  );
};

export default Hero;
