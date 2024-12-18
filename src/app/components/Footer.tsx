import React from "react";
import Image from "next/image"; // Import the Image component from 'next/image'

const Footer = () => {
  return (
    <div className="h-96 bg-[#2A254B]">
      <div className="max-w-auto justify-around mx-auto flex space-x-8 pt-10 px-8">
        <div>
          <h1 className="text-white text-lg font-Clash Display">Menu</h1>
          <p className="text-white mt-4 text-sm">New arrivals</p>
          <p className="text-white mt-4 text-sm">Best seller</p>
          <p className="text-white mt-4 text-sm">Recently Viewed</p>
          <p className="text-white mt-4 text-sm">Popular this week</p>
          <p className="text-white mt-4 text-sm">All Products</p>
        </div>
        <div>
          <h1 className="text-white text-lg font-Clash Display ml-20">Category</h1>
          <p className="text-white mt-4 text-sm ml-20">Crockery</p>
          <p className="text-white mt-4 text-sm ml-20">Furniture</p>
          <p className="text-white mt-4 text-sm ml-20">Homeware</p>
          <p className="text-white mt-4 text-sm ml-20">Plants pot</p>
          <p className="text-white mt-4 text-sm ml-20">Chair</p>
          <p className="text-white mt-4 text-sm ml-20">Crockery</p>
        </div>
        <div className="pl-28">
          <h1 className="text-white text-lg font-Clash Display">Our Company</h1>
          <p className="text-white mt-4 text-sm">About Us</p>
          <p className="text-white mt-4 text-sm">Vacancies</p>
          <p className="text-white mt-4 text-sm">Contact Us</p>
          <p className="text-white mt-4 text-sm">Privacy</p>
          <p className="text-white mt-4 text-sm">Return Policy</p>
        </div>
        <div className="pl-28">
          <h1 className="text-white text-lg font-Clash Display">Join our mailing list</h1>
          <input
            type="text"
            placeholder="you@gmail.com"
            className="bg-input-bg w-80 mt-5 h-12 p-5 rounded-sm"
          />
          <button className="bg-purple-600 h-12 w-32 rounded-sm mt-5">Sign Up</button>
        </div>
      </div>
      <div className="border-t-2 border-white max-w-auto mx-auto w-11/12 my-8">
        <div className="flex justify-between items-center">
          <p className="text-white mt-4 text-sm">Copyright 2022 Avion LTD</p>
          <Image src="/images/social Links.png" alt="Social Links" width={100} height={50} /> {/* Use 'next/image' component here */}
        </div>
      </div>
    </div>
  );
};

export default Footer;
