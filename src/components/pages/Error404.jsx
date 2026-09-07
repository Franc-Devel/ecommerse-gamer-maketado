import { Container } from "react-bootstrap";
import { Link } from "react-router";

const Error404 = () => {
  return (
    <Container className="py-5 text-center my-auto">
      <div className="epic-box p-5 mx-auto" style={{ maxWidth: "600px" }}>
        <div className="epic-logo-badge mb-4 mx-auto" style={{ width: "48px", height: "48px" }}>
          <i className="bi bi-exclamation-triangle-fill fs-4 text-dark"></i>
        </div>

        <div className="epic-subheading text-muted mb-2">ERROR 404</div>

        <h2 className="fs-2 fw-bold text-white mb-3">
          Página no encontrada
        </h2>

        <p className="text-muted small mb-4">
          Lo sentimos, no pudimos encontrar la página que buscas en Epic Games Store. Es posible que el enlace esté desactualizado o que el juego haya sido retirado de la tienda.
        </p>

        <div className="d-flex justify-content-center gap-3">
          <Link to="/" className="btn-epic-primary">
            VOLVER A LA TIENDA
          </Link>
          <Link to="/about" className="btn-epic-secondary">
            CONTACTAR SOPORTE
          </Link>
        </div>
      </div>
    </Container>
  );
};

export default Error404;
