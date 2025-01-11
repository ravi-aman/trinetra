import React from 'react';
import BedSearchForm from './BedsSearchForm';

// Correct the background image path
const backgroundImage = '/media/1.jpg';

function BedsHeader() {
    return (
        <header 
            className="flex flex-col justify-between md:flex-row items-center gap-10 w-full min-h-[40rem] bg-cover bg-center relative overflow-hidden"
            style={{ backgroundImage: `url(${backgroundImage})` }}
        >

            <div className="absolute inset-0 bg-black/60"></div>

            <div className="relative flex-1 md:mx-20 p-6 mt-40 md:mt-0 rounded-lg shadow-md text-white min-w-screen">
                <h1 className="text-7xl font-extrabold text-center text-white dark:text-gray-100 w-full">
                    Our Blogs
                </h1>
                <p className="mt-2 text-3xl  dark:text-gray-300 text-center">
                   read the latest articles and updates about real estate and finance
                </p>
            </div>

            <div className="relative flex-1 mt-4 md:mt-0">
                {/* <BedSearchForm /> */}
            </div>
        </header>
    );
}

export default BedsHeader;
