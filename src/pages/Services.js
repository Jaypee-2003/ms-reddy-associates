import React from "react";

const services = [
  { title: "Loans", description: "Personal, Home, Vehicle, Education, Business, and more.", icon: "🏦", color: "#FF5733" },
  { title: "Credit Cards", description: "Multiple bank credit card options tailored for you.", icon: "💳", color: "#33A1FF" },
  { title: "Insurances", description: "Home, Auto, Life, Accident, and more coverage options.", icon: "🛡️", color: "#28A745" },
  { title: "Financial Services", description: "PAN & Aadhaar Card services with expert guidance.", icon: "📄", color: "#FFC107" },
  { title: "Apply for Franchise", description: "Join us and expand your business reach.", icon: "🏢", color: "#8E44AD" },
  { title: "Apply for Agent", description: "Become our authorized agent and grow with us.", icon: "🤝", color: "#E91E63" },
];

const Services = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Our Services</h1>
      <p style={styles.description}>Explore a wide range of financial and business services.</p>
      <div style={styles.serviceGrid}>
        {services.map((service, index) => (
          <div key={index} style={{ ...styles.card, background: service.color }}>
            <div style={styles.icon}>{service.icon}</div>
            <h2 style={styles.cardTitle}>{service.title}</h2>
            <p style={styles.cardDescription}>{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    minHeight: "100vh",
    background: "white",
    padding: "40px",
    textAlign: "center",
  },
  heading: {
    fontSize: "32px",
    fontWeight: "bold",
    color: "#333",
    marginBottom: "10px",
    textTransform: "uppercase",
  },
  description: {
    fontSize: "18px",
    color: "#666",
    marginBottom: "30px",
  },
  serviceGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: "20px",
    maxWidth: "1000px",
    width: "100%",
  },
  card: {
    padding: "25px",
    borderRadius: "12px",
    boxShadow: "0px 6px 15px rgba(0, 0, 0, 0.1)",
    textAlign: "center",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
    cursor: "pointer",
    color: "white",
  },
  cardTitle: {
    fontSize: "22px",
    fontWeight: "bold",
    marginBottom: "10px",
  },
  cardDescription: {
    fontSize: "16px",
    lineHeight: "1.6",
  },
  icon: {
    fontSize: "40px",
    marginBottom: "15px",
  },
};

export default Services;