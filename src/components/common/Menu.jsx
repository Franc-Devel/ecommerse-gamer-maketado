import { useState } from "react";
import { Navbar, Container, Nav, Badge, Dropdown, Button } from "react-bootstrap";
import { NavLink, Link, useNavigate } from "react-router";
import { useAuth } from "../../context/AuthContext";
import { useUIModal } from "../../context/UIModalContext";
import Swal from "sweetalert2";

const Menu = () => {
  const { usuarioActual, esAdmin, logout, wishlistIds } = useAuth();
  const { abrirModal } = useUIModal();
  const navigate = useNavigate();
  const [menuAbierto, setMenuAbierto] = useState(false);

  const handleCambiarIdioma = () => {
    Swal.fire({
      toast: true,
      position: "top-end",
      icon: "info",
      title: "Región: Español (Latinoamérica)",
      background: "#202020",
      color: "#fff",
      timer: 1800,
      showConfirmButton: false
    });
  };

  const handleCerrarSesion = () => {
    setMenuAbierto(false);
    Swal.fire({
      title: "¿Cerrar sesión?",
      text: "¿Deseas salir de tu cuenta de ROLLING GAMER?",
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
      {/* Upper Strip */}
      <div className="epic-topbar d-none d-md-block">
        <Container className="d-flex justify-content-between align-items-center">
          <div className="d-flex align-items-center gap-1">
            <Link to="/" className="epic-topbar-link active text-decoration-none">
              TIENDA
            </Link>
            <button
              type="button"
              onClick={() => abrirModal("distribucion")}
              className="epic-topbar-link text-muted bg-transparent border-0"
              title="Información para desarrolladores y creadores"
            >
              DISTRIBUCIÓN
            </button>
            <button
              type="button"
              onClick={() => abrirModal("noticias")}
              className="epic-topbar-link text-muted bg-transparent border-0"
              title="Noticias, parches y eventos"
            >
              NOTICIAS
            </button>
            <button
              type="button"
              onClick={() => abrirModal("ayuda")}
              className="epic-topbar-link text-muted bg-transparent border-0"
              title="Preguntas frecuentes y soporte"
            >
              AYUDA
            </button>
          </div>
          <div className="d-flex align-items-center gap-3 text-secondary small">
            <button
              type="button"
              onClick={handleCambiarIdioma}
              className="bg-transparent border-0 text-secondary p-0 small hover-white"
              title="Idioma seleccionado: Español"
            >
              <i className="bi bi-globe me-1"></i> ES
            </button>
            <Link to="/about" className="text-secondary text-decoration-none hover-white">
              RollingCode Cohorte 9P
            </Link>
          </div>
        </Container>
      </div>

      {/* Main Epic Navbar */}
      <Navbar
        expand="lg"
        className="epic-navbar sticky-top py-2"
        variant="dark"
        expanded={menuAbierto}
        onToggle={setMenuAbierto}
      >
        <Container>
          {/* Logo */}
          <Navbar.Brand
            as={Link}
            to="/"
            onClick={() => setMenuAbierto(false)}
            className="d-flex align-items-center gap-2 me-2 me-sm-4 text-decoration-none"
          >
            <div className="epic-logo-badge" style={{ width: "34px", height: "34px", fontSize: "1.1rem" }}>
              <i className="bi bi-controller text-dark"></i>
            </div>
            <div className="d-flex flex-column leading-none">
              <span className="fw-bolder fs-6 fs-sm-5 text-white tracking-wide mb-0" style={{ letterSpacing: "-0.5px" }}>
                ROLLING GAMER
              </span>
              <span className="epic-subheading" style={{ fontSize: "0.62rem", marginTop: "-3px" }}>
                STORE
              </span>
            </div>
          </Navbar.Brand>

          <Navbar.Toggle
            aria-controls="epic-main-nav"
            className="border-0 shadow-none px-2"
            onClick={() => setMenuAbierto(!menuAbierto)}
          />

          <Navbar.Collapse id="epic-main-nav">
            {/* Nav Links styled like Epic Store */}
            <Nav className="me-auto my-2 my-lg-0 gap-1">
              <NavLink
                to="/"
                end
                onClick={() => setMenuAbierto(false)}
                className={({ isActive }) => `epic-nav-link ${isActive ? "active" : ""}`}
              >
                Descubrir
              </NavLink>

              <button
                type="button"
                onClick={() => {
                  setMenuAbierto(false);
                  abrirModal("noticias");
                }}
                className="epic-nav-link bg-transparent border-0 text-start"
              >
                Noticias
              </button>

              <button
                type="button"
                onClick={() => {
                  setMenuAbierto(false);
                  abrirModal("ayuda");
                }}
                className="epic-nav-link bg-transparent border-0 text-start"
              >
                Ayuda
              </button>

              <NavLink
                to="/about"
                onClick={() => setMenuAbierto(false)}
                className={({ isActive }) => `epic-nav-link ${isActive ? "active" : ""}`}
              >
                Equipo & Nosotros
              </NavLink>

              {usuarioActual && (
                <NavLink
                  to="/wishlist"
                  onClick={() => setMenuAbierto(false)}
                  className={({ isActive }) => `epic-nav-link ${isActive ? "active" : ""}`}
                >
                  Lista de Deseos
                  {wishlistIds.length > 0 && (
                    <Badge bg="primary" pill className="ms-2" style={{ backgroundColor: "#0078f2" }}>
                      {wishlistIds.length}
                    </Badge>
                  )}
                </NavLink>
              )}

              {esAdmin && (
                <NavLink
                  to="/admin"
                  onClick={() => setMenuAbierto(false)}
                  className={({ isActive }) => `epic-nav-link ${isActive ? "active" : ""}`}
                >
                  <Badge bg="warning" text="dark" className="me-1">ADMIN</Badge> Panel
                </NavLink>
              )}
            </Nav>

            {/* Right Account & Auth section */}
            <div className="d-flex align-items-center gap-3 mt-3 mt-lg-0 w-100 w-lg-auto">
              {usuarioActual ? (
                <Dropdown align="end" className="w-100 w-lg-auto">
                  <Dropdown.Toggle
                    variant="dark"
                    id="dropdown-epic-user"
                    className="d-flex align-items-center gap-2 bg-transparent border-0 p-1 w-100 w-lg-auto text-start"
                  >
                    <div
                      className="rounded-circle d-flex align-items-center justify-content-center text-white flex-shrink-0"
                      style={{
                        width: "34px",
                        height: "34px",
                        background: esAdmin ? "#f59e0b" : "#0078f2"
                      }}
                    >
                      <i className={`bi ${esAdmin ? "bi-shield-fill-check" : "bi-person-fill"}`}></i>
                    </div>
                    <span className="text-white fw-semibold small">
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
                        {esAdmin ? "Administrador Rolling" : "Cuenta ROLLING GAMER"}
                      </Badge>
                    </div>

                    <Dropdown.Item as={Link} to="/wishlist" onClick={() => setMenuAbierto(false)} className="small py-2">
                      <i className="bi bi-heart me-2 text-danger"></i> Lista de Deseos ({wishlistIds.length})
                    </Dropdown.Item>

                    {esAdmin && (
                      <Dropdown.Item as={Link} to="/admin" onClick={() => setMenuAbierto(false)} className="small py-2">
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
                <div className="d-flex flex-column flex-sm-row gap-2 w-100 w-lg-auto">
                  <Button
                    as={Link}
                    to="/login"
                    onClick={() => setMenuAbierto(false)}
                    className="btn-epic-secondary py-2 px-3 small w-100 w-sm-auto justify-content-center"
                    style={{ fontSize: "0.78rem" }}
                  >
                    <i className="bi bi-person me-1"></i> Iniciar Sesión
                  </Button>
                  <Button
                    as={Link}
                    to="/login"
                    state={{ tab: "registro" }}
                    onClick={() => setMenuAbierto(false)}
                    className="btn-epic-primary py-2 px-3 small w-100 w-sm-auto justify-content-center"
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
