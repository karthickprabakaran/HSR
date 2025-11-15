import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Star, Bed, Bath, Utensils, Users, Shield, Clock } from 'lucide-react';

const RoomsDetailsPage = () => {
  const { id } = useParams();

  const roomsData = [
    {
      id: 1,
      images: [
        'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1590490360182-c33d57733427?w=800&h=600&fit=crop'
      ],
      title: 'Junior Suite Pool Villa',
      category: 'Junior Suite Pool Villa',
      rating: 9.0,
      bedrooms: 2,
      bathrooms: 2,
      LivingSpace: true,
      weekdayPrice: 15000,
      weekendPrice: 20000,
      size: 2500,
      maxGuests: 4,
      description: 'Relax in our Junior Suite Pool Villa with a private plunge pool, cozy living area, and stylish decor. Ideal for couples or small families.',
      amenities: [
        'Private Plunge Pool with Sun Loungers',
        'Premium Toiletries with Natural Ingredients',
        'Mini Bar with Local Snacks & Drinks',
        'Coffee & Tea Making Station',
        'Electronic Safe Locker',
        'Iron & Ironing Board',
        'Air Conditioning with Climate Control',
        'High-Speed Free Wi-Fi',
        'Daily Housekeeping & Turndown Service',
        'Smart TV with Streaming Services',
        'Large Balcony with Garden View',
        'Bathrobes & Slippers'
      ]
    },
    {
      id: 2,
      images: [
        'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1590490360182-c33d57733427?w=800&h=600&fit=crop'
      ],
      title: 'Presidential Family Suite Pool Villa',
      category: 'Presidential Family Suite Pool Villa',
      rating: 9.5,
      bedrooms: 3,
      bathrooms: 2,
      LivingSpace: true,
      weekdayPrice: 25000,
      weekendPrice: 30000,
      size: 2500,
      maxGuests: 6,
      description: 'Our Presidential Family Suite offers expansive living space, a private pool, and multiple bedrooms, perfect for families seeking a luxurious retreat.',
      amenities: [
        'Private Swimming Pool with Lounge Area',
        'Spacious Living Room with Entertainment System',
        'Fully Stocked Mini Bar & Snack Tray',
        'Coffee/Tea Station with Gourmet Options',
        'Electronic Safe Locker',
        'Iron & Ironing Board',
        'Air Conditioning with Zoned Controls',
        'High-Speed Free Wi-Fi',
        'Room Service & Daily Housekeeping',
        'Separate Family LivingSpace Area',
        'Bathtub with Luxury Bath Products',
        'Balcony with Scenic Garden or Pool View',
        'Child-Friendly Amenities on Request'
      ]
    },
    {
      id: 3,
      images: [
        'https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1590490360182-c33d57733427?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&h=600&fit=crop'
      ],
      title: 'HF Signature Pool Villa',
      category: 'HF Signature Pool Villa',
      rating: 9.8,
      bedrooms: 4,
      bathrooms: 3,
      LivingSpace: true,
      weekdayPrice: 30000,
      weekendPrice: 35000,
      size: 2500,
      maxGuests: 8,
      description: 'The HF Signature Pool Villa is the ultimate indulgence with the largest private pool, multiple bedrooms, and bespoke amenities for an unforgettable stay.',
      amenities: [
        'Largest Private Pool with Sunset View',
        'Expansive Living & Entertainment Area',
        'Fully Stocked Mini Bar & Gourmet Snack Tray',
        'Coffee & Tea Station with Premium Blends',
        'Electronic Safe Locker',
        'Iron & Ironing Board',
        'Air Conditioning with Smart Climate Control',
        'High-Speed Free Wi-Fi',
        'Room Service & Daily Housekeeping',
        'Separate Family LivingSpace Space',
        'Luxury Bathroom Amenities with Bathrobe & Slippers',
        'Private Balcony/Terrace with Panoramic Views',
        'Personalized Concierge Service',
        'Optional In-Room Spa & Massage Services'
      ]
    }
  ];

  const room = roomsData.find(room => room.id === parseInt(id));

  if (!room) {
    return (
      <div className="pt-20 min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Room Not Found</h1>
          <Link to="/rooms" className="text-blue-600 hover:text-blue-700">← Back to Rooms</Link>
        </div>
      </div>
    );
  }

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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
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
                <Utensils className="w-6 h-6 text-gray-500" /> <span className="font-medium text-gray-700">LivingSpace Available</span>
              </div>
            </div>
            <div className="text-sm text-gray-600 mt-3"><span className="font-medium">Size:</span> {room.size.toLocaleString()} sq ft</div>

            {/* Pricing */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { label: 'Weekday (Sun-Fri)', price: room.weekdayPrice },
                { label: 'Weekend (Saturday)', price: room.weekendPrice }
              ].map((item, idx) => (
                <div key={idx} className="bg-gradient-to-r from-blue-50 to-white p-6 rounded-2xl border border-gray-200 shadow-md">
                  <h3 className="text-lg font-semibold mb-2">{item.label}</h3>
                  <div className="text-2xl font-bold mb-1">₹{item.price.toLocaleString()}</div>
                  <p className="text-sm text-gray-500">+18% GST</p>
                  <button className="mt-3 w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg font-medium transition">Book Now</button>
                </div>
              ))}
            </div>

            {/* Book Now Section */}
            <div className="bg-blue-50 border border-blue-100 p-6 rounded-xl shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Ready to Book?</h3>
              <div className="space-y-3">
                <a href="tel:9384842525" className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-4 rounded-lg font-medium transition text-center block">Call Now: 9384842525</a>
                <a href="mailto:hfpoolresorto@gmail.com" className="w-full bg-white hover:bg-gray-50 border border-gray-200 text-gray-700 py-3 px-4 rounded-lg font-medium transition text-center block">Email Us</a>
              </div>
              <p className="text-sm text-gray-600 mt-3 text-center">Contact Person: <span className="font-medium">Mohan Babu</span></p>
            </div>
          </div>
        </div>

        {/* Amenities Section */}
        <div className="mt-12 bg-white p-8 rounded-2xl shadow-md border border-gray-100">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Amenities & Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {room.amenities.map((amenity, idx) => (
              <div key={idx} className="flex items-start space-x-3 bg-gray-50 p-4 rounded-lg shadow-sm hover:shadow-md transition">
                <div className="w-3 h-3 bg-blue-500 rounded-full mt-1"></div>
                <span className="text-gray-700 font-medium">{amenity}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Policies Section */}
        <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Extra Bed */}
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Extra Bed Information</h3>
            <div className="space-y-2 text-gray-700">
              <div className="flex justify-between"><span>Extra Adult</span> <span className="font-semibold">₹2,500</span></div>
              <div className="flex justify-between"><span>Child (0-5 years)</span> <span className="font-semibold text-green-600">Free</span></div>
              <div className="flex justify-between"><span>Child (6-11 years)</span> <span className="font-semibold">₹1,500</span></div>
              <div className="flex justify-between"><span>Child (12+ years)</span> <span className="font-semibold">₹2,500</span></div>
            </div>
          </div>

          {/* Cancellation Policy */}
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Cancellation Policy</h3>
            <div className="space-y-3 text-gray-600 text-sm">
              <div className="flex items-start space-x-3">
                <Shield className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                <div>
                  <div className="font-medium text-gray-900">Before 48 Hours</div>
                  <div>100% Refund</div>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Clock className="w-4 h-4 text-red-600 mt-0.5 flex-shrink-0" />
                <div>
                  <div className="font-medium text-gray-900">Within 48 Hours or No Show</div>
                  <div>100% Charge</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoomsDetailsPage;
