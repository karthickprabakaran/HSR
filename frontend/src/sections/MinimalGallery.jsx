import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import img1 from '../assets/images/Pool_1.jpg';
import img2 from '../assets/images/straightangle_1.jpg';
import img3 from '../assets/images/living_1.jpg';
import img4 from '../assets/images/seating_1.jpg';
import img5 from '../assets/images/reception_1.jpg';
import img6 from '../assets/images/EntranceWall_1.jpg';

const mediaItems = [
  { type: "image", src: img1 },
  { type: "video", src: "/videos/1.mp4" },
  { type: "image", src: img2 },
  { type: "image", src: img3 },
  { type: "video", src: "/videos/22.mp4" },
  { type: "image", src: img4 },
  { type: "image", src: img5 },
  { type: "image", src: img6 },
];

const MediaGalleryMini = () => {
  const paginationRef = useRef(null);

  return (
    <section className="py-12 px-4 bg-white">
      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={16}
        slidesPerView={1.2}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        pagination={{
          clickable: true,
          el: paginationRef.current,
        }}
        onBeforeInit={(swiper) => {
          // Bind swiper to external pagination element
          swiper.params.pagination.el = paginationRef.current;
        }}
        breakpoints={{
          640: { slidesPerView: 2.2, spaceBetween: 20 },
          1024: { slidesPerView: 3.2, spaceBetween: 24 },
          1280: { slidesPerView: 4.2, spaceBetween: 28 },
        }}
        className="pb-8"
      >
        {mediaItems.map((item, idx) => (
          <SwiperSlide key={idx}>
            <div className="overflow-hidden rounded-lg shadow-md h-48">
              {item.type === "image" ? (
                <img
                  src={item.src}
                  alt="Media"
                  className="w-full h-full object-cover"
                />
              ) : (
                <video
                  src={item.src}
                  className="w-full h-full object-cover"
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

      {/* External Pagination */}
      <div ref={paginationRef} className="mt-4 flex justify-center"></div>
    </section>
  );
};

export default MediaGalleryMini;
