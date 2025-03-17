import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Terms from "./pages/Terms";
import ApplyFranchise from "./pages/ApplyFranchise";
import ApplyAgent from "./pages/ApplyAgent";

function App() {
  return (
    <Router>
      <div style={styles.background}></div> {/* Gradient Background */}
      <div style={styles.moneyContainer}>
        {[...Array(20)].map((_, i) => (
          <span key={i} className="money">
            {["💰", "₹", "🏦"][Math.floor(Math.random() * 3)]}
          </span>
        ))}
      </div>
      <Navbar />
      <div style={styles.mainContainer}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ms-reddy-associates/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/apply-franchise" element={<ApplyFranchise />} />
          <Route path="/apply-agent" element={<ApplyAgent />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

const styles = {
  background: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100vh",
    background: "linear-gradient(135deg, #f6fbff, #dceefb, #b6e0fe, #87CEEB)",
    zIndex: -2,
    animation: "gradientAnimation 10s ease infinite",
  },
  mainContainer: {
    marginTop: "90px", 
    minHeight: "calc(100vh - 160px)",
    position: "relative",
    zIndex: 1, 
  },
  moneyContainer: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100vh",
    overflow: "hidden",
    zIndex: -1,
  },
};

// Global CSS for Animations
const globalStyle = document.createElement("style");
globalStyle.innerHTML = `
  @keyframes gradientAnimation {
    0% { background-position: 0% 0%; }
    50% { background-position: 100% 100%; }
    100% { background-position: 0% 0%; }
  }
  
  @keyframes floatMoney {
    0% { transform: translateY(100vh) scale(0.5); opacity: 0; }
    50% { opacity: 1; }
    100% { transform: translateY(-10vh) scale(1.2); opacity: 0; }
  }

  .money {
    position: absolute;
    font-size: 2rem;
    opacity: 0;
    animation: floatMoney 8s linear infinite;
  }

  ${[...Array(20)]
    .map(
      (_, i) => `.money:nth-child(${i + 1}) {
        left: ${Math.random() * 100}%;
        animation-delay: ${Math.random() * 5}s;
      }`
    )
    .join("\n")}
`;
document.head.appendChild(globalStyle);

export default App;
