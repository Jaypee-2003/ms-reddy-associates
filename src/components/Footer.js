import React from "react";
import { motion } from "framer-motion";
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";

const Footer = () => {
  const styles = {
    footer: {
      background: "linear-gradient(to right, #1e3a8a, #4f46e5)",
      color: "white",
      textAlign: "center",
      padding: "40px 20px",
      marginTop: "30px",
    },
    container: {
      maxWidth: "1000px",
      margin: "0 auto",
    },
    title: {
      fontSize: "26px",
      fontWeight: "bold",
      marginBottom: "10px",
    },
    subtitle: {
      fontSize: "16px",
      color: "#d1d5db",
      marginBottom: "20px",
    },
    section: {
      display: "flex",
      justifyContent: "space-between",
      flexWrap: "wrap",
      marginBottom: "30px",
    },
    column: {
      flex: "1",
      minWidth: "250px",
      marginBottom: "20px",
    },
    heading: {
      fontSize: "18px",
      fontWeight: "bold",
      marginBottom: "10px",
    },
    link: {
      display: "block",
      color: "#d1d5db",
      textDecoration: "none",
      marginBottom: "8px",
      transition: "color 0.3s ease",
    },
    linkHover: {
      color: "white",
    },
    socialContainer: {
      display: "flex",
      justifyContent: "center",
      gap: "15px",
      marginBottom: "15px",
    },
    icon: {
      color: "#d1d5db",
      fontSize: "24px",
      transition: "color 0.3s ease",
      cursor: "pointer",
    },
    iconHover: {
      color: "white",
    },
    line: {
      border: "0",
      height: "1px",
      background: "#6b7280",
      margin: "20px 0",
    },
    copyright: {
      fontSize: "14px",
      color: "#d1d5db",
    },
  };

  return (
    <footer style={styles.footer}>
      <div style={styles.container}>
        <h2 style={styles.title}>Ms Reddy Associates</h2>
        <p style={styles.subtitle}>Empowering Businesses for a Better Tomorrow</p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 1 }}
          style={styles.section}
        >
          <div style={styles.column}>
            <h3 style={styles.heading}>Services</h3>
            <a href="Services" style={styles.link}>Business Consulting</a>
            <a href="Services" style={styles.link}>Market Research</a>
            <a href="Services" style={styles.link}>Financial Planning</a>
            <a href="Services" style={styles.link}>Franchise Opportunities</a>
          </div>

          <div style={styles.column}>
            <h3 style={styles.heading}>Quick Links</h3>
            <a href="About" style={styles.link}>About Us</a>
            <a href="About" style={styles.link}>Our Team</a>
            <a href="About" style={styles.link}>Testimonials</a>
            <a href="Contact" style={styles.link}>Contact</a>
          </div>

          <div style={styles.column}>
            <h3 style={styles.heading}>Support</h3>
            <a href="About" style={styles.link}>FAQs</a>
            <a href="Contact" style={styles.link}>Help Center</a>
            <a href="About" style={styles.link}>Privacy Policy</a>
            <a href="About" style={styles.link}>Terms of Service</a>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }} 
          animate={{ opacity: 1, scale: 1 }} 
          transition={{ duration: 1 }}
          style={styles.socialContainer}
        >
          <a href="https://facebook.com" style={styles.icon} onMouseEnter={(e) => (e.target.style.color = "white")} onMouseLeave={(e) => (e.target.style.color = "#d1d5db")}> <FaFacebook /> </a>
          <a href="https://twitter.com" style={styles.icon} onMouseEnter={(e) => (e.target.style.color = "white")} onMouseLeave={(e) => (e.target.style.color = "#d1d5db")}> <FaTwitter /> </a>
          <a href="https://linkedin.com" style={styles.icon} onMouseEnter={(e) => (e.target.style.color = "white")} onMouseLeave={(e) => (e.target.style.color = "#d1d5db")}> <FaLinkedin /> </a>
          <a href="https://instagram.com" style={styles.icon} onMouseEnter={(e) => (e.target.style.color = "white")} onMouseLeave={(e) => (e.target.style.color = "#d1d5db")}> <FaInstagram /> </a>
        </motion.div>

        <hr style={styles.line} />
        <p style={styles.copyright}>© 2025 Ms Reddy Associates | All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;