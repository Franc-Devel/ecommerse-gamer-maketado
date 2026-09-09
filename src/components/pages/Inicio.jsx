import { useState, useMemo } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { Link } from "react-router";
import CardJuego from "./producto/CardJuego";

const CATEGORIAS = [
  "Todos",
  "RPG",
  "Acción",
  "Aventura",
  "Terror",
  "Simulación",
  "Deportes",
  "Indie"
];

const Inicio = ({ juegos }) => {
  const [busqueda, setBusqueda] = useState("");
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState("Todos");
  const [orden, setOrden] = useState("destacados");

  // Lista de 5 juegos para el slider destacado de Epic
  const juegosDestacados = useMemo(() => {
    return juegos.slice(0, 5);
  }, [juegos]);

  const [indiceDestacado, setIndiceDestacado] = useState(0);
  const juegoActivoHero = juegosDestacados[indiceDestacado] || juegos[0];

  // Filtrado y Ordenamiento
  const juegosFiltrados = useMemo(() => {
    let resultado = [...juegos];

    if (busqueda.trim() !== "") {
      const termino = busqueda.toLowerCase().trim();
      resultado = resultado.filter((j) =>
        j.nombre.toLowerCase().includes(termino) ||
        j.categoria.toLowerCase().includes(termino) ||
        j.desarrollador.toLowerCase().includes(termino)
      );
    }

    if (categoriaSeleccionada !== "Todos") {
      resultado = resultado.filter(
        (j) => j.categoria.toLowerCase() === categoriaSeleccionada.toLowerCase()
      );
    }

    if (orden === "menor-precio") {
      resultado.sort((a, b) => {
        const precioA = a.descuento ? a.precio * (1 - a.descuento / 100) : a.precio;
        const precioB = b.descuento ? b.precio * (1 - b.descuento / 100) : b.precio;
        return precioA - precioB;
      });
    } else if (orden === "mayor-precio") {
      resultado.sort((a, b) => {
        const precioA = a.descuento ? a.precio * (1 - a.descuento / 100) : a.precio;
        const precioB = b.descuento ? b.precio * (1 - b.descuento / 100) : b.precio;
        return precioB - precioA;
      });
    } else if (orden === "nombre-az") {
      resultado.sort((a, b) => a.nombre.localeCompare(b.nombre));
    } else if (orden === "mejor-valorados") {
      resultado.sort((a, b) => {
        const posA = (a.resenas || []).filter((r) => r.esPositiva).length / (a.resenas?.length || 1);
        const posB = (b.resenas || []).filter((r) => r.esPositiva).length / (b.resenas?.length || 1);
        return posB - posA;
      });
    }

    return resultado;
  }, [juegos, busqueda, categoriaSeleccionada, orden]);

  const limpiarFiltros = () => {
    setBusqueda("");
    setCategoriaSeleccionada("Todos");
    setOrden("destacados");
  };

  return (
    <div className="pb-5">
      <Container>
        {/* EPIC GAMES STORE HERO SHOWCASE (Cinematic banner on left + Vertical carousel selector on right) */}
        {juegoActivoHero && (
          <section className="mb-5">
            <Row className="g-3 align-items-stretch">
              {/* Left: Main Cinematic Banner */}
              <Col lg={9}>
                <div className="epic-hero-main">
                  <img
                    src={juegoActivoHero.imagen}
                    alt={juegoActivoHero.nombre}
                    className="epic-hero-image"
                    onError={(e) => {
                      e.target.src = "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=1200&q=80";
                    }}
                  />
                  <div className="epic-hero-overlay">
                    <span className="epic-subheading mb-2 text-white opacity-75">
                      DISPONIBLE YA • {juegoActivoHero.categoria}
                    </span>
                    <h1 className="display-5 fw-extrabold text-white mb-2" style={{ letterSpacing: "-1px" }}>
                      {juegoActivoHero.nombre}
                    </h1>
                    <p className="text-secondary small mb-4 d-none d-md-block" style={{ maxWidth: "600px", lineHeight: "1.6" }}>
                      {juegoActivoHero.descripcion_breve}
                    </p>
                    <div className="d-flex align-items-center gap-3">
                      <Link
                        to={`/detalle/${juegoActivoHero.id}`}
                        className="btn-epic-primary"
                      >
                        Ver Detalles
                      </Link>
                      <div className="text-white small">
                        {juegoActivoHero.descuento > 0 && (
                          <span className="epic-badge-discount me-2">-{juegoActivoHero.descuento}%</span>
                        )}
                        <span className="fw-bold fs-6">
                          ${Number(
                            juegoActivoHero.descuento
                              ? Math.round(juegoActivoHero.precio * (1 - juegoActivoHero.descuento / 100))
                              : juegoActivoHero.precio
                          ).toLocaleString("es-AR")}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </Col>

              {/* Mobile Indicators under hero */}
              <div className="d-flex d-lg-none justify-content-center align-items-center gap-2 mt-3">
                {juegosDestacados.map((_, idx) => (
                  <button
                    key={idx}
                    type="button"
                    className={`epic-hero-dot ${idx === indiceDestacado ? "active" : ""}`}
                    onClick={() => setIndiceDestacado(idx)}
                    aria-label={`Ir al juego destacado ${idx + 1}`}
                  />
                ))}
              </div>

              {/* Right: Vertical Carousel Playlist (Signature Epic Games feature) */}
              <Col lg={3} className="d-none d-lg-flex flex-column justify-content-between">
                {juegosDestacados.map((item, idx) => {
                  const esActivo = idx === indiceDestacado;
                  return (
                    <div
                      key={item.id}
                      className={`epic-hero-sidebar-item ${esActivo ? "active" : ""}`}
                      onClick={() => setIndiceDestacado(idx)}
                    >
                      <img
                        src={item.imagen}
                        alt={item.nombre}
                        className="epic-thumb"
                        onError={(e) => {
                          e.target.src = "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=150&q=80";
                        }}
                      />
                      <div className="overflow-hidden">
                        <div className="text-white fw-bold small text-truncate" style={{ fontSize: "0.85rem" }}>
                          {item.nombre}
                        </div>
                        <div className="text-muted small" style={{ fontSize: "0.72rem" }}>
                          {item.categoria}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </Col>
            </Row>
          </section>
        )}

        {/* Epic Filter & Search Section */}
        <div className="mb-4">
          <div className="d-flex flex-column flex-lg-row justify-content-between align-items-start align-items-lg-center gap-3 mb-3">
            <div>
              <h2 className="fs-4 fw-bold text-white mb-0">
                Catálogo de Juegos
              </h2>
              <span className="text-muted small">
                Explora {juegosFiltrados.length} títulos disponibles en la tienda
              </span>
            </div>

            {/* Search Bar & Sort in Responsive Layout */}
            <div className="d-flex flex-column flex-sm-row align-items-stretch align-items-sm-center gap-2 w-100 w-lg-auto">
              <div className="position-relative flex-grow-1" style={{ minWidth: "220px" }}>
                <i className="bi bi-search position-absolute top-50 start-0 translate-middle-y ms-3 text-muted"></i>
                <Form.Control
                  type="text"
                  placeholder="Buscar en la tienda..."
                  value={busqueda}
                  onChange={(e) => setBusqueda(e.target.value)}
                  className="epic-input ps-5"
                />
                {busqueda && (
                  <button
                    type="button"
                    className="btn btn-link position-absolute top-50 end-0 translate-middle-y me-2 text-muted p-0"
                    onClick={() => setBusqueda("")}
                    aria-label="Limpiar búsqueda"
                  >
                    <i className="bi bi-x-circle-fill"></i>
                  </button>
                )}
              </div>

              <Form.Select
                value={orden}
                onChange={(e) => setOrden(e.target.value)}
                className="epic-input flex-shrink-0"
                style={{ minWidth: "160px" }}
              >
                <option value="destacados">Destacados</option>
                <option value="menor-precio">Precio: Menor</option>
                <option value="mayor-precio">Precio: Mayor</option>
                <option value="nombre-az">Nombre: A - Z</option>
                <option value="mejor-valorados">Mejor Valorados</option>
              </Form.Select>
            </div>
          </div>

          {/* Epic Category Tabs with Smooth Horizontal Scroll on Mobile */}
          <div className="epic-category-scroll pb-2 border-bottom border-secondary border-opacity-25 mb-4">
            {CATEGORIAS.map((cat) => (
              <button
                key={cat}
                type="button"
                className={`epic-filter-pill ${categoriaSeleccionada === cat ? "active" : ""}`}
                onClick={() => setCategoriaSeleccionada(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Epic Product Grid */}
        {juegosFiltrados.length > 0 ? (
          <Row className="g-3">
            {juegosFiltrados.map((juego) => (
              <CardJuego key={juego.id} juego={juego} />
            ))}
          </Row>
        ) : (
          <div className="epic-box text-center p-5 my-4">
            <i className="bi bi-search text-muted display-4 mb-3 d-block"></i>
            <h4 className="fw-bold text-white mb-2">No se encontraron resultados</h4>
            <p className="text-muted small mb-4">
              No hay títulos que coincidan con tu búsqueda en la tienda de ROLLING GAMER.
            </p>
            <Button
              className="btn-epic-secondary"
              onClick={limpiarFiltros}
            >
              Restablecer Filtros
            </Button>
          </div>
        )}
      </Container>
    </div>
  );
};

export default Inicio;
