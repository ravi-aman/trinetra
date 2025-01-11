"use client";

import React, { useEffect, useState } from "react";
import NumberTicker from "@/components/ui/number-ticker"; // Ensure the correct path to your NumberTicker component
import { FaHome, FaUsers, FaListAlt } from "react-icons/fa"; // Updated to FaUsers for multiple humans

const staticsData = [
    {
        title: "Happy Clients",
        value: 51,
        image: "/media/happy_clients.png", // Update with your relevant image
        icon: <FaHome size={40} color="white" />, // Home icon for clients
    },
    {
        title: "Dealers",
        value: 17, // Adjust the value to your data
        image: "/media/dealers.png", // Update with your relevant image
        icon: <FaUsers size={40} color="white" />, // FaUsers icon for multiple dealers
    },
    {
        title: "Properties Listed",
        value: 101,
        image: "/media/properties_listed.png", // Update with your relevant image
        icon: <FaListAlt size={40} color="white" />, // List icon for listed properties
    },
    
];

export const Statistics = () => {
    const [scrollY, setScrollY] = useState(0);

    const handleScroll = () => {
        setScrollY(window.scrollY);
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <section className="pt-20 pb-32 relative overflow-hidden w-full flex flex-col md:flex-row justify-center md:justify-around">
            <div
                className="absolute w-full h-full top-0 left-0 bg-cover bg-center bg-no-repeat"
                style={{
                    backgroundImage: "url(/media/1.jpg)",
                    backgroundAttachment: "fixed",
                    backgroundPosition: "center center",
                    backgroundSize: "cover",
                }}
            />
            <div className=" flex justify-around absolute w-full h-full top-0 left-0 bg-slate-900 opacity-70"></div>
            <div className="flex flex-col md:flex-row w-full justify-center items-center md:mx-20 md:gap-20">
                <div className="relative z-10 max-w-[700px] text-center md:text-left  flex flex-col justify-center items-center md:items-start m-auto p-5">
                    <h1 className="text-white text-4xl md:text-6xl font-bold ">
                        Discover <br/> <span className="text-yellow-600">Premium Residential & Commercial Space </span>in affordable  with  Trinetraa
                    </h1>
                    <button className="mt-8 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300">
                        Contact us now
                    </button>
                </div>

                <div className="relative z-10 grid  grid-cols-1 md:grid-cols-3 gap-8 mt-20 w-full  justify-center px-20 md:px-0">
                    {staticsData.map((stat, index) => (
                        <div
                            key={index}
                            className="flex justify-center items-center  flex-col bg-white rounded-3xl shadow-lg p-6 text-center relative transition-transform duration-500 hover:scale-105 max-h-[200px] min-w-[100px]"
                        >
                            <div
                                className="absolute z-40 w-24 h-24 bg-black rounded-full top-[-20%] left-1/2 transform -translate-x-1/2 transition-all duration-500 bg-cover flex justify-center items-center"
                                style={{
                                    backgroundImage: `url(${stat.image})`,
                                }}
                            >
                                {/* Icon */}
                                {stat.icon}
                            </div>
                            <h2 className="text-3xl font-bold text-neutral-900 mt-12">
                                <NumberTicker value={stat.value} /> +
                            </h2>
                            <p className="text-neutral-600 mt-2 text-lg">{stat.title}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Statistics;
