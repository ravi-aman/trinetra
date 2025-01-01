"use client";

import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Star, ChevronRight, ChevronLeft } from 'lucide-react';

// Ensure ScrollTrigger is registered
gsap.registerPlugin(ScrollTrigger);

// Testimonials data
const testimonials = [
    {
        id: 1,
        name: "Alex Johnson",
        role: "CEO, TechCorp",
        content: "Next.js has revolutionized our development process. It's incredibly fast and efficient!",
        rating: 5,
        image: "/placeholder.svg?height=100&width=100"
    },
    {
        id: 2,
        name: "Samantha Lee",
        role: "Lead Developer, InnovateTech",
        content: "The performance gains we've seen with Next.js are remarkable. Our site loads in a blink!",
        rating: 5,
        image: "/placeholder.svg?height=100&width=100"
    },
    {
        id: 3,
        name: "Michael Chen",
        role: "CTO, FutureSoft",
        content: "Next.js's server-side rendering capabilities have given us a significant SEO boost.",
        rating: 5,
        image: "/placeholder.svg?height=100&width=100"
    },
    {
        id: 4,
        name: "Emily Taylor",
        role: "Product Manager, WebSolutions",
        content: "The developer experience with Next.js is unparalleled. It's a joy to work with!",
        rating: 5,
        image: "/placeholder.svg?height=100&width=100"
    },
    {
        id: 5,
        name: "David Miller",
        role: "Founder, StartupX",
        content: "Switching to Next.js was the best decision we made for our web application. It's simply amazing!",
        rating: 5,
        image: "/placeholder.svg?height=100&width=100"
    }
];

const Testimonials = () => {
    const sliderRef = useRef<HTMLDivElement | null>(null);
    const containerRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const slider = sliderRef.current;
        const container = containerRef.current;

        if (!slider || !container) return;

        const totalWidth = slider.offsetWidth;
        const duration = 2; // Duration for each scroll in seconds

        // Auto-scroll testimonials every 2 seconds
        const interval = setInterval(() => {
            gsap.to(slider, {
                x: `-=${totalWidth / 5}px`, // Scroll by 1 card width (adjust if needed)
                duration: 0.5, // Duration for the scroll animation
                ease: "power1.inOut",
                modifiers: {
                    x: gsap.utils.unitize(x => parseFloat(x) % totalWidth)
                }
            });
        }, 2000); // Interval for auto-scrolling

        ScrollTrigger.create({
            trigger: container,
            start: "top bottom",
            end: "bottom top",
            onEnter: () => gsap.to(slider, { timeScale: 1, overwrite: true }),
            onLeave: () => gsap.to(slider, { timeScale: 0, overwrite: true }),
            onEnterBack: () => gsap.to(slider, { timeScale: 1, overwrite: true }),
            onLeaveBack: () => gsap.to(slider, { timeScale: 0, overwrite: true })
        });

        return () => {
            clearInterval(interval); // Clean up the interval on component unmount
            ScrollTrigger.getAll().forEach(t => t.kill());
            gsap.killTweensOf(slider);
        };
    }, []);

    const renderStars = (rating: number) => {
        return Array(rating).fill(0).map((_, i) => (
            <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
        ));
    };

    const scrollLeft = () => {
        const slider = sliderRef.current;
        if (slider) {
            gsap.to(slider, {
                x: `+=${slider.offsetWidth / 5}px`, // Scroll back by 1 card width (adjust if needed)
                duration: 0.5, // Duration for the scroll animation
                ease: "power1.inOut"
            });
        }
    };

    const scrollRight = () => {
        const slider = sliderRef.current;
        if (slider) {
            gsap.to(slider, {
                x: `-=${slider.offsetWidth / 5}px`, // Scroll forward by 1 card width (adjust if needed)
                duration: 0.5, // Duration for the scroll animation
                ease: "power1.inOut"
            });
        }
    };

    return (
        <div className="w-full bg-gradient-to-r from-blue-900 to-blue-700 py-16 overflow-hidden" ref={containerRef}>
            <div className="container mx-auto px-4">
                <h2 className="text-4xl font-bold text-slate-100 text-center mb-12">What Our Investors Say</h2>
                <div className="relative overflow-hidden">
                    <div className="absolute top-1/2 -translate-y-1/2 left-0 w-32 h-full bg-gradient-to-r from-blue-900 to-transparent z-10"></div>
                    <div className="absolute top-1/2 -translate-y-1/2 right-0 w-32 h-full bg-gradient-to-l from-blue-700 to-transparent z-10"></div>
                    <div ref={sliderRef} className="flex gap-6">
                        {[...testimonials, ...testimonials].map((testimonial, index) => (
                            <div key={`${testimonial.id}-${index}`} className="flex-none w-80 bg-white rounded-lg shadow-xl overflow-hidden transform transition-all duration-300 hover:scale-105">
                                <div className="p-6">
                                    <div className="flex items-center mb-4">
                                        <img src={testimonial.image} alt={testimonial.name} className="w-12 h-12 rounded-full mr-4" />
                                        <div>
                                            <h3 className="font-semibold text-lg">{testimonial.name}</h3>
                                            <p className="text-gray-600 text-sm">{testimonial.role}</p>
                                        </div>
                                    </div>
                                    <p className="text-gray-700 mb-4">{testimonial.content}</p>
                                    <div className="flex items-center">
                                        {renderStars(testimonial.rating)}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="flex justify-between mt-6">
                    <button onClick={scrollLeft} className="bg-slate-200 hover:bg-slate-300 text-blue-900 font-semibold py-2 px-4 rounded-full flex items-center transition-all duration-300 shadow-md">
                        <ChevronLeft className="w-5 h-5" />
                    </button>
                    <button onClick={scrollRight} className="bg-slate-200 hover:bg-slate-300 text-blue-900 font-semibold py-2 px-4 rounded-full flex items-center transition-all duration-300 shadow-md">
                        <ChevronRight className="w-5 h-5" />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Testimonials;
