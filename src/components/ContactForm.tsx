"use client";
import React from "react";
import { motion } from "framer-motion";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import FAQ from "./Faq";

// Define the component
export const ContactForm = () => {
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // console.log("Form submitted");
    };

    return (
        <div>
            <div className="heading flex justify-center items-center flex-col mx-4">
                <h1 className="text-5xl md:text-7xl font-bold mt-20">Have a Question ?</h1>
                <p className="text-xl my-4">We are here to help. Send us your query and our team will get back to you as soon as possible!!</p>
            </div>
            <div id="" className=" container mx-auto flex flex-col lg:flex-row justify-between gap-16 py-20 px-6 lg:px-12">
                {/* FAQ Section */}

                <FAQ/>

                {/* Contact Us Section */}
                <div className="max-w-md w-full mx-auto rounded-2xl md:rounded-2xl p-4 md:p-8 shadow-input border bg-white dark:bg-black">
                    <h2 className="font-bold text-2xl text-neutral-800 dark:text-neutral-200">
                        Contact Us
                    </h2>
                    <p className="text-neutral-600 text-sm max-w-sm mt-2 dark:text-neutral-300">
                        Feel free to send us a message with any questions or comments.
                    </p>

                    <form className="my-8" onSubmit={handleSubmit}>
                        <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
                            <LabelInputContainer>
                                <Label htmlFor="firstname">First name</Label>
                                <Input id="firstname" placeholder="Tyler" type="text" />
                            </LabelInputContainer>
                            <LabelInputContainer>
                                <Label htmlFor="lastname">Last name</Label>
                                <Input id="lastname" placeholder="Durden" type="text" />
                            </LabelInputContainer>
                        </div>
                        <LabelInputContainer className="mb-4">
                            <Label htmlFor="email">Email Address</Label>
                            <Input id="email" placeholder="projectmayhem@fc.com" type="email" />
                        </LabelInputContainer>
                        <LabelInputContainer className="mb-4">
                            <Label htmlFor="number">Phone Number</Label>
                            <Input id="number" placeholder="+91 8744883594" type="email" />
                        </LabelInputContainer>
                        <LabelInputContainer className="mb-4">
                            <Label htmlFor="message">Message</Label>
                            <textarea
                                id="message"
                                placeholder="Your message here..."
                                className="w-full p-2 border border-gray-300 rounded-md"
                                rows={4}
                            />
                        </LabelInputContainer>

                        <button
                            className="relative group/btn w-full h-10 font-medium text-white rounded-md bg-gradient-to-br from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 dark:bg-zinc-800 transition-colors duration-300 ease-in-out hover:from-neutral-700 hover:to-neutral-500"
                            type="submit"
                        >
                            Send us
                            <span className="transition-transform duration-300 ease-in-out group-hover/btn:translate-x-2 inline-block ml-2">
                                &rarr;
                            </span>
                            <BottomGradient />
                        </button>

                        <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full" />
                    </form>
                </div>
            </div>
        </div>
    );
};

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
    return <div className={cn("flex flex-col space-y-2 w-full", className)}>{children}</div>;
};

export default ContactForm;
