import React from "react";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

const Home = () => {
  return (
    <div style={styles.container}>
      {/* Hero Section */}
      <motion.div 
        initial={{ opacity: 0, y: -50 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.8, ease: "easeOut" }} 
        whileHover={{ scale: 1.02 }}
        style={styles.hero}
      >
        <h1 style={styles.heroTitle}>
        <TypeAnimation
  sequence={[
    "Over 10,000+ Happy Clients", 2000,
    "95% Loan Approval Rate", 2000,
    "Trusted by Thousands for Secure Loans", 2000
  ]}
  wrapper="span"
  speed={50}
  repeat={Infinity}
/>

        </h1>
        <p style={styles.heroSubtitle}>Quick and secure loans with Ms Reddy Associates. Trusted by over 10,000+ satisfied clients.</p>
        <motion.button 
          whileHover={{ scale: 1.1, rotate: 3 }}
          whileTap={{ scale: 0.95 }}
          style={styles.button}
        >
          Apply Now
        </motion.button>
      </motion.div>

      {/* Why Choose Us Section */}
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true }}
        style={styles.section}
      >
        <h2 style={styles.sectionTitle}>Why Choose Us?</h2>
        <p style={styles.sectionSubtitle}>We have processed over ₹500 Cr in loans with a 95% approval rate.</p>
        <div style={styles.grid}>
          {["Quick Approvals", "Low Interest Rates", "No Hidden Fees", "Flexible Repayments"].map((benefit, index) => (
            <motion.div 
              key={index} 
              whileHover={{ scale: 1.1, rotate: 2 }}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              style={styles.card}
            >
              ✅ {benefit}
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Loan Categories */}
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        viewport={{ once: true }}
        style={styles.section}
      >
        <h2 style={styles.sectionTitle}>Our Loan Services</h2>
        <p style={styles.sectionSubtitle}>We offer personalized loans with flexible terms.</p>
        <div style={styles.grid}>
          {["🏡 Home Loan", "🚗 Vehicle Loan", "📚 Education Loan", "🏢 Business Loan"].map((item, index) => (
            <motion.div 
              key={index} 
              whileHover={{ scale: 1.1, rotate: -2 }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              style={styles.card}
            >
              <h3>{item}</h3>
              <p>
                {index === 0 ? "Up to ₹1 Cr for your dream home." :
                 index === 1 ? "Finance up to 90% of your vehicle." :
                 index === 2 ? "Education funding with low interest." : "Loans up to ₹50 Lakhs for businesses."}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Testimonials Section */}
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        viewport={{ once: true }}
        style={styles.section}
      >
        <h2 style={styles.sectionTitle}>What Our Clients Say</h2>
        <p style={styles.sectionSubtitle}>Join thousands of happy customers!</p>
        <div style={styles.grid}>
          {[{ name: "Rahul S.", review: "Got my home loan approved in 3 days!" },
            { name: "Priya K.", review: "Lowest interest rates and great support!" },
            { name: "Amit R.", review: "Flexible repayments helped my business grow!" }]
            .map((testimonial, index) => (
            <motion.div 
              key={index} 
              whileHover={{ scale: 1.1, rotate: 2 }}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              style={styles.card}
            >
              <h3>⭐ {testimonial.name}</h3>
              <p>"{testimonial.review}"</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};
const styles = {
  container: {
    textAlign: "center",
    padding: "50px",
    color: "#ffffff",
    backgroundColor: "#0a192f",
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    gap: "50px"
  },
  hero: {
    marginBottom: "50px",
  },
  heroTitle: {
    fontSize: "2.5rem",
    fontWeight: "bold",
    color: "#64ffda",
  },
  heroSubtitle: {
    fontSize: "1.2rem",
    marginTop: "10px",
    color: "#ccd6f6"
  },
  button: {
    padding: "12px 24px",
    marginTop: "20px",
    border: "none",
    borderRadius: "5px",
    backgroundColor: "#64ffda",
    color: "#0a192f",
    fontSize: "1rem",
    cursor: "pointer",
  },
  section: {
    padding: "40px",
    width: "80%",
    margin: "auto",
  },
  sectionTitle: {
    fontSize: "2rem",
    marginBottom: "10px",
    color: "#64ffda",
  },
  sectionSubtitle: {
    fontSize: "1.1rem",
    marginBottom: "20px",
    color: "#ccd6f6",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
    gap: "20px",
    justifyContent: "center",
  },
  card: {
    padding: "20px",
    backgroundColor: "#112240",
    borderRadius: "8px",
    fontSize: "1.1rem",
    color: "#ffffff",
    boxShadow: "0px 4px 10px rgba(100, 255, 218, 0.2)",
  },
};

export default Home;
