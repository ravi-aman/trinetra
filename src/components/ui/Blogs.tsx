"use client";
import Image from "next/image";
import React from "react";
import { WobbleCard } from "../ui/wobble-card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Mail, Check } from "lucide-react";

// Array to store blog data dynamically
const blogData = [
    {
        title: "Top Locations to Invest in Real Estate in 2024",
        description:
            "Discover the most promising locations for real estate investments. Learn why these areas are booming and how you can benefit.",
        imageSrc: "/media/1.jpg",
        containerClassName: "col-span-1 lg:col-span-2 h-full bg-blue-700  lg:min-h-[200px]",
        imageClassName: "absolute -right-[30%] lg:-right-[30%] grayscale filter lg:-bottom-10 object-contain rounded-2xl",
    },
    {
        title: "The Ultimate Guide to Buying Your First Home",
        description:
            "Step-by-step guidance for first-time homebuyers, including tips on budgeting, mortgages, and selecting the perfect property.",
        imageSrc: "/media/2.jpg",
        containerClassName: "col-span-1 min-h-[300px] bg-blue-900",
        imageClassName: "absolute -right-4 lg:-right-[40%] top-[80%] grayscale filter -bottom-10 object-contain rounded-2xl",
    },
    {
        title: "Maximizing Rental Income: Tips for Property Owners",
        description:
            "Learn how to increase your rental income with strategic property upgrades, effective marketing, and tenant management.",
        imageSrc: "/media/5.jpg",
        containerClassName: "col-span-1 lg:col-span-3 bg-blue-900 min-h-[500px] lg:min-h-[600px] xl:min-h-[300px]",
        imageClassName: "absolute -right-10 md:-right-[40%] lg:-right-[20%] -bottom-10 object-contain rounded-2xl",
    },
];

function LatestBlog() {
    return (
        <div className="mx-3">
            <div className="my-10">
                {/* Title Section */}
                <h2 className="max-w-7xl pl-4 my-20 text-4xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-200 font-sans">
                    Read Our Latest Real Estate Insights
                </h2>

                {/* Blog Cards Section */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-7xl mx-auto w-full">
                    {blogData.map((blog, index) => (
                        <WobbleCard
                            key={index}
                            containerClassName={blog.containerClassName}
                            className="cursor-pointer"
                        >
                            <div className="max-w-xs">
                                <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
                                    {blog.title}
                                </h2>
                                <p className="mt-4 text-left text-base/6 text-neutral-200">
                                    {blog.description}
                                </p>
                            </div>

                            {blog.imageSrc && (
                                <Image
                                    src={blog.imageSrc}
                                    width={500}
                                    height={500}
                                    alt="blog image"
                                    className={blog.imageClassName}
                                />
                            )}
                        </WobbleCard>
                    ))}
                </div>

            </div>
            <div className="w-full max-w-7xl mx-auto my-10">
                <WobbleCard className="bg-red-900 rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-6">
                    <div className="flex items-center gap-4 md:gap-6">
                        <div className="bg-white/20 rounded-2xl p-3">
                            <div className="relative">
                                <Mail className="w-8 h-8 text-white" />
                                <Check className="w-4 h-4 text-white absolute bottom-0 right-0 bg-[#7C3AED] rounded-full p-0.5" />
                            </div>
                        </div>
                        <div>
                            <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">Subscribe to Our Real Estate Newsletter</h2>
                            <p className="text-sm md:text-base text-white/80">
                                Get the latest updates, market trends, and property insights directly to your inbox.
                            </p>
                        </div>
                    </div>
                    <div className="w-full md:w-auto">
                        <div className="flex flex-col md:flex-row gap-4 md:gap-6">
                            <div className="flex flex-row items-center rounded-[15px] overflow-hidden shadow-md">
                                <div className="relative w-full">
                                    <input
                                        type="text"
                                        placeholder="Enter your email address..."
                                        className="flex-1 bg-transparent border-none outline-none w-full bg-white placeholder-neutral-400 px-4 py-3"
                                    />
                                </div>
                                <button
                                    type="submit"
                                    className="bg-yellow-600 text-white px-6 py-3 font-semibold hover:bg-slate-900 transition duration-500 ease-in-out"
                                >
                                    Subscribe
                                </button>
                            </div>
                        </div>
                    </div>
                </WobbleCard>
            </div>
        </div>
    );
}

export default LatestBlog;
