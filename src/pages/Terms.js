import React from "react";

const Terms = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Terms & Conditions</h1>
      <p style={styles.text}>
        Welcome to our website. By using our services, you agree to the following terms and conditions.
      </p>

      <h2 style={styles.subheading}>1. Services</h2>
      <p style={styles.text}>
        We provide financial services including loans, credit cards, insurances, and related assistance.
      </p>

      <h2 style={styles.subheading}>2. Loans</h2>
      <p style={styles.text}>
        All loan applications are subject to eligibility and approval. Interest rates and terms vary.
      </p>

      <h2 style={styles.subheading}>3. Credit Cards</h2>
      <p style={styles.text}>
        Credit card issuance is subject to bank policies and creditworthiness.
      </p>

      <h2 style={styles.subheading}>4. Insurances</h2>
      <p style={styles.text}>
        Insurance policies are provided through third-party companies and are subject to their terms.
      </p>

      <h2 style={styles.subheading}>5. Financial Services</h2>
      <p style={styles.text}>
        We offer assistance with PAN card, Aadhaar card, and other financial documentation.
      </p>

      <h2 style={styles.subheading}>6. Liability</h2>
      <p style={styles.text}>
        We are not responsible for any financial losses incurred due to incorrect information or misuse of services.
      </p>

      <h2 style={styles.subheading}>7. Contact</h2>
      <p style={styles.text}>
        For any queries, please visit our <a href="/contact" style={styles.link}>Contact Us</a> page.
      </p>
    </div>
  );
};

const styles = {
  container: {
    background: "#fff",
    padding: "40px",
    maxWidth: "800px",
    margin: "0 auto",
    fontFamily: "Arial, sans-serif",
  },
  heading: {
    fontSize: "28px",
    fontWeight: "bold",
    marginBottom: "20px",
  },
  subheading: {
    fontSize: "22px",
    fontWeight: "bold",
    marginTop: "20px",
  },
  text: {
    fontSize: "16px",
    lineHeight: "1.5",
    marginBottom: "10px",
  },
  link: {
    color: "#007BFF",
    textDecoration: "none",
  },
};

export default Terms;
