import React from "react";

const Projects = () => {
  const containerStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "50px 20px",
    backgroundColor: "#f0f0f0",
    maxWidth: "100%",
    margin: "0 auto",
  };

  const projectContainerStyle = {
    maxWidth: "800px",
    width: "100%",
    backgroundColor: "#fff",
    borderRadius: "10px",
    boxShadow: "0 0 20px rgba(0, 0, 0, 0.1)",
    marginBottom: "40px",
    overflow: "hidden",
  };

  const screenshotContainerStyle = {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "10px",
    padding: "20px",
    borderBottom: "1px solid #ccc",
  };

  const screenshotStyle = {
    width: "100%",
    height: "auto",
    borderRadius: "5px",
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
  };

  const descriptionStyle = {
    padding: "20px",
    lineHeight: "1.6",
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
  };

  const projectName = "Project Name";
  const projectScreenshots = [
    "/.png",
    "/screenshot2.png",
    // Add more screenshots as needed
  ];
  const projectDescription =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eu risus vitae tortor tincidunt condimentum. Phasellus varius est eu nisl aliquam, eget accumsan dui fermentum. Duis iaculis volutpat eros at efficitur. Donec sit amet vehicula dolor. Sed et tellus euismod, vulputate elit ac, sodales est. In hac habitasse platea dictumst. Proin dictum, ipsum eu molestie placerat, libero tortor dapibus libero, at posuere justo erat nec magna.";

  const liveDemoLink = "https://example.com";

  return (
    <div style={containerStyle}>
      <div style={projectContainerStyle}>
        <div style={screenshotContainerStyle}>
          {projectScreenshots.map((screenshot, index) => (
            <img
              key={index}
              src={process.env.PUBLIC_URL + screenshot}
              alt={`Screenshot ${index + 1}`}
              style={screenshotStyle}
            />
          ))}
        </div>
        <div style={descriptionStyle}>
          <h2 style={{ fontSize: "2rem", marginBottom: "10px" }}>
            {projectName}
          </h2>
          <p>{projectDescription}</p>
        </div>
        <div style={linkContainerStyle}>
          <a
            href={liveDemoLink}
            target="_blank"
            rel="noopener noreferrer"
            style={liveDemoLinkStyle}
          >
            View Live Demo
          </a>
        </div>
      </div>
    </div>
  );
};

export default Projects;
