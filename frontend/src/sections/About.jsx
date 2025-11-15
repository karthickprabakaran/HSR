import React, { useState, useEffect, useRef } from 'react'

const About = () => {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef(null)

  // Intersection Observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])

  return (
    <section
      ref={sectionRef}
      className="py-16 md:py-18 lg:py-32 bg-gray-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Left Content */}
          <div className={`space-y-6 ${isVisible ? 'animate-slideInLeft' : 'opacity-0'}`}>
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                Revive and feel heavenly from head to toe.
              </h2>

              <p className="text-gray-600 text-base md:text-lg leading-relaxed">
                We believe in the power of nature which is why you'll find natural and botanical
                elements from the garden all around the spa... indoor plants, tables crafted from
                tree trunks and lavender placed on treatment beds.
              </p>
            </div>

            {/* Call to Action Button */}
            <div className="pt-4">
              <button className="bg-gray-900 hover:bg-gray-800 text-white px-8 py-3 rounded-md font-medium transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                Learn More
              </button>
            </div>
          </div>

          {/* Right Videos Grid */}
          <div className={`grid grid-cols-2 gap-4 ${isVisible ? 'animate-slideInRight' : 'opacity-0'}`}>

            {/* Large Video - Top Right */}
            <div className="col-span-1">
              <div
                className={`overflow-hidden rounded-lg shadow-lg transform transition-all duration-700 hover:scale-105 ${isVisible ? 'animate-fadeInUp delay-200' : ''
                  }`}
              >
                <video
                  src="/videos/18.mp4"
                  className="w-full h-64 md:h-80 object-cover"
                  autoPlay
                  loop
                  muted
                  playsInline
                />
              </div>
            </div>

            {/* Two smaller videos - Left Column */}
            <div className="col-span-1 space-y-4">
              <div
                className={`overflow-hidden rounded-lg shadow-lg transform transition-all duration-700 hover:scale-105 ${isVisible ? 'animate-fadeInUp delay-400' : ''
                  }`}
              >
                <video
                  src="/videos/28.mp4"
                  className="w-full h-30 md:h-38 object-cover"
                  autoPlay
                  loop
                  muted
                  playsInline
                />
              </div>

              <div
                className={`overflow-hidden rounded-lg shadow-lg transform transition-all duration-700 hover:scale-105 ${isVisible ? 'animate-fadeInUp delay-600' : ''
                  }`}
              >
                <video
                  src="/videos/22.mp4"
                  className="w-full h-42 md:h-38 object-cover"
                  autoPlay
                  loop
                  muted
                  playsInline
                />
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Statistics or Features */}
        <div
          className={`mt-16 md:mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 ${isVisible ? 'animate-fadeInUp delay-800' : 'opacity-0'
            }`}
        >
          {[
            { number: '8+', label: 'Rooms ' },
            { number: '1+', label: 'Years Experience' },
            { number: '1000+', label: 'Happy Guests' },
            { number: '24/7', label: 'Bookings Available' }
          ].map((stat, index) => (
            <div
              key={index}
              className="text-center transform hover:scale-105 transition-transform duration-300"
            >
              <div className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                {stat.number}
              </div>
              <div className="text-gray-600 text-sm md:text-base">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-slideInLeft {
          animation: slideInLeft 0.8s ease-out forwards;
        }

        .animate-slideInRight {
          animation: slideInRight 0.8s ease-out forwards;
        }

        .animate-fadeInUp {
          animation: fadeInUp 0.8s ease-out forwards;
        }

        .delay-200 {
          animation-delay: 0.2s;
        }

        .delay-400 {
          animation-delay: 0.4s;
        }

        .delay-600 {
          animation-delay: 0.6s;
        }

        .delay-800 {
          animation-delay: 0.8s;
        }
      `}</style>
    </section>
  )
}

export default About
