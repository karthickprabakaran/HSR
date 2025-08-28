import React from 'react';
import { Link } from 'react-router-dom';
import RoomCard from '../RoomCard.jsx';
import { MapPin, Phone, Mail } from 'lucide-react';

const RoomsPage = () => {
  // Client's actual room data - All 5 rooms
  const rooms = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=400&h=300&fit=crop',
      title: 'Junior Suite Pool Villa - Room 1',
      rating: 9.0,
      bedrooms: 2,
      bathrooms: 2,
      dining: true,
      price: 15000
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=400&h=300&fit=crop',
      title: 'Junior Suite Pool Villa - Room 2',
      rating: 9.0,
      bedrooms: 2,
      bathrooms: 2,
      dining: true,
      price: 15000
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?w=400&h=300&fit=crop',
      title: 'Presidential Family Suite Pool Villa - Room 1',
      rating: 9.5,
      bedrooms: 3,
      bathrooms: 2,
      dining: true,
      price: 25000
    },
    {
      id: 4,
      image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=400&h=300&fit=crop',
      title: 'Presidential Family Suite Pool Villa - Room 2',
      rating: 9.5,
      bedrooms: 3,
      bathrooms: 2,
      dining: true,
      price: 25000
    },
    {
      id: 5,
      image: 'https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=400&h=300&fit=crop',
      title: 'HF Signature Pool Villa',
      rating: 9.8,
      bedrooms: 4,
      bathrooms: 3,
      dining: true,
      price: 30000
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

        {/* Room Information Section */}
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* General Information */}
          <div className="bg-white p-6 rounded-xl border border-gray-100">
            <h2 className="text-xl font-semibold text-gray-900 mb-5">Room Information</h2>
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2.5 mr-3 flex-shrink-0"></div>
                <div>
                  <h3 className="font-medium text-gray-900 mb-1">All Rooms Include</h3>
                  <p className="text-gray-600 text-sm">Private pool, premium amenities, dining facilities</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2.5 mr-3 flex-shrink-0"></div>
                <div>
                  <h3 className="font-medium text-gray-900 mb-1">Room Size</h3>
                  <p className="text-gray-600 text-sm">Each villa spans 2,500 sq ft of luxury living space</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2.5 mr-3 flex-shrink-0"></div>
                <div>
                  <h3 className="font-medium text-gray-900 mb-1">Pricing Plan</h3>
                  <p className="text-gray-600 text-sm">EP Plan (European Plan) - Room only basis</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2.5 mr-3 flex-shrink-0"></div>
                <div>
                  <h3 className="font-medium text-gray-900 mb-1">Weekend vs Weekday</h3>
                  <p className="text-gray-600 text-sm">Different rates apply for weekends (Saturday) and weekdays (Sunday-Friday)</p>
                </div>
              </div>
            </div>
          </div>

          {/* Extra Bed Information */}
          <div className="bg-white p-6 rounded-xl border border-gray-100">
            <h2 className="text-xl font-semibold text-gray-900 mb-5">Extra Bed Information</h2>
            <div className="space-y-3">
              <div className="flex justify-between items-center py-2 border-b border-gray-100">
                <span className="text-gray-700">Extra Adult</span>
                <span className="font-semibold text-gray-900">₹2,500</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-gray-100">
                <span className="text-gray-700">Child (0-5 years)</span>
                <span className="font-semibold text-green-600">Free</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-gray-100">
                <span className="text-gray-700">Child (6-11 years)</span>
                <span className="font-semibold text-gray-900">₹1,500</span>
              </div>
              <div className="flex justify-between items-center py-2">
                <span className="text-gray-700">Child (12+ years)</span>
                <span className="font-semibold text-gray-900">₹2,500</span>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="mt-12 bg-blue-50 border border-blue-100 rounded-xl p-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">Ready to Book?</h2>
            <p className="text-gray-600">Contact us directly to make your reservation</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 rounded-full mb-4">
                <Phone className="w-5 h-5 text-blue-600" />
              </div>
              <h3 className="font-medium text-gray-900 mb-2">Call Us</h3>
              <p className="text-gray-600 text-sm mb-3">Speak directly with our reservation team</p>
              <a href="tel:9384842525" className="text-blue-600 hover:text-blue-700 font-medium">
                9384842525
              </a>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 rounded-full mb-4">
                <Mail className="w-5 h-5 text-blue-600" />
              </div>
              <h3 className="font-medium text-gray-900 mb-2">Email Us</h3>
              <p className="text-gray-600 text-sm mb-3">Send us your booking requirements</p>
              <a href="mailto:hfpoolresorto@gmail.com" className="text-blue-600 hover:text-blue-700 font-medium">
                hfpoolresorto@gmail.com
              </a>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 rounded-full mb-4">
                <MapPin className="w-5 h-5 text-blue-600" />
              </div>
              <h3 className="font-medium text-gray-900 mb-2">Visit Us</h3>
              <p className="text-gray-600 text-sm mb-3">Located in the heart of Chennai</p>
              <p className="text-blue-600 font-medium text-sm">Akkarai, Chennai</p>
            </div>
          </div>

          <div className="text-center mt-6">
            <p className="text-sm text-gray-600">
              Contact Person: <span className="font-medium">Mohan Babu</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoomsPage;
