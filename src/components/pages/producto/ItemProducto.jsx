import { Button } from "react-bootstrap";
import { Link } from "react-router";
import Swal from "sweetalert2";

const ItemProducto = ({ itemProducto, fila, borrarProducto }) => {
  const eliminarJuego = () => {
    Swal.fire({
      title: "¿Eliminar videojuego?",
      html: `¿Estás seguro de que deseas retirar <strong>${itemProducto.nombre}</strong> del catálogo de ROLLING GAMER?`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#0078f2",
      cancelButtonColor: "#3e3e46",
      confirmButtonText: "Eliminar",
      cancelButtonText: "Cancelar"
    }).then((result) => {
      if (result.isConfirmed) {
        if (borrarProducto(itemProducto.id)) {
          Swal.fire({
            title: "Juego Eliminado",
            text: `"${itemProducto.nombre}" fue eliminado del catálogo.`,
            icon: "success",
            confirmButtonColor: "#0078f2",
            timer: 1600,
            showConfirmButton: false
          });
        }
      }
    });
  };

  const resenas = itemProducto.resenas || [];
  const positivas = resenas.filter((r) => r.esPositiva).length;
  const porcentaje = resenas.length > 0 ? Math.round((positivas / resenas.length) * 100) : 100;

  return (
    <tr>
      <td className="text-center text-muted fw-bold small">{fila}</td>
      <td className="text-center" style={{ width: "85px" }}>
        <img
          src={itemProducto.imagen}
          alt={itemProducto.nombre}
          className="rounded object-fit-cover"
          style={{ width: "65px", height: "45px" }}
          onError={(e) => {
            e.target.src = "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=200&q=80";
          }}
        />
      </td>
      <td>
        <div className="fw-bold text-white small">{itemProducto.nombre}</div>
        <div className="text-muted" style={{ fontSize: "0.75rem" }}>{itemProducto.desarrollador}</div>
      </td>
      <td>
        <span className="badge bg-dark border border-secondary text-secondary small">
          {itemProducto.categoria}
        </span>
      </td>
      <td className="text-end small">
        <span className="text-white fw-semibold">
          ${Number(itemProducto.precio).toLocaleString("es-AR")}
        </span>
        {itemProducto.descuento > 0 && (
          <span className="epic-badge-discount ms-2" style={{ fontSize: "0.7rem", padding: "1px 5px" }}>
            -{itemProducto.descuento}%
          </span>
        )}
      </td>
      <td className="text-center small text-muted">
        <i className="bi bi-hand-thumbs-up-fill text-primary me-1"></i>
        {porcentaje}% ({resenas.length})
      </td>
      <td className="text-center">
        <div className="d-flex justify-content-center gap-1">
          <Link
            to={`/detalle/${itemProducto.id}`}
            className="btn btn-sm btn-outline-light border-secondary py-1 px-2"
            title="Ver en la Tienda"
          >
            <i className="bi bi-eye"></i>
          </Link>
          <Link
            to={`/editar/${itemProducto.id}`}
            className="btn btn-sm btn-outline-primary py-1 px-2"
            style={{ color: "#0078f2", borderColor: "#0078f2" }}
            title="Editar Ficha"
          >
            <i className="bi bi-pencil"></i>
          </Link>
          <Button
            variant="outline-danger"
            size="sm"
            className="py-1 px-2"
            onClick={eliminarJuego}
            title="Eliminar de la Tienda"
          >
            <i className="bi bi-trash"></i>
          </Button>
        </div>
      </td>
    </tr>
  );
};

export default ItemProducto;
