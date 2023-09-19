import { Button, Form, Row, Col } from "react-bootstrap";
import { useState } from "react";
import Alerta from "./Alerta";

const Formulario = () => {

  const [validated, setValidated] = useState(false);
  const [ alerta, setAlerta ] = useState({})

  const [nombre, setNombre] = useState("");
  const [correo, setCorreo] = useState("");
  const [mensaje, setMensaje] = useState("");

  const { msg } = alerta;

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    if([nombre, correo, mensaje].includes("")) {
      setAlerta({
        msg: 'Todos los campos son obligatorios',
        error: true,
      })

      return
    }

    setValidated(true);
  };


  return (
    <section className="marginForm">
      <Row>
        <Col lg={6}>
          <h3>Métodos de Contactos</h3>

          <p className="fst-italic">
            <p className="fst-normal ">
              ¡Bienvenido al formulario de contacto!
            </p>
            Estamos encantados de que desees ponerte en contacto conmigo. En
            este espacio, tienes la oportunidad de comunicarte con pittydev para
            solicitar cualquier tipo de trabajo freelance o hacer consultas
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

        
        <Col lg={6} className="my-5">
          { msg && <Alerta alerta={msg} />}
          <Form className="my-4" noValidate validated={validated} onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Correo</Form.Label>
              <Form.Control
                type="email"
                placeholder="Ej: correo@correo.com"
                value={correo}
                onChange={ e => setCorreo(e.target.value)}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicText">
              <Form.Label>Nombre Completo</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ej: Juan Pedro"
                value={nombre}
                onChange={ e => setNombre(e.target.value)}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicText">
              <Form.Label>Mensaje</Form.Label>
              <Form.Control
                as="textarea"
                placeholder="Escriba su mensaje..."
                value={mensaje}
                onChange={ e => setMensaje(e.target.value)}
                required
              />
            </Form.Group>

            <Button variant="primary" type="submit">
              Enviar
            </Button>

          </Form>
        </Col>
      </Row>
    </section>
  );
};

export default Formulario;
