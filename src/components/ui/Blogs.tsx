"use client";
import Image from "next/image";
import React from "react";
import { WobbleCard } from "../ui/wobble-card";
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Mail, Check } from "lucide-react"
// Array to store blog data dynamically
const blogData = [
    {
        title: "Market Analysis: Navigating the Stock Market in 2024",
        description:
            "Gain insights into current market trends, key indicators, and expert strategies to make informed investment decisions.",
        imageSrc: "/media/3.png",
        containerClassName: "col-span-1 lg:col-span-2 h-full bg-purple-700 min-h-[500px] lg:min-h-[300px]",
        imageClassName: "absolute -right-4 lg:-right-[30%] grayscale filter -bottom-10 object-contain rounded-2xl",
    },
    {
        title: "Stock Market Outlook: What to Expect in the Coming Months",
        description:
            "Explore potential market movements, economic factors, and industry trends that could impact your investments.",
        imageSrc: "",
        containerClassName: "col-span-1 min-h-[300px] bg-teal-600",
        imageClassName: "",
    },
    // {
    //     title: "Investing Strategies for Beginners: A Step-by-Step Guide",
    //     description:
    //         "Learn essential investment concepts, risk management techniques, and how to build a diversified portfolio.",
    //     imageSrc: "/media/5.png",
    //     containerClassName: "col-span-1 lg:col-span-3 bg-blue-900 min-h-[500px] lg:min-h-[600px] xl:min-h-[300px]",
    //     imageClassName: "absolute -right-10 md:-right-[40%] lg:-right-[20%] -bottom-10 object-contain rounded-2xl",
    // },
];
function LatestBLog() {
    return (
        <div className="mx-3">
            <div className="my-10">
                {/* Title Section */}
                <h2 className="max-w-7xl pl-4 my-20 text-xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-200 font-sans">
                    Read our Latest Blog
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
                <WobbleCard className="bg-[#7C3AED] rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-6">
                    <div className="flex items-center gap-4 md:gap-6">
                        <div className="bg-white/20 rounded-2xl p-3">
                            <div className="relative">
                                <Mail className="w-8 h-8 text-white" />
                                <Check className="w-4 h-4 text-white absolute bottom-0 right-0 bg-[#7C3AED] rounded-full p-0.5" />
                            </div>
                        </div>
                        <div>
                            <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">Join Our Newsletter</h2>
                            <p className="text-sm md:text-base text-white/80">
                                Stay updated with exclusive offers, tips, and insights. Subscribe now!
                            </p>
                        </div>
                    </div>
                    <div className="w-full md:w-auto">
                        <div className="relative">
                            <Input
                                type="email"
                                placeholder="Email address"
                                className="w-full md:w-100 pr-24 rounded-full bg-white text-black placeholder:text-gray-500"
                            />
                            <Button className="absolute right-0 top-2 rounded-full px-4 bg-black text-white hover:bg-gray-800">
                                Subscribe
                            </Button>
                        </div>
                    </div>
                </WobbleCard>
            </div>
        </div>
    );
}

export default LatestBLog;
