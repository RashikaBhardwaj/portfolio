import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./Myproject.css";

import p1_img from "./one.jpg";
import p2_img from "./two.jpg";
import p3_img from "./three.jpg";
import p4_img from "./four.jpg"; // extra project

const projects = [
  {
    id: 1,
    title: "Gemini clone ",
    img: p1_img,
    desc: "A gemini clone web application showcasing modern UI and API integration.",
    link: "https://gemini-clone-netlifyp1.netlify.app/",
  },
  {
    id: 2,
    title: "Project Two",
    img: p2_img,
    desc: "An interactive game built with React, focusing on state management.",
    link: "https://github.com/yourusername/project-two",
  },
  {
    id: 3,
    title: "Project Three",
    img: p3_img,
    desc: "A full-stack project with backend integration and authentication.",
    link: "https://github.com/yourusername/project-three",
  },
  {
    id: 4,
    title: "Project Four",
    img: p4_img,
    desc: "An e-commerce website with product management and payment integration.",
    link: "https://github.com/yourusername/project-four",
  },
];

const Myproject = () => {
  return (
    <div className="mywork">
      <h1 className="mywork-title">My Projects</h1>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={3}   // Always 3 on desktop
        navigation
        pagination={{ clickable: true }}
        autoplay={{
          delay: 3000, // stay 3s before moving
          disableOnInteraction: false,
        }}
        speed={1500}   // smooth sliding
        loop={true}    // infinite looping
        breakpoints={{
          320: { slidesPerView: 1 },   // mobile
          768: { slidesPerView: 2 },   // tablet
          1024: { slidesPerView: 3 },  // desktop
        }}
      >
        {projects.map((project) => (
          <SwiperSlide key={project.id}>
            <div className="project-card">
              <img src={project.img} alt={project.title} />
              <h2>{project.title}</h2>
              <p>{project.desc}</p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="button"
              >
                View Project
              </a>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Myproject;
