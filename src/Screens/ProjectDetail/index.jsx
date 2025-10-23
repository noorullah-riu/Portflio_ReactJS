import React from "react";
import '../../App.css'

const ProjectDetail = () => {
  const project = {
    name: "React Native (Android/IOS) Payment/Remittance App",
    shortDescription: "Cross-platform remittance sending app built in React Native.",
    description: `
      Hello there. Thank you for taking interest.
      It's a remittance sending application built using React Native 
      that supports both Android and iOS platforms.
      It has modules for authentication, profile management, 
      credit and recipient handling. 
      It covers every possible aspect of sending payments to your loved ones.
      Let me know if you have any question.
      Have a great day.
    `,
    company: "FinTech Global Ltd",
    images: [
      "https://images.unsplash.com/photo-1591696205602-2f950c417cb9?w=800",
      "https://images.unsplash.com/photo-1556742044-3c52d6e88c62?w=800",
      "https://images.unsplash.com/photo-1556742044-3c52d6e88c62?w=800",
      "https://images.unsplash.com/photo-1556742044-3c52d6e88c62?w=800",
    ],
  };

  return (
    <div className="project-detail-container">
      <div className="project-left">
        <h1 className="project-title">{project.name}</h1>
        <h3 className="project-subtitle">Project Description</h3>
        <p className="project-desc">{project.description}</p>

        <div className="project-meta">
          <strong>Company:</strong> {project.company}
        </div>
      </div>

      <div className="project-right">
        <div className="image-scroll">
          {project.images.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`Project ${index + 1}`}
              className="project-img"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
