import { Container } from "react-bootstrap";
import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header";
import Formulario from "./components/Formulario";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <BrowserRouter>
        <Container fluid>
          
          <Header />
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
