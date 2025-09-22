import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Star, Bed, Bath, Utensils, Users, Shield, Clock } from 'lucide-react';
import img1 from '../../assets/images/rightview.jpg'


const PresedentialVilla = () => {
  const room = {
    title: 'Presidential Family Suite Pool Villa',
    images: [
      img1
    ],
    rating: 9.0,
    bedrooms: 2,
    bathrooms: 2,
    dining: true,
    weekdayPrice: 25000,
    weekendPrice: 30000,
    size: 2500,
    maxGuests: 4,
    description: 'Presidential Family Suite Pool Villa: 2 Rooms (2500Sq Ft) WD Rs 25000+18%, WE Rs 30000+18%',
    amenities: [
      'Dental Kit (Brush and Paste)',
      'Shaving Kit (Razor and Cream)',
      'Soap - 20GM',
      'Shampoo - 25 Ml',
      'Shower Gel - 25Ml',
      'Moisturizer - 25Ml',
      'Comb',
      'Loofah',
      'Bubble Bath for Bathtub - 25 Ml',
      'Bathroom Slippers',
      '2 One Litre Brand Water Bottle',
      'Show Shiner',
      'Sanitizer Wipes',
      'Sewing Kit',
      'Medi Kit',
      'Stirrer',
      'Drinking Glass and Coffee Cups with lid',
      'Tissues Box',
      'Snacks with Tray',
      'Chennai Map',
      'Kettle with Black Tea Bags, Green Tea Bags',
      'Milk Powder, Sugar Powder',
      'Bath Towel, Hand Towel',
      'Swimming Pool Towel',
      'Iron Box and Board',
      'Toilet roll',
      'Laundry Bag',
      'Safe Locker',
      'Mini Fridge'
    ]
  };

  return (
    <div className="pt-20 min-h-screen bg-gray-50">
      {/* Back Button */}
      <div className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link to="/rooms" className="inline-flex items-center text-blue-600 hover:text-blue-700 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Rooms
          </Link>
        </div>
      </div>

      {/* Page Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Images & Details */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Left Column - Images */}
          <div className="space-y-4">
            <div className="relative group rounded-xl overflow-hidden shadow-lg">
              <img src={room.images[0]} alt={room.title} className="w-full h-96 object-cover transition-transform duration-300 group-hover:scale-105" />
              <div className="absolute top-4 right-4 bg-yellow-500 text-white px-3 py-1 rounded-full shadow-lg flex items-center space-x-1 text-sm font-semibold">
                <Star className="w-4 h-4" /> <span>{room.rating}</span>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {room.images.slice(1).map((img, idx) => (
                <img key={idx} src={img} alt={`${room.title} ${idx + 2}`} className="w-full h-48 object-cover rounded-lg shadow-sm hover:shadow-md transition" />
              ))}
            </div>
          </div>

          {/* Right Column - Details */}
          <div className="space-y-6">
            <div>
              <h1 className="text-4xl font-bold text-gray-900 mb-3">{room.title}</h1>
              <p className="text-lg text-gray-600">{room.description}</p>
            </div>

            {/* Room Specs */}
            <div className="grid grid-cols-2 gap-6">
              <div className="flex items-center space-x-3 bg-gray-50 p-4 rounded-xl shadow-sm hover:shadow-md transition">
                <Bed className="w-6 h-6 text-gray-500" /> <span className="font-medium text-gray-700">{room.bedrooms} Bedrooms</span>
              </div>
              <div className="flex items-center space-x-3 bg-gray-50 p-4 rounded-xl shadow-sm hover:shadow-md transition">
                <Bath className="w-6 h-6 text-gray-500" /> <span className="font-medium text-gray-700">{room.bathrooms} Bathrooms</span>
              </div>
              <div className="flex items-center space-x-3 bg-gray-50 p-4 rounded-xl shadow-sm hover:shadow-md transition">
                <Users className="w-6 h-6 text-gray-500" /> <span className="font-medium text-gray-700">Up to {room.maxGuests} Guests</span>
              </div>
              <div className="flex items-center space-x-3 bg-gray-50 p-4 rounded-xl shadow-sm hover:shadow-md transition">
                <Utensils className="w-6 h-6 text-gray-500" /> <span className="font-medium text-gray-700">Dining Available</span>
              </div>
            </div>
            <div className="text-sm text-gray-600 mt-3"><span className="font-medium">Size:</span> {room.size.toLocaleString()} sq ft</div>

            {/* Pricing */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { label: 'Weekday (Sun-Fri)', price: room.weekdayPrice },
                { label: 'Weekend (Saturday)', price: room.weekendPrice }
              ].map((item, idx) => (
                <div key={idx} className="bg-gradient-to-r from-blue-50 to-white p-6 rounded-2xl border border-gray-200 shadow-md flex flex-col justify-between">
                  <h3 className="text-lg font-semibold mb-2">{item.label}</h3>
                  <div className="text-2xl font-bold mb-1">₹{item.price.toLocaleString()}</div>
                  <p className="text-sm text-gray-500">+18% GST</p>
                </div>
              ))}

              {/* Single Book Now Button */}
              <div className="md:col-span-2 mt-4">
                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-medium transition">
                  Book Now
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Amenities */}
        <div className="mt-12">
          <h2 className="text-2xl font-semibold text-[#425C4C] mb-6">Amenities & Features</h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-2 gap-x-6 list-disc list-inside text-[#425C4C] text-base font-normal leading-snug">
            {room.amenities.map((amenity, idx) => (
              <li key={idx}>{amenity}</li>
            ))}
          </ul>
        </div>

        {/* Extra Bed Details */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white/80 backdrop-blur-md border border-gray-100 shadow-lg rounded-2xl p-6 flex items-start space-x-4">
            <Users className="w-8 h-8 text-blue-600 flex-shrink-0" />
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Extra Bed Details</h3>
              <ul className="text-gray-700 text-base list-disc list-inside space-y-1">
                <li>Extra Adult: <span className="font-semibold">Rs 2500</span></li>
                <li>Extra Child: <span className="font-semibold">0-5 Free</span>, <span className="font-semibold">6-11 Rs 1500</span>, <span className="font-semibold">12 & Above 2500</span></li>
              </ul>
            </div>
          </div>

          {/* Cancellation Policy */}
          <div className="bg-white/80 backdrop-blur-md border border-gray-100 shadow-lg rounded-2xl p-6 flex items-start space-x-4">
            <Shield className="w-8 h-8 text-yellow-500 flex-shrink-0" />
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Cancellation Policy</h3>
              <ul className="text-gray-700 text-base list-disc list-inside space-y-1">
                <li>If Cancelled Before 2 day or 48 Hrs: <span className="font-semibold">100% Refund</span></li>
                <li>If Cancelled within 2 Day: <span className="font-semibold">100% Charge</span></li>
                <li>If No Show: <span className="font-semibold">100% Charge</span></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PresedentialVilla;
