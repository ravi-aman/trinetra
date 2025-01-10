"use client";
import { motion } from "framer-motion";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { ImagesSlider } from "@/components/ui/images-slider";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { IconSearch, IconLocation } from "@tabler/icons-react";
import BloodFilterComponent from './BloodFilterComponent';
import BloodResultComponent from './BloodResultComponent';

type Tag = string;

export function HeroCopy() {
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

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const queryParams = new URLSearchParams();
        queryParams.set('search', searchQuery);
        selectedTags.forEach((tag) => queryParams.append('tags', tag));

        router.push(`/user/search?${queryParams.toString()}`);
    };

    return (
        <ImagesSlider className="md:h-[40rem] py-10" images={images}>
            <motion.div
                initial={{ opacity: 0, y: -80 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="z-50 flex flex-col justify-left items-center"
            >
                <div className="flex flex-col md:flex-row items-center space-y-4 py-6">
                    <div className="md:ml-20 w-full my-10">
                        <motion.p className="font-bold text-5xl md:text-8xl text-center md:text-start bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 md:py-4 md:px-4">
                            Discover Your<br /><span className="text-yellow-500">Dream Property</span>
                        </motion.p>
                        <div className="px-4">
                            <motion.p className="text-lg md:text-xl  text-center md:text-start text-neutral-300 py-2 px-4">
                                At <span className="font-semibold text-white">Trinetraa</span>, we connect you with the best homes, plots, and rental spaces, ensuring a seamless experience tailored to your needs.
                            </motion.p>
                        </div>
                    </div>
                    <div className="w-full max-w-3xl px-4">
                        <div className="max-w-md w-full mx-auto rounded-2xl p-4 md:p-8 shadow-input bg-white dark:bg-black">
                            <h2 className="font-bold text-xl text-neutral-800 dark:text-neutral-200 mt-5">
                                Schedule Your Free Consultation
                            </h2>
                            <p className="text-neutral-600 text-sm max-w-sm mt-2 dark:text-neutral-300">
                                Let us assist you! Book a free call to explore the best solutions tailored to your needs.
                            </p>

                            <form className="my-8 md:my-5 flex flex-col gap-4" onSubmit={handleSubmit}>
                                <LabelInputContainer>
                                    <Label htmlFor="name">
                                        Your Full Name <span className="text-red-600">*</span>
                                    </Label>
                                    <Input
                                        id="name"
                                        placeholder="Enter your full name"
                                        type="text"
                                        required
                                    />
                                </LabelInputContainer>

                                <LabelInputContainer>
                                    <Label htmlFor="number">
                                        Phone Number <span className="text-red-600">*</span>
                                    </Label>
                                    <Input
                                        id="number"
                                        placeholder="Enter your phone number"
                                        type="number"
                                        required
                                    />
                                </LabelInputContainer>

                                <LabelInputContainer>
                                    <Label htmlFor="email">
                                        Email Address <span className="text-red-600">*</span>
                                    </Label>
                                    <Input
                                        id="email"
                                        placeholder="Enter your email address"
                                        type="email"
                                        required
                                    />
                                </LabelInputContainer>

                                <LabelInputContainer>
                                    <Label htmlFor="availability">Preferred Time</Label>
                                    <Input
                                        id="availability"
                                        placeholder="Select your available time"
                                        type="date"
                                    />
                                </LabelInputContainer>

                                <button
                                    className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
                                    type="submit"
                                >
                                    Book Your Free Call &rarr;
                                    <BottomGradient />
                                </button>
                            </form>
                        </div>


                    </div>
                </div>
            </motion.div>
        </ImagesSlider>
    );
}

const BottomGradient = () => {
    return (
        <>
            <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
            <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
        </>
    );
};

const LabelInputContainer = ({
    children,
    className,
}: {
    children: React.ReactNode;
    className?: string;
}) => {
    return (
        <div className={cn("flex flex-col space-y-2 w-full", className)}>
            {children}
        </div>
    );
};
export default HeroCopy;
