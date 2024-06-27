import React from "react";

const Welcome = () => {
  const containerStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "70vh",
    backgroundColor: "#f0f0f0",
  };

  const backgroundStyle = {
    backgroundImage:
      "url(https://www.bates.edu/wordpress/files/2016/07/gradient1.jpg)",
    backgroundSize: "cover",
    backgroundPosition: "center",
    position: "relative",
    width: "100%",
    height: "100%",
  };

  const overlayStyle = {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
    textAlign: "center",
  };

  const headingStyle = {
    color: "white",
    fontSize: "5rem",
    margin: 0,
  };

  const paragraphStyle = {
    color: "#cccccc",
    fontSize: "1.9rem",
    marginTop: "10px",
  };

  const buttonStyle = {
    position: "fixed",
    top: "20px",
    right: "20px",
    width: "200px",
    padding: "10px 20px",
    fontSize: "1rem",
    backgroundColor: "transparent",
    color: "white",
    border: "2px solid white",
    borderRadius: "0",
    cursor: "pointer",
    transition: "background-color 0.3s, color 0.3s",
    zIndex: 1000,
    boxShadow: "0 0 10px rgba(255, 255, 255, 0.3)",
  };

  const handleButtonClick = () => {
    const resumeUrl = `${process.env.PUBLIC_URL}/Avanthik MERN Resume (2).pdf`;
    const link = document.createElement("a");
    link.href = resumeUrl;
    link.download = "Avanthik_M_Resume.pdf";
    link.click();
  };

  const profileImageStyle = {
    width: "250px",
    height: "250px",
    borderRadius: "50%",
    marginTop: "40px",
    border: "5px solid white",
    position: "absolute",
    top: "calc(90% - 125px)",
    left: "50%",
    transform: "translateX(-50%)",
  };

  const aboutUsContainerStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "#f0f0f0",
    padding: "50px 20px",
  };

  const aboutUsHeadingStyle = {
    marginTop: "90px",
    color: "#333",
    fontSize: "3rem",
    marginBottom: "10px",
  };

  const lineStyle = {
    width: "50px",
    height: "5px",
    backgroundColor: "#d32f2f",
    marginBottom: "20px",
  };

  const textContainerStyle = {
    display: "flex",
    justifyContent: "space-between",
    width: "80%",
    maxWidth: "1200px",
  };

  const aboutUsParagraphStyle = {
    width: "45%",
    color: "#555",
    fontSize: "1.2rem",
    lineHeight: "1.6",
  };

  const socialContainerStyle = {
    display: "flex",
    justifyContent: "center",
    marginTop: "20px",
  };

  const socialIconStyle = {
    width: "40px",
    height: "40px",
    borderRadius: "50%",
    backgroundColor: "#333",
    color: "#fff",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: "0 10px",
    fontSize: "1.5rem",
    cursor: "pointer",
  };

  return (
    <div>
      <div style={containerStyle}>
        <div style={backgroundStyle}>
          <div style={overlayStyle}>
            <button style={buttonStyle} onClick={handleButtonClick}>
              Download Resume
            </button>
            <h1 style={headingStyle}>Avanthik M</h1>
            <p style={paragraphStyle}>Software Developer</p>
          </div>
          <img
            src={`${process.env.PUBLIC_URL}/avanthik.jpg`}
            alt="Profile"
            style={profileImageStyle}
          />
        </div>
      </div>
      <div style={aboutUsContainerStyle}>
        <h2 style={aboutUsHeadingStyle}>ABOUT ME</h2>
        <div style={lineStyle}></div>
        <div style={textContainerStyle}>
          <p style={aboutUsParagraphStyle}>
            With a Master of Computer Applications from the Federal Institute of
            Science and Technology and practical experience gained through
            internships and personal projects, I am confident in my ability to
            contribute effectively to your team. I have a strong foundation in
            web development using the MERN stack, including HTML, CSS,
            JavaScript, React, Node.js, and MongoDB.During my internship at
            VimpTech,
          </p>
          <p style={aboutUsParagraphStyle}>
            I developed a movie ticket booking application for the Indian Navy,
            focusing on backend API development and frontend integration. This
            role enhanced my skills in user authentication, API testing, and
            collaborative coding. My project experience includes creating an
            automated movie ticket booking app, a real-time chat application,
            and a campus automation web application. These projects have refined
            my abilities in developing secure, scalable, and user-friendly web
            applications.
          </p>
        </div>
        <div style={socialContainerStyle}>
          <a
            href="https://github.com/avanthik33"
            target="_blank"
            rel="noopener noreferrer"
            style={socialIconStyle}
          >
            <i className="fab fa-github"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/avanthik-m-92654a23a/"
            target="_blank"
            rel="noopener noreferrer"
            style={socialIconStyle}
          >
            <i className="fab fa-linkedin-in"></i>
          </a>
          <a
            href="https://your-personal-portfolio-url.com"
            target="_blank"
            rel="noopener noreferrer"
            style={socialIconStyle}
          >
            <i className="fas fa-user-circle"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
