import React from 'react';
import { Link } from 'react-router-dom';
import RoomCard from '../RoomCard.jsx';

const RoomsPage = () => {
  const rooms = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=400&h=300&fit=crop',
      title: 'Junior Pool Villa',
      rating: 9.0,
      bedrooms: 2,
      bathrooms: 2,
      dining: true,
      price: 15000
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?w=400&h=300&fit=crop',
      title: 'Presidential Family Suite Villa',
      rating: 9.5,
      bedrooms: 3,
      bathrooms: 2,
      dining: true,
      price: 25000
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=400&h=300&fit=crop',
      title: 'HF Signature Villa',
      rating: 9.8,
      bedrooms: 4,
      bathrooms: 3,
      dining: true,
      price: 35000
    }
  ];

  return (
    <div className="pt-20 min-h-screen bg-gray-50">
      {/* Header Section */}
      <div className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Our Premium Pool Villas
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Experience luxury and comfort in our exclusive pool villas, each designed to provide the ultimate relaxation experience.
            </p>
          </div>
        </div>
      </div>

      {/* Rooms Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {rooms.map((room) => (
            <Link
              key={room.id}
              to={`/room/${room.id}`}
              className="block transition-transform duration-200 hover:scale-105"
            >
              <RoomCard
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
    </div>
  );
};

export default RoomsPage;
