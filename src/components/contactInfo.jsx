import React from "react";

const ContactInfo = () => {
  const containerStyle = {
    padding: "20px",
    backgroundColor: "#f0f0f0",
    borderRadius: "10px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    maxWidth: "100%",
    margin: "0 auto",
  };

  const headerStyle = {
    fontSize: "1.5rem",
    marginBottom: "10px",
    color: "#333",
    fontFamily: "Arial, sans-serif",
    textTransform: "uppercase",
    textAlign: "center",
  };

  const infoStyle = {
    fontSize: "1.2rem",
    color: "#555",
    marginBottom: "8px",
    fontFamily: "Arial, sans-serif",
    textAlign: "center",
  };

  const strongStyle = {
    fontWeight: "bold",
  };

  return (
    <div style={containerStyle}>
      <h3 style={headerStyle}>Contact Information</h3>
      <p style={infoStyle}>
        <strong style={strongStyle}>Address:</strong> Edakkulam, koyilandy,
        Kozhikkod
      </p>
      <p style={infoStyle}>
        <strong style={strongStyle}>Phone:</strong> +91 9072080597
      </p>
      <p style={infoStyle}>
        <strong style={strongStyle}>Email:</strong> avanthik66@gmail.com
      </p>
    </div>
  );
};

export default ContactInfo;
