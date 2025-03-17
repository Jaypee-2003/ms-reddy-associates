import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div style={styles.container}>
      <motion.div 
        initial={{ opacity: 0, y: 50 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 1 }} 
        style={styles.card}
      >
        <h1 style={styles.heading}>About Ms Reddy Associates</h1>
        <p style={styles.paragraph}>
          Welcome to <strong>Ms Reddy Associates</strong>, a trusted leader in providing exceptional 
          business services. Our company is committed to excellence, innovation, and customer 
          satisfaction. With a dedicated team of experts, we strive to deliver top-quality 
          solutions tailored to your needs. Our approach ensures that businesses of all sizes can 
          benefit from our expertise, whether they are startups or established enterprises.
        </p>
        <p style={styles.paragraph}>
          Our core values revolve around integrity, professionalism, and reliability, ensuring 
          that every client receives the best possible service. We believe in fostering strong 
          relationships with our clients, built on trust and mutual growth. 
        </p>

        <h2 style={styles.subheading}>Why Choose Us?</h2>
        <ul style={styles.list}>
          <li style={styles.listItem}>✔ Expert team with years of experience in multiple industries</li>
          <li style={styles.listItem}>✔ Customer-focused approach ensuring tailored solutions</li>
          <li style={styles.listItem}>✔ Proven track record of success with satisfied clients worldwide</li>
          <li style={styles.listItem}>✔ Cutting-edge technology and data-driven strategies</li>
          <li style={styles.listItem}>✔ 24/7 support and assistance for all business needs</li>
        </ul>

        <hr style={styles.divider} />

        <h1 style={styles.heading}>About Our Franchise</h1>
        <p style={styles.paragraph}>
          Our franchise program offers a lucrative business opportunity for individuals looking 
          to establish a successful venture under the trusted brand of Ms Reddy Associates. 
          We provide full support, training, and resources to help franchisees thrive. Our 
          franchise partners benefit from our established reputation, comprehensive business 
          model, and ongoing mentorship.
        </p>
        <p style={styles.paragraph}>
          If you're passionate about business and want to be part of a growing company, 
          joining our franchise network is the perfect step forward. We equip you with the tools, 
          knowledge, and guidance necessary to ensure sustained profitability and success.
        </p>

        <h2 style={styles.subheading}>Franchise Benefits</h2>
        <ul style={styles.list}>
          <li style={styles.listItem}>✔ Comprehensive training and hands-on support</li>
          <li style={styles.listItem}>✔ Established brand recognition and credibility</li>
          <li style={styles.listItem}>✔ High-profit potential with minimal risk</li>
          <li style={styles.listItem}>✔ Exclusive marketing strategies and promotional materials</li>
          <li style={styles.listItem}>✔ Ongoing mentorship and business development guidance</li>
        </ul>
      </motion.div>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "100vh",
    padding: "40px",
    textAlign: "center",
    background: "transparent",
  },
  card: {
    maxWidth: "800px",
    backdropFilter: "blur(10px)",
    background: "rgba(0, 0, 0, 0.1)",
    padding: "30px",
    borderRadius: "12px",
    boxShadow: "0px 6px 15px rgba(0, 0, 0, 0.3)",
    color: "#222",
    textAlign: "center",
  },
  heading: {
    fontSize: "32px",
    fontWeight: "bold",
    marginBottom: "20px",
    textTransform: "uppercase",
    letterSpacing: "1.2px",
  },
  subheading: {
    fontSize: "24px",
    fontWeight: "bold",
    marginTop: "20px",
    textTransform: "uppercase",
  },
  paragraph: {
    fontSize: "18px",
    lineHeight: "1.7",
    marginBottom: "15px",
    fontWeight: "300",
  },
  list: {
    listStyleType: "none",
    padding: 0,
  },
  listItem: {
    fontSize: "18px",
    padding: "8px 0",
    fontWeight: "500",
  },
  divider: {
    margin: "30px 0",
    borderTop: "2px solid white",
    opacity: "0.5",
  },
};

export default About;