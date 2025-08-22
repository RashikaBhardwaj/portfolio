import React from "react";
import './Myproject.css'
import p1_img from './one.jpg'
import p2_img from './two.jpg'
import p3_img from './three.jpg'
const Myproject=()=>{
    return(
        <div  className="mywork">
            <div className="mywork-title">
                <h1>MY Projects</h1>
            </div>
            <div className="mywork-containers">
                <div className="mywork-container">
                    <img src={p1_img} alt="" />
                    <h1>Project One</h1>
                    <div className="button">Git Hub</div>
                </div>
                <div className="mywork-container">
                    <img src={p2_img} alt="" />
                    <h1>Project Two</h1>
                    <div className="button">Git Hub</div>
                </div>
                <div className="mywork-container">
                    <img src={p3_img} alt="" />
                    <h1>Project Three</h1>
                    <div className="button">Git Hub</div>
                </div>
            </div>
        </div>
    )
}
export default Myproject