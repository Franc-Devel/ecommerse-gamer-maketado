import { Container, Row, Col, Card, Badge } from "react-bootstrap";

const MIEMBROS = [
  {
    nombre: "Francisco Delgado",
    rol: "Team Leader & Full Stack Developer",
    descripcion: "Líder técnico a cargo de la arquitectura general en React 19, modelado del catálogo de videojuegos, persistencia reactiva en LocalStorage, diseño de estado global y seguridad de rutas.",
    imagen: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80",
    habilidades: ["Team Leader", "React 19", "Vite", "JavaScript ES6+", "Arquitectura SPA"]
  },
  {
    nombre: "Franco Triviño",
    rol: "Scrum Master & Frontend Developer",
    descripcion: "Facilitador del marco ágil Scrum, responsable del backlog y sprints en Trello, desarrollo e interfaz de ROLLING GAMER, validación de formularios y experiencia de usuario.",
    imagen: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80",
    habilidades: ["Scrum Master", "Trello Ágil", "CSS3 / Bootstrap 5", "UI/UX Design", "Testing"]
  }
];

const About = () => {
  return (
    <Container className="py-5">
      {/* Header */}
      <div className="text-center mb-5">
        <span className="epic-subheading mb-2 d-block text-primary" style={{ color: "#0078f2" }}>
          EQUIPO DE DESARROLLO • ROLLINGCODE SCHOOL
        </span>
        <h1 className="fs-2 fs-md-1 fw-extrabold text-white mb-3" style={{ letterSpacing: "-0.5px" }}>
          Detrás de ROLLING GAMER
        </h1>
        <p className="text-muted lead max-w-2xl mx-auto" style={{ maxWidth: "720px", fontSize: "1.05rem" }}>
          Proyecto desarrollado exclusivamente por <strong>Francisco Delgado</strong> y <strong>Franco Triviño</strong> para el módulo de React en RollingCode School, implementando la plataforma de videojuegos ROLLING GAMER.
        </p>
      </div>

      {/* Team Cards (2 Members, balanced layout) */}
      <div className="mb-5">
        <div className="epic-subheading mb-4 text-center">
          Desarrolladores del Proyecto
        </div>
        <Row className="gy-4 justify-content-center">
          {MIEMBROS.map((m, idx) => (
            <Col md={6} lg={5} key={idx}>
              <Card className="epic-box h-100 p-4 text-center border-0">
                <div className="mx-auto mb-3" style={{ width: "120px", height: "120px" }}>
                  <img
                    src={m.imagen}
                    alt={m.nombre}
                    className="w-100 h-100 rounded-circle object-fit-cover border border-2 border-primary"
                    style={{ borderColor: "#0078f2" }}
                  />
                </div>
                <h4 className="text-white fw-bold mb-1">
                  {m.nombre}
                </h4>
                <div className="small fw-bold mb-3" style={{ color: "#0078f2" }}>
                  {m.rol}
                </div>
                <p className="small text-muted mb-4" style={{ lineHeight: "1.6" }}>
                  {m.descripcion}
                </p>
                <div className="d-flex flex-wrap justify-content-center gap-1 mt-auto">
                  {m.habilidades.map((h, i) => (
                    <Badge key={i} bg="dark" className="border border-secondary text-secondary small">
                      {h}
                    </Badge>
                  ))}
                </div>
              </Card>
            </Col>
          ))}
        </Row>
      </div>

      {/* Agile & Stack info */}
      <Row className="g-4 mb-4">
        <Col lg={7}>
          <div className="epic-box p-4 h-100">
            <span className="epic-subheading d-block mb-2 text-warning">
              METODOLOGÍA DE TRABAJO
            </span>
            <h4 className="fw-bold text-white mb-3">
              Organización Ágil (Scrum & Trello)
            </h4>
            <p className="text-muted small mb-3">
              Bajo el liderazgo de <strong>Franco Triviño (Scrum Master)</strong> y <strong>Francisco Delgado (Team Leader)</strong>, el equipo implementó Scrum con sprints iterativos para cubrir los requisitos del catálogo, persistencia, seguridad de rutas y el diseño temático de ROLLING GAMER.
            </p>
            <div className="d-flex flex-wrap gap-2 mb-4">
              <span className="badge bg-dark border border-secondary text-secondary">Sprint Planning</span>
              <span className="badge bg-dark border border-secondary text-secondary">Daily Standups</span>
              <span className="badge bg-dark border border-secondary text-secondary">Backlog Grooming</span>
              <span className="badge bg-dark border border-secondary text-secondary">Code Reviews</span>
            </div>
            <a
              href="https://trello.com"
              target="_blank"
              rel="noreferrer"
              className="btn-epic-secondary py-2 px-3 small w-100 w-sm-auto text-center"
            >
              <i className="bi bi-kanban me-2"></i> Abrir Tablero de Trello del Proyecto
            </a>
          </div>
        </Col>

        <Col lg={5}>
          <div className="epic-box p-4 h-100">
            <span className="epic-subheading d-block mb-2" style={{ color: "#0078f2" }}>
              ARQUITECTURA
            </span>
            <h4 className="fw-bold text-white mb-3">
              Stack Tecnológico
            </h4>
            <ul className="list-unstyled small text-muted d-flex flex-column gap-2 mb-0">
              <li className="d-flex align-items-center gap-2">
                <i className="bi bi-check2 text-primary"></i>
                <span><strong className="text-white">React 19:</strong> Hooks modernos (useState, useEffect, useMemo, useContext)</span>
              </li>
              <li className="d-flex align-items-center gap-2">
                <i className="bi bi-check2 text-primary"></i>
                <span><strong className="text-white">React Router v8:</strong> Enrutamiento SPA y rutas protegidas</span>
              </li>
              <li className="d-flex align-items-center gap-2">
                <i className="bi bi-check2 text-primary"></i>
                <span><strong className="text-white">Bootstrap 5:</strong> Rejilla responsiva y componentes UI</span>
              </li>
              <li className="d-flex align-items-center gap-2">
                <i className="bi bi-check2 text-primary"></i>
                <span><strong className="text-white">React Hook Form:</strong> Validación estricta de formularios</span>
              </li>
              <li className="d-flex align-items-center gap-2">
                <i className="bi bi-check2 text-primary"></i>
                <span><strong className="text-white">SweetAlert2:</strong> Diálogos y notificaciones interactivas</span>
              </li>
              <li className="d-flex align-items-center gap-2">
                <i className="bi bi-check2 text-primary"></i>
                <span><strong className="text-white">LocalStorage API:</strong> Persistencia completa de datos</span>
              </li>
            </ul>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default About;
