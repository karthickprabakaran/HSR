import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/grid";
import { Pagination, Autoplay, Grid } from "swiper/modules";

import {
  FaTooth, FaShower, FaPumpSoap, FaRegSmile,
  FaTshirt, FaBath, FaSnowflake,
  FaFirstAid, FaWineGlass, FaMapMarkedAlt,
  FaMugHot, FaSwimmingPool, FaLock, FaIceCream
} from "react-icons/fa";
import { FaBottleWater } from "react-icons/fa6";

const facilities = [
  { icon: <FaTooth />, title: "Dental Kit" },
  { icon: <FaShower />, title: "Shampoo & Shower Gel" },
  { icon: <FaPumpSoap />, title: "Moisturizer & Soap" },
  { icon: <FaRegSmile />, title: "Bathroom Slippers" },
  { icon: <FaBottleWater />, title: "Water Bottles" },
  { icon: <FaTshirt />, title: "Laundry Bag" },
  { icon: <FaBath />, title: "Bubble Bath" },
  { icon: <FaSnowflake />, title: "Mini Fridge" },
  { icon: <FaFirstAid />, title: "Medical Kit" },
  { icon: <FaWineGlass />, title: "Coffee & Tea" },
  { icon: <FaMapMarkedAlt />, title: "City Map" },
  { icon: <FaMugHot />, title: "Electric Kettle" },
  { icon: <FaSwimmingPool />, title: "Swimming Towels" },
  { icon: <FaLock />, title: "Safe Locker" },
  { icon: <FaIceCream />, title: "Snacks & Tray" },
];

const Facilities = () => {
  return (
    <section className="bg-gray-50 py-16 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">
          Amenities & Facilities
        </h2>
        <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
          Explore all the facilities we provide for a relaxing and luxurious stay.
        </p>

        {/* Swiper */}
        <Swiper
          modules={[Pagination, Autoplay, Grid]}
          spaceBetween={20}
          slidesPerView={2}
          grid={{ rows: 2, fill: "row" }}
          pagination={{
            el: ".custom-pagination", // Link to external element
            clickable: true
          }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          breakpoints={{
            640: { slidesPerView: 2, grid: { rows: 2 } },
            1024: { slidesPerView: 3, grid: { rows: 2 } },
            1280: { slidesPerView: 4, grid: { rows: 2 } },
          }}
          className="pb-0"
        >
          {facilities.map((facility, idx) => (
            <SwiperSlide key={idx}>
              <div className="bg-white p-8 rounded-xl shadow-md flex flex-col items-center justify-center gap-4 hover:shadow-lg transition duration-300 h-full">
                <div className="text-blue-600 text-5xl">{facility.icon}</div>
                <h3 className="text-lg font-semibold text-gray-800">
                  {facility.title}
                </h3>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* External Pagination */}
        <div className="custom-pagination mt-8"></div>
      </div>
    </section>
  );
};

export default Facilities;
