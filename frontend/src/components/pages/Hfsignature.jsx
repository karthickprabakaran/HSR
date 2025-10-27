import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Star, Bed, Bath, Utensils, Users, Shield } from 'lucide-react';
import img1 from '../../assets/images/straightangle_1.jpg'

const HFSignatureVilla = () => {
  const room = {
    title: 'HF Signature Family Private Pool Villa',
    images: [
      img1
    ],
    rating: 9.0,
    bedrooms: 2,
    bathrooms: 2,
    dining: true,
    size: 2000,
    maxGuests: 4,
    description: 'Approx. 2000 Sq Ft. Two master bedrooms, large living and dining area, star-light swimming pool, outdoor shower, premium interiors, and full amenities.',
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
      '1 One Litre Brand Water Bottle',
      'Shoe Shiner',
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
      'Bath Towel & Hand Towel',
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
          <Link to="/" className="inline-flex items-center text-blue-600 hover:text-blue-700 transition-colors">
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
                <Bed className="w-6 h-6 text-gray-500" /> <span className="font-medium text-gray-700">2 Master Bedrooms</span>
              </div>
              <div className="flex items-center space-x-3 bg-gray-50 p-4 rounded-xl shadow-sm hover:shadow-md transition">
                <Bath className="w-6 h-6 text-gray-500" /> <span className="font-medium text-gray-700">2 Bathrooms, Outdoor Shower</span>
              </div>
              <div className="flex items-center space-x-3 bg-gray-50 p-4 rounded-xl shadow-sm hover:shadow-md transition">
                <Users className="w-6 h-6 text-gray-500" /> <span className="font-medium text-gray-700">Spacious Living & Dining</span>
              </div>
              <div className="flex items-center space-x-3 bg-gray-50 p-4 rounded-xl shadow-sm hover:shadow-md transition">
                <Utensils className="w-6 h-6 text-gray-500" /> <span className="font-medium text-gray-700">Starlight Pool, Premium Interiors</span>
              </div>
            </div>
            <div className="text-sm text-gray-600 mt-3"><span className="font-medium">Size:</span> {room.size.toLocaleString()} sq ft</div>
            <div className="text-sm text-gray-600"><span className="font-medium">Other Features:</span> Outdoor shower, full amenities.</div>

            {/* Check-in / Check-out */}
            <div className="mt-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-1 flex items-center">🕒 Check-in / Check-out</h3>
              <div className="flex space-x-6 text-base text-gray-800 font-medium">
                <span>Check-in: <span className="font-bold">1:00 PM</span></span>
                <span>Check-out: <span className="font-bold">11:00 AM</span></span>
              </div>
            </div>

            {/* CP Plan Pricing Table */}
            <div className="mt-8">
              <h3 className="text-lg font-bold text-blue-700 mb-2">CP Plan (Room + Breakfast)</h3>
              <div className="text-sm text-gray-500 mb-2">(Weekday = Sun–Fri, Weekend = Only Saturday)</div>
              <table className="min-w-full border border-gray-300 text-base mb-6">
                <thead>
                  <tr className="bg-gray-100 text-gray-600">
                    <th className="p-2 border">Room Type</th>
                    <th className="p-2 border">Sq Ft</th>
                    <th className="p-2 border">Weekday (Sun–Fri)</th>
                    <th className="p-2 border">Weekend (Sat)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="text-center">
                    <td className="p-2 border">HF Signature Family Private Pool Villa</td>
                    <td className="p-2 border">2000</td>
                    <td className="p-2 border">₹36,000 +18%</td>
                    <td className="p-2 border">₹41,000 +18%</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* EP Plan Pricing Table */}
            <div className="mt-3">
              <h3 className="text-lg font-bold text-blue-700 mb-2">EP Plan (Room Only)</h3>
              <div className="text-sm text-gray-500 mb-2">(Weekday = Sun–Fri, Weekend = Only Saturday)</div>
              <table className="min-w-full border border-gray-300 text-base mb-6">
                <thead>
                  <tr className="bg-gray-100 text-gray-600">
                    <th className="p-2 border">Room Type</th>
                    <th className="p-2 border">Sq Ft</th>
                    <th className="p-2 border">Weekday (Sun–Fri)</th>
                    <th className="p-2 border">Weekend (Sat)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="text-center">
                    <td className="p-2 border">HF Signature Family Private Pool Villa</td>
                    <td className="p-2 border">2000</td>
                    <td className="p-2 border">₹35,000 +18%</td>
                    <td className="p-2 border">₹40,000 +18%</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Extra Guest Policy Table */}
            <div className="mt-8">
              <h3 className="text-lg font-bold text-blue-700 mb-2 flex items-center">👨‍👩‍👧‍👦 Extra Guest Policy</h3>
              <table className="min-w-full border border-gray-300 text-base">
                <thead>
                  <tr className="bg-gray-100 text-gray-600">
                    <th className="p-2 border">Type</th>
                    <th className="p-2 border">EP Plan</th>
                    <th className="p-2 border">CP Plan</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td className="p-2 border">Extra Adult</td><td className="p-2 border">₹2500</td><td className="p-2 border">₹2800</td></tr>
                  <tr><td className="p-2 border">Extra Child (0–5)</td><td className="p-2 border">Free</td><td className="p-2 border">Free</td></tr>
                  <tr><td className="p-2 border">Extra Child (6–11)</td><td className="p-2 border">₹1500</td><td className="p-2 border">₹1800</td></tr>
                  <tr><td className="p-2 border">Extra Child (12+)</td><td className="p-2 border">₹2500</td><td className="p-2 border">₹2800</td></tr>
                  <tr><td className="p-2 border">Extra Bed (any age)</td><td className="p-2 border">₹2500</td><td className="p-2 border">₹2800</td></tr>
                </tbody>
              </table>
            </div>

            {/* Cancellation Policy */}
            <h3 className="text-lg font-semibold text-gray-900 mb-2">❌ Cancellation Policy</h3>
            <ul className="text-gray-700 text-base list-disc list-inside space-y-1">
              <li><span className="font-semibold">Before 48 Hours:</span> 100% Refund</li>
              <li><span className="font-semibold">Within 48 Hours:</span> 100% Charge</li>
              <li><span className="font-semibold">No Show:</span> 100% Charge</li>
            </ul>

            {/* Single Book Now Button */}
            <div className="md:col-span-2 mt-4">
              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-medium transition">
                Book Now
              </button>
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

export default HFSignatureVilla;
