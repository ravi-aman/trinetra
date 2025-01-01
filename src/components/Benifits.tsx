"use client";

import React from "react";
import { TabsDemo } from "@/components/Tab"; // Ensure correct import path

export const Benefits = () => {
    return (
        <section className="flex flex-col md:flex-row justify-between items-center my-20 w-full max-w-7xl mx-auto px-6 md:px-12 gap-10">
            {/* Left Section*/}
            <div className="w-full md:w-1/2 flex flex-col justify-center items-start space-y-6 md:space-y-8">
                <h1 className="text-3xl md:text-7xl font-bold text-neutral-900">
                    Discover Our Benefits
                </h1>
                <p className="text-lg md:text-xl text-neutral-600">
                    Learn more about our amazing products, services, and offerings.
                    Explore our playground, check out exclusive content, and discover what we have to offer.
                </p>
                <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300">
                    Call Us Now
                </button>
            </div>

            <div className="w-full md:w-1/2 mt-10 md:mt-0">
                <TabsDemo />
            </div>
        </section>
    );
};

export default Benefits;
