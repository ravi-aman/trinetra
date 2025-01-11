import Link from 'next/link'
import { Instagram, Facebook, Linkedin, Mail } from 'lucide-react'
import { FaTwitter, FaLinkedin, FaGithub, FaFacebook, FaInstagram } from "react-icons/fa";
import Image from "next/image";
function Footer() {
    return (
        <footer className="bg-blue-500 text-white pt-12">
            <div className="container mx-auto px-4">
                <div className="flex justify-between items-center mb-12">
                    <div className="flex items-center">
                        <img src="/trinatraalandscape.png" alt="trientraa" width={150} />
                    </div>
                    <div className="flex space-x-4">
                        <Link href="#" className="text-slate-900 hover:text-white">
                            <FaInstagram size={24} />
                        </Link>
                        <Link href="#" className="text-slate-900 hover:text-white">
                            <FaFacebook size={24} />
                        </Link>
                        <Link href="#" className="text-slate-900 hover:text-white">
                            <FaLinkedin size={24} />
                        </Link>
                        <Link href="#" className="text-slate-900 hover:text-white">
                            <Mail size={24} />
                        </Link>
                    </div>
                </div>
                <div className="flex justify-between mb-12 border-t-[1px] pt-12 w-full">
                    <div className='flex flex-row w-full justify-between'>
                        <div>
                            <h3 className="text-lg font-bold mb-4">Links</h3>
                            <ul className="space-y-2 text-black font-bold">
                                <li><a href="#">Home</a></li>
                                <li><a href="#">About Us</a></li>
                                <li><a href="#">Events</a></li>
                                <li><a href="#">Blogs</a></li>
                                <li><a href="#">Contact</a></li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold mb-4">policies</h3>
                            <ul className="space-y-2 text-black font-bold">
                                <li><a href="#">Privecy polices</a></li>
                                <li><a href="#">Disclamer</a></li>
                                <li><a href="#">Terms & Condition</a></li>

                            </ul>
                        </div>
                        <div className='font-bold '>
                            <h3 className="text-lg font-semibold mb-4">Contact</h3>
                            <div className='text-black'>
                                <p className="mb-2">A-67,vijay Nagar Mohan Garden</p>
                                <p className="mb-4">New Delhi, 110059</p>
                                <p className=" mb-2">+91 8744883594 , +91 9220860414</p>
                                <p className="">support@trinetraa.tech</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
                        <div className="flex">
                        <div className="flex flex-row items-center rounded-[15px] overflow-hidden shadow-md w-full">
                                <div className="relative w-full">
                                    <input
                                        type="text"
                                        placeholder="email address..."
                                        className="flex-1 bg-transparent border-none outline-none w-full bg-white placeholder-neutral-400 px-4 py-3"
                                    />
                                </div>
                                <button
                                    type="submit"
                                    className="bg-yellow-600 text-white px-6 py-3 font-semibold hover:bg-slate-900 transition duration-500 ease-in-out"
                                >
                                    Subscribe
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div>

                <div className="flex justify-center text-center text-gray-400 text-sm  p-5 bg-black w-full gap-10">
                    <a href="">Privecy Policy</a>
                    <a href="">Terms and conditions</a>
                    <a href="Disclaimer">Disclaimer</a>
                    <div>
                        Copyright © 2024 - All Rights Reserved By WFI
                    </div>
                </div>
            </div>
        </footer>
    )
}


export default Footer;