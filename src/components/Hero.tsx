"use client";
import { motion } from "framer-motion";
import React, { useState } from "react";
import { ImagesSlider } from "@/components/ui/images-slider";
type Tag = string;
export function ImagesSliderDemo() {
    const images = [
        "/media/1.png",
        "/media/2.png",
        "/media/3.png",
        "/media/5.png",
    ];

    const [searchQuery, setSearchQuery] = useState("");
    const [selectedTags, setSelectedTags] = useState<Tag[]>([]);
    const tags = ["Rent", "Home", "Plot/Land", "Commercial", "Other"];

    const toggleTag = (tag: Tag) => {
        setSelectedTags((prev) =>
            prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
        );
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault(); // Prevent the default form submission
        console.log("Search Query:", searchQuery);
        console.log("Selected Tags:", selectedTags);
    };


    return (
        <ImagesSlider className="h-[40rem]" images={images}>
            <motion.div
                initial={{ opacity: 0, y: -80 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="z-50 flex flex-col justify-left items-center"
            >
                {/* Title Section */}
                <div className="flex flex-col items-center space-y-4 py-6">
                    <motion.p className="font-bold text-3xl md:text-6xl text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 py-4 px-4">
                        Discover Your<br /><span className="text-yellow-500">Dream Property</span>
                    </motion.p>
                    <motion.p className="text-lg md:text-xl text-center text-neutral-300 py-2 px-4">
                        At <span className="font-semibold text-white">Trinetraa</span>, we connect you with the best homes, plots, and rental spaces, ensuring a seamless experience tailored to your needs.
                    </motion.p>

                    {/* Search Bar Section */}
                    <div className="w-full max-w-3xl px-4">
                        <form onSubmit={handleSubmit} className="space-y-4 rounded-lg p-4 shadow-lg">
                            <div className="flex flex-row items-center rounded-[20px] overflow-hidden shadow-md">
                                <input
                                    type="text"
                                    placeholder="Search for properties by name, location, or keyword..."
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    className="flex-1 bg-transparent border-none outline-none text-white bg-white placeholder-neutral-400 px-4 py-3"
                                />
                                <button
                                    type="submit"
                                    className="bg-yellow-600 text-white px-6 py-3 font-semibold hover:bg-emerald-600 transition"
                                >
                                    Search
                                </button>
                            </div>

                            {/* Tags Section */}
                            <div className="flex flex-wrap gap-2 justify-center">
                                {tags.map((tag) => (
                                    <button
                                        type="button"
                                        key={tag}
                                        onClick={() => toggleTag(tag)}
                                        className={`px-3 py-1 rounded-full border font-medium transition ${
                                            selectedTags.includes(tag)
                                                ? "bg-yellow-600 text-white"
                                                : "bg-neutral-700 text-neutral-200"
                                        } hover:bg-emerald-400 hover:text-white`}
                                    >
                                        {tag}
                                    </button>
                                ))}
                            </div>
                        </form>
                    </div>

                    {/* Join Button */}
                    {/* <button className="px-4 py-2 backdrop-blur-sm border bg-emerald-300/10 border-emerald-500/20 text-white mx-auto text-center rounded-full relative mt-4 hover:bg-emerald-500/20 transition">
                        <span>Join now →</span>
                        <div className="absolute inset-x-0 h-px -bottom-px bg-gradient-to-r w-3/4 mx-auto from-transparent via-emerald-500 to-transparent" />
                    </button> */}
                </div>
            </motion.div>
        </ImagesSlider>
    );
}

export default ImagesSliderDemo;
