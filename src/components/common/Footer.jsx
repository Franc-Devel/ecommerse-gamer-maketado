import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router";
import { useUIModal } from "../../context/UIModalContext";

const Footer = () => {
  const { abrirModal } = useUIModal();

  const scrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="epic-footer pt-5 pb-4 mt-5">
      <Container>
        {/* Social Icons row */}
        <div className="d-flex justify-content-between align-items-center mb-4 pb-3 border-bottom border-secondary border-opacity-25">
          <div className="d-flex align-items-center gap-3 fs-5">
            <a href="https://facebook.com" target="_blank" rel="noreferrer" className="text-secondary hover-white" aria-label="Facebook" title="Facebook Oficial">
              <i className="bi bi-facebook"></i>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer" className="text-secondary hover-white" aria-label="Twitter" title="Twitter / X Oficial">
              <i className="bi bi-twitter-x"></i>
            </a>
            <a href="https://youtube.com" target="_blank" rel="noreferrer" className="text-secondary hover-white" aria-label="YouTube" title="Canal de YouTube">
              <i className="bi bi-youtube"></i>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="text-secondary hover-white" aria-label="Instagram" title="Instagram Oficial">
              <i className="bi bi-instagram"></i>
            </a>
            <a href="https://discord.com" target="_blank" rel="noreferrer" className="text-secondary hover-white" aria-label="Discord" title="Comunidad de Discord">
              <i className="bi bi-discord"></i>
            </a>
          </div>

          <button
            type="button"
            onClick={scrollToTop}
            className="btn btn-link text-secondary small text-decoration-none hover-white p-0 d-flex align-items-center"
            title="Volver a la parte superior de la página"
          >
            <i className="bi bi-chevron-up me-1"></i> Volver arriba
          </button>
        </div>

        {/* Resources Columns in Epic Style */}
        <Row className="gy-4 mb-4 small">
          <Col md={4}>
            <div className="epic-subheading mb-3">Recursos de ROLLING GAMER</div>
            <ul className="list-unstyled d-flex flex-column gap-2 text-muted">
              <li>
                <Link to="/" className="text-muted text-decoration-none hover-white">
                  Tienda y Descubrir
                </Link>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => abrirModal("noticias")}
                  className="btn btn-link p-0 text-muted text-decoration-none hover-white small text-start border-0"
                >
                  Noticias & Actualizaciones del Catálogo
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => abrirModal("ayuda")}
                  className="btn btn-link p-0 text-muted text-decoration-none hover-white small text-start border-0"
                >
                  Centro de Ayuda y Preguntas Frecuentes
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => abrirModal("distribucion")}
                  className="btn btn-link p-0 text-muted text-decoration-none hover-white small text-start border-0"
                >
                  Distribución & Publicación de Juegos
                </button>
              </li>
              <li>
                <Link to="/wishlist" className="text-muted text-decoration-none hover-white">
                  Lista de Deseos
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-muted text-decoration-none hover-white">
                  Equipo de Desarrollo RollingCode
                </Link>
              </li>
              <li>
                <Link to="/admin" className="text-muted text-decoration-none hover-white">
                  Portal de Administración
                </Link>
              </li>
            </ul>
          </Col>

          <Col md={4}>
            <div className="epic-subheading mb-3">Términos y Servicios</div>
            <ul className="list-unstyled d-flex flex-column gap-2 text-muted">
              <li>
                <button
                  type="button"
                  onClick={() => abrirModal("terminos")}
                  className="btn btn-link p-0 text-muted text-decoration-none hover-white small text-start border-0"
                >
                  Términos del Servicio de ROLLING GAMER
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => abrirModal("privacidad")}
                  className="btn btn-link p-0 text-muted text-decoration-none hover-white small text-start border-0"
                >
                  Política de Privacidad
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => abrirModal("reembolsos")}
                  className="btn btn-link p-0 text-muted text-decoration-none hover-white small text-start border-0"
                >
                  Política de Reembolso de la Tienda (14 Días)
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => abrirModal("seguridad")}
                  className="btn btn-link p-0 text-muted text-decoration-none hover-white small text-start border-0"
                >
                  Seguridad y Protección de la Cuenta
                </button>
              </li>
            </ul>
          </Col>

          <Col md={4}>
            <div className="epic-subheading mb-3">Proyecto Académico RollingCode</div>
            <p className="text-muted mb-2">
              Esta plataforma es la tienda gamer <strong>ROLLING GAMER</strong> diseñada y desarrollada con fines educativos para el módulo Full Stack de RollingCode School (Cohorte 9P).
            </p>
            <div className="text-muted small mb-2">
              Tecnologías: React 19, React Router v8, Bootstrap 5, LocalStorage.
            </div>
            <Link to="/about" className="btn-epic-secondary py-1 px-2 small" style={{ fontSize: "0.75rem" }}>
              <i className="bi bi-people me-1"></i> Conoce al Equipo
            </Link>
          </Col>
        </Row>

        <hr className="border-secondary border-opacity-25 my-4" />

        {/* Copyright notice and legal modal triggers */}
        <div className="d-flex flex-column flex-md-row justify-content-between align-items-center gap-2 small text-muted">
          <div>
            &copy; {new Date().getFullYear()}, ROLLING GAMER, Inc. Todos los derechos reservados.
          </div>
          <div className="d-flex gap-3 text-nowrap">
            <button
              type="button"
              onClick={() => abrirModal("privacidad")}
              className="btn btn-link p-0 text-muted text-decoration-none hover-white small border-0"
            >
              Privacidad
            </button>
            <span>•</span>
            <button
              type="button"
              onClick={() => abrirModal("terminos")}
              className="btn btn-link p-0 text-muted text-decoration-none hover-white small border-0"
            >
              Condiciones
            </button>
            <span>•</span>
            <button
              type="button"
              onClick={() => abrirModal("reembolsos")}
              className="btn btn-link p-0 text-muted text-decoration-none hover-white small border-0"
            >
              Reembolsos
            </button>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
