import React from "react";

const Skills = () => {
  const containerStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "50px 20px",
    backgroundColor: "#f0f0f0",
    maxWidth: "100%",
    margin: "0 auto",
  };

  const sectionStyle = {
    marginBottom: "40px",
    width: "100%",
  };

  const headingStyle = {
    fontSize: "2.5rem",
    color: "#333",
    marginBottom: "20px",
    textAlign: "center",
    fontFamily: "Arial, sans-serif", // Example of standard font-family
    fontWeight: "bold", // Example of bold font-weight
    textTransform: "uppercase", // Example of uppercase text
  };

  const skillListStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
    gap: "20px",
    textAlign: "center",
  };

  const skillItemStyle = {
    backgroundColor: "#fff",
    padding: "20px",
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
    borderRadius: "5px",
    transition: "transform 0.3s ease-in-out",
    ":hover": {
      transform: "scale(1.05)",
    },
  };

  const skillsData = [
    { name: "HTML5", iconClass: "fab fa-html5" },
    { name: "CSS3", iconClass: "fab fa-css3-alt" },
    { name: "JavaScript", iconClass: "fab fa-js-square" },
    { name: "React", iconClass: "fab fa-react" },
    { name: "Node.js", iconClass: "fab fa-node-js" },
    { name: "MongoDB", iconClass: "fas fa-database" },
    { name: "GitHub", iconClass: "fab fa-github" },
    { name: "RESTful API", iconClass: "fas fa-rocket" },
    { name: "npm", iconClass: "fab fa-npm" },
    { name: "JWT", iconClass: "fas fa-key" },
    { name: "API Documentation", iconClass: "fas fa-book" },
    { name: "Problem Solving", iconClass: "fas fa-lightbulb" },
    { name: "Team Player", iconClass: "fas fa-users" },
    { name: "Time Management", iconClass: "far fa-clock" },
  ];

  return (
    <div style={containerStyle}>
      <section style={sectionStyle}>
        <h2 style={headingStyle}>Skills</h2>
        <div style={skillListStyle}>
          {skillsData.map((skill, index) => (
            <div key={index} style={skillItemStyle}>
              <i
                className={skill.iconClass}
                style={{ fontSize: "3rem", marginBottom: "10px" }}
              ></i>
              <p style={{ fontSize: "1.2rem" }}>{skill.name}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Skills;
