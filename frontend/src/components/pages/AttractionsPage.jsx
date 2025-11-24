import React from 'react';

import KovalamBeach from '../../assets/images/attractions/kovalam.jpg';
import DakshinaChitra from '../../assets/images/attractions/musuem.jpg';
import EdwardElliotBeach from '../../assets/images/attractions/edwartbeach.jpg';
import Mahabalipuram from '../../assets/images/attractions/Mahaballipuram.jpeg';
import Boathouse from '../../assets/images/attractions/Boathouse.jpeg';
import MGM from '../../assets/images/attractions/mgm.jpeg';
import VGP from '../../assets/images/attractions/vgp.jpeg';
import beach from '../../assets/images/attractions/Akkarai.avif';
import croc from '../../assets/images/attractions/croc.jpg'


const attractions = [
  {
    title: 'Kovalam Beach',
    description: 'Kovalam beach, located in the Chengalpattu district in Tamil Nadu, India, is a popular tourist destination known for its safe, clean, and hygienic environment with a range of facilities and activities to enjoy. ',
    img: KovalamBeach
  },
  {
    title: 'DakshinaChitra Museum',
    description: 'DakshinaChitra is an exciting cross cultural living museum of art, architecture, lifestyles, crafts, and performing arts of South India. The museum features authentic historical houses, cultural exhibitions, and overlooks the Bay of Bengal at Muttukadu.',
    img: DakshinaChitra
  },
  {
    title: "Edward Elliot's Beach",
    description: "Edward Elliot's Beach, also known as Elliot's Beach or Besant Nagar Beach, is a serene public beach in Chennai, known for its golden sand, gentle waves, and wide promenade—ideal for walking, jogging, and leisure.",
    img: EdwardElliotBeach
  },
  {
    title: 'Mahabalipuram',
    description: 'Mamallapuram or Mahabalipuram is renowned for its 7th and 8th-century Pallava dynasty temples, monuments, and the Shore Temple. It features unique rock-cut architecture and historical significance.',
    img: Mahabalipuram
  },
  {
    title: 'Muttukadu Boathouse',
    description: 'Muttukadu Boat House is a popular water sport facility on East Coast Road, offering rowing, wind surfing, water skiing, and speedboat rides. Located within Chennai Metropolitan Area.',
    img: Boathouse
  },
  {
    title: 'MGM Dizzee World',
    description: 'Large amusement park with rides, water slides, a wave pool, and restaurants. Offers diverse entertainment for families and groups.',
    img: MGM
  },
  {
    title: 'VGP Universal Kingdom',
    description: 'VGP Universal Kingdom is a full-fledged amusement park in Chennai’s East Coast Road, known for fun rides and attractions for all ages.',
    img: VGP
  },
  {
    title: 'Akkarai Beach',
    description: 'Beautiful sunrise views, clean sands, and great for evening strolls near the resort.',
    img: beach
  },
  {
    title: 'Crocodile Park',
    description: 'Beautiful sunrise views, clean sands, and great for evening strolls near the resort.',
    img: croc
  }
];

const AttractionsPage = () => {
  return (
    <div className="pt-24 min-h-screen bg-gray-50 px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-10 text-center">Nearby Attractions</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mx-auto max-w-7xl">
        {attractions.map((attraction, idx) => (
          <div key={idx} className="relative group rounded-xl shadow-lg hover:shadow-2xl transition bg-white overflow-hidden min-h-[320px] flex items-end">
            <img
              src={attraction.img}
              alt={attraction.title}
              className="absolute top-0 left-0 w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
            <div className="relative z-10 p-5 w-full">
              <h2 className="text-xl font-semibold text-white mb-1 drop-shadow-lg">{attraction.title}</h2>
              <p className="text-gray-100 text-sm drop-shadow md:truncate lg:whitespace-normal">{attraction.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AttractionsPage;
