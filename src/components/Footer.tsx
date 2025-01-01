import Link from 'next/link'
import { Instagram, Facebook, Linkedin, Mail } from 'lucide-react'
import { FaTwitter, FaLinkedin, FaGithub, FaFacebook, FaInstagram } from "react-icons/fa";

function Footer() {
    return (
        <footer className="bg-blue-800 text-white pt-12">
            <div className="container mx-auto px-4">
                <div className="flex justify-between items-center mb-12">
                    <div className="flex items-center">
                        <svg className="w-10 h-10 mr-2" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M20 0C8.954 0 0 8.954 0 20s8.954 20 20 20 20-8.954 20-20S31.046 0 20 0zm0 36c-8.837 0-16-7.163-16-16S11.163 4 20 4s16 7.163 16 16-7.163 16-16 16z" fill="url(#paint0_linear)" />
                            <path d="M20 8C13.373 8 8 13.373 8 20s5.373 12 12 12 12-5.373 12-12S26.627 8 20 8zm0 22c-5.514 0-10-4.486-10-10S14.486 10 20 10s10 4.486 10 10-4.486 10-10 10z" fill="url(#paint1_linear)" />
                            <defs>
                                <linearGradient id="paint0_linear" x1="20" y1="0" x2="20" y2="40" gradientUnits="userSpaceOnUse">
                                    <stop stopColor="#7C3AED" />
                                    <stop offset="1" stopColor="#3B82F6" />
                                </linearGradient>
                                <linearGradient id="paint1_linear" x1="20" y1="8" x2="20" y2="32" gradientUnits="userSpaceOnUse">
                                    <stop stopColor="#7C3AED" />
                                    <stop offset="1" stopColor="#3B82F6" />
                                </linearGradient>
                            </defs>
                        </svg>
                        <span className="text-2xl font-bold">WFI</span>
                    </div>
                    <div className="flex space-x-4">
                        <Link href="#" className="text-gray-400 hover:text-white">
                            <FaInstagram size={24} />
                        </Link>
                        <Link href="#" className="text-gray-400 hover:text-white">
                            <FaFacebook size={24} />
                        </Link>
                        <Link href="#" className="text-gray-400 hover:text-white">
                            <FaLinkedin size={24} />
                        </Link>
                        <Link href="#" className="text-gray-400 hover:text-white">
                            <Mail size={24} />
                        </Link>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12 border-t-[1px] pt-12">
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Services</h3>
                        <ul className="space-y-2">
                            <li><Link href="#" className="text-gray-400 hover:text-white">Courses</Link></li>
                            <li><Link href="#" className="text-gray-400 hover:text-white">Webinar</Link></li>
                            <li><Link href="#" className="text-gray-400 hover:text-white">Branding</Link></li>
                            <li><Link href="#" className="text-gray-400 hover:text-white">Personal mentor</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Links</h3>
                        <ul className="space-y-2">
                            <li><Link href="#" className="text-gray-400 hover:text-white">About us</Link></li>
                            <li><Link href="#" className="text-gray-400 hover:text-white">Blog</Link></li>
                            <li><Link href="#" className="text-gray-400 hover:text-white">FAQs</Link></li>
                            <li><Link href="#" className="text-gray-400 hover:text-white">Contact</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Contact</h3>
                        <p className="text-gray-400 mb-2">A-67,vijay Nagar Mohan Garden</p>
                        <p className="text-gray-400 mb-4">New Delhi, 110059</p>
                        <p className="text-gray-400 mb-2">+91 8744883594</p>
                        <p className="text-gray-400">tiwariravikant04@gmail.com</p>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
                        <div className="flex">
                            <input
                                type="email"
                                placeholder="Email address"
                                className="bg-[#2D2A3E] text-white px-4 py-2 rounded-l-md w-full focus:outline-none"
                            />
                            <button className="bg-[#7C3AED] text-white px-4 py-2 rounded-r-lg hover:bg-[#6D28D9] transition duration-300">
                                Subscribe
                            </button>
                        </div>
                    </div>
                </div>

            </div>
            <div className="flex justify-center text-center text-gray-400 text-sm  p-9 bg-black w-full">
                Copyright © 2024 - All Rights Reserved By WFI
            </div>
        </footer>
    )
}


export default Footer;