import React from "react";
import Image from 'next/image';

const Aboutfooter = () => {
  return (
    <div className="h-[350px] bg-[#2A254B]">
      <div className="max-w-[1440px] h-auto mx-auto flex space-x-10 pt-10">
        <div>
          <h1 className="text-white text-lg font-Clash Display">Avion</h1>
          <p className="text-white mt-2 text-sm">21 New York Street</p>
          <p className="text-white mt-1 text-sm">New York City</p>
          <p className="text-white mt-1 text-sm">United States of America</p>
          <p className="text-white mt-1 text-sm">432 34</p>
        </div>
        <div className="flex-1">
          <h1 className="text-white text-lg font-Clash Display">Menu</h1>
          <p className="text-white mt-2 text-sm">New arrivals</p>
          <p className="text-white mt-1 text-sm">Best Seller</p>
          <p className="text-white mt-1 text-sm">Recently Viewed</p>
          <p className="text-white mt-1 text-sm">Popular this week</p>
          <p className="text-white mt-1 text-sm">All Products</p>
        </div>
        <div className="flex-1">
          <h1 className="text-white text-lg font-Clash Display">Categories</h1>
          <p className="text-white mt-2 text-sm">Crockery</p>
          <p className="text-white mt-1 text-sm">Furniture</p>
          <p className="text-white mt-1 text-sm">Homeware</p>
          <p className="text-white mt-1 text-sm">Plant pots</p>
          <p className="text-white mt-1 text-sm">Chairs</p>
        </div>
        <div className="flex-1">
          <h1 className="text-white text-lg font-Clash Display">Our Company</h1>
          <p className="text-white mt-2 text-sm">About Us</p>
          <p className="text-white mt-1 text-sm">Vacancies</p>
          <p className="text-white mt-1 text-sm">Contact Us</p>
          <p className="text-white mt-1 text-sm">Privacy</p>
          <p className="text-white mt-1 text-sm">Return Policy</p>
        </div>
      </div>
      <div className="border-t-2 border-white max-w-auto mx-auto w-11/12 my-8">
        <div className="flex justify-between items-center">
          <p className="text-white mt-4 text-sm">Copyright © 2022 Avion LTD</p>
          <div>
            <Image src="/images/social Links.png" alt="Social Links" className="flex space-x-2" width={500} height={500} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aboutfooter;
