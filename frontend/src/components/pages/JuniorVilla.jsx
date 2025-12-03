import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  Star,
  Bed,
  Bath,
  Utensils,
  Users,
  WavesLadder,
} from "lucide-react";

import junior from "../../assets/images/junior/File2.jpg";

const JuniorSuiteVilla = () => {
  const room = {
    title: "Junior Suite Private Pool Villa",
    images: [junior],
    rating: 9.0,
    size: 1200,
    description:
      "Enjoy our Junior Suite Private Pool Villa measuring approx. 1200 Sq Ft...",
    amenities: [
      "Dental Kit",
      "Shaving Kit",
      "Soap",
      "Shampoo",
      "Shower Gel",
      "Moisturizer",
      "Comb",
      "Loofah",
      "Bubble Bath for Bathtub",
      "Bathroom Slippers",
      "Complimentary Bottled Water",
      "Sewing Kit",
      "Medi Kit",
      "Stirrer",
      "Drinking Glass and Coffee Cups with lid",
      "Tissues Box",
      "Snacks with Tray",
      "Kettle with Amenity Set",
      "Milk Powder, Sugar Powder",
      "Bath Towel, Hand Towel",
      "Swimming Pool Towel",
      "Iron Box and Board",
      "Toilet roll",
      "Laundry Bag",
      "Safe Locker",
      "Mini Fridge",
      "Induction Stove",
      "Oven on Request",
    ],
  };

  return (
    <div className="pt-20 min-h-screen bg-gray-50">
      {/* Back Button */}
      <div className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link
            to="/"
            className="inline-flex items-center text-blue-600 hover:text-blue-700 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Rooms
          </Link>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* IMAGES + DESCRIPTION */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* IMAGES */}
          <div className="space-y-4">
            <div className="relative group rounded-xl overflow-hidden shadow-lg">
              <img
                src={room.images[0]}
                alt={room.title}
                className="w-full h-96 object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute top-4 right-4 bg-yellow-500 text-white px-3 py-1 rounded-full shadow-lg flex items-center space-x-1 text-sm font-semibold">
                <Star className="w-4 h-4" />
                <span>{room.rating}</span>
              </div>
            </div>
          </div>

          {/* ROOM DESCRIPTION */}
          <div className="space-y-6">
            <h1 className="text-4xl font-bold text-gray-900">{room.title}</h1>
            <p className="text-lg text-gray-600">{room.description}</p>

            {/* SPECS */}
            <div className="grid grid-cols-2 gap-6">
              <div className="flex items-center space-x-3 bg-gray-50 p-4 rounded-xl shadow-sm">
                <Bed className="w-6 h-6 text-gray-500" />
                <span className="font-medium text-gray-700">King Bedroom</span>
              </div>
              <div className="flex items-center space-x-3 bg-gray-50 p-4 rounded-xl shadow-sm">
                <Bath className="w-6 h-6 text-gray-500" />
                <span className="font-medium text-gray-700">
                  Luxury Bathroom
                </span>
              </div>
              <div className="flex items-center space-x-3 bg-gray-50 p-4 rounded-xl shadow-sm">
                <Users className="w-6 h-6 text-gray-500" />
                <span className="font-medium text-gray-700">
                  Couples / Family
                </span>
              </div>
              <div className="flex items-center space-x-3 bg-gray-50 p-4 rounded-xl shadow-sm">
                <Utensils className="w-6 h-6 text-gray-500" />
                <span className="font-medium text-gray-700">
                  Living Space + Pantry
                </span>
              </div>
              <div className="flex items-center space-x-3 bg-gray-50 p-4 rounded-xl shadow-sm">
                <WavesLadder className="w-6 h-6 text-gray-500" />
                <span className="font-medium text-gray-700">Private Pool</span>
              </div>
            </div>

            <div className="text-sm text-gray-600">
              <span className="font-medium">Size:</span>{" "}
              {room.size.toLocaleString()} sq ft
            </div>
          </div>
        </div>

        {/* ----------------------------------------------------------- */}
        {/*         FIXED LAYOUT — LEFT: CHECK-IN + PLANS                */}
        {/*                    RIGHT: EXTRA + CANCELLATION               */}
        {/* ----------------------------------------------------------- */}

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-14">
          {/* LEFT SIDE (Check-In + Plans) */}
          <div className="space-y-6">
            {/* Check-in / Check-out */}
            <div className="bg-orange-50 rounded-2xl p-6 border border-blue-100">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Check-in / Check-out
              </h3>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded-xl shadow-sm border border-blue-100">
                  <p className="text-sm text-gray-600">Check-in</p>
                  <p className="text-2xl font-bold text-gray-900">1:00 PM</p>
                </div>

                <div className="bg-white p-4 rounded-xl shadow-sm border border-blue-100">
                  <p className="text-sm text-gray-600">Check-out</p>
                  <p className="text-2xl font-bold text-gray-900">11:00 AM</p>
                </div>
              </div>
            </div>

            {/* CP Plan */}
            <div className="bg-orange-50 rounded-2xl p-6 border border-blue-100">
              <h3 className="text-lg font-bold text-black mb-3">
                CP Plan (Room + Breakfast)
              </h3>
              <div className="bg-white rounded-xl p-4 shadow-sm border border-blue-100">
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <p className="text-sm text-gray-600">Weekday</p>
                    <p className="text-xl font-bold">₹18,000</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Weekend</p>
                    <p className="text-xl font-bold">₹23,000</p>
                  </div>
                </div>
              </div>
            </div>

            {/* EP Plan */}
            <div className="bg-orange-50 rounded-2xl p-6 border border-blue-100">
              <h3 className="text-lg font-bold text-black mb-3">
                EP Plan (Room Only)
              </h3>
              <div className="bg-white rounded-xl p-4 shadow-sm border border-blue-100">
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <p className="text-sm text-gray-600">Weekday</p>
                    <p className="text-xl font-bold">₹17,500</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Weekend</p>
                    <p className="text-xl font-bold">₹22,500</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE (Extra Guest + Cancellation) */}
          <div className="space-y-6">
            {/* Extra Guest */}
            <div className="bg-orange-50 rounded-2xl p-6 border border-indigo-100">
              <h3 className="text-lg font-bold text-gray-900 mb-4">
                Extra Guest Policy
              </h3>

              <div className="bg-white p-4 rounded-xl shadow-sm border border-indigo-100 flex justify-between">
                <span>Extra Adult</span>
                <span className="font-bold">₹2,500 / ₹2,800</span>
              </div>

              <div className="bg-white p-4 rounded-xl shadow-sm border border-indigo-100 mt-2 flex justify-between">
                <span>Child (0-5)</span>
                <span className="font-bold text-green-600">Free</span>
              </div>

              <div className="bg-white p-4 rounded-xl shadow-sm border border-indigo-100 mt-2 flex justify-between">
                <span>Child (6-11)</span>
                <span className="font-bold">₹1,500 / ₹1,800</span>
              </div>
            </div>

            {/* Cancellation */}
            <div className="bg-orange-50 rounded-2xl p-6 border border-orange-100">
              <h3 className="text-lg font-bold text-gray-900 mb-4">
                Cancellation Policy
              </h3>

              <div className="bg-white p-4 rounded-xl shadow-sm border border-orange-100">
                <p className="font-medium">Before 48 Hours</p>
                <p className="text-green-600 text-sm">100% Refund</p>
              </div>

              <div className="bg-white p-4 rounded-xl shadow-sm border border-orange-100 mt-2">
                <p className="font-medium">Within 48 Hours</p>
                <p className="text-orange-600 text-sm">100% Charge</p>
              </div>

              <div className="bg-white p-4 rounded-xl shadow-sm border border-orange-100 mt-2">
                <p className="font-medium">No Show</p>
                <p className="text-red-600 text-sm">100% Charge</p>
              </div>
            </div>
          </div>
        </div>

        {/* SMALL BOOK NOW BUTTON */}
        <div className="mt-8 flex justify-center">
          <button className="px-8 py-2 bg-[#c8b08a] text-white rounded-lg shadow hover:bg-blue-700 text-sm font-medium">
            Book Now
          </button>
        </div>

        {/* AMENITIES */}
        <div className="mt-12 bg-orange-50 rounded-2xl p-8 border border-teal-100">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
            Premium Amenities & Features
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {room.amenities.map((amenity, idx) => (
              <div
                key={idx}
                className="bg-white p-4 rounded-xl shadow-sm border border-teal-100"
              >
                {amenity}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default JuniorSuiteVilla;

