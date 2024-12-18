import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const NavAbout = () => {
  return (
    <>
       <div className="flex justify-between items-center sticky top-0 z-50 h-[69px] bg-white lg:px-[28px] px-4 "> {/* Added bg-white */}
                <div>
                 
                    <div className="font-semibold text-[30px] text-pupleText">Avion</div>
                </div>

             

               <div className='flex items-center gap-[47px] '>
               <ul className="w-full md:flex items-center justify-center gap-[32px] font-normal text-lightPurple hidden">
                <li><Link href="/">About us</Link></li>
                <li><Link href="/">Contact</Link></li>
                <li><Link href="/">Blog</Link></li>
                
            </ul> 

               </div>
            </div>

            <hr className="w-full mx-auto" />

            {/* links */}
            <ul className="w-full md:flex items-center justify-center gap-[30px] lg:gap-[44px] h-[64px] px-4 bg-lightGray text-lightPurple hidden">
                <li><Link href="/">All products</Link></li>
                <li><Link href="/">Plant pots</Link></li>
                <li><Link href="/">Ceramics</Link></li>
                <li><Link href="/">Tables</Link></li>
                <li><Link href="/">Chairs</Link></li>
                <li><Link href="/">Crockery</Link></li>
                <li><Link href="/">Tableware</Link></li>
                <li><Link href="/">Cutlery</Link></li>
            </ul>
    </>
  )
}

export default NavAbout;
