import React from "react";
import './About.css'
import profile_img from './rashika img.jpg'
const About=()=>{
    return (
        <div className="about">
            <div className="about-title">
                <h1>About me</h1>
                <img src="" alt="" />
            </div>
            <div className="about-sections">
                <div className="about-left">
                    <img src={profile_img} alt="" />
                </div>
                <div className="about-right">
                    <div className="about-para">
                        <p>Creative and dedicated Web Developer with hands-on experience in AI tools and modern web technologies. </p>
                            <p>Known for innovative problem-solving, a strong work ethic, and a passion for building impactful digital solutions. Always eager to learn, adapt, and push boundaries in fast-paced, tech-driven environments.</p>
                    </div>
                    <div className="about-skills">
                        <div className="about-skill"><p>HTML & CSS</p><hr style={{width:"50%"}} /></div>
                        <div className="about-skill"><p>React JS</p><hr style={{width:"70%"}} /></div>
                        <div className="about-skill"><p>Javascript</p><hr style={{width:"60%"}} /></div>
                        <div className="about-skill"><p>Node JS</p><hr style={{width:"50%"}} /></div>
                    </div>
                </div>
            </div>
            <div className="about-achivements">
                <div className="about-achivement">
                  <h1>10+</h1>  
                  <p>YEAR OF EXPERIENCE</p>
                </div>
                <hr />
                <div className="about-achivement">
                  <h1>30+</h1>  
                  <p>PROJECT COMPLETED</p>
                </div>
                <hr />
                <div className="about-achivement">
                  <h1>15+</h1>  
                  <p>HAPPY CLIENTS</p>
                </div>
            </div>
        </div>
    )
}
export default About