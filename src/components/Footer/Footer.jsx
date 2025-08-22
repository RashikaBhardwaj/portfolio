import React from "react";
import './Footer.css'
import user from './working.png'
import logo from './logo-rb.jpg'
const Footer =()=>{

    const onClick = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
    
        formData.append("access_key", "60cc2aac-2997-4e86-b616-52e398980473");
    
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);
    
        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: json
        }).then((res) => res.json());
    
        if (res.success) {
          alert(res.message);
        }
      };
    return(
        <div className="footer">
            <div className="footer-top">
                <div className="footer-top-left">
                    <img src={logo} alt="" />
                    <p>“Innovative Web Developer & AI Tools Enthusiast | Creative Thinker with a Strong Work Ethic & Relentless Drive to Excel”</p>
                </div>
                <div className="footer-top-right">
                    <div className="email-input">
                        <img src={user} alt="" />
                        <input type="email" name="" id="" placeholder="Enter your email" />
                    </div>
                    <div className="footer-subscribe" onClick={onClick}>Subscribe</div>
                </div>
            </div>
            <hr />
            <div className="footer-bottom">
                <p className="footer-bottomleft">(c) 2024 Rashika Bhardwaj. All rights reserved.</p>
                <div className="footer-bottom-right">
                    <p>Term of Services</p>
                    <p>Privacy Policy</p>
                    <p>Connect with me</p>
                </div>
            </div>
        </div>
    )
}
export default Footer