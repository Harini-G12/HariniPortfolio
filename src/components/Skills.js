import React from "react";
import "../styles.css";

function Skills() {
  const skills = [
    { name: "HTML", level: 90 },
    { name: "CSS", level: 85 },
    { name: "JavaScript", level: 80 },
    { name: "React", level: 75 },
    { name: "Bootstrap", level: 70 },
    { name: "Java", level: 70 },
    { name: "Git", level: 70 },
    { name: "MySql", level: 70 },
    { name: "MongoDB", level: 50 },
  ];

  return (
    <section id="skills">
      <h2>Skills</h2>
      <div className="skills-list">
        {skills.map((skill, index) => (
          <div key={index} className="skill-card">
            <h3>{skill.name}</h3>
            <div className="skill-bar">
              <div
                className="skill-level"
                style={{ width: `${skill.level}%` }}
              ></div>
            </div>
            <p>{skill.level}%</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
