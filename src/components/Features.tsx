"use client";
import Image from "next/image";
import React from "react";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";
import TextReveal from "@/components/ui/text-reveal";

export function Features() {
    const cards = data.map((card, index) => (
        <Card key={index} card={card} index={index} />
    ));

    return (
        <div className="w-full h-full py-20 pb-0">
            <h1 className="max-w-7xl pl-4 mx-auto text-5xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-200 font-sans">
                Why Choose Trineraa?
            </h1>
            <p className="max-w-7xl pl-4 mx-auto text-lg md:text-2xl text-neutral-600 dark:text-neutral-400 mt-4">
                Discover your dream property with Trineraa. We provide expert guidance, personalized site visits, and a seamless experience to help you find the perfect investment or home.
            </p>
            <Carousel items={cards} />
        </div>
    );
}

const DummyContent = () => {
    return (
        <>
            {[...Array(3)].map((_, index) => (
                <div
                    key={"dummy-content" + index}
                    className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4"
                >
                    <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
                        <span className="font-bold text-neutral-700 dark:text-neutral-200">
                            Your journey to finding the perfect property starts here.
                        </span>{" "}
                        Explore handpicked properties with us and get all the information you need to make the best decision for your future.
                    </p>
                    <Image
                        src="/trineraa-site-visit.jpg"
                        alt="Trineraa Site Visit"
                        height={500}
                        width={500}
                        className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain"
                    />
                </div>
            ))}
        </>
    );
};

const data = [
    {
        category: "Residential Properties",
        title: "Explore Premium Residential Properties",
        src: "/media/1.jpg",
        content: <DummyContent />,
    },
    {
        category: "Commercial Spaces",
        title: "Discover Top Commercial Spaces",
        src: "/media/4.jpg",
        content: <DummyContent />,
    },
    {
        category: "Land Investments",
        title: "Secure Your Future with Land Investments",
        src: "/media/5.jpg",
        content: <DummyContent />,
    },
    {
        category: "Luxury Villas",
        title: "Tour Our Exclusive Luxury Villas",
        src: "/media/6.jpg",
        content: <DummyContent />,
    },
    {
        category: "Real Estate Consultation",
        title: "Get Expert Real Estate Consultation",
        src: "/media/7.jpg",
        content: <DummyContent />,
    },
    {
        category: "Customized Solutions",
        title: "Tailored Solutions for Your Property Needs",
        src: "/media/8.jpg",
        content: <DummyContent />,
    },
];

export default Features;
