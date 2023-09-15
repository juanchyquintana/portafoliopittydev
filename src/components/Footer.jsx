import { Container, Row, Col, Image } from "react-bootstrap";
import { BsInstagram, BsTwitch, BsGithub, BsLinkedin } from "react-icons/bs";
import { FaXTwitter } from "react-icons/fa6";
import pin from "../img/pin-svgrepo-com.svg";
import mail from "../img/mail-svgrepo-com.svg";

import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer className="border-top">
        <Container className="my-5">
          <Row>
            <Col md={6}>
              <div className="text-center">
                <Image src={pin} alt="ping" className="img-fluid img-footer" />
                <p className="text-uppercase">Tucumán, Argentina</p>
              </div>
            </Col>

            <Col md={6}>
              <div className="text-center">
                <Image src={mail} alt="mail" className="img-fluid img-footer" />
                <p className="text-uppercase">quintanajuanchy25@gmail.com</p>
              </div>
            </Col>
          </Row>
        </Container>

        <div className="bg-body-secondary ">
          <Container className="py-5">
            <Row>
              <Col lg={4}>
                <div>
                  <p className="text-uppercase fw-bold ">Sobre Mí</p>
                  <p>Mi nombre es Juan Diego Quintana, Full-Stack Developer</p>
                  <p>
                    PittyDev es el reflejo de mi ilusion por crecer como
                    profesional al dentro de la industria del desarrollo del
                    software. Como profesional y freelance, me he especializado
                    en desarrollo de páginas web con React.js
                  </p>
                </div>
              </Col>

              <Col lg={8}>
                <Row>
                  <div className="col-md-4 col-lg-3 text-center text-lg-start">
                    <p className="text-uppercase fw-bold fs-7">Últimos Post</p>
                    <ul className="list-unstyled">
                      <li>
                        <a
                          href="./pages/error.html"
                          className="link-secondary link-underline-opacity-0 link-underline-opacity-25-hover fs-7"
                        >
                          -
                        </a>
                      </li>
                    </ul>
                  </div>

                  <div className="col-md-4 col-lg-3 text-center text-lg-start">
                    <p className="text-uppercase fw-bold fs-7">
                      Últimos Proyectos
                    </p>
                    <ul className="list-unstyled">
                      <li>
                        <a
                          href="./pages/error.html"
                          className="link-secondary link-underline-opacity-0 link-underline-opacity-25-hover"
                        >
                          -
                        </a>
                      </li>
                    </ul>
                  </div>

                  <div className="col-md-4 col-lg-3 text-center text-lg-start">
                    <p className="text-uppercase fw-bold fs-7">Portafolio</p>
                    <ul className="list-unstyled">
                      <li>
                        <a
                          href="./pages/error.html"
                          className="link-secondary link-underline-opacity-0 link-underline-opacity-25-hover"
                        >
                          -
                        </a>
                      </li>
                    </ul>
                  </div>

                  <div className="col-md-4 col-lg-3 text-center text-lg-start">
                    <p className="text-uppercase fw-bold fs-7">Pittydev</p>
                    <ul className="list-unstyled">
                      <li>
                        <a
                          href="./pages/error.html"
                          className="link-secondary link-underline-opacity-0 link-underline-opacity-25-hover"
                        >
                          Sobre Mí
                        </a>
                      </li>
                      <li>
                        <a
                          href="./pages/error.html"
                          className="link-secondary link-underline-opacity-0 link-underline-opacity-25-hover"
                        >
                          Política de Cookies
                        </a>
                      </li>
                      <li>
                        <a
                          href="./pages/error.html"
                          className="link-secondary link-underline-opacity-0 link-underline-opacity-25-hover"
                        >
                          Política de Privacidad
                        </a>
                      </li>
                    </ul>
                  </div>
                </Row>
              </Col>
            </Row>

            <div className="mt-4 border-top d-flex justify-content-center ">
              <Row>
                <Col className="pt-4">
                  <div className="d-flex  gap-4">
                    <div>
                      <Link
                        to="https://twitter.com/juanchyquintana"
                        target="_blank"
                        className="link-opacity-75-hover"
                      >
                        <FaXTwitter />
                      </Link>
                    </div>

                    <div>
                      <Link
                        to="https://www.instagram.com/juanchyquintana"
                        target="_blank"
                        className="link-opacity-75-hover"
                      >
                        <BsInstagram />
                      </Link>
                    </div>

                    <div>
                      <Link
                        to="#"
                        target="_blank"
                        className="link-opacity-75-hover"
                      >
                        <BsTwitch />
                      </Link>
                    </div>

                    <div>
                      <Link
                        to="https://github.com/juanchyquintana"
                        target="_blank"
                        className="link-opacity-75-hover"
                      >
                        <BsGithub />
                      </Link>
                    </div>

                    <div>
                      <Link
                        to="https://www.linkedin.com/in/juan-diego-quintana-b5a186211/"
                        target="_blank"
                        className="link-opacity-75-hover"
                      >
                        <BsLinkedin />
                      </Link>
                    </div>
                  </div>
                </Col>
              </Row>
            </div>
          </Container>
        </div>

        <div className="bg-dark text-secondary text-center align-items-center  p-3">
          <Container>
            <p className="lead fs-6 fst-italic ">
              2023 Pittydev by Juan Diego Quintana v3. Building Software with ♥
              From Tucuman to the world | Política de Privacidad
            </p>
          </Container>
        </div>
      </footer>
    </>
  );
};

export default Footer;
