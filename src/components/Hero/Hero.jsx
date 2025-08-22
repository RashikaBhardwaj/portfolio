import React from "react";
import './Hero.css'
import profile from './me.jpg'
import { NavLink } from "react-router-dom";
import { Typewriter } from 'react-simple-typewriter';
import BubbleBackground from "../bubbles/BubbleBackground";

const Hero =()=>{
    return(
        
        
        <div className='hero'>
            <img src={profile} alt="" />
                            <h1>
                I'm Rashika Bhardwaj,&nbsp;
                <span className="highlight">
                    <Typewriter
                    words={[
                        "Frontend Developer",
                        "Web Designer",
                        "AI Tools Enthusiast"
                    ]}
                    loop={0}             // 0 = infinite loop
                    cursor
                    cursorStyle="|"
                    typeSpeed={70}
                    deleteSpeed={50}
                    delaySpeed={1500}
                    />
                </span>
                </h1>

            <p>Creative and dedicated Web Developer with hands-on experience in AI tools and modern web technologies.</p>
            <div className= "hero-action">
                <div className="hero-connect"><NavLink to="/contact" className="anchor-link">Connect with</NavLink></div>
                <div ><a download="" href="src/assets/resume rashika.pdf"className="hero-resume" >My resume</a></div>

            </div>
                        <BubbleBackground/>
        </div>
        
    )
}
export default Hero