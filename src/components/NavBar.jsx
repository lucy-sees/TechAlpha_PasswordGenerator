import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import logo from '../assets/img/logo.png';
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';
import navIcon4 from '../assets/img/nav-icon4.svg';
import {
  BrowserRouter as Router
} from "react-router-dom";

export const NavBar = () => {

  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [])

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  }

  return (
    <Router>
      <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
        <Container>
          <Navbar.Brand href="/" className="logo">
            <img src={logo} alt="Logo" />
            <p><span>PassGen</span></p>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
              <Nav.Link href="#passgen" className={activeLink === 'passgen' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('passgen')}>Password Generator</Nav.Link>
            </Nav>
            <span className="navbar-text">
              <div className="social-icon">
                <a href="https://www.linkedin.com/in/lucy-wanjiru-mwangi"><img src={navIcon1} alt="linkedin" /></a>
                <a href="https://github.com/lucy-sees"><img src={navIcon2} alt="github" /></a>
                <a href="https://www.instagram.com/___the_lone_wolf__/"><img src={navIcon3} alt="instagram" /></a>
                <a href="https://twitter.com/lucy_w_mwangi"><img src={navIcon4} alt="twitter" /></a>
              </div>
              <a href="https://lucywanjirumwangi.me" target="_blank" rel="noopener noreferrer">
                <button className="btn-connect"><span>My Portfolio</span></button>
              </a>
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Router>
  )
}
