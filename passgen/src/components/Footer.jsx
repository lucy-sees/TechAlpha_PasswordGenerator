import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailChimpForm";
import logo from "../assets/img/logo.png";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";
import navIcon4 from "../assets/img/nav-icon4.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <MailchimpForm />
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="#"><img src={navIcon1} alt="linkedin" /></a>
              <a href="#"><img src={navIcon2} alt="github" /></a>
              <a href="#"><img src={navIcon3} alt="instagram" /></a>
              <a href="#"><img src={navIcon4} alt="twitter" /></a>
            </div>
            <p>Copyright 2024. All Rights Reserved</p>
            <p>Made with love by Lucy</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
