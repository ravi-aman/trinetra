import React from 'react';
import { EditIcon, CalendarDaysIcon } from 'lucide-react'; // Suitable icons for blogs

const blogs = [
    {
        id: 1,
        image: '/media/8.jpg',
        title: 'Top 5 Tips for Investing in Real Estate in 2025',
        description: "Learn the key strategies to maximize returns and minimize risks when investing in real estate this year.",
        editor: 'John Doe',
        publishDate: '2025-01-05',
        publishTime: '11:59',
        avgReadingTime: '5',
        tags: ['Investment', 'Real Estate', 'Tips'],
        link: "1"
    },
    {
        id: 2,
        image: '/media/5.jpg',
        title: 'How to Choose the Perfect Location for Your Dream Home',
        description: "Understand the factors that make a location ideal for your future home, from schools to market value.",
        editor: 'Jane Smith',
        publishDate: '2025-01-08',
        publishTime: '11:59',
        avgReadingTime: '6',
        tags: ['Location', 'Home Buying', 'Real Estate'],
        link: "1"

    },
    {
        id: 3,
        image: '/media/7.jpg',
        title: 'The Future of Real Estate: Emerging Trends for 2025',
        description: "Explore the upcoming trends in real estate, including smart homes, green buildings, and tech-driven solutions.",
        editor: 'Alice Johnson',
        publishDate: '2025-01-10',
        publishTime: '11:59',
        avgReadingTime: '4',
        tags: ['Trends', 'Future', 'Real Estate'],
        link: "1"

    },
    {
        id: 3,
        image: '/media/7.jpg',
        title: 'The Future of Real Estate: Emerging Trends for 2025',
        description: "Explore the upcoming trends in real estate, including smart homes, green buildings, and tech-driven solutions.",
        editor: 'Alice Johnson',
        publishDate: '2025-01-10',
        publishTime: '11:59',
        avgReadingTime: '4',
        tags: ['Trends', 'Future', 'Real Estate'],
        link: "1"

    },
    {
        id: 3,
        image: '/media/7.jpg',
        title: 'The Future of Real Estate: Emerging Trends for 2025',
        description: "Explore the upcoming trends in real estate, including smart homes, green buildings, and tech-driven solutions.",
        editor: 'Alice Johnson',
        publishDate: '2025-01-10',
        publishTime: '11:59',
        avgReadingTime: '4',
        tags: ['Trends', 'Future', 'Real Estate'],
        link: "1"

    },
    {
        id: 3,
        image: '/media/7.jpg',
        title: 'The Future of Real Estate: Emerging Trends for 2025',
        description: "Explore the upcoming trends in real estate, including smart homes, green buildings, and tech-driven solutions.",
        editor: 'Alice Johnson',
        publishDate: '2025-01-10',
        publishTime: '11:59',
        avgReadingTime: '4',
        tags: ['Trends', 'Future', 'Real Estate'],
        link: "1"

    },
    {
        id: 3,
        image: '/media/7.jpg',
        title: 'The Future of Real Estate: Emerging Trends for 2025',
        description: "Explore the upcoming trends in real estate, including smart homes, green buildings, and tech-driven solutions.",
        editor: 'Alice Johnson',
        publishDate: '2025-01-10',
        publishTime: '11:59',
        avgReadingTime: '4',
        tags: ['Trends', 'Future', 'Real Estate'],
        link: "1"

    },
];

function BlogComponent() {
    return (
        <div className="rounded-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
                {blogs.map((blog) => (
                    <div
                        key={blog.id}
                        className="border rounded-2xl overflow-hidden shadow-md bg-gray-100 dark:bg-gray-800 w-full p-4"
                    >
                        <img
                            src={blog.image}
                            alt={blog.title || 'Blog image'}
                            className="w-full h-50 object-cover rounded-2xl"
                        />
                        <div className='flex flex-row justify-between text-[12px] items-center w-full mt-4'>
                            <div className="flex flex-row justify-center items-center gap-5">
                                <div className="flex justify-start items-center space-x-2">
                                    <EditIcon className="w-4 h-4 text-gray-900 dark:text-gray-300" />
                                    <p className=" text-black dark:text-gray-300">
                                        {blog.editor}
                                    </p>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <CalendarDaysIcon className="w-4 h-4 text-black dark:text-gray-300" />
                                    <p className=" text-black dark:text-gray-300">
                                        {blog.publishDate}, {blog.publishTime}
                                    </p>
                                </div>
                            </div>
                            <p className=" text-black dark:text-gray-400 flex justify-start items-center">
                                {blog.avgReadingTime} min read
                            </p>
                        </div>
                        <div className="py-5">
                            <a href={blog.link}>
                                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                                    {blog.title}
                                </h3></a>
                            <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">
                                {blog.description}
                            </p>
                            <div className="flex flex-wrap mt-2">
                                {blog.tags.map((tag) => (
                                    <span
                                        key={tag}
                                        className="bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full dark:bg-blue-900 dark:text-blue-300"
                                    >
                                        {tag}
                                    </span>
                                ))}

                            </div>
                            <button className='mt-4 text black font-bold'>
                                <a href={blog.link}>Read more  &rarr;</a>
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default BlogComponent;
