import Navbar from "./components/Navbar";
import HeroSection from "./components/Hero_Section";
import Footer from "./components/Footer";
import Brand from "./components/Brand";
import Four from "./components/Ceramics";
import Product from "./components/Product";
import ClubJoin from "./components/Club";
import Studio from "./components/Studio";
import About from "./components/About";
import NavAbout from "./components/AboutNav";
import Aboutfooter from "./components/Aboutfooter";
import ListingProduct from "./components/ListiningProduct"
import Cart from "./components/Cart";
export default function Home() {
  return (
    <div>
      <Navbar/>
      <HeroSection/>
      <Brand/>
      <Four/>
      <Product/>
      <ClubJoin/>
        <Studio/>
      <Footer/>
      <NavAbout/>
      <About/>
      <Aboutfooter/>
      <Navbar/>
      <ListingProduct/>
      <ClubJoin/>     
      <Footer/>
      <Navbar/>
      <Cart/>
      <Footer/> 
    </div>
  )
};