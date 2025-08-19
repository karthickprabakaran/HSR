import React from 'react'
import { Star, Bed, Bath, Utensils, MapPin } from 'lucide-react'

const RoomCard = ({
  image,
  title,
  rating,
  bedrooms,
  bathrooms,
  dining,
  price
}) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
      {/* Image Container */}
      <div className="relative overflow-hidden group">
        <img
          src={image}
          alt={title}
          className="w-full h-48 sm:h-52 object-cover group-hover:scale-110 transition-transform duration-500"
        />
        {/* Price Badge */}
        <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
          <span className="text-lg font-bold text-gray-900">₹{price}</span>
          <span className="text-sm text-gray-600">/night</span>
        </div>
      </div>

      {/* Content Container */}
      <div className="p-4 sm:p-6">
        {/* Title */}
        <div className="mb-3">
          <h3 className="text-xl font-bold text-gray-900 mb-1 hover:text-blue-600 transition-colors duration-300">
            {title}
          </h3>
        </div>

        {/* Rating */}
        <div className="flex items-center mb-4">
          <div className="flex items-center bg-gray-900 text-white px-2 py-1 rounded text-sm">
            <Star className="w-3 h-3 mr-1 fill-current" />
            <span className="font-medium">{rating}</span>
          </div>
        </div>

        {/* Amenities */}
        <div className="flex items-center justify-between text-gray-600 text-sm mb-4">
          <div className="flex items-center">
            <Bed className="w-4 h-4 mr-1" />
            <span>{bedrooms} Bed{bedrooms > 1 ? 's' : ''}</span>
          </div>
          <div className="flex items-center">
            <Bath className="w-4 h-4 mr-1" />
            <span>{bathrooms} Bath{bathrooms > 1 ? 's' : ''}</span>
          </div>
          <div className="flex items-center">
            <Utensils className="w-4 h-4 mr-1" />
            <span>{dining ? 'Dining' : 'No Dining'}</span>
          </div>
        </div>

        {/* Book Now Button */}
        <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md font-medium transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg">
          Book Now
        </button>
      </div>
    </div>
  )
}

export default RoomCard
