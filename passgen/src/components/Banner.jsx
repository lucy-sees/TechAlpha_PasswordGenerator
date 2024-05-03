import { Container, Row, Col } from "react-bootstrap";

export const Banner = () => {
  return (
    <section className="banner">
      <Container>
        <Row>
          <Col className="container">
            <h1>PassGen</h1>
            <p>Generate strong passwords for your accounts</p>
          </Col>
        </Row>
      </Container>
    </section>
  )
  
}
