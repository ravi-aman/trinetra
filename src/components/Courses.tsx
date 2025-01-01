"use client";
import { FiClock, FiDollarSign, FiTarget, FiBook } from 'react-icons/fi';
import dynamic from 'next/dynamic';

const courses = [
    {
        title: "WFI Online 6 Months Stock Market Training",
        description: "Comprehensive course with live trading sessions and lifetime mentoring by Mr. Sunil Kumar Tiwari.",
        duration: "6 months",
        price: "₹10,000 - ₹15,000",
        features: ["Live trading sessions", "Lifetime mentoring", "Interactive workshops", "Real-time market analysis"],
        idealFor: "Beginners and intermediate traders looking to build a strong foundation in stock trading.",
        imageUrl: "/media/1.png",
    },
    {
        title: "WFI Online Intraday Trading Room",
        description: "Focus on intraday trading strategies, including risk management and live trading tactics.",
        duration: "Ongoing access",
        price: "₹10,000 - ₹15,000",
        features: ["Live trading room access", "Daily market insights", "Interactive Q&A sessions"],
        imageUrl: "/media/2.png",
    },
    {
        title: "WFI Online Intraday Trading Room",
        description: "Focus on intraday trading strategies, including risk management and live trading tactics.",
        duration: "Ongoing access",
        price: "₹10,000 - ₹15,000",
        features: ["Live trading room access", "Daily market insights", "Interactive Q&A sessions"],
        imageUrl: "/media/3.png",
    },
];

function Courses() {
    return (
        <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
                <h1 className="text-4xl font-bold text-center text-gray-900 mb-12">
                    WFI Courses
                </h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {courses.map((course) => (
                        <div key={course.title} className="bg-gray rounded-2xl shadow-lg overflow-hidden">
                            <img src={course.imageUrl} alt={course.title} className="w-full h-48 object-cover" />
                            <div className="p-6">
                                <h2 className="text-2xl font-semibold text-gray-900 mb-2">{course.title}</h2>
                                <p className="text-gray-600 mb-4">{course.description}</p>
                                <div className="flex items-center mb-2">
                                    <FiClock className="text-blue-500 mr-2" />
                                    <span className="text-gray-700">{course.duration}</span>
                                </div>
                                <div className="flex items-center mb-4">
                                    <FiDollarSign className="text-green-500 mr-2" />
                                    <span className="text-gray-700">{course.price}</span>
                                </div>
                                <h3 className="text-lg font-semibold text-gray-900 mb-2">Key Features:</h3>
                                <ul className="list-disc list-inside text-gray-600 mb-4">
                                    {course.features.map((feature, index) => (
                                        <li key={index}>{feature}</li>
                                    ))}
                                </ul>

                            </div>
                        </div>
                    ))}
                </div>
                <div className="mt-12 text-center">
                    <a
                        href="#enroll"
                        className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-300"
                    >
                        <FiBook className="mr-2" />
                        Explore Courses and Enroll Now
                    </a>
                </div>
            </div>
        </div>
    );
}

export default dynamic(() => Promise.resolve(Courses), { ssr: false });
