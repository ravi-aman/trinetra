"use client"; 
import { useEffect, useRef } from "react";
import ArrowRight from "@/assets/arrow-right.svg";
import Logo from "@/assets/logosaas.png";
import Image from "next/image";
import MenuIcon from "@/assets/menu.svg";
import Link from "next/link";
import { gsap } from "gsap";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";

import { FaMapMarkerAlt, FaEnvelope, FaClock, FaPhone } from "react-icons/fa";
import { FaFacebookF, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { FaSearch, FaUserCircle } from "react-icons/fa";

export const Header = () => {
  const buttonRef = useRef<HTMLButtonElement>(null); // Specify buttonRef as HTMLButtonElement

  useEffect(() => {
    const button = buttonRef.current;
    if (button) {
      const handleMouseEnter = () => gsap.to(button, { scale: 1.05, duration: 0.2 });
      const handleMouseLeave = () => gsap.to(button, { scale: 1, duration: 0.2 });

      button.addEventListener("mouseenter", handleMouseEnter);
      button.addEventListener("mouseleave", handleMouseLeave);

      return () => {
        button.removeEventListener("mouseenter", handleMouseEnter);
        button.removeEventListener("mouseleave", handleMouseLeave);
      };
    }
  }, []);

  return (
    <header className="sticky top-0 backdrop-blur-sm z-20">
      <div className="flex justify-between items-center bg-slate-900 text-white text-sm gap-6 px-10">
        <div className="flex items-center gap-5">
          <div className="flex items-center gap-2">
            <FaMapMarkerAlt className="text-white" />
            <p className="text-white/60 hidden md:block">
              Mohan Garden, Uttam Nagar, New Delhi, 110059
            </p>
          </div>
          <div className="flex items-center gap-2">
            <FaEnvelope className="text-white" />
            <p className="text-white">tiwariravikant04@gmail.com</p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <FaClock />
          <p>Mon to Sat: 8.00 am - 7.00 pm</p>

          <div className="icon flex gap-3 text-white bg-blue-500 px-10 py-3 justify-between gap-5">
            <a href="https://www.facebook.com/ravikant.tiwari.547727" target="_blank">
              <FaFacebookF className="w-50" />
            </a>
            <a href="https://www.instagram.com/ravikanttiwari04/" target="_blank">
              <FaInstagram />
            </a>
            <a href="https://www.linkedin.com/in/ravikant-tiwari-6b4b6a1b4/" target="_blank">
              <FaLinkedin />
            </a>
            <a href="https://twitter.com/Ravikan69319285" target="_blank">
              <FaTwitter />
            </a>
          </div>
        </div>
      </div>

      <div className="px-10 m-5">
        <div className="w-full m-0">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <div className="flex items-center">
                <Image src={Logo} alt="Saas Logo" className="mx-10" height={40} width={40} />
              </div>
              <Sheet>
                <SheetTrigger asChild>
                  <span>
                    <MenuIcon className="h-5 w-5 md:hidden cursor-pointer" />
                  </span>
                </SheetTrigger>
                <SheetContent>
                  <SheetHeader>
                    <SheetTitle className="flex justify-center">
                      <Image src={Logo} alt="Saas Logo" height={40} width={40} />
                    </SheetTitle>
                  </SheetHeader>

                  <div className="flex flex-col items-center gap-4 mt-6">
                    <Link href="#home" className="text-lg text-black hover:underline">
                      Home
                    </Link>
                    <Link href="#about" className="text-lg text-black hover:underline">
                      About
                    </Link>
                    <Link href="#events" className="text-lg text-black hover:underline">
                      Events
                    </Link>
                    <Link href="#members" className="text-lg text-black hover:underline">
                      Members
                    </Link>
                    <Link href="#blogs" className="text-lg text-black hover:underline">
                      Blogs
                    </Link>
                  </div>
                </SheetContent>
              </Sheet>

              <nav className="hidden md:flex gap-6 text-black/60 items-center">
                <Link href="#home" className="hover:text-black/90 hover:underline transition-all duration-200 ease-in-out">
                  Home
                </Link>
                <Link href="#about" className="hover:text-black/90 hover:underline transition-all duration-200 ease-in-out">
                  About
                </Link>
                <Link href="#events" className="hover:text-black/90 hover:underline transition-all duration-200 ease-in-out">
                  Courses
                </Link>
                <Link href="#members" className="hover:text-black/90 hover:underline transition-all duration-200 ease-in-out">
                  Mentor
                </Link>
                <Link href="#blogs" className="hover:text-black/90 hover:underline transition-all duration-200 ease-in-out">
                  Blogs
                </Link>
                <Link href="#contact" className="hover:text-black/90 hover:underline transition-all duration-200 ease-in-out">
                  Contact us
                </Link>
                <button
                  ref={buttonRef}
                  className="bg-slate-900 text-white px-4 py-2 rounded-lg font-medium tracking-tight inline-flex items-center justify-center w-[120px] hover:bg-white hover:text-black transition-colors duration-300 ease-in-out"
                >
                  Call us now
                </button>
              </nav>
            </div>

            <div className="flex gap-6 items-center">
              <div className="flex flex-col items-end">
                <div className="flex items-center gap-3">
                  <FaPhone className="h-10 w-10 text-white bg-blue-500 p-2 rounded-full" />
                  <div className="flex flex-col border-r border-gray-300 pr-3">
                    <p className="text-sm text-gray-500">Call us anytime</p>
                    <p className="text-xl font-bold">+91 8744883594</p>
                  </div>
                </div>
              </div>
              <div className="flex gap-4">
                <FaSearch className="h-6 w-6 text-gray-500 cursor-pointer hover:text-blue-500 transition duration-200" />
                <FaUserCircle className="h-6 w-6 text-gray-500 cursor-pointer hover:text-blue-500 transition duration-200" />
              </div>
            </div>

          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
