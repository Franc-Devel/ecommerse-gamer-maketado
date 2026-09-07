import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router";

const Footer = () => {
  return (
    <footer className="epic-footer pt-5 pb-4 mt-5">
      <Container>
        {/* Social Icons row */}
        <div className="d-flex justify-content-between align-items-center mb-4 pb-3 border-bottom border-secondary border-opacity-25">
          <div className="d-flex align-items-center gap-3 fs-5">
            <a href="https://facebook.com" target="_blank" rel="noreferrer" className="text-secondary hover-white" aria-label="Facebook">
              <i className="bi bi-facebook"></i>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer" className="text-secondary hover-white" aria-label="Twitter">
              <i className="bi bi-twitter-x"></i>
            </a>
            <a href="https://youtube.com" target="_blank" rel="noreferrer" className="text-secondary hover-white" aria-label="YouTube">
              <i className="bi bi-youtube"></i>
            </a>
          </div>

          <a href="#top" className="text-secondary small text-decoration-none hover-white">
            <i className="bi bi-chevron-up me-1"></i> Volver arriba
          </a>
        </div>

        {/* Resources Columns in Epic Style */}
        <Row className="gy-4 mb-4 small">
          <Col md={4}>
            <div className="epic-subheading mb-3">Recursos de Epic Games</div>
            <ul className="list-unstyled d-flex flex-column gap-2 text-muted">
              <li><Link to="/" className="text-muted text-decoration-none hover-white">Tienda y Descubrir</Link></li>
              <li><Link to="/about" className="text-muted text-decoration-none hover-white">Equipo de Desarrollo RollingCode</Link></li>
              <li><Link to="/wishlist" className="text-muted text-decoration-none hover-white">Lista de Deseos</Link></li>
              <li><Link to="/admin" className="text-muted text-decoration-none hover-white">Portal de Administración</Link></li>
            </ul>
          </Col>

          <Col md={4}>
            <div className="epic-subheading mb-3">Términos y Servicios</div>
            <ul className="list-unstyled d-flex flex-column gap-2 text-muted">
              <li>Términos del Servicio de Epic</li>
              <li>Política de Privacidad</li>
              <li>Política de Reembolso de la Tienda</li>
              <li>Seguridad de la Cuenta</li>
            </ul>
          </Col>

          <Col md={4}>
            <div className="epic-subheading mb-3">Proyecto Académico RollingCode</div>
            <p className="text-muted mb-2">
              Esta plataforma es una recreación temática de <strong>Epic Games Store</strong> diseñada y desarrollada con fines educativos para el módulo Full Stack de RollingCode School (Cohorte 9P).
            </p>
            <div className="text-muted small">
              Tecnologías: React 19, React Router v8, Bootstrap 5, LocalStorage.
            </div>
          </Col>
        </Row>

        <hr className="border-secondary border-opacity-25 my-4" />

        {/* Copyright notice */}
        <div className="d-flex flex-column flex-md-row justify-content-between align-items-center gap-2 small text-muted">
          <div>
            &copy; {new Date().getFullYear()}, Epic Games, Inc. Todos los derechos reservados. Epic, Epic Games, el logotipo de Epic Games, Fortnite y Unreal Engine son marcas comerciales o registradas de Epic Games, Inc.
          </div>
          <div className="d-flex gap-3 text-nowrap">
            <span>Privacidad</span>
            <span>•</span>
            <span>Condiciones</span>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
