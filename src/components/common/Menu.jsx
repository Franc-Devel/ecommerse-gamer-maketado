import { Navbar, Container, Nav, Badge, Dropdown, Button } from "react-bootstrap";
import { NavLink, Link, useNavigate } from "react-router";
import { useAuth } from "../../context/AuthContext";
import Swal from "sweetalert2";

const Menu = () => {
  const { usuarioActual, esAdmin, logout, wishlistIds } = useAuth();
  const navigate = useNavigate();

  const handleCerrarSesion = () => {
    Swal.fire({
      title: "¿Cerrar sesión?",
      text: "¿Deseas salir de tu cuenta de Epic Games Store?",
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#0078f2",
      cancelButtonColor: "#3e3e46",
      confirmButtonText: "Cerrar Sesión",
      cancelButtonText: "Cancelar"
    }).then((result) => {
      if (result.isConfirmed) {
        logout();
        navigate("/");
      }
    });
  };

  return (
    <>
      {/* Epic Games Store Upper Strip */}
      <div className="epic-topbar d-none d-md-block">
        <Container className="d-flex justify-content-between align-items-center">
          <div className="d-flex align-items-center gap-3">
            <span className="epic-topbar-link active">TIENDA</span>
            <span className="epic-topbar-link text-muted">DISTRIBUCIÓN</span>
            <span className="epic-topbar-link text-muted">NOTICIAS</span>
            <span className="epic-topbar-link text-muted">AYUDA</span>
          </div>
          <div className="d-flex align-items-center gap-3 text-secondary small">
            <span><i className="bi bi-globe me-1"></i> ES</span>
            <span>RollingCode Cohorte 9P</span>
          </div>
        </Container>
      </div>

      {/* Main Epic Navbar */}
      <Navbar expand="lg" className="epic-navbar sticky-top py-2" variant="dark">
        <Container>
          {/* Epic Shield Logo */}
          <Navbar.Brand as={Link} to="/" className="d-flex align-items-center gap-2 me-4 text-decoration-none">
            <div className="epic-logo-badge">
              <i className="bi bi-controller fs-5 text-dark"></i>
            </div>
            <div className="d-flex flex-column leading-none">
              <span className="fw-bolder fs-5 text-white tracking-wide mb-0" style={{ letterSpacing: "-0.5px" }}>
                EPIC GAMES
              </span>
              <span className="epic-subheading" style={{ fontSize: "0.65rem", marginTop: "-3px" }}>
                STORE
              </span>
            </div>
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="epic-main-nav" className="border-0 shadow-none" />

          <Navbar.Collapse id="epic-main-nav">
            {/* Nav Links styled like Epic Store */}
            <Nav className="me-auto my-2 my-lg-0 gap-1">
              <NavLink to="/" end className={({ isActive }) => `epic-nav-link ${isActive ? "active" : ""}`}>
                Descubrir
              </NavLink>

              <NavLink to="/about" className={({ isActive }) => `epic-nav-link ${isActive ? "active" : ""}`}>
                Equipo & Nosotros
              </NavLink>

              {usuarioActual && (
                <NavLink to="/wishlist" className={({ isActive }) => `epic-nav-link ${isActive ? "active" : ""}`}>
                  Lista de Deseos
                  {wishlistIds.length > 0 && (
                    <Badge bg="primary" pill className="ms-2" style={{ backgroundColor: "#0078f2" }}>
                      {wishlistIds.length}
                    </Badge>
                  )}
                </NavLink>
              )}

              {esAdmin && (
                <NavLink to="/admin" className={({ isActive }) => `epic-nav-link ${isActive ? "active" : ""}`}>
                  <Badge bg="warning" text="dark" className="me-1">ADMIN</Badge> Panel
                </NavLink>
              )}
            </Nav>

            {/* Right Account & Auth section */}
            <div className="d-flex align-items-center gap-3 mt-3 mt-lg-0">
              {usuarioActual ? (
                <Dropdown align="end">
                  <Dropdown.Toggle
                    variant="dark"
                    id="dropdown-epic-user"
                    className="d-flex align-items-center gap-2 bg-transparent border-0 p-1"
                  >
                    <div
                      className="rounded-circle d-flex align-items-center justify-content-center text-white"
                      style={{
                        width: "34px",
                        height: "34px",
                        background: esAdmin ? "#f59e0b" : "#0078f2"
                      }}
                    >
                      <i className={`bi ${esAdmin ? "bi-shield-fill-check" : "bi-person-fill"}`}></i>
                    </div>
                    <span className="text-white fw-semibold small d-none d-sm-inline">
                      {usuarioActual.nombre}
                    </span>
                  </Dropdown.Toggle>

                  <Dropdown.Menu className="dropdown-menu-dark border-secondary shadow-lg py-2" style={{ background: "#202020" }}>
                    <div className="px-3 py-2 border-bottom border-secondary border-opacity-25 mb-1">
                      <div className="fw-bold text-light small">{usuarioActual.nombre}</div>
                      <div className="text-muted small text-truncate" style={{ maxWidth: "200px", fontSize: "0.75rem" }}>
                        {usuarioActual.email}
                      </div>
                      <Badge bg={esAdmin ? "warning" : "primary"} text={esAdmin ? "dark" : "white"} className="mt-1" style={{ fontSize: "0.65rem" }}>
                        {esAdmin ? "Administrador Epic" : "Cuenta Epic Games"}
                      </Badge>
                    </div>

                    <Dropdown.Item as={Link} to="/wishlist" className="small py-2">
                      <i className="bi bi-heart me-2 text-danger"></i> Lista de Deseos ({wishlistIds.length})
                    </Dropdown.Item>

                    {esAdmin && (
                      <Dropdown.Item as={Link} to="/admin" className="small py-2">
                        <i className="bi bi-speedometer2 me-2 text-warning"></i> Panel de Administración
                      </Dropdown.Item>
                    )}

                    <Dropdown.Divider className="border-secondary border-opacity-25" />

                    <Dropdown.Item onClick={handleCerrarSesion} className="small py-2 text-danger">
                      <i className="bi bi-box-arrow-right me-2"></i> Cerrar Sesión
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              ) : (
                <div className="d-flex gap-2">
                  <Button
                    as={Link}
                    to="/login"
                    className="btn-epic-secondary py-2 px-3 small"
                    style={{ fontSize: "0.78rem" }}
                  >
                    <i className="bi bi-person me-1"></i> Iniciar Sesión
                  </Button>
                  <Button
                    as={Link}
                    to="/login"
                    state={{ tab: "registro" }}
                    className="btn-epic-primary py-2 px-3 small"
                    style={{ fontSize: "0.78rem" }}
                  >
                    Registrarse
                  </Button>
                </div>
              )}
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Menu;
