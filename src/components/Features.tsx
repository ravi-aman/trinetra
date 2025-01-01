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
            <h2 className="max-w-7xl pl-4 mx-auto text-xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-200 font-sans">
                Why Choose WFI?
            </h2>
            <p className="max-w-7xl pl-4 mx-auto text-lg md:text-2xl text-neutral-600 dark:text-neutral-400 mt-4">
                Our courses are designed by Mr. Sunil Kumar Tiwari, with over 20 years of experience in stock markets and finance, offering personalized training and lifetime mentorship.
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
                            The first rule of becoming a successful trader is constant learning.
                        </span>{" "}
                        Our courses are designed to offer practical, real-world insights into stock market trading, helping you gain the skills necessary for profitable investments.
                    </p>
                    <Image
                        src="/wfi-trading-session.jpg"
                        alt="WFI Training Session"
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
        category: "Stock Market Training",
        title: "WFI Online 6-Months Stock Market Training",
        src: "/media/1.png",
        content: <DummyContent />,
    },
    {
        category: "Intraday Trading",
        title: "WFI Online Intraday Trading Room",
        src: "/media/2.png",
        content: <DummyContent />,
    },
    {
        category: "Options Trading",
        title: "WFI Online Options Trading Room",
        src: "/media/3.png",
        content: <DummyContent />,
    },
    {
        category: "Investors Club",
        title: "WFI Online Investors Club",
        src: "/media/1.png",
        content: <DummyContent />,
    },
    {
        category: "Algo Trading",
        title: "WFI Online Algo Trading Room",
        src: "/media/5.png",
        content: <DummyContent />,
    },
    {
        category: "Personal Training",
        title: "Personal 1-on-1 Stock Market Coaching",
        src: "/media/1.png",
        content: <DummyContent />,
    },
];

export default Features;
