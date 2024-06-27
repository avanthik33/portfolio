import React, { useState } from "react";

const Projects = ({ projects }) => {
  const containerStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "50px 20px",
    backgroundColor: "#f0f0f0",
    maxWidth: "100%",
    margin: "0 auto",
    fontFamily: "Arial, sans-serif", // Example font family
  };

  const projectContainerStyle = {
    maxWidth: "1100px",
    width: "100%",
    backgroundColor: "#fff",
    borderRadius: "10px",
    boxShadow: "0 0 20px rgba(0, 0, 0, 0.1)",
    marginBottom: "40px",
    overflow: "hidden",
  };

  const screenshotContainerStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
    gap: "20px",
    padding: "20px",
    borderBottom: "1px solid #ccc",
  };

  const screenshotStyle = {
    width: "100%",
    height: "auto",
    borderRadius: "10px",
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
    cursor: "pointer",
    transition: "transform 0.3s ease-in-out",
    ":hover": {
      transform: "scale(1.05)",
    },
  };

  const descriptionStyle = {
    padding: "20px",
    lineHeight: "1.6",
    fontFamily: "Arial, sans-serif", // Example font family
  };

  const projectNameStyle = {
    fontSize: "2rem",
    marginBottom: "10px",
    fontFamily: "Arial, sans-serif", // Example font family
    fontWeight: "bold", // Example font weight
  };

  const projectDescriptionStyle = {
    fontFamily: "Arial, sans-serif", // Example font family
  };

  const linkContainerStyle = {
    padding: "20px",
    borderTop: "1px solid #ccc",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  const liveDemoLinkStyle = {
    padding: "10px 20px",
    backgroundColor: "#007bff",
    color: "#fff",
    borderRadius: "5px",
    textDecoration: "none",
    transition: "background-color 0.3s",
    fontFamily: "Arial, sans-serif", // Example font family
  };

  const openLightbox = (src) => {
    setLightboxImage(src);
  };

  const closeLightbox = () => {
    setLightboxImage(null);
  };

  const [lightboxImage, setLightboxImage] = useState(null);

  return (
    <div style={containerStyle}>
      {projects.map((project, projectIndex) => (
        <div key={projectIndex} style={projectContainerStyle}>
          <div style={screenshotContainerStyle}>
            {project.projectScreenshots.map((screenshot, index) => (
              <img
                key={index}
                src={process.env.PUBLIC_URL + screenshot.src}
                alt={screenshot.caption}
                style={screenshotStyle}
                onClick={() =>
                  openLightbox(process.env.PUBLIC_URL + screenshot.src)
                }
              />
            ))}
          </div>
          <div style={descriptionStyle}>
            <h2 style={projectNameStyle}>{project.projectName}</h2>
            <p style={projectDescriptionStyle}>{project.projectDescription}</p>
          </div>
          <div style={linkContainerStyle}>
            <a
              href={project.liveDemoLink}
              target="_blank"
              rel="noopener noreferrer"
              style={liveDemoLinkStyle}
            >
              View Live Demo
            </a>
          </div>
        </div>
      ))}

      {lightboxImage && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.8)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 9999,
          }}
          onClick={closeLightbox}
        >
          <img
            src={lightboxImage}
            alt="Enlarged Screenshot"
            style={{
              maxWidth: "70%",
              maxHeight: "70%",
              boxShadow: "0 0 20px rgba(0, 0, 0, 0.5)",
              borderRadius: "10px",
            }}
          />
        </div>
      )}
    </div>
  );
};

export default Projects;
