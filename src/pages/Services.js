import React, { useState } from "react";
import { motion } from "framer-motion";

const services = [
  { title: "Loans", description: "Personal, Home, Vehicle, Education, Business, and more.", icon: "🏦" },
  { title: "Credit Cards", description: "Multiple bank credit card options tailored for you.", icon: "💳" },
  { title: "Insurances", description: "Home, Auto, Life, Accident, and more coverage options.", icon: "🛡️" },
  { title: "Financial Services", description: "PAN & Aadhaar Card services with expert guidance.", icon: "📄" },
];

const joinUs = [
  { title: "Apply for Franchise", description: "Join us and expand your business reach.", icon: "🏢" },
  { title: "Apply for Agent", description: "Become our authorized agent and grow with us.", icon: "🤝" },
];

const Services = () => {
  const [activeTab, setActiveTab] = useState("services");
  const data = activeTab === "services" ? services : joinUs;

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Our Services</h1>
      <p style={styles.description}>Explore a wide range of financial and business services.</p>
      <div style={styles.toggleContainer}>
        <motion.div style={styles.toggleBar}>
          <motion.button
            onClick={() => setActiveTab("services")}
            style={{ ...styles.toggleButton, background: activeTab === "services" ? "#0056b3" : "#f0f0f0", color: activeTab === "services" ? "white" : "black" }}
            whileTap={{ scale: 0.95 }}
          >
            Service Providers
          </motion.button>
          <motion.button
            onClick={() => setActiveTab("joinUs")}
            style={{ ...styles.toggleButton, background: activeTab === "joinUs" ? "#0056b3" : "#f0f0f0", color: activeTab === "joinUs" ? "white" : "black" }}
            whileTap={{ scale: 0.95 }}
          >
            Join Us
          </motion.button>
        </motion.div>
      </div>
      <div style={styles.serviceGrid}>
        {data.map((item, index) => (
          <motion.div
            key={index}
            style={styles.card}
            whileHover={{ scale: 1.05, boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.15)" }}
            whileTap={{ scale: 0.95 }}
          >
            <div style={styles.cardHeader}>
              <div style={styles.icon}>{item.icon}</div>
            </div>
            <h2 style={styles.cardTitle}>{item.title}</h2>
            <p style={styles.cardDescription}>{item.description}</p>
          </motion.div>
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
    padding: "40px",
    textAlign: "center",
  },
  heading: {
    fontSize: "32px",
    fontWeight: "bold",
    color: "#0056b3",
    marginBottom: "10px",
  },
  description: {
    fontSize: "18px",
    color: "#444",
    marginBottom: "30px",
  },
  toggleContainer: {
    display: "flex",
    justifyContent: "center",
    marginBottom: "20px",
  },
  toggleBar: {
    display: "flex",
    background: "#f0f0f0",
    padding: "5px",
    borderRadius: "25px",
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
  },
  toggleButton: {
    padding: "12px 24px",
    fontSize: "16px",
    border: "none",
    borderRadius: "20px",
    cursor: "pointer",
    transition: "background 0.3s ease, color 0.3s ease",
  },
  serviceGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
    gap: "20px",
    maxWidth: "1100px",
    width: "100%",
  },
  card: {
    padding: "25px",
    borderRadius: "12px",
    textAlign: "center",
    background: "white",
    boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.1)",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
    cursor: "pointer",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    border: "1px solid #ddd",
    maxWidth: "320px",
  },
  cardHeader: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "50px",
    height: "50px",
    borderRadius: "10px",
    background: "#eef2f7",
    marginBottom: "15px",
  },
  icon: {
    fontSize: "28px",
    color: "#0056b3",
  },
  cardTitle: {
    fontSize: "20px",
    fontWeight: "bold",
    marginBottom: "10px",
    color: "#222",
  },
  cardDescription: {
    fontSize: "16px",
    lineHeight: "1.6",
    color: "#555",
  },
};

export default Services;