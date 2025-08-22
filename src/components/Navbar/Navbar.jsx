import react, { useState } from 'react'

import './Navbar.css'
import logo_rb from './logo-rb.jpg'
import underline from './minus.png'
import { NavLink } from 'react-router-dom'
// import menu_bar from './menubar.png'
// import cross_tag from './cross.png'

const Navbar =()=>{

    const [menu,setMenu]= useState("home");
    

    return(
        <div className='navbar'> 
        <img src={logo_rb}alt="" />
        {/* <img src={menu_bar} alt="" className='nav-mob-open'/> */}
        <ul className="nav-menu">
            {/* <img src={cross_tag} alt="" className="nav-mob-close" /> */}
            <NavLink to="/hero" className='anchor-link'><li><p onClick={()=>setMenu("home")}>Home</p>{menu==="home"?<img src={underline} alt=''/>:<></>}</li></NavLink>
            <NavLink to="/about" className='anchor-link'><li><p onClick={()=>setMenu("about")}>About Me</p>{menu==="about"?<img src={underline} alt=''/>:<></>}</li></NavLink>
            <NavLink to="/experience" className='anchor-link'><li><p onClick={()=>setMenu("experience")}>Experience</p>{menu==="experience"?<img src={underline} alt=''/>:<></>}</li></NavLink>
            <NavLink to="/work" className='anchor-link'><li><p onClick={()=>setMenu("work")}>Project</p>{menu==="work"?<img src={underline} alt=''/>:<></>}</li></NavLink>
            <NavLink to="/contact" className='anchor-link'><li><p onClick={()=>setMenu("contact")}>Contact</p>{menu==="contact"?<img src={underline} alt=''/>:<></>}</li> </NavLink>
        </ul>
        <div className="nav-contact"> <NavLink to="/contact" className='anchor-link'>Connect With</NavLink></div>
        </div>
    )
} 

export default Navbar;