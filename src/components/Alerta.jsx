import { Alert } from "react-bootstrap"

const Alerta = ({alerta}) => {
  return (
    <>
        <Alert variant="danger" className="text-center fw-bold text-uppercase text-danger">
          {alerta}
        </Alert>

    </>
  );
}

export default Alerta