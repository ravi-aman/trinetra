"use client";
import React from "react";
import { motion } from "framer-motion";
import { LinkPreview } from "@/components/ui/link-preview";

export function CallToAction() {
    return (
        <div className="flex justify-center items-center h-[40rem] flex-col px-4   dark:bg-slate-900">
            <h1 className="text-4xl md:text-6xl font-bold text-center text-slate-900 dark:text-slate-100 mb-8">
                Master the Financial Markets with WFI
            </h1>

            <p className="text-slate-600 dark:text-slate-400 text-xl md:text-3xl max-w-3xl mx-auto mb-10 text-center">
                Whether you are a{" "}
                <LinkPreview url="https://wfi-stock-market-training.com" className="font-bold text-blue-700 dark:text-blue-400">
                    beginner
                </LinkPreview>
                ,{" "}
                <LinkPreview url="https://wfi-investors-club.com" className="font-bold text-blue-700 dark:text-blue-400">
                    investor
                </LinkPreview>
                , or{" "}
                <LinkPreview url="https://wfi-algo-trading.com" className="font-bold text-blue-700 dark:text-blue-400">
                    trader
                </LinkPreview>
                , WFI has the right course for you. Join thousands of students under Mr. Sunil Kumar Tiwari’s mentorship and take charge of your financial future today!
            </p>

            <motion.button
                className="px-6 py-3 bg-gradient-to-br from-blue-700 to-blue-900 text-white text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
            >
                Start Your Journey Now →
            </motion.button>

            <p className="text-slate-500 dark:text-slate-400 text-sm mt-5 text-center">
                20+ years of experience, 56,000+ happy students, and 100,000+ followers.
            </p>
        </div>
    );
}

export default CallToAction;
