import React, { useState, useEffect } from "react";
import "../Styles/Skills.css";
import bg from '../Assets/bg.mp4'

function Skills() {
  const [skills, setSkills] = useState([
    "Team Lead",
    "Time Optimization",
    "Automated repetitive tasks using Power Query ad SQL",
    "Microsoft Excel, Macros and VBA",
    "Power Query, SQL",
    "Presentation and facilitation skills",
    "Financial forecasting and budgeting",
    "Analytical Skills",
    "Data gathering ability and eye for detail",
  ]);

  const [visibleSkills, setVisibleSkills] = useState([]);

  useEffect(() => {
    const delay = 1000; // Adjust the delay between each line
    const timeouts = skills.map((skill, index) => {
      return setTimeout(() => {
        setVisibleSkills((prevVisibleSkills) => [...prevVisibleSkills, skill]);
      }, index * delay);
    });

    return () => {
      timeouts.forEach((timeout) => clearTimeout(timeout));
    };
  }, [skills]);

  return (
    <>
      <main className={`skills-main`}>
        <video autoPlay='true' loop muted preload='auto'>
                    <source src={bg}/>
        </video>
        {visibleSkills.map((item, index) => (
          <h3 className="individual-skills animate__animated animate__fadeInUp" key={index}>
            {item}
          </h3>
        ))}
      </main>
    </>
  );
}

export { Skills };
