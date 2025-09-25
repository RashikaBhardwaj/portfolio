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
import p4_img from "./four.jpg"; 
import p5_img from "./five.jpg";
import p6_img from "six.jpg";
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
    title: "To-Do-List-App",
    img: p2_img,
    desc: "A to-do-list containg site built with React, focusing on task management.",
    link: "https://to-do-list-pp1.netlify.app/",
  },
  {
    id: 3,
    title: "Image Slider",
    img: p3_img,
    desc: "A small image slider component project with css and html.",
    link: "https://image-sliderpp3.netlify.app/",
  },
  {
    id: 4,
    title: "Hang-Man Game",
    img: p4_img,
    desc: "A Hangman Quiz game website with interactive UI with hints and random questions.",
    link: "https://hangman-pp4.netlify.app/",
  },
   {
    id: 5,
    title: "Tic-Tac-toe Game",
    img: p5_img,
    desc: "A Tic-tac-toe game website with interactive UI design.",
    link: "https://tic-tac-toe-pp5.netlify.app/",
  },
   {
    id: 6,
    title: "Quick-Ai-Saas",
    img: p6_img,
    desc: "A Quick-Ai website with interactive UI design and the AI integration Tools.",
    link: "https://quick-ai-client-xi.vercel.app/",
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
