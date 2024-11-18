import React from "react";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <div
      className="pt-10 px-4 md:px-20 lg:px-32 bg-gray-900 w-full overflow-hidden"
      id="Footer"
    >
      <div className="flex container mx-auto flex-col md:flex-row justify-between items-center">
        <div className="w-full md:w-1/3 mb-8 md:mb-0">
          <img src={assets.logo_dark} alt="" />
          <p className="text-gray-400 mt-4">
            RealEstate delivers top-quality real estate solutions, focused on
            your needs and satisfaction, helping you find your perfect property
            effortlessly.
          </p>
        </div>
        <div className="w-full md:w-1/5 mb-8 md:mb-0">
          <h4 className="text-white text-lg font-bold mb-4">Company</h4>
          <ul className="flex flex-col gap-2 text-gray-400">
            <a href="#Header" className="hover:text-white">
              Home
            </a>
            <a href="#About" className="hover:text-white">
              About
            </a>
            <a href="#Projects" className="hover:text-white">
              Projects
            </a>
            <a href="#Testimonials" className="hover:text-white">
              Testimonial
            </a>
          </ul>
        </div>
        <div className="w-full md:w-1/3">
          <h4 className="text-white text-lg font-bold mb-4">Subscribe Us.</h4>
          <p className="text-gray-400 mb-4 max-w-80">
            Subscribe to our newsletter for the latest updates, exclusive
            offers, and insights delivered straight to your inbox.
          </p>
          <div className="flex gap-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="p-2 rounded bg-gray-800 text-gray-400 border-gray-700 focus:outline-none md:w-auto"
            />
            <button className="py-2 px-4 rounded bg-blue-500 text-white">
              Subscribe
            </button>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-700 py-4 mt-10 text-center text-gray-500">
        &copy; {new Date().getFullYear()} RealEstate. All rights reserved.
      </div>
    </div>
  );
};

export default Footer;
