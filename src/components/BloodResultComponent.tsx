"use client"
import React, { useState } from 'react';

const propertyResults = [
    {
        id: 1,
        images: [
            "/media/1.png",
            "/media/2.png",
            "/media/3.png",
            "/media/4.png"
        ],
        propertyName: 'Sunnyvale Villa',
        address: '456 Green Lane, Suburbia, Country',
        price: '$250,000',
        tags: ['For Sale', 'Furnished', 'Modern Design'],
        bookmarked: false,
        propertyType: 'House',
        bedrooms: 4,
        bathrooms: 3,
        area: '2,500 sqft',
        amenities: ['Garden', 'Garage', 'Swimming Pool', 'Near School'],
    },
    {
        id: 2,
        images: [
            "/media/1.png",
            "/media/3.png",
            "/media/5.png",
        ],
        propertyName: 'Greenwood Apartments',
        address: '789 Oak Avenue, Delhi, India',
        price: '₹1,200,000',
        tags: ['For Rent', '2 BHK', 'Near Metro Station'],
        bookmarked: false,
        propertyType: 'Flat',
        bedrooms: 2,
        bathrooms: 2,
        area: '1,200 sqft',
        amenities: ['Lift', 'Security', 'Parking'],
    },
    {
        id: 3,
        images: [
            "/media/3.png",
            "/media/5.png",

        ],
        propertyName: 'Business Hub Tower',
        address: 'Sector 75, Noida, India',
        price: '₹11.5 Crore',
        tags: ['For Sale', 'Commercial', 'High Footfall Area'],
        bookmarked: false,
        propertyType: 'Commercial',
        area: '9,000 sqft',
        amenities: ['Elevators', '24/7 Security', 'Parking'],
    },
    {
        id: 4,
        images: [
            "/media/1.png",
            "/media/2.png",
        ],
        propertyName: 'Corporate Suites',
        address: 'Connaught Place, Delhi, India',
        price: '₹2.8 Crore',
        tags: ['For Sale', 'Office Space', 'Prime Location'],
        bookmarked: false,
        propertyType: 'Commercial',
        area: '2,000 sqft',
        amenities: ['Air Conditioning', 'Conference Room', 'Parking'],
    },
    {
        id: 5,
        images: [
            "/media/5.png",
            "/media/2.png",
            "/media/4.png",
            "/media/3.png"
        ],
        propertyName: 'Sunrise Residency',
        address: 'Dwarka Sector 12, Delhi, India',
        price: '₹1,500,000',
        tags: ['For Rent', '3 BHK', 'Near Metro Station'],
        bookmarked: false,
        propertyType: 'Flat',
        bedrooms: 3,
        bathrooms: 2,
        area: '1,500 sqft',
        amenities: ['Lift', 'Security', 'Parking'],
    },
    {
        id: 6,
        images: [
            "/media/1.png",
            "/media/2.png",
            "/media/3.png",
            "/media/5.png"
        ],
        propertyName: 'Tech Park Plaza',
        address: 'Sector 62, Noida, India',
        price: '₹24.5 Crore',
        tags: ['For Sale', 'Commercial', 'IT Hub Area'],
        bookmarked: false,
        propertyType: 'Commercial',
        area: '8,600 sqft',
        amenities: ['Elevators', '24/7 Security', 'Parking'],
    },
    {
        id: 7,
        images: [
            "/media/5.png",
            "/media/3.png",
            "/media/1.png",
            "/media/2.png"
        ],
        propertyName: 'City View Apartments',
        address: 'Saket, Delhi, India',
        price: '₹1,800,000',
        tags: ['For Rent', '2 BHK', 'Near Metro Station'],
        bookmarked: false,
        propertyType: 'Flat',
        bedrooms: 2,
        bathrooms: 2,
        area: '1,200 sqft',
        amenities: ['Lift', 'Security', 'Parking'],
    },
    {
        id: 8,
        images: [
            "/media/1.png",
            "/media/2.png",
            "/media/3.png",
        ],
        propertyName: 'Retail Plaza',
        address: 'Karol Bagh, Delhi, India',
        price: '₹1.25 Crore',
        tags: ['For Sale', 'Shop', 'High Footfall Area'],
        bookmarked: false,
        propertyType: 'Commercial',
        area: '100 sqft',
        amenities: ['High Visibility', '24/7 Security', 'Parking'],
    },
    {
        id: 9,
        images: [
            "/media/5.png",
            "/media/2.png",
            "/media/3.png",
            "/media/5.png"
        ],
        propertyName: 'Business Center',
        address: 'Nangloi, Delhi, India',
        price: '₹1,000,000',
        tags: ['For Rent', 'Office Space', 'Near Metro Station'],
        bookmarked: false,
        propertyType: 'Commercial',
        area: '1,000 sqft',
        amenities: ['Air Conditioning', 'Conference Room', 'Parking'],
    },
    {
        id: 10,
        images: [
            "/media/1.png",
            "/media/2.png",
            "/media/3.png",
            "/media/5.png"
        ],
        propertyName: 'Luxury Residences',
        address: 'Greater Kailash I, Delhi, India',
        price: '₹3.5 Crore',
        tags: ['For Sale', '3 BHK', 'Prime Location'],
        bookmarked: false,
        propertyType: 'Flat',
        bedrooms: 3,
        bathrooms: 3,
        area: '2,500 sqft',
        amenities: ['Lift', 'Security', 'Parking'],
    }
];


