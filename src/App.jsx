import { Container } from "react-bootstrap";
import { BrowserRouter } from "react-router-dom";

import Header from "./components/Header";
import Formulario from "./components/Formulario";
import Footer from "./components/Footer";
import SobreMi from "./components/SobreMi";

function App() {
  return (
    <>
      <BrowserRouter>
        <Container>
          <Header />
        </Container>

        <Container>
        <SobreMi />
        </Container>

        <Container>
          <Formulario />
        </Container>

        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
