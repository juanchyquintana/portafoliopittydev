import { Button, Form, Row, Col } from "react-bootstrap";
const Formulario = () => {
  return (
    <Form>
      <Row>
        <Col md={6}>
          <h3>Métodos de Contactos</h3>

          <p className="fst-italic">
            <p className="fst-normal ">
              ¡Bienvenido al formulario de contacto!
            </p>
            Estamos encantados de que desees ponerte en contacto conmigo.
            En este espacio, tienes la oportunidad de comunicarte con pittydev
            para solicitar cualquier tipo de trabajo freelance o hacer consultas
            relacionadas con nuestros servicios como programador.
          </p>

          <p className="fst-italic ">
            <span className="fw-bold">¿Cómo podemos ayudarte?</span> Este
            formulario está diseñado para ser tu punto de acceso directo a
            nuestros servicios de programación y desarrollo. Ya sea que
            necesites ayuda con un proyecto específico, tengas preguntas
            técnicas o desees discutir una colaboración freelance, estamos aquí
            para escucharte y trabajar contigo.
          </p>

          <p className="fst-italic ">
            <span className="fw-bold">¿Qué tipo de trabajo ofrecemos?</span>{" "}
            Como programadores, estamos especializados en una amplia gama de
            tecnologías y lenguajes de programación. Algunos de nuestros
            servicios incluyen: Desarrollo de sitios web y aplicaciones web.
            Programación de aplicaciones móviles para Android y iOS. Desarrollo
            de software a medida. Soluciones de comercio electrónico.
            Optimización de rendimiento y seguridad de sitios web. Consultoría
            técnica y asesoramiento en proyectos de desarrollo.
          </p>
          <p className="fst-italic ">
            {" "}
            <span className="fw-bold">¿Cómo funciona?</span> ¿Cómo funciona?
            Simplemente completa el formulario a continuación con tu información
            de contacto y una breve descripción de tu proyecto o consulta. Nos
            pondremos en contacto contigo lo antes posible para discutir los
            detalles y encontrar la mejor manera de ayudarte.
          </p>
        </Col>

        <Col md={6}>2</Col>
      </Row>
    </Form>
  );
};

export default Formulario;
