import React from "react";
import './Contact.css'
import mail from './mail.png'
import phone from './phone.png'
import location from './map.png'

const Contact=()=>{

    const onSubmit = async (event) => {
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
        <div className="contact">
            <div className="contact-title">
                <h1>Get in touch</h1>
            </div>
            <div className="contact-section">
                <div className="contact-left">
                    <h1>Let's talk</h1>
                    <p>I’m a passionate and dedicated Web Developer with a creative mindset and hands-on experience in AI tools and modern web technologies. I specialize in building smart, user-friendly digital solutions that solve real-world problems.

Always eager to collaborate, I’m open to freelance projects, partnerships, or full-time roles. Let’s connect and create something impactful together!</p>
                    <div className="contact-details">
                        <div className="contact-detail">
                            <img src={mail} alt="" /><p>rashikabhardwaj@gmail.com</p>
                        </div>
                        <div className="contact-detail">
                            <img src={phone} alt="" /><p>+91 9466160206</p>
                        </div>
                        <div className="contact-detail">
                            <img src={location} alt="" /><p>LIET, Alwar Rajasthan</p>
                        </div>
                    </div>
                </div>
                <form onSubmit={onSubmit} className="contact-right">
                    <label htmlFor="">Your Name</label>
                    <input type="text" name="name" id="" placeholder="Enter your name"/>
                    <label htmlFor="">Your Email</label>
                    <input type="email" name="email" id="" placeholder="Enter your email"/>
                    <label htmlFor="">Write your message here</label>
                    <textarea name="message" rows="8" placeholder="Enter your message"></textarea>
                    <button type="submit" className="contact-submit">Submit Now</button>
                </form>
            </div>
        </div>
    )
}

export default Contact