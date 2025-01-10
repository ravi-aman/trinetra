"use client";
import React from "react";
import { motion } from "framer-motion";
import { LinkPreview } from "@/components/ui/link-preview";

export function CallToAction() {
    return (
        <div className="flex justify-center items-center h-[40rem] flex-col px-4 dark:bg-slate-900">
            <h1 className="text-4xl md:text-6xl font-bold text-center text-slate-900 dark:text-slate-100 mb-8">
                Partner with Trinetraa for Real Estate Excellence
            </h1>

            <p className="text-slate-600 dark:text-slate-400 text-xl md:text-3xl max-w-3xl mx-auto mb-10 text-center">
                Whether you are an 
                <LinkPreview url="https://trinetraa.com/investors" className="font-bold text-blue-700 dark:text-blue-400">
                     investor
                </LinkPreview>,
                <LinkPreview url="https://trinetraa.com/dealers" className="font-bold text-blue-700 dark:text-blue-400">
                    dealer
                </LinkPreview>, or  
                <LinkPreview url="https://trinetraa.com/customers" className="font-bold text-blue-700 dark:text-blue-400">
                    customer
                </LinkPreview>, Trinetraa is here to provide innovative real estate solutions. Join hands with us to discover top properties, strategic investment opportunities, and personalized services for a seamless experience and confirm leads.
            </p>

            <motion.button
                className="px-6 py-3 bg-gradient-to-br from-blue-700 to-blue-900 text-white text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
            >
                Explore Opportunities →
            </motion.button>

            <p className="text-slate-500 dark:text-slate-400 text-sm mt-5 text-center">
                Empowering real estate dreams with 500+ successful projects, trusted by thousands across the industry.
            </p>
        </div>
    );
}

export default CallToAction;
