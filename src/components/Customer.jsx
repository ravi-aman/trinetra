'use client'

import React from "react";
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { useMediaQuery } from 'react-responsive';

function Customer() {
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' });

  const testimonials = [
    {
      text: "“Great service, very easy and well-explained procedures and information needed for insurance. Greg was great to work with, and had excellent communication skills. 10/10 recommend.”",
      rating: "⭐⭐⭐⭐⭐",
      author: "- Palakas Fotini"
    },
    {
      text: "Greg is always making sure all my insurance needs are covered. Excellent service and very responsive.. thanks again!",
      rating: "⭐⭐⭐⭐⭐",
      author: "- Palakas Fotini"
    },
    {
      text: "Greg is always making sure all my insurance needs are covered. Excellent service and very responsive.. thanks again!",
      rating: "⭐⭐⭐⭐⭐",
      author: "- Dirk Michon"
    },
    {
      text: "Greg is always making sure all my insurance needs are covered. Excellent service and very responsive.. thanks again!",
      rating: "⭐⭐⭐⭐⭐",
      author: "- Derpina Wickers"
    }
  ];

  const carouselItems = testimonials.map((testimonial, index) => (
    <div
      className="shadow-2xl border-2 w-[80%] p-5 m-auto mt-5 pt-10 rounded-3xl text-start bg-cover bg-center h-[300px]"
      style={{ backgroundImage: `url('/path/to/quotes.png')` }}
      key={index}
    >
      <div>{testimonial.text}</div>
      <div className="flex mt-10 justify-between">
        <div>{testimonial.rating}</div>
        <div className="text-xs">{testimonial.author}</div>
      </div>
    </div>
  ));

  return (
    <div
      className="flex flex-col justify-center text-center bg-white pb-20 md:pb-40 pt-40"
      style={{
        backgroundImage: isMobile ? 'none' : `url('/public/quote.png')`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: '20% 35%',
        backgroundPosition: '10% 30%',
        zIndex: '-1',
      }}
    >
      <div className="text-xs md:text-sm font-medium">
        <p className="text-2xl md:text-3xl font-bold">What people say</p>
        <p className="mt-3 md:mt-5">Our customers are our top priority</p>
        <p>Let's hear what they have to say.</p>
      </div>

      {isMobile ? (
        <AliceCarousel
          items={carouselItems}
          autoPlay
          autoPlayInterval={3000}
          infinite
          mouseTracking
          disableDotsControls
          disableButtonsControls
        />
      ) : (
        <div className="flex flex-wrap justify-center gap-10 text-start text-xs md:text-sm m-10 md:mt-20">
          <div className="shadow-2xl border-2 w-[80%] md:w-[17%] p-5 pt-10 rounded-3xl md:mb-40 bg-cover bg-center min-h-[300px] bg-white">
            <div>
              “Great service, very easy and well-explained procedures and information needed for insurance. Greg was great to work with, and had excellent communication skills. 10/10 recommend.”
            </div>
            <div className="flex mt-10 md:mt-20 justify-between">
              <div>⭐⭐⭐⭐⭐</div>
              <div className="text-xs md:text-sm font-semibold">- Palakas Fotini</div>
            </div>
          </div>

          <div className="shadow-2xl border-2 w-[80%] md:w-[17%] p-5 pt-10 rounded-3xl md:mt-40 bg-cover bg-center h-[300px] bg-white">
            <div className="w-[95%]">
              Greg is always making sure all my insurance needs are covered. Excellent service and very responsive.. thanks again!
            </div>
            <div className="flex mt-10 md:mt-28 justify-between">
              <div>⭐⭐⭐⭐⭐</div>
              <div className="text-xs md:text-sm font-semibold">- Palakas Fotini</div>
            </div>
          </div>

          <div className="shadow-2xl border-2 w-[80%] md:w-[17%] p-5 pt-10 rounded-3xl md:mb-40 bg-cover bg-center h-[300px]">
            <div className="w-[95%]">
              Greg is always making sure all my insurance needs are covered. Excellent service and very responsive.. thanks again!
            </div>
            <div className="flex mt-10 md:mt-28 justify-between">
              <div>⭐⭐⭐⭐⭐</div>
              <div className="text-xs md:text-sm font-semibold">- Dirk Michon</div>
            </div>
          </div>

          <div className="shadow-2xl border-2 w-[80%] md:w-[17%] pt-10 rounded-3xl md:mt-40 bg-cover bg-center h-[300px] bg-white">
            <div className="w-[95%] p-5">
              Greg is always making sure all my insurance needs are covered. Excellent service and very responsive.. thanks again!
            </div>
            <div className="flex mt-10 md:mt-20 p-3 justify-center items-center">
              <div>⭐⭐⭐⭐⭐</div>
              <div className="text-xs md:text-sm font-semibold">- Derpina Wickers</div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Customer;
