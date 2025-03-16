import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";

const Footer = () => {
  const styles = {
    footer: {
      background: "linear-gradient(to right, #1e3a8a, #4f46e5)",
      color: "white",
      textAlign: "center",
      padding: "20px 15px",
      marginTop: "30px",
    },
    container: {
      maxWidth: "900px",
      margin: "0 auto",
    },
    title: {
      fontSize: "22px",
      fontWeight: "bold",
      marginBottom: "5px",
    },
    subtitle: {
      fontSize: "14px",
      color: "#d1d5db",
      marginBottom: "15px",
    },
    socialContainer: {
      display: "flex",
      justifyContent: "center",
      gap: "15px",
      marginBottom: "15px",
    },
    icon: {
      color: "#d1d5db",
      fontSize: "22px",
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
      margin: "10px 0",
    },
    copyright: {
      fontSize: "12px",
      color: "#d1d5db",
    },
  };

  return (
    <footer style={styles.footer}>
      <div style={styles.container}>
        <h2 style={styles.title}>Ms Reddy Associates</h2>
        <p style={styles.subtitle}>Empowering Businesses for a Better Tomorrow</p>

        {/* Social Media Links */}
        <div style={styles.socialContainer}>
          <a href="#" style={styles.icon} onMouseEnter={(e) => (e.target.style.color = "white")} onMouseLeave={(e) => (e.target.style.color = "#d1d5db")}>
            <FaFacebook />
          </a>
          <a href="#" style={styles.icon} onMouseEnter={(e) => (e.target.style.color = "white")} onMouseLeave={(e) => (e.target.style.color = "#d1d5db")}>
            <FaTwitter />
          </a>
          <a href="#" style={styles.icon} onMouseEnter={(e) => (e.target.style.color = "white")} onMouseLeave={(e) => (e.target.style.color = "#d1d5db")}>
            <FaLinkedin />
          </a>
          <a href="#" style={styles.icon} onMouseEnter={(e) => (e.target.style.color = "white")} onMouseLeave={(e) => (e.target.style.color = "#d1d5db")}>
            <FaInstagram />
          </a>
        </div>

        <hr style={styles.line} />

        <p style={styles.copyright}>© 2025 Ms Reddy Associates | All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
