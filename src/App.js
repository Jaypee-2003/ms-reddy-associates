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
  mainContainer: {
    marginTop: "80px", // Adjust according to the navbar height
    minHeight: "calc(100vh - 160px)", // Adjust height considering navbar and footer
  },
};

export default App;
