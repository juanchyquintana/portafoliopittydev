import { Navbar, Container, Nav, Image } from "react-bootstrap";

const Header = () => {
  return (
    <>
      <Image src="../img/banner.jpg" alt="banner" />

      <Navbar expand="lg" className="bg-transparent">
        <Container>
          <Navbar.Brand href="#home" className="fs-3 text-primary font-comfortaa">pittydev</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav"/>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto text-center">
              <Nav.Link href="#home" className="text-uppercase fw-bold link-primary">Inicio</Nav.Link>
              <Nav.Link href="#link" className="text-uppercase fw-bold link-primary">Sobre Mí</Nav.Link>
              <Nav.Link href="#link" className="text-uppercase fw-bold link-primary">Portafolio</Nav.Link>
              <Nav.Link href="#link" className="text-uppercase fw-bold link-primary">Blog</Nav.Link>
              <Nav.Link href="#link" className="text-uppercase fw-bold link-primary">Contacto</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
