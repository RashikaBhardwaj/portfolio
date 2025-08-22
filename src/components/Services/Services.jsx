import React from "react";
import './Services.css'

const Services =()=>{
    return(
        <div className="services">
            <div className="services-title">
                <h1>My Experiences</h1>
                <img src="" alt="" />
            </div>
            <div className="frontend">
                <div className="about-frontend">
                    <h1>Frontend Developer</h1>
                    <ol className="about-list">
                        <div className="list1">
                        <li><p>HTML</p>Experienced</li>
                        <hr />
                        <li><p>Javascript</p>Basic</li>
                        </div>
                        <div className="list2">
                        <li><p>CSS</p>Experienced</li>
                        <hr />
                        <li><p>Typescript</p>Basic</li>
                        </div>
                    </ol>
                </div>
                
                <div className="about-frontend">
                    <h1>Backend Developer</h1>
                    <ol className="about-list">
                        <div className="list1">
                        <li><p>Node JS</p>Intermidiate</li>
                        <hr />
                        <li><p>Git</p>Basic</li>
                        </div>
                        <div className="list2">
                        <li><p>Express JS</p>Intermidiate</li>
                        <hr />
                        <li><p>SQL</p>Basic</li>
                        </div>
                    </ol>
                </div>
            </div>
        </div>
    )
}
    
export default Services