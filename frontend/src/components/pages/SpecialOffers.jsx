import React from "react";

// Placeholder images; replace with actual asset paths later
import offer1 from "../../assets/images/events/File17.jpg";
import offer3 from "../../assets/images/presedential/File25.jpg";
import offer2 from "../../assets/images/events/File13.jpg";

const offers = [
  {
    title: "Sunday to Friday - 20% Off",
    img: offer1,
    description:
      "Enjoy a 10% discount on bookings from Sunday to Friday – perfect for weekday getaways.",
  },
  {
    title: "Saturday Special - 10% Off",
    img: offer2,
    description:
      "Make your Saturday escape more special with 5% off. One night only, every weekend!",
  },
  {
    title: "Book 3 Nights - 20% Off",
    img: offer3,
    description:
      "Stay longer and save—book three nights or more to receive a 15% discount on your stay.",
  },
];

const SpecialOffers = () => {
  return (
    <div className="pt-24 min-h-screen bg-gray-50 flex flex-col items-center px-4">
      <h1 className="text-3xl font-bold text-blue-700 mb-10 text-center">
        Special Offers
      </h1>
      <div className="w-full max-w-5xl space-y-12">
        {offers.map((offer, idx) => (
          <div
            key={idx}
            className={`flex flex-col md:flex-row ${idx % 2 === 1 ? "md:flex-row-reverse" : ""} items-center bg-[#ffffff]  rounded-2xl  shadow-lg overflow-hidden`}
          >
            {/* Image */}
            <div className="md:w-1/2 w-full h-64  md:h-[280px] flex-shrink-0 flex items-center justify-center bg-gray-100 bg-white">
              <img
                src={offer.img}
                alt={offer.title}
                className="object-cover w-full h-full"
              />
            </div>
            {/* Text */}
            <div className="md:w-1/2 w-full h-full p-8 flex flex-col justify-center text-center md:text-left ">
              <h2 className="text-2xl font-semibold  text-black mb-2">
                {offer.title}
              </h2>
              <p className="text-gray-700 text-base mb-1">
                {offer.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SpecialOffers;
