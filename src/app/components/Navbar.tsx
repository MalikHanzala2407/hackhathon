import Link from "next/link";
import { IoSearch } from "react-icons/io5";
import { MdOutlineShoppingCart } from "react-icons/md";
import { CgProfile } from "react-icons/cg";

const Header = () => {
  return (
    <>
      <header className="w-auto-[1440px] h-[132px] flex flex-col items-center text-white px-10 lg:mx-auto">
        <div className="border-b-[0.5px] border-[#0000004f] h-1/2 w-full mx-auto flex justify-between items-center">
          <IoSearch className="text-xl" />
          <h1 className="text-[#22202E] text-3xl font-semibold">Avion</h1>
          <div className="flex text-xl gap-4">
            <MdOutlineShoppingCart className="text-xl" />
            <CgProfile className="text-xl" />
          </div>
        </div>

        <nav className="flex w-[675px] justify-between items-center h-1/2 text-[#726E8D]">
          <Link href="/" className="hover:text-[#000000] border-b-2 border-transparent hover:border-[#5a526c] pb-1">Plant pots</Link>
          <Link href="/" className="hover:text-[#000000] border-b-2 border-transparent hover:border-[#5a526c] pb-1">Ceramics</Link>
          <Link href="/" className="hover:text-[#000000] border-b-2 border-transparent hover:border-[#5a526c] pb-1">Tables</Link>
          <Link href="/" className="hover:text-[#000000] border-b-2 border-transparent hover:border-[#5a526c] pb-1">Chairs</Link>
          <Link href="/" className="hover:text-[#000000] border-b-2 border-transparent hover:border-[#5a526c] pb-1">Crockery</Link>
          <Link href="/" className="hover:text-[#000000] border-b-2 border-transparent hover:border-[#5a526c] pb-1">Tableware</Link>
          <Link href="/" className="hover:text-[#000000] border-b-2 border-transparent hover:border-[#5a526c] pb-1">Cutlery</Link>
        </nav>
      </header>
    </>
  );
}

export default Header;
