import React, { useState, useEffect, useRef } from 'react'
import RoomCard from '../components/RoomCard.jsx'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const AvailableRooms = () => {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef(null)

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

  // Client's actual room data
  const rooms = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=400&h=300&fit=crop',
      title: 'Junior Suite Pool Villa',
      rating: 9.0,
      bedrooms: 2,
      bathrooms: 2,
      dining: true,
      price: 15000
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?w=400&h=300&fit=crop',
      title: 'Presidential Family Suite Pool Villa',
      rating: 9.5,
      bedrooms: 3,
      bathrooms: 2,
      dining: true,
      price: 25000
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=400&h=300&fit=crop',
      title: 'HF Signature Pool Villa',
      rating: 9.8,
      bedrooms: 4,
      bathrooms: 3,
      dining: true,
      price: 30000
    }
  ]

  const [currentIndex, setCurrentIndex] = useState(0)
  const [cardsToShow, setCardsToShow] = useState(4)

  // Responsive cards per view
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setCardsToShow(1)
      } else if (window.innerWidth < 1024) {
        setCardsToShow(2)
      } else if (window.innerWidth < 1280) {
        setCardsToShow(3)
      } else {
        setCardsToShow(4)
      }
    }

    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const nextSlide = () => {
    setCurrentIndex((prev) =>
      prev + cardsToShow >= rooms.length ? 0 : prev + 1
    )
  }

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? Math.max(0, rooms.length - cardsToShow) : prev - 1
    )
  }

  const visibleRooms = rooms.slice(currentIndex, currentIndex + cardsToShow)
  if (visibleRooms.length < cardsToShow && currentIndex > 0) {
    const remaining = cardsToShow - visibleRooms.length
    const additionalRooms = rooms.slice(0, remaining)
    visibleRooms.push(...additionalRooms)
  }

  return (
    <section
      ref={sectionRef}
      className="py-16 md:py-24 lg:py-32 bg-gray-50"
      id="rooms"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className={`text-center mb-12 ${isVisible ? 'animate-fadeInUp' : 'opacity-0'}`}>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Stay at our top unique properties
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            From castles and villas to boats and igloos, we have it all
          </p>
        </div>

        {/* Room Statistics */}
        <div className={`grid grid-cols-1 md:grid-cols-4 gap-6 mb-12 ${isVisible ? 'animate-fadeInUp delay-200' : 'opacity-0'}`}>
          <div className="text-center bg-white p-6 rounded-lg shadow-sm">
            <div className="text-3xl font-bold text-blue-600 mb-2">5</div>
            <div className="text-gray-600">Rooms</div>
          </div>
          <div className="text-center bg-white p-6 rounded-lg shadow-sm">
            <div className="text-3xl font-bold text-blue-600 mb-2">1+</div>
            <div className="text-gray-600">Years Experience</div>
          </div>
          <div className="text-center bg-white p-6 rounded-lg shadow-sm">
            <div className="text-3xl font-bold text-blue-600 mb-2">1000+</div>
            <div className="text-gray-600">Happy Guests</div>
          </div>
          <div className="text-center bg-white p-6 rounded-lg shadow-sm">
            <div className="text-3xl font-bold text-blue-600 mb-2">24/7</div>
            <div className="text-gray-600">Bookings Available</div>
          </div>
        </div>

        {/* Navigation and Cards Container */}
        <div className="relative">
          {/* Navigation Arrows - Only show if more cards than visible */}
          {rooms.length > cardsToShow && (
            <>
              <button
                onClick={prevSlide}
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 bg-white shadow-lg rounded-full p-3 hover:bg-gray-50 transition-all duration-300 hover:scale-110"
                aria-label="Previous rooms"
              >
                <ChevronLeft className="w-6 h-6 text-gray-600" />
              </button>

              <button
                onClick={nextSlide}
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 bg-white shadow-lg rounded-full p-3 hover:bg-gray-50 transition-all duration-300 hover:scale-110"
                aria-label="Next rooms"
              >
                <ChevronRight className="w-6 h-6 text-gray-600" />
              </button>
            </>
          )}

          <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 ${isVisible ? 'animate-slideInUp' : 'opacity-0'}`}>
            {visibleRooms.map((room, index) => (
              <RoomCard
                key={`${room.id}-${index}`}
                image={room.image}
                title={room.title}
                rating={room.rating}
                bedrooms={room.bedrooms}
                bathrooms={room.bathrooms}
                dining={room.dining}
                price={room.price}
              />
            ))}
          </div>
        </div>

        <div className={`text-center mt-12 ${isVisible ? 'animate-fadeInUp delay-600' : 'opacity-0'}`}>
          <button className="bg-gray-900 hover:bg-gray-800 text-white px-8 py-3 rounded-md font-medium transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
            View All Rooms
          </button>
        </div>

        {/* Pagination dots - Only show if needed */}
        {rooms.length > cardsToShow && (
          <div className="flex justify-center mt-8 space-x-2">
            {Array.from({ length: Math.ceil(rooms.length / cardsToShow) }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index * cardsToShow)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${Math.floor(currentIndex / cardsToShow) === index
                  ? 'bg-blue-600 w-8'
                  : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                aria-label={`Go to page ${index + 1}`}
              />
            ))}
          </div>
        )}
      </div>

      <style jsx>{`
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

        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(50px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fadeInUp {
          animation: fadeInUp 0.8s ease-out forwards;
        }

        .animate-slideInUp {
          animation: slideInUp 1s ease-out forwards;
        }

        .delay-100 { animation-delay: 0.1s; }
        .delay-200 { animation-delay: 0.2s; }
        .delay-300 { animation-delay: 0.3s; }
        .delay-400 { animation-delay: 0.4s; }
        .delay-500 { animation-delay: 0.5s; }
        .delay-600 { animation-delay: 0.6s; }
      `}</style>
    </section>
  )
}

export default AvailableRooms
