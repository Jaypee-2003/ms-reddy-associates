import React from "react";

const About = () => {
  return (
    <div style={styles.container}>
      <div style={styles.content}>
        <h1 style={styles.heading}>About Ms Reddy Associates</h1>
        <p style={styles.paragraph}>
          Welcome to <strong>Ms Reddy Associates</strong>, a trusted leader in providing exceptional 
          business services. Our company is committed to excellence, innovation, and customer 
          satisfaction. With a dedicated team of experts, we strive to deliver top-quality 
          solutions tailored to your needs.
        </p>
        <p style={styles.paragraph}>
          Our core values revolve around integrity, professionalism, and reliability, ensuring 
          that every client receives the best possible service.
        </p>

        <h2 style={styles.subheading}>Why Choose Us?</h2>
        <ul style={styles.list}>
          <li style={styles.listItem}>✔ Expert team with years of experience</li>
          <li style={styles.listItem}>✔ Customer-focused approach</li>
          <li style={styles.listItem}>✔ Proven track record of success</li>
        </ul>

        <hr style={styles.divider} />

        <h1 style={styles.heading}>About Our Franchise</h1>
        <p style={styles.paragraph}>
          Our franchise program offers a lucrative business opportunity for individuals looking 
          to establish a successful venture under the trusted brand of Ms Reddy Associates. 
          We provide full support, training, and resources to help franchisees thrive.
        </p>
        <p style={styles.paragraph}>
          If you're passionate about business and want to be part of a growing company, 
          joining our franchise network is the perfect step forward.
        </p>

        <h2 style={styles.subheading}>Franchise Benefits</h2>
        <ul style={styles.list}>
          <li style={styles.listItem}>✔ Comprehensive training and support</li>
          <li style={styles.listItem}>✔ Established brand and market presence</li>
          <li style={styles.listItem}>✔ High-profit potential with low risk</li>
        </ul>
      </div>
    </div>
  );
};

// Enhanced inline styles
const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "100vh",
    padding: "40px",
    textAlign: "center",
  },
  content: {
    maxWidth: "800px",
    background: "rgba(255, 255, 255, 0.2)",
    padding: "30px",
    borderRadius: "12px",
    background: "linear-gradient(135deg, #1E3A8A, #3B82F6)",
    boxShadow: "0px 6px 15px rgba(0, 0, 0, 0.3)",
    backdropFilter: "blur(12px)",
    color: "white",
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
