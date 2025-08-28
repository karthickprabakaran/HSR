import React from 'react'
import { Star, Bed, Bath, Utensils } from 'lucide-react'

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
    <div className="bg-white rounded-xl border border-gray-100 overflow-hidden hover:border-gray-200 transition-all duration-300 hover:-translate-y-1 h-full flex flex-col group">
      {/* Image Container */}
      <div className="relative overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
        />
        {/* Price Badge */}
        <div className="absolute top-3 right-3 bg-white/95 backdrop-blur-sm px-2.5 py-1.5 rounded-lg shadow-sm">
          <div className="text-right">
            <div className="text-base font-bold text-gray-900">₹{price.toLocaleString()}</div>
            <div className="text-xs text-gray-500">/night</div>
          </div>
        </div>
      </div>

      {/* Content Container */}
      <div className="p-4 flex-1 flex flex-col">
        {/* Title - Fixed height */}
        <div className="mb-3 h-10 flex items-start">
          <h3 className="text-base font-semibold text-gray-900 group-hover:text-blue-600 transition-colors duration-300 leading-snug line-clamp-2">
            {title}
          </h3>
        </div>

        {/* Rating */}
        <div className="flex items-center mb-3">
          <div className="flex items-center bg-gray-900 text-white px-2 py-1 rounded-lg text-sm font-medium">
            <Star className="w-3 h-3 mr-1 fill-current text-yellow-400" />
            <span>{rating}</span>
          </div>
        </div>

        {/* Amenities */}
        <div className="flex items-center justify-between text-gray-600 text-sm mb-4">
          <div className="flex items-center space-x-1">
            <Bed className="w-3.5 h-3.5 text-gray-400" />
            <span>{bedrooms} Bed{bedrooms > 1 ? 's' : ''}</span>
          </div>
          <div className="flex items-center space-x-1">
            <Bath className="w-3.5 h-3.5 text-gray-400" />
            <span>{bathrooms} Bath{bathrooms > 1 ? 's' : ''}</span>
          </div>
          <div className="flex items-center space-x-1">
            <Utensils className="w-3.5 h-3.5 text-gray-400" />
            <span>Dining</span>
          </div>
        </div>

        {/* Book Now Button - Pushed to bottom */}
        <div className="mt-auto">
          <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2.5 px-4 rounded-lg font-medium transition-all duration-200 hover:shadow-lg hover:shadow-blue-500/25">
            Book Now
          </button>
        </div>
      </div>

      <style jsx>{`
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </div>
  )
}

export default RoomCard
