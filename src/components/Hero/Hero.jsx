import React from "react";
import './Hero.css'
import profile from './me.jpg'
import { NavLink } from "react-router-dom";
const Hero =()=>{
    return(
        <div className='hero'>
            <img src={profile} alt="" />
            <h1><span>I'm Rashika Bhardwaj,</span> frontend developer based in India</h1>
            <p>Creative and dedicated Web Developer with hands-on experience in AI tools and modern web technologies.</p>
            <div className= "hero-action">
                <div className="hero-connect"><NavLink to="/contact" className="anchor-link">Connect with</NavLink></div>
                <div ><a download="" href="src/assets/resume rashika.pdf"className="hero-resume" >My resume</a></div>

            </div>
        </div>
    )
}
export default Hero