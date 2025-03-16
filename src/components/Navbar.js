import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, Container, Offcanvas } from "react-bootstrap";
import { FaBars } from "react-icons/fa";
import logo from "../assets/logo.png";

const CustomNavbar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        showMobileMenu &&
        !event.target.closest(".offcanvas") &&
        !event.target.closest(".navbar-toggler")
      ) {
        setShowMobileMenu(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [showMobileMenu]);

  return (
    <>
      {/* Main Navbar */}
      <Navbar
        expand="lg"
        fixed="top"
        style={{
          background: "rgba(30, 58, 138, 0.9)",
          backdropFilter: "blur(10px)",
          padding: "10px 20px",
          transition: "background 0.3s ease",
        }}
      >
        <Container>
          {/* Logo */}
          <Navbar.Brand as={Link} to="/">
            <img
              src={logo}
              alt="Logo"
              style={{ height: "50px", transition: "transform 0.3s ease" }}
            />
          </Navbar.Brand>

          {/* Mobile Toggle Button */}
          <Navbar.Toggle
            aria-controls="offcanvas-menu"
            onClick={() => setShowMobileMenu(!showMobileMenu)}
            className="navbar-toggler"
          >
            <FaBars style={{ color: "white", fontSize: "24px" }} />
          </Navbar.Toggle>

          {/* Desktop Navbar */}
          <Navbar.Collapse id="navbar-nav" className="d-none d-lg-flex">
            <Nav className="ms-auto">
              <Nav.Link as={Link} to="/" style={navLinkStyle}>
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/about" style={navLinkStyle}>
                About
              </Nav.Link>
              <Nav.Link as={Link} to="/services" style={navLinkStyle}>
                Services
              </Nav.Link>
              <Nav.Link as={Link} to="/apply-franchise" style={navLinkStyle}>
                Apply Franchise
              </Nav.Link>
              <Nav.Link as={Link} to="/apply-agent" style={navLinkStyle}>
                Apply Agent
              </Nav.Link>
              <Nav.Link as={Link} to="/contact" style={navLinkStyle}>
                Contact
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Offcanvas (Mobile Sidebar Menu) */}
      <Offcanvas
        className="offcanvas"
        show={showMobileMenu}
        onHide={() => setShowMobileMenu(false)}
        placement="end"
        id="offcanvas-menu"
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>
            <img src={logo} alt="Logo" style={{ height: "40px" }} />
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Nav className="flex-column">
            <Nav.Link as={Link} to="/" onClick={() => setShowMobileMenu(false)} style={mobileNavLink}>
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/about" onClick={() => setShowMobileMenu(false)} style={mobileNavLink}>
              About
            </Nav.Link>
            <Nav.Link as={Link} to="/services" onClick={() => setShowMobileMenu(false)} style={mobileNavLink}>
              Services
            </Nav.Link>
            <Nav.Link as={Link} to="/apply-franchise" onClick={() => setShowMobileMenu(false)} style={mobileNavLink}>
              Apply Franchise
            </Nav.Link>
            <Nav.Link as={Link} to="/apply-agent" onClick={() => setShowMobileMenu(false)} style={mobileNavLink}>
              Apply Agent
            </Nav.Link>
            <Nav.Link as={Link} to="/contact" onClick={() => setShowMobileMenu(false)} style={mobileNavLink}>
              Contact
            </Nav.Link>
          </Nav>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

// ✅ Navbar Link Styles
const navLinkStyle = {
  color: "white",
  fontSize: "16px",
  fontWeight: 500,
  textDecoration: "none",
  transition: "color 0.3s ease",
  marginRight: "15px",
};

// ✅ Mobile Navbar Styles
const mobileNavLink = {
  fontSize: "18px",
  fontWeight: "500",
  borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
  textDecoration: "none",
};

export default CustomNavbar;
