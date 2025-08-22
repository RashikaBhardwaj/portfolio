import React from "react";
import Navbar from "./Navbar/Navbar";
import About from "./About/About";
import Hero from "./Hero/Hero";
import Services from "./Services/Services";
import Myproject from "./My projects/Myproject";
import Contact from "./Contact/Contact";
import Footer from "./Footer/Footer";



const Home =()=>{
    return(
        <>
        <Navbar/>
        <Hero/>
        <About/>
        <Services/>
        <Myproject/>
        <Contact/>
        <Footer/>
        
        </>
    )
}
export default Home