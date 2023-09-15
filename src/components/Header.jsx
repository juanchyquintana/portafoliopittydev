import { Navbar, Container, Nav, Image, Row, Col} from "react-bootstrap";
import banner from '../img/banner.jpg'
import me from '../img/me.png'

const Header = () => {
  return (
    <>
      <Image src={banner} alt="banner" className="bg-image" />

      <Navbar expand="lg" className="bg-transparent" fixed="top">
        <Container>
          <Navbar.Brand href="#home" className="fs-3 text-white font-comfortaa">pittydev</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav"/>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto text-center">
              <Nav.Link href="#home" className="text-uppercase fw-bold link-light ">Inicio</Nav.Link>
              <Nav.Link href="#link" className="text-uppercase fw-bold link-light ">Sobre Mí</Nav.Link>
              <Nav.Link href="#link" className="text-uppercase fw-bold link-light ">Portafolio</Nav.Link>
              <Nav.Link href="#link" className="text-uppercase fw-bold link-light ">Blog</Nav.Link>
              <Nav.Link href="#link" className="text-uppercase fw-bold link-light ">Contacto</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Container className="main-info">
        <Row>
          <Col md={6}>

          </Col>

          <Col md={6} className="h-100">
            <Image src={me} alt="" className="img-fluid" />
          </Col>

        </Row>
      </Container>
    </>
  );
};

export default Header;
