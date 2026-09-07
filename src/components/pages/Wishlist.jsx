import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { Link } from "react-router";
import { useAuth } from "../../context/AuthContext";
import Swal from "sweetalert2";

const Wishlist = ({ juegos }) => {
  const { getWishlistJuegos, toggleWishlist } = useAuth();
  const juegosDeseados = getWishlistJuegos(juegos);

  const valorTotal = juegosDeseados.reduce((acc, j) => {
    const precio = j.descuento ? Math.round(j.precio * (1 - j.descuento / 100)) : j.precio;
    return acc + precio;
  }, 0);

  const handleEliminar = (juego) => {
    toggleWishlist(juego.id);
    const Toast = Swal.mixin({
      toast: true,
      position: "top-end",
      showConfirmButton: false,
      timer: 1800,
      background: "#202020",
      color: "#fff"
    });
    Toast.fire({
      icon: "info",
      title: `"${juego.nombre}" eliminado de tu lista de deseos`
    });
  };

  return (
    <Container className="py-5">
      <div className="d-flex flex-column flex-md-row justify-content-between align-items-start align-items-md-center gap-3 mb-4">
        <div>
          <span className="epic-subheading mb-1 d-block">MI CUENTA • EPIC GAMES</span>
          <h1 className="fs-2 fw-bold text-white mb-0">
            Lista de Deseos
          </h1>
        </div>

        {juegosDeseados.length > 0 && (
          <div className="d-flex align-items-center gap-3 epic-box px-3 py-2">
            <span className="small text-muted">
              Total ({juegosDeseados.length} {juegosDeseados.length === 1 ? "artículo" : "artículos"}):
            </span>
            <span className="fw-bold text-white fs-5">
              ${valorTotal.toLocaleString("es-AR")}
            </span>
          </div>
        )}
      </div>

      {juegosDeseados.length > 0 ? (
        <Row className="gy-3">
          {juegosDeseados.map((juego) => {
            const precioFinal = juego.descuento
              ? Math.round(juego.precio * (1 - juego.descuento / 100))
              : juego.precio;

            return (
              <Col lg={12} key={juego.id}>
                <Card className="epic-box p-3 border-0">
                  <div className="d-flex flex-column flex-md-row align-items-md-center justify-content-between gap-3">
                    <div className="d-flex align-items-center gap-3">
                      <img
                        src={juego.imagen}
                        alt={juego.nombre}
                        className="rounded object-fit-cover flex-shrink-0"
                        style={{ width: "120px", height: "80px" }}
                        onError={(e) => {
                          e.target.src = "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=300&q=80";
                        }}
                      />
                      <div>
                        <span className="epic-subheading d-block mb-1" style={{ fontSize: "0.68rem" }}>
                          JUEGO BASE • {juego.categoria}
                        </span>
                        <h5 className="text-white fw-bold mb-1">
                          <Link to={`/detalle/${juego.id}`} className="text-white text-decoration-none hover-white">
                            {juego.nombre}
                          </Link>
                        </h5>
                        <div className="text-muted small" style={{ fontSize: "0.8rem" }}>
                          Desarrollador: {juego.desarrollador}
                        </div>
                      </div>
                    </div>

                    <div className="d-flex align-items-center justify-content-between justify-content-md-end gap-3 border-top border-secondary border-opacity-25 pt-2 pt-md-0">
                      <div className="text-end">
                        {juego.descuento > 0 && (
                          <div className="d-flex align-items-center gap-2 justify-content-end mb-1">
                            <span className="epic-badge-discount">-{juego.descuento}%</span>
                            <span className="text-muted text-decoration-line-through small">
                              ${Number(juego.precio).toLocaleString("es-AR")}
                            </span>
                          </div>
                        )}
                        <span className="fs-5 fw-bold text-white">
                          ${Number(precioFinal).toLocaleString("es-AR")}
                        </span>
                      </div>

                      <div className="d-flex gap-2">
                        <Link
                          to={`/detalle/${juego.id}`}
                          className="btn-epic-primary py-2 px-3 small"
                          style={{ fontSize: "0.78rem" }}
                        >
                          Ver Detalles
                        </Link>
                        <Button
                          variant="outline-secondary"
                          size="sm"
                          className="border-secondary text-muted hover-white"
                          onClick={() => handleEliminar(juego)}
                          title="Eliminar de la lista de deseos"
                        >
                          <i className="bi bi-trash"></i>
                        </Button>
                      </div>
                    </div>
                  </div>
                </Card>
              </Col>
            );
          })}
        </Row>
      ) : (
        <div className="epic-box text-center p-5 my-4">
          <i className="bi bi-heart text-muted display-4 mb-3 d-block"></i>
          <h4 className="fw-bold text-white mb-2">Tu lista de deseos está vacía</h4>
          <p className="text-muted small mb-4">
            Explora la tienda de Epic Games y pulsa el botón (+) para añadir juegos a tu lista.
          </p>
          <Link to="/" className="btn-epic-primary">
            Explorar Juegos
          </Link>
        </div>
      )}
    </Container>
  );
};

export default Wishlist;
