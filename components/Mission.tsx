
import React from 'react';

const Mission: React.FC = () => {
  return (
    <section className="bg-[#2D9B9B] rounded-[2.5rem] sm:rounded-[3rem] p-8 sm:p-16 lg:p-24 text-white scroll-reveal overflow-hidden relative">
      <div className="relative z-10">
        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black max-w-5xl leading-[1.1] tracking-tighter mb-16 sm:mb-24">
          My mission is to assist startups and enterprises in creating an emotional bond between their products and engaged customers.
        </h2>
        <div className="flex flex-wrap gap-x-12 gap-y-8 items-center opacity-40">
          {['Jeep', 'amazon', 'bitcoin', 'HubSpot', 'stripe', 'Google'].map((brand) => (
            <span key={brand} className="text-xl sm:text-3xl font-black tracking-tighter uppercase">{brand}</span>
          ))}
        </div>
      </div>
      {/* Abstract background shape */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
    </section>
  );
};

export default Mission;