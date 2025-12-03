import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Star, Bed, Bath, Utensils, Users, Shield, WavesLadder } from 'lucide-react';
import img1 from '../../assets/images/straightangle_1.jpg';

const HFSignatureVilla = () => {
  const room = {
    title: 'HF Signature Family Private Pool Villa',
    images: [img1],
    rating: 9.0,
    bedrooms: 2,
    bathrooms: 2,
    LivingSpace: true,
    size: 2000,
    maxGuests: 4,
    description:
      'Enjoy our HF Signature Family Pool Villa measuring approx. 2000 Sq Ft, designed in white tones...',
    amenities: [
      'Dental Kit',
      'Shaving Kit',
      'Soap',
      'Shampoo',
      'Shower Gel',
      'Moisturizer',
      'Comb',
      'Loofah',
      'Bubble Bath for Bathtub',
      'Bathroom Slippers',
      'Complimentary Bottled Water',
      'Sewing Kit',
      'Medi Kit',
      'Stirrer',
      'Drinking Glass and Coffee Cups with lid',
      'Tissues Box',
      'Snacks with Tray',
      'Kettle with Amenity Set',
      'Milk Powder, Sugar Powder',
      'Bath Towel, Hand Towel',
      'Swimming Pool Towel',
      'Iron Box and Board',
      'Toilet roll',
      'Laundry Bag',
      'Safe Locker',
      'Mini Fridge',
      'Induction Stove',
      'Oven on Request',
    ],
  };

  return (
    <div className="pt-20 min-h-screen bg-gray-50">
      {/* Back Button */}
      <div className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link to="/" className="inline-flex items-center text-blue-600 hover:text-blue-700 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Rooms
          </Link>
        </div>
      </div>

      {/* Page Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* LEFT COLUMN — (Images + Checkin + CP + EP) */}
          <div className="space-y-6">

            {/* Images */}
            <div className="space-y-4">
              <div className="relative group rounded-xl overflow-hidden shadow-lg">
                <img
                  src={room.images[0]}
                  alt={room.title}
                  className="w-full h-96 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute top-4 right-4 bg-yellow-500 text-white px-3 py-1 rounded-full shadow-lg flex items-center space-x-1 text-sm font-semibold">
                  <Star className="w-4 h-4" /> <span>{room.rating}</span>
                </div>
              </div>
            </div>

            {/* Check-in / Check-out */}
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-6 border border-blue-100">
              <h3 className="text-lg font-semibold mb-4 flex items-center">
                <span className="bg-blue-600 text-white p-2 rounded-lg mr-3">🕒</span>
                Check-in / Check-out Times
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-white rounded-xl p-4 shadow-sm border border-blue-100">
                  <p className="text-sm text-gray-600 mb-1">Check-in</p>
                  <p className="text-2xl font-bold text-gray-900">1:00 PM</p>
                </div>
                <div className="bg-white rounded-xl p-4 shadow-sm border border-blue-100">
                  <p className="text-sm text-gray-600 mb-1">Check-out</p>
                  <p className="text-2xl font-bold text-gray-900">11:00 AM</p>
                </div>
              </div>
            </div>

            {/* CP Plan */}
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-6 border border-blue-100">
              <h3 className="text-lg font-bold flex items-center mb-3">
                <span className="bg-blue-600 text-white p-2 rounded-lg mr-3">🍳</span>
                CP Plan (Room + Breakfast)
              </h3>
              <div className="bg-white rounded-xl p-4 shadow-sm border border-blue-100">
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <p className="text-sm text-gray-600">Weekday</p>
                    <p className="text-xl font-bold">₹36,000</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Weekend</p>
                    <p className="text-xl font-bold">₹41,000</p>
                  </div>
                </div>
              </div>
            </div>

            {/* EP Plan */}
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-6 border border-blue-100">
              <h3 className="text-lg font-bold flex items-center mb-3">
                <span className="bg-blue-600 text-white p-2 rounded-lg mr-3">🛏️</span>
                EP Plan (Room Only)
              </h3>
              <div className="bg-white rounded-xl p-4 shadow-sm border border-blue-100">
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <p className="text-sm text-gray-600">Weekday</p>
                    <p className="text-xl font-bold">₹35,000</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Weekend</p>
                    <p className="text-xl font-bold">₹40,000</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN — (Extra Guest + Cancellation + Room Info) */}
          <div className="space-y-6">

            {/* Heading + Description */}
            <div>
              <h1 className="text-4xl font-bold mb-3">{room.title}</h1>
              <p className="text-lg text-gray-600">{room.description}</p>
            </div>

            {/* Room Specs */}
            <div className="grid grid-cols-2 gap-6">
              <div className="flex items-center space-x-3 bg-gray-50 p-4 rounded-xl shadow-sm">
                <Bed className="w-6 h-6 text-gray-500" /> <span>2 Master Bedrooms</span>
              </div>
              <div className="flex items-center space-x-3 bg-gray-50 p-4 rounded-xl shadow-sm">
                <Bath className="w-6 h-6 text-gray-500" /> <span>2 Bathrooms</span>
              </div>
              <div className="flex items-center space-x-3 bg-gray-50 p-4 rounded-xl shadow-sm">
                <Users className="w-6 h-6 text-gray-500" /> <span>Living Space</span>
              </div>
              <div className="flex items-center space-x-3 bg-gray-50 p-4 rounded-xl shadow-sm">
                <Utensils className="w-6 h-6 text-gray-500" /> <span>Premium Interiors</span>
              </div>
              <div className="flex items-center space-x-3 bg-gray-50 p-4 rounded-xl shadow-sm">
                <WavesLadder className="w-6 h-6 text-gray-500" /> <span>Private Pool</span>
              </div>
            </div>

            {/* Extra Guest Policy */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-6 border border-blue-100">
              <h3 className="text-lg font-bold mb-4 flex items-center">
                <span className="bg-blue-600 text-white p-2 rounded-lg mr-3">👨‍👩‍👧‍👦</span>
                Extra Guest Policy
              </h3>
              <div className="space-y-3">
                <div className="bg-white p-3 rounded-xl shadow-sm border">
                  <div className="flex justify-between">
                    <span>Extra Adult</span>
                    <span className="font-bold">₹2,500 / ₹2,800</span>
                  </div>
                </div>
                <div className="bg-white p-3 rounded-xl shadow-sm border">
                  <div className="flex justify-between">
                    <span>Child (0–5)</span>
                    <span className="font-bold text-green-600">Free</span>
                  </div>
                </div>
                <div className="bg-white p-3 rounded-xl shadow-sm border">
                  <div className="flex justify-between">
                    <span>Child (6–11)</span>
                    <span className="font-bold">₹1,500 / ₹1,800</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Cancellation Policy */}
            <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl p-6 border border-orange-100">
              <h3 className="text-lg font-bold mb-4 flex items-center">
                <span className="bg-orange-600 text-white p-2 rounded-lg mr-3">❌</span>
                Cancellation Policy
              </h3>

              <div className="space-y-2">
                <div className="bg-white p-3 rounded-xl shadow-sm border flex items-center">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                  <div>
                    <p className="font-medium">Before 48 Hours</p>
                    <p className="text-sm text-green-600">100% Refund</p>
                  </div>
                </div>

                <div className="bg-white p-3 rounded-xl shadow-sm border flex items-center">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                  <div>
                    <p className="font-medium">Within 48 Hours</p>
                    <p className="text-sm text-orange-600">100% Charge</p>
                  </div>
                </div>

                <div className="bg-white p-3 rounded-xl shadow-sm border flex items-center">
                  <div className="w-2 h-2 bg-red-500 rounded-full mr-3"></div>
                  <div>
                    <p className="font-medium">No Show</p>
                    <p className="text-sm text-red-600">100% Charge</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Book Now Button */}
            <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-medium">
              Book Now
            </button>
          </div>
        </div>

        {/* Amenities */}
        <div className="mt-12 bg-gradient-to-br from-teal-50 to-cyan-50 rounded-2xl p-8 border border-teal-100">
          <h2 className="text-3xl font-bold mb-6 text-center">✨ Premium Amenities</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {room.amenities.map((a, i) => (
              <div key={i} className="bg-white p-4 rounded-xl shadow-sm border">{a}</div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HFSignatureVilla;