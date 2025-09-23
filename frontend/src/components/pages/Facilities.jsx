import React from "react";
import { Link } from "react-router-dom";
import Amenities from "../../sections/Ammeneties";
import MediaGalleryMini from "../../sections/MinimalGallery";


const Facilities = () => {
  const amenities = [
    "Dental Kit (Brush and Paste)",
    "Shaving Kit (Razor and Cream)",
    "Soap - 20GM",
    "Shampoo - 25 Ml",
    "Shower Gel - 25Ml",
    "Moisturizer - 25Ml",
    "Comb",
    "Loofah",
    "Bubble Bath for Bathtub - 25 Ml",
    "Bathroom Slippers",
    "2 One Litre Brand Water Bottle",
    "Show Shiner",
    "Sanitizer Wipes",
    "Sewing Kit",
    "Medi Kit",
    "Stirrer",
    "Drinking Glass and Coffee Cups with lid",
    "Tissues Box",
    "Snacks with Tray",
    "Chennai Map",
    "Kettle with Black Tea Bags, Green Tea Bags",
    "Milk Powder, Sugar Powder",
    "Bath Towel, Hand Towel",
    "Swimming Pool Towel",
    "Iron Box and Board",
    "Toilet roll",
    "Laundry Bag",
    "Safe Locker",
    "Mini Fridge",
  ];

  return (
    <div className="bg-gray-50 text-gray-800">
      {/* Hero */}
      <section className="relative text-white h-[700px] md:h-[800px] px-6 text-center overflow-hidden">
        {/* Video background */}
        <video
          src="/videos/33.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover"
        />
        {/* Content */}
        <div className="relative z-10 max-w-3xl mx-auto flex flex-col justify-center h-full">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Facilities</h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto opacity-70 mb-8">
            Revive and feel heavenly from head to toe. Experience natural luxury
            with curated amenities at HF Pool Resort.
          </p>
          <div className="flex justify-center gap-4">
            <Link
              to="/contact"
              className="bg-white text-blue-700 px-6 py-3 rounded-md font-semibold shadow hover:bg-gray-100 transition"
            >
              Book Now
            </Link>
            <Link
              to="/"
              className="border-2 border-white text-white px-6 py-3 rounded-md font-semibold hover:bg-white hover:text-blue-700 transition"
            >
              Explore Rooms
            </Link>
          </div>
        </div>
      </section>

      {/* Resort Stats */}
      <section className="py-16 px-6 max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
        {[
          { value: "5+", label: "Rooms" },
          { value: "1+", label: "Years Experience" },
          { value: "1000+", label: "Happy Guests" },
          { value: "24/7", label: "Bookings Available" },
        ].map((stat, idx) => (
          <div
            key={idx}
            className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition"
          >
            <div className="text-3xl font-bold text-blue-600">{stat.value}</div>
            <div className="text-gray-600">{stat.label}</div>
          </div>
        ))}
      </section>

      {/* Amenities */}

      <Amenities />

      <MediaGalleryMini />

    </div>
  );
};

export default Facilities;
