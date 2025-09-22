import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, Grid } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/grid";

import img1 from '../assets/images/Pool_1.jpg';
import img2 from '../assets/images/straightangle_1.jpg';
import img3 from '../assets/images/living_1.jpg';
import img4 from '../assets/images/seating_1.jpg';
import img5 from '../assets/images/reception_1.jpg';
import img6 from '../assets/images/EntranceWall_1.jpg';
import img7 from '../assets/images/rightview.jpg';
import img8 from '../assets/images/sideangle_1.jpg';
import img9 from '../assets/images/longentrance_1.jpg';
import img10 from '../assets/images/straightangle_1.jpg';
import img11 from '../assets/images/bath_1.jpg';

const mediaItems = [
  { type: "image", src: img1 },
  { type: "video", src: "/videos/1.mp4" },
  { type: "image", src: img2 },
  { type: "video", src: "/videos/18.mp4" },
  { type: "image", src: img3 },
  { type: "video", src: "/videos/22.mp4" },
  { type: "image", src: img4 },
  { type: "video", src: "/videos/23.mp4" },
  { type: "image", src: img5 },
  { type: "video", src: "/videos/27.mp4" },
  { type: "image", src: img6 },
  { type: "video", src: "/videos/28.mp4" },
  { type: "image", src: img7 },
  { type: "image", src: img8 },
  { type: "video", src: "/videos/30.mp4" },
  { type: "image", src: img9 },
  { type: "image", src: img10 },
  { type: "video", src: "/videos/32.mp4" },
];

const MediaGallerySlider = () => {
  return (
    <section className="py-24 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800">
          Media Gallery
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Explore our resort through images and videos for an immersive experience.
        </p>
      </div>

      {/* Swiper */}
      <Swiper
        modules={[Pagination, Autoplay, Grid]}
        spaceBetween={20}
        slidesPerView={2}
        grid={{ rows: 2, fill: "row" }}
        pagination={{ clickable: true, el: ".custom-pagination" }}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        breakpoints={{
          640: { slidesPerView: 2, grid: { rows: 2 } },
          1024: { slidesPerView: 3, grid: { rows: 2 } },
          1280: { slidesPerView: 4, grid: { rows: 2 } },
        }}
        className="pb-16"
      >
        {mediaItems.map((item, idx) => (
          <SwiperSlide key={idx}>
            <div className="overflow-hidden rounded-xl shadow-lg h-full">
              {item.type === "image" ? (
                <img
                  src={item.src}
                  alt="Media"
                  className="w-full h-64 object-cover"
                />
              ) : (
                <video
                  src={item.src}
                  className="w-full h-64 object-cover"
                  muted
                  loop
                  playsInline
                  preload="metadata"
                  autoPlay
                />
              )}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Pagination outside Swiper */}
      <div className="custom-pagination mt-8 flex justify-center"></div>
    </section>
  );
};

export default MediaGallerySlider;
