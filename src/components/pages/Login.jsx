import { useState } from "react";
import { Container, Row, Col, Card, Form, Button, Tabs, Tab, Alert } from "react-bootstrap";
import { useNavigate, useLocation } from "react-router";
import { useAuth } from "../../context/AuthContext";
import Swal from "sweetalert2";

const Login = () => {
  const { login, register } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const defaultTab = location.state?.tab || "login";
  const [activeTab, setActiveTab] = useState(defaultTab);

  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [errorLogin, setErrorLogin] = useState("");
  const [verPasswordLogin, setVerPasswordLogin] = useState(false);

  const [regNombre, setRegNombre] = useState("");
  const [regEmail, setRegEmail] = useState("");
  const [regPassword, setRegPassword] = useState("");
  const [regConfirmPassword, setRegConfirmPassword] = useState("");
  const [errorRegistro, setErrorRegistro] = useState("");
  const [verPasswordReg, setVerPasswordReg] = useState(false);

  const cargarCredencialesDemo = (tipo) => {
    if (tipo === "admin") {
      setLoginEmail("admin@rollinggames.com");
      setLoginPassword("admin123");
      setErrorLogin("");
    } else {
      setLoginEmail("user@rollinggames.com");
      setLoginPassword("user123");
      setErrorLogin("");
    }
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    setErrorLogin("");

    if (!loginEmail.trim() || !loginPassword.trim()) {
      setErrorLogin("Por favor, completa todos los campos requeridos.");
      return;
    }

    const res = login(loginEmail, loginPassword);
    if (res.success) {
      Swal.fire({
        title: `¡Hola, ${res.user.nombre}!`,
        text: res.user.rol === "admin" ? "Has iniciado sesión con permisos de Administrador" : "Sesión iniciada en ROLLING GAMER",
        icon: "success",
        confirmButtonColor: "#0078f2",
        timer: 1800,
        showConfirmButton: false
      });

      if (res.user.rol === "admin") {
        navigate("/admin");
      } else {
        navigate("/");
      }
    } else {
      setErrorLogin(res.message || "Correo electrónico o contraseña incorrectos.");
    }
  };

  const handleRegisterSubmit = (e) => {
    e.preventDefault();
    setErrorRegistro("");

    if (!regNombre.trim() || !regEmail.trim() || !regPassword.trim() || !regConfirmPassword.trim()) {
      setErrorRegistro("Todos los campos son obligatorios.");
      return;
    }

    if (regNombre.trim().length < 3) {
      setErrorRegistro("El nombre en pantalla debe tener al menos 3 caracteres.");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(regEmail)) {
      setErrorRegistro("Ingresa un correo electrónico válido.");
      return;
    }

    if (regPassword.length < 6) {
      setErrorRegistro("La contraseña debe tener un mínimo de 6 caracteres.");
      return;
    }

    if (regPassword !== regConfirmPassword) {
      setErrorRegistro("Las contraseñas no coinciden.");
      return;
    }

    const res = register(regNombre, regEmail, regPassword);
    if (res.success) {
      Swal.fire({
        title: "¡Cuenta ROLLING GAMER Creada!",
        text: `Bienvenido a la comunidad de ROLLING GAMER, ${res.user.nombre}.`,
        icon: "success",
        confirmButtonColor: "#0078f2",
        timer: 1800,
        showConfirmButton: false
      });
      navigate("/");
    } else {
      setErrorRegistro(res.message);
    }
  };

  return (
    <Container className="py-4 py-sm-5 px-3">
      <Row className="justify-content-center">
        <Col md={10} lg={7} xl={5}>
          {/* Quick Demo Access Bar */}
          <div className="epic-box p-3 mb-4 text-center">
            <span className="epic-subheading d-block mb-2 text-warning">
              <i className="bi bi-shield-check me-1"></i> Acceso Rápido para Pruebas del Evaluador
            </span>
            <div className="d-flex justify-content-center gap-2 flex-wrap">
              <Button
                variant="outline-warning"
                size="sm"
                className="py-1 px-3 w-100 w-sm-auto"
                onClick={() => {
                  setActiveTab("login");
                  cargarCredencialesDemo("admin");
                }}
              >
                Cargar Admin (Francisco Delgado)
              </Button>
              <Button
                variant="outline-info"
                size="sm"
                className="py-1 px-3 w-100 w-sm-auto"
                onClick={() => {
                  setActiveTab("login");
                  cargarCredencialesDemo("user");
                }}
              >
                Cargar Usuario (Franco Triviño)
              </Button>
            </div>
          </div>

          {/* Main Epic Auth Card */}
          <Card className="epic-box p-3 p-sm-4 border-0 shadow">
            <div className="text-center mb-4">
              <div className="epic-logo-badge mb-3 mx-auto">
                <i className="bi bi-controller fs-4 text-dark"></i>
              </div>
              <h2 className="fs-5 fs-sm-4 fw-bold text-white mb-1">
                {activeTab === "login" ? "INICIAR SESIÓN EN ROLLING GAMER" : "CREAR CUENTA EN ROLLING GAMER"}
              </h2>
              <p className="text-muted small">
                Accede a tu biblioteca de juegos, compras y lista de deseos
              </p>
            </div>

            <Tabs
              activeKey={activeTab}
              onSelect={(k) => {
                setActiveTab(k);
                setErrorLogin("");
                setErrorRegistro("");
              }}
              className="mb-4 nav-pills nav-justified"
            >
              {/* TAB INICIAR SESIÓN */}
              <Tab eventKey="login" title="Iniciar Sesión">
                {errorLogin && (
                  <Alert variant="danger" className="py-2 small">
                    <i className="bi bi-exclamation-circle-fill me-2"></i>
                    {errorLogin}
                  </Alert>
                )}

                <Form onSubmit={handleLoginSubmit}>
                  <Form.Group className="mb-3" controlId="formEpicEmail">
                    <Form.Label className="small text-muted text-uppercase fw-bold" style={{ fontSize: "0.72rem" }}>
                      Correo Electrónico *
                    </Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="nombre@ejemplo.com"
                      value={loginEmail}
                      onChange={(e) => setLoginEmail(e.target.value)}
                      className="epic-input"
                      autoComplete="email"
                    />
                  </Form.Group>

                  <Form.Group className="mb-4" controlId="formEpicPassword">
                    <div className="d-flex justify-content-between align-items-center mb-1">
                      <Form.Label className="small text-muted text-uppercase fw-bold" style={{ fontSize: "0.72rem" }}>
                        Contraseña *
                      </Form.Label>
                      <button
                        type="button"
                        className="btn btn-link text-muted p-0 small text-decoration-none"
                        style={{ fontSize: "0.75rem" }}
                        onClick={() => setVerPasswordLogin(!verPasswordLogin)}
                      >
                        {verPasswordLogin ? "Ocultar" : "Mostrar"}
                      </button>
                    </div>
                    <Form.Control
                      type={verPasswordLogin ? "text" : "password"}
                      placeholder="Ingresa tu contraseña"
                      value={loginPassword}
                      onChange={(e) => setLoginPassword(e.target.value)}
                      className="epic-input"
                      autoComplete="current-password"
                    />
                  </Form.Group>

                  <Button
                    type="submit"
                    className="btn-epic-primary w-100 py-3"
                  >
                    INICIAR SESIÓN AHORA
                  </Button>
                </Form>
              </Tab>

              {/* TAB REGISTRO */}
              <Tab eventKey="registro" title="Crear Cuenta">
                {errorRegistro && (
                  <Alert variant="danger" className="py-2 small">
                    <i className="bi bi-exclamation-circle-fill me-2"></i>
                    {errorRegistro}
                  </Alert>
                )}

                <Form onSubmit={handleRegisterSubmit}>
                  <Form.Group className="mb-3" controlId="formEpicRegNombre">
                    <Form.Label className="small text-muted text-uppercase fw-bold" style={{ fontSize: "0.72rem" }}>
                      Nombre en Pantalla *
                    </Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Tu apodo o nombre de jugador"
                      value={regNombre}
                      onChange={(e) => setRegNombre(e.target.value)}
                      className="epic-input"
                    />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formEpicRegEmail">
                    <Form.Label className="small text-muted text-uppercase fw-bold" style={{ fontSize: "0.72rem" }}>
                      Dirección de Correo Electrónico *
                    </Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="nombre@ejemplo.com"
                      value={regEmail}
                      onChange={(e) => setRegEmail(e.target.value)}
                      className="epic-input"
                    />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formEpicRegPassword">
                    <div className="d-flex justify-content-between align-items-center mb-1">
                      <Form.Label className="small text-muted text-uppercase fw-bold" style={{ fontSize: "0.72rem" }}>
                        Contraseña (Mínimo 6 caracteres) *
                      </Form.Label>
                      <button
                        type="button"
                        className="btn btn-link text-muted p-0 small text-decoration-none"
                        style={{ fontSize: "0.75rem" }}
                        onClick={() => setVerPasswordReg(!verPasswordReg)}
                      >
                        {verPasswordReg ? "Ocultar" : "Mostrar"}
                      </button>
                    </div>
                    <Form.Control
                      type={verPasswordReg ? "text" : "password"}
                      placeholder="Crea una contraseña"
                      value={regPassword}
                      onChange={(e) => setRegPassword(e.target.value)}
                      className="epic-input"
                      autoComplete="new-password"
                    />
                  </Form.Group>

                  <Form.Group className="mb-4" controlId="formEpicRegConfirm">
                    <Form.Label className="small text-muted text-uppercase fw-bold" style={{ fontSize: "0.72rem" }}>
                      Confirmar Contraseña *
                    </Form.Label>
                    <Form.Control
                      type={verPasswordReg ? "text" : "password"}
                      placeholder="Repite tu contraseña"
                      value={regConfirmPassword}
                      onChange={(e) => setRegConfirmPassword(e.target.value)}
                      className="epic-input"
                      autoComplete="new-password"
                    />
                  </Form.Group>

                  <Button
                    type="submit"
                    className="btn-epic-primary w-100 py-3"
                  >
                    CONTINUAR Y CREAR CUENTA
                  </Button>
                </Form>
              </Tab>
            </Tabs>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
