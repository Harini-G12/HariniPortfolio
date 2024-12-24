import React from "react";
import "../styles.css";

function Projects() {
  const projects = [
    {
      title: "E-Commerce Website",
      description: "Full-stack e-commerce solution with secure payments.",
      link: "https://github.com/Harini-G12/ecommerce",
      image:
        "https://m.media-amazon.com/images/G/31/amazonservices/Blog/What_is_an_E-commerce_business.jpg",
    },
    {
      title: "Portfolio Website",
      description: "Interactive portfolio showcasing my work.",
      link: "https://portolio-alpha.vercel.app/",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzk1fK7x4E_vwrP8iX0PQm0NRG8RjhrX7l18HqqVJ1L2BaraXSnhH5B9-dnK3YutqEUCk&usqp=CAU",
    },
    {
      title: "stop Watch",
      description: "Interactive portfolio showcasing my work.",
      link: "https://img.freepik.com/free-vector/businessman-holding-thumb-finger-stopwatch_3446-522.jpg",
      image: "portfolio-image-url",
    },
    {
      title: "Blog Website",
      description: "Interactive portfolio showcasing my work.",
      link: "https://github.com/Harini-G12/portfolio",
      image: "portfolio-image-url",
    },
  ];

  return (
    <section id="projects">
      <h2>Projects</h2>
      <div className="project-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <img src={project.image} alt={project.title} />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              View Project
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