const PropertyResultComponent: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState<Record<number, number>>({});
    const [bookmarks, setBookmarks] = useState<Record<number, boolean>>(
        propertyResults.reduce(
            (acc, result) => ({ ...acc, [result.id]: result.bookmarked || false }),
            {}
        )
    );

    const handleNext = (id: number, images: string[]): void => {
        setCurrentIndex((prev) => ({
            ...prev,
            [id]: ((prev[id] || 0) + 1) % images.length,
        }));
    };

    const handlePrev = (id: number, images: string[]): void => {
        setCurrentIndex((prev) => ({
            ...prev,
            [id]: ((prev[id] || 0) - 1 + images.length) % images.length,
        }));
    };

    const toggleBookmark = (id: number): void => {
        setBookmarks((prev) => ({
            ...prev,
            [id]: !prev[id],
        }));
    };

    return (
        <div className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-3xl font-semibold text-gray-900 text-center mb-4">
                Property Listings
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {propertyResults.map((result) => {
                    const currentImageIndex = currentIndex[result.id] || 0;
                    const isBookmarked = bookmarks[result.id];

                    return (
                        <div
                            key={result.id}
                            className="border rounded-lg overflow-hidden shadow-md relative"
                        >
                            <div className="relative w-full h-40 overflow-hidden">
                                {/* Carousel Images */}
                                <div
                                    className="flex transition-transform duration-500 ease-in-out"
                                    style={{
                                        transform: `translateX(-${currentImageIndex * 100}%)`,
                                    }}
                                >
                                    {result.images.map((image, index) => (
                                        <img
                                            key={index}
                                            src={image}
                                            alt={`Image of ${result.propertyName}`}
                                            className="w-full h-40 object-cover flex-shrink-0"
                                        />
                                    ))}
                                </div>
                                {/* Bookmark Icon */}
                                <div
                                    className="absolute top-3 right-3 cursor-pointer group"
                                    onClick={() => toggleBookmark(result.id)}
                                >
                                    <span
                                        className={`material-icons text-2xl transition-colors ${isBookmarked
                                                ? "text-red-600"
                                                : "text-gray-300 group-hover:text-red-600"
                                            }`}
                                    >
                                        {isBookmarked ? <img src="/hollow_heart.png" className='w-5 h-5' alt="" /> : <img src="/heart.png" alt="" className='w-5 h-5' />}
                                    </span>
                                </div>
                                {/* Dots */}
                                <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-2">
                                    {result.images.map((_, index) => (
                                        <span
                                            key={index}
                                            className={`w-2 h-2 rounded-full ${currentImageIndex === index
                                                    ? "bg-yellow-500"
                                                    : "bg-gray-300"
                                                }`}
                                        ></span>
                                    ))}
                                </div>
                            </div>
                            {/* Navigation Buttons */}
                            <button
                                onClick={() => handlePrev(result.id, result.images)}
                                className="absolute top-[80px] left-3 transform -translate-y-1/2 bg-white bg-opacity-20 text-white text-sm px-3 py-1 rounded-full focus:outline-none hover:opacity-80"
                            >
                                &#8249;
                            </button>
                            <button
                                onClick={() => handleNext(result.id, result.images)}
                                className="absolute top-[80px] right-3 transform -translate-y-1/2 bg-white bg-opacity-20 text-white text-sm px-3 py-1 rounded-full focus:outline-none hover:opacity-80"
                            >
                                &#8250;
                            </button>
                            {/* Card Content */}
                            <div className="p-4">
                                <h3 className="text-lg font-semibold text-gray-900">
                                    {result.propertyName}
                                </h3>
                                <p className="text-sm text-gray-600">
                                    Type: {result.propertyType}
                                </p>
                                <p className="text-sm text-gray-600">
                                    {result.bedrooms} Bedrooms, {result.bathrooms} Bathrooms
                                </p>
                                <p className="text-sm text-gray-600">{result.area}</p>
                                <p className="text-sm text-gray-600 mt-1">{result.address}</p>
                                <p className="text-sm font-medium text-gray-900 mt-2">
                                    {result.price}
                                </p>
                                <div className="flex flex-wrap mt-2">
                                    {result.tags.map((tag) => (
                                        <span
                                            key={tag}
                                            className="bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                                {/* Amenities */}
                                <div className="mt-2">
                                    <h4 className="font-medium text-gray-800">Amenities:</h4>
                                    <ul className="list-disc pl-5 text-sm text-gray-600">
                                        {result.amenities.map((amenity, index) => (
                                            <li key={index}>{amenity}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default PropertyResultComponent;
