import React from 'react';
import { TagIcon } from 'lucide-react'; // Icons for categories and trending blogs

const categories = [
    { id: 1, name: "Real Estate Consultancy", count: 10, link: "1" },
    { id: 2, name: "Property Management", count: 20, link: "2" },
];

const trendingBlogs = [
    { id: 1, title: 'The Future of Real Estate: Emerging Trends for 2025', publishDate: '2025-01-10' },
    { id: 2, title: 'Maximizing ROI in Property Investment', publishDate: '2025-01-09' },
    { id: 3, title: 'Top 5 Real Estate Markets to Watch', publishDate: '2025-01-08' },
    { id: 4, title: 'Understanding Property Valuation: Key Insights', publishDate: '2025-01-07' },
    { id: 5, title: 'Smart Home Technology in Real Estate', publishDate: '2025-01-06' },
];

function FilterComponent() {
    return (
        <div className="bg-white shadow-lg rounded-lg p-6 space-y-6 max-w-sm">
            <div>
                <h2 className="text-lg font-semibold text-gray-800 mb-4">CATEGORIES</h2>
                <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-4">
                    {categories.map((category) => (
                        <a
                            key={category.id}
                            href={category.link}
                            className="flex items-center justify-between bg-gray-100 dark:bg-gray-800 p-3 rounded-lg hover:bg-blue-100 transition duration-200"
                        >
                            <div className="flex items-center space-x-3">
                                <TagIcon className="w-5 h-5 text-blue-500" />
                                <span className="text-gray-700 dark:text-gray-300">{category.name}</span>
                            </div>
                            <span className="bg-blue-500 text-white text-xs px-2 py-1 rounded-full">
                                {category.count}
                            </span>
                        </a>
                    ))}
                </div>
            </div>

            {/* Trending Blogs Section */}
            <div>
                <h2 className="text-lg font-semibold text-gray-800 mb-4">TRENDING BLOGS</h2>
                <div className="space-y-4">
                    {trendingBlogs.map((blog) => (
                        <div
                            key={blog.id}
                            className="flex items-center justify-between bg-gray-100 dark:bg-gray-800 p-3 rounded-lg hover:bg-blue-100 transition duration-200"
                        >
                            <div>
                                <h3 className="text-gray-800 dark:text-gray-200 font-medium">{blog.title}</h3>
                                <p className="text-gray-500 text-sm">{blog.publishDate}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default FilterComponent;
