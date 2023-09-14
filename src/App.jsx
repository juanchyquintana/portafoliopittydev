import { Container } from "react-bootstrap";
import Header from "./components/Header";
import Formulario from "./components/Formulario";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />

      <Container>
        <Formulario />
      </Container>

      <Footer />
    </>
  );
}

export default App;
