"use client";
import { motion } from "framer-motion";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { ImagesSlider } from "@/components/ui/images-slider";

type Tag = string;

export function ImagesSliderDemo() {
    const images = [
        "/media/1.jpg",
        "/media/4.jpg",
        "/media/5.jpg",
        "/media/6.jpg",
        "/media/7.jpg",
        "/media/8.jpg",
    ];

    const [searchQuery, setSearchQuery] = useState<string>('');
    const [selectedTags, setSelectedTags] = useState<Tag[]>([]);
    const [suggestions, setSuggestions] = useState<string[]>([]);

    const tags = ["Rent", "Home", "Plot/Land", "Commercial", "Other"];

    const metroStations: string[] = [
        "Samaypur Badli", "Rohini Sector 18", "Rohini Sector 16", "Rithala", "Pitampura",
        "Kohat Enclave", "Netaji Subhash Place", "Shalimar Bagh", "Azadpur",
        "Delhi University (North Campus)", "Vishwavidyalaya", "Civil Lines",
        "Chandni Chowk", "Rajiv Chowk", "Connaught Place", "Barakhamba Road", "Mandi House",
        "ITO", "Pragati Maidan", "Supreme Court", "Central Secretariat", "Udyog Bhawan",
        "Dhaula Kuan", "Vasant Vihar", "Munirka", "R.K. Puram", "Dwarka Sector 21",
        "Rajouri Garden", "Janakpuri West", "Janakpuri East", "Uttam Nagar East", "Uttam Nagar West",
        "Rohini West", "Rohini East", "Shalimar Bagh", "Azadpur", "Majlis Park", "Gokulpuri",
        "Jhilmil", "Karkarduma", "Kashmere Gate", "Tis Hazari", "Vikas Puri", "Lajpat Nagar",
        "Saket", "Hauz Khas", "IIT Delhi", "Qutub Minar", "Chattarpur", "Badarpur Border",
        "New Delhi", "Shivaji Stadium", "Dhaula Kuan", "Aerocity", "IGI Airport Terminal 3",
        "Janakpuri West", "Dwarka Sector 21", "MG Road", "Sultanpur", "Chhattarpur", "Saket",
        "Okhla Bird Sanctuary", "Majlis Park", "Durgabai Deshmukh South Campus", "Lajpat Nagar",
        "Hazrat Nizamuddin", "Sarai Kale Khan", "Ashram", "Kailash Colony", "Greater Kailash",
        "Nehru Place", "Kalkaji Mandir", "Okhla NSIC", "Kirti Nagar", "Moti Nagar", "Ramesh Nagar",
        "Subhash Nagar", "Janakpuri East", "Dwarka Mor", "Dwarka Sector 25", "Bijwasan", "Vasant Kunj"
    ];

    const router = useRouter();

    const toggleTag = (tag: Tag) => {
        setSelectedTags((prev) =>
            prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
        );
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const query = e.target.value;
        setSearchQuery(query);

        if (query) {
            const filteredSuggestions = metroStations.filter((station) =>
                station.toLowerCase().includes(query.toLowerCase())
            );

            setSuggestions(filteredSuggestions.slice(0, 4));
        } else {
            setSuggestions([]);
        }
    };

    const handleSuggestionClick = (station: string) => {
        setSearchQuery(station);
        setSuggestions([]);
    };

    // Redirect user to /user/search with query and selected tags
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // Construct query parameters from search query and selected tags
        const queryParams = new URLSearchParams();
        queryParams.set('search', searchQuery);
        selectedTags.forEach((tag) => queryParams.append('tags', tag));

        // Redirect to /user/search with query params
        router.push(`/user/search?${queryParams.toString()}`);
    };

    return (
        <ImagesSlider className="h-[40rem]" images={images}>
            <motion.div
                initial={{ opacity: 0, y: -80 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="z-50 flex flex-col justify-left items-center"
            >
                <div className="flex flex-col items-center space-y-4 py-6">
                    <motion.p className="font-bold text-3xl md:text-6xl text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 py-4 px-4">
                        Discover Your<br /><span className="text-yellow-500">Dream Property</span>
                    </motion.p>
                    <div className="px-4">
                        <motion.p className="text-lg md:text-xl text-center text-neutral-300 py-2 px-4">
                            At <span className="font-semibold text-white">Trinetraa</span>, we connect you with the best homes, plots, and rental spaces, ensuring a seamless experience tailored to your needs.
                        </motion.p>
                    </div>
                    <div className="w-full max-w-3xl px-4">
                        <form onSubmit={handleSubmit} className="space-y-4 rounded-lg p-4 shadow-lg">
                            <div className="flex flex-row items-center rounded-[15px] overflow-hidden shadow-md">
                                <div className="relative w-full">
                                    <input
                                        type="text"
                                        placeholder="Search for metro stations..."
                                        value={searchQuery}
                                        onChange={handleChange}
                                        className="flex-1 bg-transparent border-none outline-none w-full bg-white placeholder-neutral-400 px-4 py-3"
                                    />
                                    {suggestions.length > 0 && (
                                        <div className="absolute top-full left-0 w-full bg-white border mt-1 shadow-lg z-10 max-h-56 overflow-auto">
                                            {suggestions.map((suggestion, index) => (
                                                <div
                                                    key={index}
                                                    className="px-4 py-2 cursor-pointer hover:bg-gray-200"
                                                    onClick={() => handleSuggestionClick(suggestion)}
                                                >
                                                    {suggestion}
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                </div>
                                <button
                                    type="submit"
                                    className="bg-yellow-600 text-white px-6 py-3 font-semibold hover:bg-slate-900 transition duration-500 ease-in-out"
                                >
                                    Search
                                </button>
                            </div>

                            <div className="flex flex-wrap gap-2 justify-center">
                                {tags.map((tag) => (
                                    <button
                                        type="button"
                                        key={tag}
                                        onClick={() => toggleTag(tag)}
                                        className={`px-3 py-1 rounded-full border font-medium transition ${selectedTags.includes(tag)
                                            ? "bg-yellow-600 text-white"
                                            : "bg-white/55  font-bold"
                                            } hover:bg-slate-900 hover:text-white transition duration-500 ease-in-out border-slate-900`}
                                    >
                                        {tag}
                                    </button>
                                ))}
                            </div>
                        </form>
                    </div>
                </div>
            </motion.div>
        </ImagesSlider>
    );
}

export default ImagesSliderDemo;
