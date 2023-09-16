import {
  Navbar,
  Container,
  Nav,
  Image,
  Row,
  Col,
  Button,
} from "react-bootstrap";
import { useRef } from "react";
import banner from "../img/banner.jpg";
import me from "../img/banner2.jpg"

const Header = () => {
  const bgColorHeader = useRef(null);

  window.addEventListener("scroll", () => {
    if (window.scrollY >= 50) {
      bgColorHeader.current.classList.add("navbar-scrolled");
    } else if (window.scrollY < 50) {
      bgColorHeader.current.classList.remove("navbar-scrolled");
    }
  });

  return (
    <>
      <Image src={me} alt="banner" className="bg-image" />

      <Navbar
        expand="lg"
        className="navbar navbar-dark"
        fixed="top"
        ref={bgColorHeader}
      >
        <Container>
          <Navbar.Brand href="#home" className="fs-3 text-white font-comfortaa">
            pittydev
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto text-center">
              <Nav.Link
                href="#home"
                className="text-uppercase fw-bold link-light "
              >
                Inicio
              </Nav.Link>
              <Nav.Link
                href="#link"
                className="text-uppercase fw-bold link-light "
              >
                Sobre Mí
              </Nav.Link>
              <Nav.Link
                href="#link"
                className="text-uppercase fw-bold link-light "
              >
                Portafolio
              </Nav.Link>
              <Nav.Link
                href="#link"
                className="text-uppercase fw-bold link-light "
              >
                Blog
              </Nav.Link>
              <Nav.Link
                href="#link"
                className="text-uppercase fw-bold link-light "
              >
                Contacto
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Container className="main-info">
        <Row>
          <Col>
            <div className="d-flex justify-content-center marginButton">
              <Button variant="outline-primary px-5 py-3">¡Hola!</Button>
            </div>

            <article className="typing-effect text-white ">Hola, soy Juan Diego...</article>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Header;
