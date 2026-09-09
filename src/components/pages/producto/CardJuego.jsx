import { Col } from "react-bootstrap";
import { Link, useNavigate } from "react-router";
import { useAuth } from "../../../context/AuthContext";
import Swal from "sweetalert2";

const CardJuego = ({ juego }) => {
  const { isWishlisted, toggleWishlist, usuarioActual } = useAuth();
  const navigate = useNavigate();

  const enDeseos = isWishlisted(juego.id);

  // Precios con descuento
  const tieneDescuento = juego.descuento && juego.descuento > 0;
  const precioFinal = tieneDescuento
    ? Math.round(juego.precio * (1 - juego.descuento / 100))
    : juego.precio;

  const handleToggleWishlist = (e) => {
    e.preventDefault();
    e.stopPropagation();

    if (!usuarioActual) {
      Swal.fire({
        title: "Iniciar sesión en ROLLING GAMER",
        text: "Inicia sesión con tu cuenta para guardar títulos en tu lista de deseos.",
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
        timer: 1800,
        background: "#202020",
        color: "#fff"
      });

      Toast.fire({
        icon: res.added ? "success" : "info",
        title: res.added
          ? `"${juego.nombre}" agregado a tu lista de deseos`
          : `Eliminado de tu lista de deseos`
      });
    }
  };

  return (
    <Col sm={6} md={4} lg={3} xl={2} className="mb-4 col-6">
      <Link to={`/detalle/${juego.id}`} className="text-decoration-none">
        <div className="epic-card h-100 d-flex flex-column">
          {/* Card Media in Epic 3:4 Poster ratio */}
          <div className="epic-card-media position-relative mb-2">
            <img
              src={juego.imagen}
              alt={juego.nombre}
              loading="lazy"
              onError={(e) => {
                e.target.src = "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=600&q=80";
              }}
            />

            {/* Quick Wishlist button */}
            <button
              type="button"
              className={`epic-wishlist-btn ${enDeseos ? "active" : ""}`}
              onClick={handleToggleWishlist}
              title={enDeseos ? "En tu lista de deseos" : "Añadir a la lista de deseos"}
              aria-label="Lista de deseos"
            >
              <i className={`bi ${enDeseos ? "bi-heart-fill text-white" : "bi-plus-lg text-white"}`}></i>
            </button>
          </div>

          {/* Metadata */}
          <div className="d-flex flex-column flex-grow-1">
            <span className="epic-tag-category mb-1">
              JUEGO BASE • {juego.categoria}
            </span>

            <h3
              className="text-white fw-bold mb-1 text-truncate"
              style={{ fontSize: "0.92rem", letterSpacing: "-0.2px" }}
              title={juego.nombre}
            >
              {juego.nombre}
            </h3>

            <div
              className="text-muted small mb-2 text-truncate"
              style={{ fontSize: "0.78rem" }}
            >
              {juego.desarrollador}
            </div>

            {/* Epic Pricing row */}
            <div className="mt-auto pt-1 d-flex flex-wrap align-items-baseline justify-content-between gap-1">
              {tieneDescuento ? (
                <>
                  <div className="d-flex align-items-center gap-1">
                    <span className="epic-badge-discount" style={{ fontSize: "0.7rem", padding: "2px 5px" }}>
                      -{juego.descuento}%
                    </span>
                    <span
                      className="text-muted text-decoration-line-through small"
                      style={{ fontSize: "0.72rem" }}
                    >
                      ${Number(juego.precio).toLocaleString("es-AR")}
                    </span>
                  </div>
                  <span className="text-white fw-bold small ms-auto" style={{ fontSize: "0.85rem" }}>
                    ${Number(precioFinal).toLocaleString("es-AR")}
                  </span>
                </>
              ) : (
                <span className="text-white fw-bold small ms-auto" style={{ fontSize: "0.85rem" }}>
                  ${Number(juego.precio).toLocaleString("es-AR")}
                </span>
              )}
            </div>
          </div>
        </div>
      </Link>
    </Col>
  );
};

export default CardJuego;
