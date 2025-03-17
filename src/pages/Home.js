import React from "react";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

const sections = [
  {
    id: "hero",
    title: "",
    subtitle: "Quick and secure loans with Ms Reddy Associates. Trusted by over 10,000+ satisfied clients.",
    buttonText: "Apply Now",
  },
  {
    id: "why-choose-us",
    title: "Why Choose Us?",
    subtitle: "We have processed over ₹500 Cr in loans with a 95% approval rate.",
    items: [
      { icon: "✅", text: "Quick Approvals" },
      { icon: "💰", text: "Low Interest Rates" },
      { icon: "📜", text: "No Hidden Fees" },
      { icon: "🔄", text: "Flexible Repayments" },
      { icon: "👨‍💼", text: "Expert Advisors" },
      { icon: "📊", text: "Transparent Policies" },
    ],
  },
  {
    id: "services",
    title: "Our Loan Services",
    subtitle: "We offer personalized loans with flexible terms.",
    items: [
      { name: "🏡 Home Loan", description: "Up to ₹1 Cr for your dream home." },
      { name: "🚗 Vehicle Loan", description: "Finance up to 90% of your vehicle." },
      { name: "📚 Education Loan", description: "Education funding with low interest." },
      { name: "🏢 Business Loan", description: "Loans up to ₹50 Lakhs for businesses." },
      { name: "💳 Personal Loan", description: "Flexible amounts, easy EMIs." },
      { name: "💼 Startup Loan", description: "Helping startups with capital needs." },
    ],
  },
  {
    id: "testimonials",
    title: "What Our Clients Say",
    subtitle: "Join thousands of happy customers!",
    items: [
      { name: "Rahul S.", review: "Got my home loan approved in 3 days!" },
      { name: "Priya K.", review: "Lowest interest rates and great support!" },
      { name: "Amit R.", review: "Flexible repayments helped my business grow!" },
      { name: "Sneha D.", review: "No hidden fees. 100% transparent process!" },
      { name: "Vikas M.", review: "Best loan service I have used so far." },
    ],
  },
];

const Home = () => {
  return (
    <div style={styles.container}>
      {sections.map((section) => (
        <motion.section
          key={section.id}
          id={section.id}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
          style={styles.section}
        >
          {section.id === "hero" ? (
            <h1 style={styles.animatedText}>
              <TypeAnimation
                sequence={[
                  "Fast & Secure Loans", 2000,
                  "95% Loan Approval Rate", 2000,
                  "Trusted by Thousands", 2000,
                ]}
                speed={50}
                repeat={Infinity}
              />
            </h1>
          ) : (
            <h1 style={styles.title}>{section.title}</h1>
          )}
          <p style={styles.subtitle}>{section.subtitle}</p>

          {section.items && (
            <div style={styles.grid}>
              {section.items.map((item, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.05 }}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  style={{ ...styles.card, ...styles[section.id] }}
                >
                  <h3 style={styles.cardTitle}>
                    {item.icon ? `${item.icon} ${item.text}` : item.name}
                  </h3>
                  <p style={styles.cardDescription}>{item.description || item.review || null}</p>
                </motion.div>
              ))}
            </div>
          )}

          {section.buttonText && (
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              style={styles.button}
            >
              {section.buttonText}
            </motion.button>
          )}
        </motion.section>
      ))}
    </div>
  );
};

const styles = {
  container: {
    textAlign: "center",
    color: "#333",
    scrollBehavior: "smooth",
  },
  section: {
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: "50px 20px",
    borderBottom: "1px solid #ddd",
  },
  title: {
    fontSize: "2.5rem",
    fontWeight: "bold",
    color: "#0056b3",
  },
  subtitle: {
    fontSize: "1.4rem",
    marginTop: "10px",
    color: "#444",
    maxWidth: "800px",
  },
  animatedText: {
    fontSize: "3rem",
    fontWeight: "bold",
    color: "#0056b3",
    marginTop: "10px",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
    gap: "30px",
    width: "100%",
    maxWidth: "1200px",
    marginTop: "30px",
  },
  card: {
    padding: "25px",
    borderRadius: "12px",
    textAlign: "center",
    minHeight: "180px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
  },
  "why-choose-us": {
    backgroundColor: "#f9f9f9",
    boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.1)",
  },
  services: {
    backgroundColor: "#eef7ff",
    boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.15)",
  },
  testimonials: {
    backgroundColor: "#fff3e6",
    boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.2)",
  },
  button: {
    padding: "12px 24px",
    marginTop: "30px",
    borderRadius: "6px",
    backgroundColor: "#0056b3",
    color: "#fff",
    fontSize: "1rem",
    cursor: "pointer",
  },
};

export default Home;