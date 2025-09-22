import React, { useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight, Play, Pause } from 'lucide-react'

import { Link } from 'react-router-dom';
import seating from '../assets/images/seating_1.jpg'
import side from '../assets/images/sideangle_1.jpg'

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isPlaying, setIsPlaying] = useState(true)

  const slides = [
    {
      type: 'video',
      src: "/videos/27.mp4",
      alt: 'Resort Pool View',
      title: '',
      subtitle: 'Unlock to enjoy the view of Martine'
    },
    {
      type: 'image',
      src: seating,
      alt: 'Beach Resort',
      title: 'Luxury Experience',
      subtitle: 'Discover paradise in every moment'
    },
    {
      type: 'image',
      src: side,
      alt: 'Mountain View',
      title: 'Breathtaking Views',
      subtitle: 'Where nature meets luxury'
    },
    {
      type: 'video',
      src: "/videos/32.mp4",
      alt: 'Resort Video',
      title: 'Experience Paradise',
      subtitle: 'Immerse yourself in luxury'
    },
    {
      type: 'video',
      src: "/videos/30.mp4",
      alt: 'Resort Pool View',
      title: 'Experience Luxury',
      subtitle: 'Unlock the beauty of serene poolside living'
    },
    {
      type: 'video',
      src: "/videos/1.mp4",
      alt: 'Beachfront Villa',
      title: 'Paradise Awaits',
      subtitle: 'Wake up to the sound of waves and golden horizons'
    },
    {
      type: 'video',
      src: "/videos/23.mp4",
      alt: 'Modern Resort Interior',
      title: 'Comfort Redefined',
      subtitle: 'Where elegance meets modern design and warmth'
    }


  ]

  useEffect(() => {
    if (isPlaying) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length)
      }, 5000)


      return () => clearInterval(interval)
    }
  }, [isPlaying, slides.length])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  const goToSlide = (index) => {
    setCurrentSlide(index)
  }

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying)
  }

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Slider Container */}
      <div className="absolute inset-0">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentSlide ? 'opacity-100' : 'opacity-0'
              }`}
          >
            {slide.type === 'image' ? (
              <img
                src={slide.src}
                alt={slide.alt}
                className="w-full h-full object-cover"
              />
            ) : (
              <video
                src={slide.src}
                poster={slide.poster}
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover"
              />
            )}

            {/* Dark Overlay for text readability */}
            <div className="absolute inset-0 bg-black/40"></div>
          </div>
        ))}
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 flex items-center justify-center min-h-screen text-center text-white px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 drop-shadow-lg">
            {slides[currentSlide].title}
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl mb-8 drop-shadow-md text-gray-200">
            {slides[currentSlide].subtitle}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-md font-medium text-lg tracking-wide transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
              Book Now
            </button>
            <Link to={'/rooms'}>  <button className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-3 rounded-md font-medium text-lg tracking-wide transition-all duration-300 backdrop-blur-sm">
              Explore Rooms
            </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 md:left-8 top-1/2 transform -translate-y-1/2 z-20 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white p-3 rounded-full transition-all duration-300 hover:scale-110"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 md:right-8 top-1/2 transform -translate-y-1/2 z-20 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white p-3 rounded-full transition-all duration-300 hover:scale-110"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Play/Pause Button */}
      <button
        onClick={togglePlayPause}
        className="absolute top-20 md:top-24 right-4 md:right-8 z-20 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white p-3 rounded-full transition-all duration-300 hover:scale-110"
        aria-label={isPlaying ? 'Pause slideshow' : 'Play slideshow'}
      >
        {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentSlide
              ? 'bg-white shadow-lg'
              : 'bg-white/40 hover:bg-white/60'
              }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

    </div >
  )
}

export default Hero
