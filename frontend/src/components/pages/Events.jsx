import React from 'react';

import event1 from '../../assets/images/events/File3.jpg';
import event2 from '../../assets/images/events/File13.jpg';
import event3 from '../../assets/images/events/File15.jpg';
import event4 from '../../assets/images/events/File17.jpg';
import event5 from '../../assets/images/events/File19.jpg';
import event6 from '../../assets/images/events/File23.jpg';
import event7 from '../../assets/images/events/File23.jpg';
import event8 from '../../assets/images/events/File23.jpg';
import event9 from '../../assets/images/events/File23.jpg';

const eventTypes = [
  { title: 'Wedding', img: event1 },
  { title: 'Reception', img: event2 },
  { title: 'Corporate Event', img: event3 },
  { title: 'Party', img: event4 },
  { title: 'Private Party', img: event5 },
  { title: 'Family Gathering', img: event6 }, 
  { title: 'Get Together', img: event6 }, 
  { title: 'Cultural Events', img: event6 }, 
  { title: 'Community Gatherings', img: event6 }, 
];

const Events = () => (
  <div className="pt-24 min-h-screen bg-gray-50 px-4 sm:px-6 lg:px-8">
    <div className="max-w-6xl mx-auto">
      <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3 text-center">Lawn & Events</h1>
      <p className="text-lg text-gray-600 font-medium mb-8 text-center">Ideal for 250-300 Seatings. The perfect venue for weddings, parties, and corporate celebrations.</p>
      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {eventTypes.map((event, idx) => (
          <div key={idx} className="relative rounded-xl shadow-lg bg-white overflow-hidden flex items-end group min-h-[270px]">
            <img
              src={event.img}
              alt={event.title}
              className="absolute top-0 left-0 w-full h-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
            <div className="relative z-10 w-full p-6 text-center">
              <h2 className="text-xl font-semibold text-white drop-shadow-lg tracking-wide uppercase">{event.title}</h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default Events;
