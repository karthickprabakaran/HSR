import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Star, Bed, Bath, Utensils, Users, Shield, Clock } from 'lucide-react';

const RoomsDetailsPage = () => {
  const { id } = useParams();

  // Room data - same as in RoomsPage
  const roomsData = [
    {
      id: 1,
      images: [
        'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1590490360182-c33d57733427?w=800&h=600&fit=crop'
      ],
      title: 'Junior Suite Pool Villa - Room 1',
      category: 'Junior Suite Pool Villa',
      rating: 9.0,
      bedrooms: 2,
      bathrooms: 2,
      dining: true,
      weekdayPrice: 15000,
      weekendPrice: 20000,
      size: 2500,
      maxGuests: 4,
      description: 'Experience luxury in our Junior Suite Pool Villa featuring a private pool, spacious living areas, and premium amenities. Perfect for couples or small families seeking a relaxing getaway.',
      amenities: [
        'Private Swimming Pool',
        'Premium Toiletries',
        'Mini Refrigerator',
        'Tea/Coffee Making Facilities',
        'Safe Locker',
        'Iron & Ironing Board',
        'Air Conditioning',
        'Free Wi-Fi',
        'Room Service',
        'Daily Housekeeping'
      ]
    },
    {
      id: 2,
      images: [
        'https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1590490360182-c33d57733427?w=800&h=600&fit=crop'
      ],
      title: 'Junior Suite Pool Villa - Room 2',
      category: 'Junior Suite Pool Villa',
      rating: 9.0,
      bedrooms: 2,
      bathrooms: 2,
      dining: true,
      weekdayPrice: 15000,
      weekendPrice: 20000,
      size: 2500,
      maxGuests: 4,
      description: 'Experience luxury in our Junior Suite Pool Villa featuring a private pool, spacious living areas, and premium amenities. Perfect for couples or small families seeking a relaxing getaway.',
      amenities: [
        'Private Swimming Pool',
        'Premium Toiletries',
        'Mini Refrigerator',
        'Tea/Coffee Making Facilities',
        'Safe Locker',
        'Iron & Ironing Board',
        'Air Conditioning',
        'Free Wi-Fi',
        'Room Service',
        'Daily Housekeeping'
      ]
    },
    {
      id: 3,
      images: [
        'https://images.unsplash.com/photo-1590490360182-c33d57733427?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=800&h=600&fit=crop'
      ],
      title: 'Presidential Family Suite Pool Villa - Room 1',
      category: 'Presidential Family Suite Pool Villa',
      rating: 9.5,
      bedrooms: 3,
      bathrooms: 2,
      dining: true,
      weekdayPrice: 25000,
      weekendPrice: 30000,
      size: 2500,
      maxGuests: 6,
      description: 'Our Presidential Family Suite Pool Villa offers ultimate luxury with expansive living spaces, multiple bedrooms, and a stunning private pool. Ideal for families or groups seeking premium accommodation.',
      amenities: [
        'Private Swimming Pool',
        'Premium Toiletries',
        'Mini Refrigerator',
        'Tea/Coffee Making Facilities',
        'Safe Locker',
        'Iron & Ironing Board',
        'Air Conditioning',
        'Free Wi-Fi',
        'Room Service',
        'Daily Housekeeping',
        'Separate Living Area',
        'Family Dining Space'
      ]
    },
    {
      id: 4,
      images: [
        'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1590490360182-c33d57733427?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&h=600&fit=crop'
      ],
      title: 'Presidential Family Suite Pool Villa - Room 2',
      category: 'Presidential Family Suite Pool Villa',
      rating: 9.5,
      bedrooms: 3,
      bathrooms: 2,
      dining: true,
      weekdayPrice: 25000,
      weekendPrice: 30000,
      size: 2500,
      maxGuests: 6,
      description: 'Our Presidential Family Suite Pool Villa offers ultimate luxury with expansive living spaces, multiple bedrooms, and a stunning private pool. Ideal for families or groups seeking premium accommodation.',
      amenities: [
        'Private Swimming Pool',
        'Premium Toiletries',
        'Mini Refrigerator',
        'Tea/Coffee Making Facilities',
        'Safe Locker',
        'Iron & Ironing Board',
        'Air Conditioning',
        'Free Wi-Fi',
        'Room Service',
        'Daily Housekeeping',
        'Separate Living Area',
        'Family Dining Space'
      ]
    },
    {
      id: 5,
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
      dining: true,
      weekdayPrice: 30000,
      weekendPrice: 35000,
      size: 2500,
      maxGuests: 8,
      description: 'The crown jewel of our resort, the HF Signature Pool Villa offers unparalleled luxury with multiple bedrooms, bathrooms, and the largest private pool. Perfect for special occasions and large groups.',
      amenities: [
        'Private Swimming Pool (Largest)',
        'Premium Toiletries',
        'Mini Refrigerator',
        'Tea/Coffee Making Facilities',
        'Safe Locker',
        'Iron & Ironing Board',
        'Air Conditioning',
        'Free Wi-Fi',
        'Room Service',
        'Daily Housekeeping',
        'Separate Living Area',
        'Family Dining Space',
        'Premium Bathroom Amenities',
        'Balcony/Terrace Access'
      ]
    }
  ];

  const room = roomsData.find(room => room.id === parseInt(id));

  if (!room) {
    return (
      <div className="pt-20 min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Room Not Found</h1>
          <Link to="/rooms" className="text-blue-600 hover:text-blue-700">
            ← Back to Rooms
          </Link>
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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Column - Images */}
          <div className="space-y-4">
            <div className="relative">
              <img
                src={room.images[0]}
                alt={room.title}
                className="w-full h-96 object-cover rounded-xl"
              />
              <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm px-3 py-2 rounded-lg">
                <div className="flex items-center">
                  <Star className="w-4 h-4 mr-1 fill-current text-yellow-400" />
                  <span className="font-semibold">{room.rating}</span>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {room.images.slice(1).map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`${room.title} ${index + 2}`}
                  className="w-full h-48 object-cover rounded-lg"
                />
              ))}
            </div>
          </div>

          {/* Right Column - Details */}
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">{room.title}</h1>
              <p className="text-lg text-gray-600 mb-4">{room.description}</p>
            </div>

            {/* Room Specs */}
            <div className="bg-white p-6 rounded-xl border border-gray-100">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Room Details</h2>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center space-x-3">
                  <Bed className="w-5 h-5 text-gray-400" />
                  <span className="text-gray-700">{room.bedrooms} Bedrooms</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Bath className="w-5 h-5 text-gray-400" />
                  <span className="text-gray-700">{room.bathrooms} Bathrooms</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Users className="w-5 h-5 text-gray-400" />
                  <span className="text-gray-700">Up to {room.maxGuests} Guests</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Utensils className="w-5 h-5 text-gray-400" />
                  <span className="text-gray-700">Dining Available</span>
                </div>
              </div>
              <div className="mt-4 pt-4 border-t border-gray-100">
                <div className="text-sm text-gray-600">
                  <span className="font-medium">Size:</span> {room.size.toLocaleString()} sq ft
                </div>
              </div>
            </div>

            {/* Pricing */}
            <div className="bg-white p-6 rounded-xl border border-gray-100">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Pricing</h2>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <div>
                    <span className="text-gray-700">Weekday (Sun-Fri)</span>
                    <div className="text-xs text-gray-500">Sunday to Friday</div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-gray-900">₹{room.weekdayPrice.toLocaleString()}</div>
                    <div className="text-sm text-gray-500">+ 18% GST</div>
                  </div>
                </div>
                <div className="flex justify-between items-center pt-3 border-t border-gray-100">
                  <div>
                    <span className="text-gray-700">Weekend (Saturday)</span>
                    <div className="text-xs text-gray-500">Saturday only</div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-gray-900">₹{room.weekendPrice.toLocaleString()}</div>
                    <div className="text-sm text-gray-500">+ 18% GST</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Book Now Section */}
            <div className="bg-blue-50 border border-blue-100 p-6 rounded-xl">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Ready to Book?</h3>
              <div className="space-y-3">
                <a
                  href="tel:9384842525"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-4 rounded-lg font-medium transition-colors text-center block"
                >
                  Call Now: 9384842525
                </a>
                <a
                  href="mailto:hfpoolresorto@gmail.com"
                  className="w-full bg-white hover:bg-gray-50 border border-gray-200 text-gray-700 py-3 px-4 rounded-lg font-medium transition-colors text-center block"
                >
                  Email Us
                </a>
              </div>
              <p className="text-sm text-gray-600 mt-3 text-center">
                Contact Person: <span className="font-medium">Mohan Babu</span>
              </p>
            </div>
          </div>
        </div>

        {/* Amenities Section */}
        <div className="mt-12 bg-white p-8 rounded-xl border border-gray-100">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Amenities & Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {room.amenities.map((amenity, index) => (
              <div key={index} className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-blue-500 rounded-full flex-shrink-0"></div>
                <span className="text-gray-700">{amenity}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Policies Section */}
        <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Extra Bed Info */}
          <div className="bg-white p-6 rounded-xl border border-gray-100">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Extra Bed Information</h3>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-600">Extra Adult</span>
                <span className="font-semibold">₹2,500</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Child (0-5 years)</span>
                <span className="font-semibold text-green-600">Free</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Child (6-11 years)</span>
                <span className="font-semibold">₹1,500</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Child (12+ years)</span>
                <span className="font-semibold">₹2,500</span>
              </div>
            </div>
          </div>

          {/* Cancellation Policy */}
          <div className="bg-white p-6 rounded-xl border border-gray-100">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Cancellation Policy</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-start space-x-3">
                <Shield className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                <div>
                  <div className="font-medium text-gray-900">Before 48 Hours</div>
                  <div className="text-gray-600">100% Refund</div>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Clock className="w-4 h-4 text-red-600 mt-0.5 flex-shrink-0" />
                <div>
                  <div className="font-medium text-gray-900">Within 48 Hours or No Show</div>
                  <div className="text-gray-600">100% Charge</div>
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
