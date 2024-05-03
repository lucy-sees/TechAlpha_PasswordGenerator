import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/img/logo.png";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";
// import navIcon4 from "../assets/img/nav-icon4.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6} className="logo-footer">
            <img src={logo} alt="Logo" />
            <p><span>PassGen</span></p>
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/lucy-wanjiru-mwangi"><img src={navIcon1} alt="linkedin" /></a>
              <a href="https://github.com/lucy-sees"><img src={navIcon2} alt="github" /></a>
              <a href="https://www.instagram.com/___the_lone_wolf__/"><img src={navIcon3} alt="instagram" /></a>
              {/* <a href="https://twitter.com/lucy_w_mwangi"><img src={navIcon4} alt="twitter" /></a> */}
            </div>

            <p>Copyright 2024. All Rights Reserved</p>
            <p>Made with love by Lucy♥♥</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
