import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Play, Pause } from "lucide-react";
import { Link } from "react-router-dom";

import seating from "../assets/images/seating_1.jpg";
import side from "../assets/images/sideangle_1.jpg";

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  const slides = [
    {
      type: "video",
      src: "/videos/27.mp4",
      alt: "Resort Pool View",
    },
    {
      type: "image",
      src: seating,
      alt: "Beach Resort",
    },
    {
      type: "image",
      src: side,
      alt: "Mountain View",
    },
    {
      type: "video",
      src: "/videos/32.mp4",
      alt: "Resort Video",
    },
    {
      type: "video",
      src: "/videos/30.mp4",
      alt: "Resort Pool View",
    },
    {
      type: "video",
      src: "/videos/1.mp4",
      alt: "Beachfront Villa",
    },
    {
      type: "video",
      src: "/videos/23.mp4",
      alt: "Modern Resort Interior",
    },
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

      {/* EMPTY Content Overlay (Center Content Removed) */}
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
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? "bg-white shadow-lg"
                : "bg-white/40 hover:bg-white/60"
            }`}
          ></button>
        ))}
      </div>

      {/* Bottom Information Bar */}
      <div
        className="
    absolute -bottom-[-6%] left-1/2 transform -translate-x-1/2
    w-[95%] md:w-[85%] lg:w-[75%]
    bg-white shadow-xl rounded-xl
    z-30
    grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4
    p-5
  "
      >
        {/* Location */}
        <div className="flex flex-col">
          <span className="text-gray-500 text-sm">Location</span>
          <span className="font-semibold text-gray-800">Tamil Nadu</span>
        </div>

        {/* Hotel */}
        <div className="flex flex-col">
          <span className="text-gray-500 text-sm">Hotel</span>
          <span className="font-semibold text-gray-800">
            MM Legacy, Kanchipuram
          </span>
        </div>

        {/* Check In */}
        <div className="flex flex-col">
          <span className="text-gray-500 text-sm">Check In</span>
          <span className="font-semibold text-gray-800">29/11/2025</span>
        </div>

        {/* Check Out */}
        <div className="flex flex-col">
          <span className="text-gray-500 text-sm">Check Out</span>
          <span className="font-semibold text-gray-800">30/11/2025</span>
        </div>

        {/* Book Now */}
        <button
          className="
    text-white
    font-semibold rounded-lg px-4 py-3
    transition-all duration-300
    flex flex-col justify-center text-center
  "
          style={{
            backgroundColor: "rgb(38,116,255)",
          }}
          onMouseEnter={(e) =>
            (e.currentTarget.style.backgroundColor = "rgb(28,96,225)")
          }
          onMouseLeave={(e) =>
            (e.currentTarget.style.backgroundColor = "rgb(38,116,255)")
          }
        >
          <span className="text-xs opacity-90">From 4,100 INR/Night</span>
          <span className="text-lg font-bold">Book Now</span>
          <span className="text-xs opacity-90">Why Book Direct?</span>
        </button>
      </div>
    </div>
  );
};

export default Hero;
