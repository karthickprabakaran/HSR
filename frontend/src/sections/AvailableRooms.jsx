import { Link } from 'react-router-dom'
import React, { useState, useEffect, useRef } from 'react'
import RoomCard from '../components/RoomCard.jsx'

import img1 from '../assets/images/rightview.jpg'
import img2 from '../assets/images/sideangle_1.jpg'
import img3 from '../assets/images/straightangle_1.jpg'



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

  // Client's actual room data (3 rooms only)
  const rooms = [
    {
      id: 1,
      image: img2,
      title: 'Junior Suite Pool Villa',
      rating: 9.0,
      bedrooms: 2,
      bathrooms: 2,
      dining: true,
      price: 15000,
      link: '/juniorvilla'
    },
    {
      id: 2,
      image: img1,
      title: 'Presidential Family Suite Pool Villa',
      rating: 9.5,
      bedrooms: 3,
      bathrooms: 2,
      dining: true,
      price: 25000,
      link: '/presidential'

    },
    {
      id: 3,
      image: img3,
      title: 'HF Signature Pool Villa',
      rating: 9.8,
      bedrooms: 4,
      bathrooms: 3,
      dining: true,
      price: 30000,
      link: '/hfsignature'

    }
  ]

  const [cardsToShow, setCardsToShow] = useState(3)

  // Responsive cards per view (max 3 since only 3 rooms)
  useEffect(() => {
    const handleResize = () => {
      let cards = 3
      if (window.innerWidth < 640) cards = 1
      else if (window.innerWidth < 1024) cards = 2
      else cards = 3

      setCardsToShow(Math.min(cards, rooms.length))
    }

    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [rooms.length])

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


        {/* Cards */}
        <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 ${isVisible ? 'animate-slideInUp' : 'opacity-0'}`}>
          {rooms.slice(0, cardsToShow).map((room) => (
            <Link to={room.link} >
              <RoomCard
                key={room.id}
                image={room.image}
                title={room.title}
                rating={room.rating}
                bedrooms={room.bedrooms}
                bathrooms={room.bathrooms}
                dining={room.dining}
                price={room.price}
              />
            </Link>
          ))}
        </div>

      </div>

      {/* Animations */}
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
