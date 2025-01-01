import React from 'react';
import Link from 'next/link'; // Import Next.js Link for client-side navigation
import { FaChartLine, FaChalkboardTeacher, FaMoneyBillWave } from 'react-icons/fa'; // Imported related stock market icons

function Service() {
    const services = [
        {
            icon: <FaChartLine />, // Icon for stock market analysis
            title: 'Our Courses',
            description: 'Learn how to analyze market trends, charts, and make informed trading decisions.',
            link: '/stock-market-analysis'
        },
        {
            icon: <FaChalkboardTeacher />, // Icon for webinars
            title: 'Webinars',
            description: 'Attend live webinars hosted by industry experts on stock trading strategies and market insights.',
            link: '/webinars'
        },
        {
            icon: <FaMoneyBillWave />, // Icon for personalized training or investment advice
            title: 'Personalized Training',
            description: 'Get customized stock market training and mentorship based on your investment goals.',
            link: '/personalized-training'
        },
    ];


    return (
        <div className="relative top-[-140px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 p-4">
            {services.map((service, index) => (
                <Link key={index} href={service.link} passHref>
                    <div className="cursor-pointer max-h-[200px] max-w-[350px] bg-slate-900 rounded-lg shadow-lg p-5 hover:scale-105 transition-transform duration-300 ease-in-out hover:bg-slate-800 ">
                        <div className="flex flex-col items-center text-center text-white">
                            <div className="text-4xl mb-4">{service.icon}</div>
                            <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                            <p className="text-sm">{service.description}</p>
                        </div>
                    </div>
                </Link>
            ))}
        </div>
    );
}

export default Service;
