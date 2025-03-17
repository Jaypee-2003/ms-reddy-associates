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
      {/* Floating Navbar */}
      <Navbar
        expand="lg"
        fixed="top"
        className="floating-navbar"
      >
        <Container>
          {/* Logo */}
          <Navbar.Brand as={Link} to="/">
            <img src={logo} alt="Logo" className="logo" />
          </Navbar.Brand>

          {/* Mobile Toggle Button */}
          <Navbar.Toggle
            aria-controls="offcanvas-menu"
            onClick={() => setShowMobileMenu(!showMobileMenu)}
            className="navbar-toggler"
          >
            <FaBars className="menu-icon" />
          </Navbar.Toggle>

          {/* Desktop Navbar */}
          <Navbar.Collapse id="navbar-nav" className="d-none d-lg-flex">
            <Nav className="ms-auto">
              <Nav.Link as={Link} to="/" className="nav-link-custom">
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/about" className="nav-link-custom">
                About
              </Nav.Link>
              <Nav.Link as={Link} to="/services" className="nav-link-custom">
                Services
              </Nav.Link>
              <Nav.Link as={Link} to="/apply-franchise" className="nav-link-custom">
                Apply Franchise
              </Nav.Link>
              <Nav.Link as={Link} to="/apply-agent" className="nav-link-custom">
                Apply Agent
              </Nav.Link>
              <Nav.Link as={Link} to="/contact" className="nav-link-custom">
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
            <img src={logo} alt="Logo" className="logo" />
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Nav className="flex-column">
            <Nav.Link as={Link} to="/" onClick={() => setShowMobileMenu(false)} className="mobile-nav-link">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/about" onClick={() => setShowMobileMenu(false)} className="mobile-nav-link">
              About
            </Nav.Link>
            <Nav.Link as={Link} to="/services" onClick={() => setShowMobileMenu(false)} className="mobile-nav-link">
              Services
            </Nav.Link>
            <Nav.Link as={Link} to="/apply-franchise" onClick={() => setShowMobileMenu(false)} className="mobile-nav-link">
              Apply Franchise
            </Nav.Link>
            <Nav.Link as={Link} to="/apply-agent" onClick={() => setShowMobileMenu(false)} className="mobile-nav-link">
              Apply Agent
            </Nav.Link>
            <Nav.Link as={Link} to="/contact" onClick={() => setShowMobileMenu(false)} className="mobile-nav-link">
              Contact
            </Nav.Link>
          </Nav>
        </Offcanvas.Body>
      </Offcanvas>

      {/* Styles */}
      <style jsx>{`
        .floating-navbar {
          background: white;
          backdrop-filter: blur(10px);
          box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
          padding: 10px 20px;
          border-radius: 10px;
          position: fixed;
          top: 10px;
          left: 50%;
          transform: translateX(-50%);
          width: 90%;
          max-width: 1200px;
          transition: all 0.3s ease-in-out;
        }

        .logo {
          height: 50px;
          transition: transform 0.3s ease;
        }

        .menu-icon {
          color: black;
          font-size: 24px;
        }

        .nav-link-custom {
          color: black;
          font-size: 16px;
          font-weight: 500;
          text-decoration: none;
          transition: color 0.3s ease, transform 0.2s ease;
          margin-right: 15px;
        }
        .nav-link-custom:hover {
          color: #1e3a8a;
          transform: scale(1.1);
        }

        .mobile-nav-link {
          font-size: 18px;
          font-weight: 500;
          border-bottom: 1px solid rgba(0, 0, 0, 0.1);
          text-decoration: none;
          color: black;
          padding: 10px 0;
        }
        .mobile-nav-link:hover {
          color: #1e3a8a;
        }
      `}</style>
    </>
  );
};

export default CustomNavbar;
