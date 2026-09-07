import { useState, useMemo } from "react";
import { useParams, Link, useNavigate } from "react-router";
import { Container, Row, Col, Badge, Button, Form, ProgressBar } from "react-bootstrap";
import { useAuth } from "../../context/AuthContext";
import Swal from "sweetalert2";
import { v4 as uuidv4 } from "uuid";

const DetalleDeProducto = ({ buscarProducto, agregarResena }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { usuarioActual, isWishlisted, toggleWishlist } = useAuth();

  const juego = buscarProducto(id);

  const [imagenActiva, setImagenActiva] = useState(null);
  const [votoPositivo, setVotoPositivo] = useState(true);
  const [comentarioResena, setComentarioResena] = useState("");
  const [errorComentario, setErrorComentario] = useState("");

  const imagenes = useMemo(() => {
    if (!juego) return [];
    if (juego.galeria && juego.galeria.length > 0) {
      return [juego.imagen, ...juego.galeria.filter((img) => img !== juego.imagen)];
    }
    return [juego.imagen];
  }, [juego]);

  if (!juego) {
    return (
      <Container className="py-5 text-center">
        <div className="epic-box p-5 my-5">
          <i className="bi bi-controller text-muted display-3 mb-3 d-block"></i>
          <h2 className="text-white fw-bold">Juego no encontrado</h2>
          <p className="text-muted mb-4">
            El título solicitado no se encuentra disponible en la base de datos de Epic Games Store.
          </p>
          <Link to="/" className="btn-epic-primary">
            Volver a la Tienda
          </Link>
        </div>
      </Container>
    );
  }

  const imagenMostrada = imagenActiva || imagenes[0] || juego.imagen;
  const enDeseos = isWishlisted(juego.id);

  const tieneDescuento = juego.descuento && juego.descuento > 0;
  const precioFinal = tieneDescuento
    ? Math.round(juego.precio * (1 - juego.descuento / 100))
    : juego.precio;

  const resenas = juego.resenas || [];
  const totalResenas = resenas.length;
  const positivas = resenas.filter((r) => r.esPositiva).length;
  const negativas = totalResenas - positivas;
  const porcentajePositivas = totalResenas > 0 ? Math.round((positivas / totalResenas) * 100) : 100;

  const handleWishlist = () => {
    if (!usuarioActual) {
      Swal.fire({
        title: "Iniciar sesión en Epic Games",
        text: "Inicia sesión con tu cuenta para agregar este juego a tu lista de deseos.",
        icon: "info",
        showCancelButton: true,
        confirmButtonColor: "#0078f2",
        cancelButtonColor: "#3e3e46",
        confirmButtonText: "Iniciar Sesión",
        cancelButtonText: "Cancelar"
      }).then((result) => {
        if (result.isConfirmed) navigate("/login");
      });
      return;
    }

    const res = toggleWishlist(juego.id);
    if (res.success) {
      const Toast = Swal.mixin({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 2000,
        background: "#202020",
        color: "#fff"
      });
      Toast.fire({
        icon: res.added ? "success" : "info",
        title: res.added ? "Guardado en tu Lista de Deseos" : "Eliminado de tu Lista de Deseos"
      });
    }
  };

  const handleComprar = () => {
    Swal.fire({
      title: "¡Pedido completado!",
      text: `Gracias por tu compra de "${juego.nombre}". El juego se ha añadido a tu biblioteca de Epic Games Store.`,
      icon: "success",
      confirmButtonColor: "#0078f2",
      confirmButtonText: "Ir a la Biblioteca"
    });
  };

  const handleSubmitResena = (e) => {
    e.preventDefault();

    if (!usuarioActual) {
      navigate("/login");
      return;
    }

    if (comentarioResena.trim().length < 5) {
      setErrorComentario("El comentario debe tener al menos 5 caracteres.");
      return;
    }

    setErrorComentario("");

    const nuevaResena = {
      id: uuidv4(),
      usuario: usuarioActual.nombre,
      fecha: new Date().toISOString().split("T")[0],
      esPositiva: votoPositivo,
      comentario: comentarioResena.trim()
    };

    agregarResena(juego.id, nuevaResena);
    setComentarioResena("");

    Swal.fire({
      title: "Reseña Publicada",
      text: "Tu valoración ha sido registrada en las opiniones de la comunidad de Epic Games.",
      icon: "success",
      confirmButtonColor: "#0078f2",
      timer: 1800,
      showConfirmButton: false
    });
  };

  return (
    <Container className="py-4">
      {/* Epic Breadcrumbs */}
      <div className="d-flex align-items-center gap-2 small text-muted mb-3">
        <Link to="/" className="text-muted text-decoration-none hover-white">
          Tienda
        </Link>
        <span>/</span>
        <span className="text-secondary">{juego.categoria}</span>
        <span>/</span>
        <span className="text-white">{juego.nombre}</span>
      </div>

      {/* Header Info */}
      <div className="mb-4">
        <h1 className="display-5 fw-extrabold text-white mb-2" style={{ letterSpacing: "-1px" }}>
          {juego.nombre}
        </h1>
        <div className="d-flex flex-wrap align-items-center gap-3 text-muted small">
          <span>Desarrollador: <strong className="text-white">{juego.desarrollador}</strong></span>
          <span>•</span>
          <span>Editor: <strong className="text-white">{juego.editor || juego.desarrollador}</strong></span>
          <span>•</span>
          <span>Lanzamiento: <strong className="text-white">{juego.fechaLanzamiento || "2024"}</strong></span>
          <span>•</span>
          <span className="badge bg-dark border border-secondary text-secondary">
            {juego.categoria}
          </span>
        </div>
      </div>

      {/* Main Grid: Left Media & Specs | Right Epic Purchase Block */}
      <Row className="gy-4 mb-5">
        <Col lg={8}>
          {/* Main 16:9 Showcase Screen */}
          <div className="epic-box overflow-hidden mb-3" style={{ background: "#000" }}>
            <img
              src={imagenMostrada}
              alt={juego.nombre}
              className="w-100 object-fit-cover"
              style={{ maxHeight: "480px" }}
              onError={(e) => {
                e.target.src = "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=1200&q=80";
              }}
            />
          </div>

          {/* Thumbnail strip */}
          {imagenes.length > 1 && (
            <div className="d-flex gap-2 mb-4 overflow-auto pb-2">
              {imagenes.map((img, idx) => (
                <button
                  key={idx}
                  type="button"
                  className={`btn p-0 rounded overflow-hidden flex-shrink-0 ${
                    imagenMostrada === img ? "border border-2 border-primary" : "opacity-75"
                  }`}
                  style={{ width: "110px", height: "65px", background: "#000" }}
                  onClick={() => setImagenActiva(img)}
                >
                  <img src={img} alt="Captura" className="w-100 h-100 object-fit-cover" />
                </button>
              ))}
            </div>
          )}

          {/* Game Description */}
          <div className="epic-box p-4 mb-4">
            <h4 className="fw-bold text-white mb-3">
              Acerca del juego
            </h4>
            <p className="lead text-secondary fs-6 mb-3" style={{ lineHeight: "1.7" }}>
              {juego.descripcion_breve}
            </p>
            <p className="text-muted small mb-0" style={{ lineHeight: "1.8" }}>
              {juego.descripcion_amplia}
            </p>
          </div>

          {/* Epic System Specifications (Side-by-Side Clean Layout) */}
          <div className="epic-box p-4 mb-4">
            <h4 className="fw-bold text-white mb-3">
              Especificaciones del Sistema (Windows)
            </h4>

            <Row className="g-3">
              <Col md={6}>
                <div className="epic-specs-col h-100">
                  <div className="epic-specs-title">MÍNIMO</div>
                  <div className="d-flex flex-column gap-3 small">
                    <div>
                      <div className="text-muted text-uppercase" style={{ fontSize: "0.7rem" }}>Versión del SO</div>
                      <div className="text-white fw-semibold">{juego.requisitos?.minimos?.so || "Windows 10 64-bit"}</div>
                    </div>
                    <div>
                      <div className="text-muted text-uppercase" style={{ fontSize: "0.7rem" }}>Procesador</div>
                      <div className="text-white fw-semibold">{juego.requisitos?.minimos?.procesador || "Intel Core i5 o AMD Ryzen equivalente"}</div>
                    </div>
                    <div>
                      <div className="text-muted text-uppercase" style={{ fontSize: "0.7rem" }}>Memoria RAM</div>
                      <div className="text-white fw-semibold">{juego.requisitos?.minimos?.memoria || "8 GB de RAM"}</div>
                    </div>
                    <div>
                      <div className="text-muted text-uppercase" style={{ fontSize: "0.7rem" }}>Tarjeta Gráfica</div>
                      <div className="text-white fw-semibold">{juego.requisitos?.minimos?.graficos || "NVIDIA GTX 1060 o AMD RX 580"}</div>
                    </div>
                    <div>
                      <div className="text-muted text-uppercase" style={{ fontSize: "0.7rem" }}>Almacenamiento</div>
                      <div className="text-white fw-semibold">{juego.requisitos?.minimos?.almacenamiento || "50 GB disponibles"}</div>
                    </div>
                  </div>
                </div>
              </Col>

              <Col md={6}>
                <div className="epic-specs-col h-100">
                  <div className="epic-specs-title">RECOMENDADO</div>
                  <div className="d-flex flex-column gap-3 small">
                    <div>
                      <div className="text-muted text-uppercase" style={{ fontSize: "0.7rem" }}>Versión del SO</div>
                      <div className="text-white fw-semibold">{juego.requisitos?.recomendados?.so || "Windows 11 64-bit"}</div>
                    </div>
                    <div>
                      <div className="text-muted text-uppercase" style={{ fontSize: "0.7rem" }}>Procesador</div>
                      <div className="text-white fw-semibold">{juego.requisitos?.recomendados?.procesador || "Intel Core i7 o AMD Ryzen 7"}</div>
                    </div>
                    <div>
                      <div className="text-muted text-uppercase" style={{ fontSize: "0.7rem" }}>Memoria RAM</div>
                      <div className="text-white fw-semibold">{juego.requisitos?.recomendados?.memoria || "16 GB de RAM"}</div>
                    </div>
                    <div>
                      <div className="text-muted text-uppercase" style={{ fontSize: "0.7rem" }}>Tarjeta Gráfica</div>
                      <div className="text-white fw-semibold">{juego.requisitos?.recomendados?.graficos || "NVIDIA RTX 2060 o AMD RX 5700 XT"}</div>
                    </div>
                    <div>
                      <div className="text-muted text-uppercase" style={{ fontSize: "0.7rem" }}>Almacenamiento</div>
                      <div className="text-white fw-semibold">{juego.requisitos?.recomendados?.almacenamiento || "SSD con 50 GB disponibles"}</div>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </div>

          {/* Epic Community Reviews Section */}
          <div className="epic-box p-4">
            <div className="d-flex justify-content-between align-items-center mb-3">
              <h4 className="fw-bold text-white mb-0">
                Opiniones y Valoraciones de Jugadores
              </h4>
              <span className="badge bg-dark border border-secondary text-secondary">
                {porcentajePositivas}% Satisfacción
              </span>
            </div>

            {/* Satisfaction Bar */}
            <div className="mb-4">
              <div className="d-flex justify-content-between small text-muted mb-1">
                <span><i className="bi bi-hand-thumbs-up-fill text-primary me-1"></i> {positivas} Votos Positivos</span>
                <span><i className="bi bi-hand-thumbs-down-fill text-secondary me-1"></i> {negativas} Votos Negativos</span>
              </div>
              <ProgressBar style={{ height: "8px", borderRadius: "4px", background: "#2a2a2a" }}>
                <ProgressBar style={{ background: "#0078f2" }} now={porcentajePositivas} key={1} />
                <ProgressBar variant="secondary" now={100 - porcentajePositivas} key={2} />
              </ProgressBar>
            </div>

            {/* Submit review */}
            <div className="p-3 rounded bg-dark border border-secondary border-opacity-25 mb-4">
              <h5 className="fs-6 fw-bold text-white mb-2">
                ¿Recomiendas este juego en Epic Games?
              </h5>

              {usuarioActual ? (
                <Form onSubmit={handleSubmitResena}>
                  <div className="d-flex align-items-center gap-3 mb-3">
                    <Button
                      type="button"
                      variant={votoPositivo ? "primary" : "outline-secondary"}
                      size="sm"
                      style={votoPositivo ? { backgroundColor: "#0078f2", borderColor: "#0078f2" } : {}}
                      onClick={() => setVotoPositivo(true)}
                    >
                      <i className="bi bi-hand-thumbs-up-fill me-1"></i> Recomendado
                    </Button>
                    <Button
                      type="button"
                      variant={!votoPositivo ? "danger" : "outline-secondary"}
                      size="sm"
                      onClick={() => setVotoPositivo(false)}
                    >
                      <i className="bi bi-hand-thumbs-down-fill me-1"></i> No recomendado
                    </Button>
                  </div>

                  <Form.Group className="mb-3">
                    <Form.Control
                      as="textarea"
                      rows={3}
                      placeholder="Escribe tu reseña sobre el juego..."
                      value={comentarioResena}
                      onChange={(e) => setComentarioResena(e.target.value)}
                      className="epic-input"
                    />
                    {errorComentario && (
                      <small className="text-danger mt-1 d-block">{errorComentario}</small>
                    )}
                  </Form.Group>

                  <div className="d-flex justify-content-between align-items-center">
                    <small className="text-muted">
                      Comentando como: <strong className="text-white">{usuarioActual.nombre}</strong>
                    </small>
                    <Button type="submit" className="btn-epic-primary py-2 px-4 small">
                      Publicar Reseña
                    </Button>
                  </div>
                </Form>
              ) : (
                <div className="text-center py-2">
                  <p className="text-muted small mb-2">
                    Inicia sesión en tu cuenta de Epic Games Store para dejar tu reseña.
                  </p>
                  <Link to="/login" className="btn-epic-secondary py-1 px-3 small">
                    Iniciar Sesión
                  </Link>
                </div>
              )}
            </div>

            {/* List of reviews */}
            <div className="d-flex flex-column gap-3">
              {resenas.map((resena) => (
                <div key={resena.id} className="p-3 rounded bg-dark border border-secondary border-opacity-25">
                  <div className="d-flex justify-content-between align-items-center mb-1">
                    <div className="fw-bold text-white small">{resena.usuario}</div>
                    <span className="badge" style={{ background: resena.esPositiva ? "#0078f2" : "#3e3e46" }}>
                      {resena.esPositiva ? "Recomendado" : "No recomendado"}
                    </span>
                  </div>
                  <div className="text-muted mb-2" style={{ fontSize: "0.75rem" }}>{resena.fecha}</div>
                  <p className="text-secondary small mb-0">{resena.comentario}</p>
                </div>
              ))}
            </div>
          </div>
        </Col>

        {/* Right Sidebar: Epic Games Purchase Card */}
        <Col lg={4}>
          <div className="sticky-top" style={{ top: "85px" }}>
            <div className="epic-box p-4 mb-3">
              <span className="epic-subheading d-block mb-3">
                JUEGO BASE
              </span>

              {/* Price Row */}
              <div className="d-flex align-items-center gap-2 mb-4">
                {tieneDescuento && (
                  <span className="epic-badge-discount fs-6">
                    -{juego.descuento}%
                  </span>
                )}
                <div className="d-flex flex-column">
                  {tieneDescuento && (
                    <span className="text-muted text-decoration-line-through small" style={{ fontSize: "0.85rem" }}>
                      ${Number(juego.precio).toLocaleString("es-AR")}
                    </span>
                  )}
                  <span className="fs-3 fw-bold text-white">
                    ${Number(precioFinal).toLocaleString("es-AR")}
                  </span>
                </div>
              </div>

              {/* Epic Buttons */}
              <div className="d-grid gap-2 mb-4">
                <Button
                  onClick={handleComprar}
                  className="btn-epic-primary py-3 fw-bold"
                  style={{ fontSize: "0.9rem" }}
                >
                  COMPRAR AHORA
                </Button>

                <Button
                  onClick={handleWishlist}
                  className="btn-epic-secondary py-2"
                  style={{ fontSize: "0.85rem" }}
                >
                  <i className={`bi ${enDeseos ? "bi-heart-fill text-danger me-2" : "bi-plus-lg me-2"}`}></i>
                  {enDeseos ? "EN TU LISTA DE DESEOS" : "AÑADIR A LA LISTA DE DESEOS"}
                </Button>
              </div>

              <hr className="border-secondary border-opacity-25 my-3" />

              {/* Specs metadata list */}
              <div className="d-flex flex-column gap-2 small">
                <div className="d-flex justify-content-between">
                  <span className="text-muted">Desarrollador</span>
                  <span className="text-white fw-semibold">{juego.desarrollador}</span>
                </div>
                <div className="d-flex justify-content-between">
                  <span className="text-muted">Editor</span>
                  <span className="text-white fw-semibold">{juego.editor || juego.desarrollador}</span>
                </div>
                <div className="d-flex justify-content-between">
                  <span className="text-muted">Fecha de lanzamiento</span>
                  <span className="text-white">{juego.fechaLanzamiento || "2024"}</span>
                </div>
                <div className="d-flex justify-content-between">
                  <span className="text-muted">Plataforma</span>
                  <span className="text-white"><i className="bi bi-windows me-1"></i> Windows</span>
                </div>
                <div className="d-flex justify-content-between">
                  <span className="text-muted">Género</span>
                  <Badge bg="secondary">{juego.categoria}</Badge>
                </div>
              </div>
            </div>

            {/* Epic Refund Policy Box */}
            <div className="epic-box p-3 small text-muted">
              <div className="text-white fw-bold mb-1">Reembolsos de Epic Games</div>
              Los juegos son aptos para reembolso hasta 14 días después de la compra si tienen menos de 2 horas jugadas.
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default DetalleDeProducto;
