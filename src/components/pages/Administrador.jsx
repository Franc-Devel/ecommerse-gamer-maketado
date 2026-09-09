import { useState, useMemo } from "react";
import { Table, Button, Tabs, Tab, Row, Col, Card, Form, Badge } from "react-bootstrap";
import { Link } from "react-router";
import ItemProducto from "./producto/ItemProducto";
import { useAuth } from "../../context/AuthContext";
import juegosIniciales from "../../data/juegosIniciales";
import Swal from "sweetalert2";

const Administrador = ({ productos, setProductos, borrarProducto }) => {
  const { usuarios, borrarUsuario, usuarioActual } = useAuth();
  const [filtroTabla, setFiltroTabla] = useState("");
  const [filtroCategoria, setFiltroCategoria] = useState("Todas");

  const valorTotalInventario = useMemo(() => {
    return productos.reduce((acc, p) => acc + (Number(p.precio) || 0), 0);
  }, [productos]);

  const categoriasUnicas = useMemo(() => {
    return Array.from(new Set(productos.map((p) => p.categoria)));
  }, [productos]);

  const productosFiltrados = useMemo(() => {
    return productos.filter((item) => {
      const coincideNombre = item.nombre.toLowerCase().includes(filtroTabla.toLowerCase()) ||
        item.desarrollador.toLowerCase().includes(filtroTabla.toLowerCase());
      const coincideCat = filtroCategoria === "Todas" || item.categoria === filtroCategoria;
      return coincideNombre && coincideCat;
    });
  }, [productos, filtroTabla, filtroCategoria]);

  const restablecerCatalogoOriginal = () => {
    Swal.fire({
      title: "¿Restablecer catálogo oficial?",
      text: `Esta acción recargará los ${juegosIniciales.length} videojuegos originales de ROLLING GAMER.`,
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#0078f2",
      cancelButtonColor: "#3e3e46",
      confirmButtonText: "Restablecer",
      cancelButtonText: "Cancelar"
    }).then((result) => {
      if (result.isConfirmed) {
        setProductos(juegosIniciales);
        Swal.fire({
          title: "Catálogo Restablecido",
          text: `Se han restaurado los ${juegosIniciales.length} videojuegos por defecto.`,
          icon: "success",
          confirmButtonColor: "#0078f2",
          timer: 1600,
          showConfirmButton: false
        });
      }
    });
  };

  const handleEliminarUsuario = (usuario) => {
    if (usuarioActual && usuarioActual.id === usuario.id) {
      Swal.fire({
        title: "Acción Denegada",
        text: "No puedes eliminar tu propia cuenta de administrador en sesión.",
        icon: "error",
        confirmButtonColor: "#0078f2"
      });
      return;
    }

    Swal.fire({
      title: "¿Eliminar cuenta de usuario?",
      html: `¿Confirmas la baja de <strong>${usuario.nombre}</strong> (${usuario.email})?`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#0078f2",
      cancelButtonColor: "#3e3e46",
      confirmButtonText: "Dar de baja",
      cancelButtonText: "Cancelar"
    }).then((result) => {
      if (result.isConfirmed) {
        const res = borrarUsuario(usuario.id);
        if (res.success) {
          Swal.fire({
            title: "Usuario dado de baja",
            text: `El usuario ${usuario.nombre} ha sido eliminado del sistema.`,
            icon: "success",
            confirmButtonColor: "#0078f2",
            timer: 1600,
            showConfirmButton: false
          });
        }
      }
    });
  };

  return (
    <div className="py-5">
      {/* Header */}
      <div className="d-flex flex-column flex-md-row justify-content-between align-items-start align-items-md-center gap-3 mb-4">
        <div>
          <span className="epic-subheading mb-1 d-block text-warning">
            <i className="bi bi-shield-check me-1"></i> PORTAL DE DESARROLLADOR • ROLLING GAMER
          </span>
          <h1 className="fs-2 fw-bold text-white mb-1">
            Panel de Administración
          </h1>
          <p className="text-muted small mb-0">
            Administra los lanzamientos, precios, ofertas y cuentas de usuario registradas.
          </p>
        </div>

        <div className="d-flex flex-wrap gap-2 w-100 w-md-auto">
          <Link to="/crear" className="btn-epic-primary flex-grow-1 flex-md-grow-0 justify-content-center">
            <i className="bi bi-plus-lg me-1"></i> PUBLICAR JUEGO
          </Link>
          <Button
            className="btn-epic-secondary flex-grow-1 flex-md-grow-0 justify-content-center"
            onClick={restablecerCatalogoOriginal}
            title="Recargar catálogo de 22 videojuegos"
          >
            <i className="bi bi-arrow-clockwise me-1"></i> Restablecer Catálogo
          </Button>
        </div>
      </div>

      {/* Metrics Row (2x2 grid on mobile phones, 4x1 on desktop) */}
      <Row className="g-2 g-sm-3 mb-4">
        <Col xs={6} lg={3}>
          <div className="epic-box p-3 h-100">
            <span className="epic-subheading d-block mb-1 text-truncate">Total Juegos</span>
            <div className="fs-3 fw-bold text-white">{productos.length}</div>
          </div>
        </Col>

        <Col xs={6} lg={3}>
          <div className="epic-box p-3 h-100">
            <span className="epic-subheading d-block mb-1 text-truncate">Usuarios</span>
            <div className="fs-3 fw-bold text-white">{usuarios.length}</div>
          </div>
        </Col>

        <Col xs={6} lg={3}>
          <div className="epic-box p-3 h-100">
            <span className="epic-subheading d-block mb-1 text-truncate">Categorías</span>
            <div className="fs-3 fw-bold text-white">{categoriasUnicas.length}</div>
          </div>
        </Col>

        <Col xs={6} lg={3}>
          <div className="epic-box p-3 h-100">
            <span className="epic-subheading d-block mb-1 text-truncate">Inventario</span>
            <div className="fs-4 fw-bold text-white text-truncate">
              ${valorTotalInventario.toLocaleString("es-AR")}
            </div>
          </div>
        </Col>
      </Row>

      {/* Main Tabs in Epic Box */}
      <Card className="epic-box p-4 border-0">
        <Tabs defaultActiveKey="juegos" id="epic-admin-tabs" className="mb-4 nav-pills">
          {/* TAB JUEGOS */}
          <Tab
            eventKey="juegos"
            title={`Catálogo de Videojuegos (${productos.length})`}
          >
            <Row className="gy-3 align-items-center mb-3">
              <Col md={7}>
                <div className="position-relative">
                  <i className="bi bi-search position-absolute top-50 start-0 translate-middle-y ms-3 text-muted"></i>
                  <Form.Control
                    type="text"
                    placeholder="Filtrar por título o estudio desarrollador..."
                    value={filtroTabla}
                    onChange={(e) => setFiltroTabla(e.target.value)}
                    className="epic-input ps-5"
                  />
                  {filtroTabla && (
                    <button
                      type="button"
                      className="btn btn-link position-absolute top-50 end-0 translate-middle-y me-2 text-muted p-0"
                      onClick={() => setFiltroTabla("")}
                    >
                      <i className="bi bi-x-circle-fill"></i>
                    </button>
                  )}
                </div>
              </Col>

              <Col md={5}>
                <div className="d-flex align-items-center gap-2">
                  <label className="text-muted small text-nowrap">Categoría:</label>
                  <Form.Select
                    value={filtroCategoria}
                    onChange={(e) => setFiltroCategoria(e.target.value)}
                    className="epic-input"
                  >
                    <option value="Todas">Todas las categorías</option>
                    {categoriasUnicas.map((cat) => (
                      <option key={cat} value={cat}>
                        {cat}
                      </option>
                    ))}
                  </Form.Select>
                </div>
              </Col>
            </Row>

            <div className="table-responsive">
              <Table hover variant="dark" className="epic-table align-middle">
                <thead>
                  <tr>
                    <th className="text-center">#</th>
                    <th className="text-center">Portada</th>
                    <th>Título & Desarrollador</th>
                    <th>Género</th>
                    <th className="text-end">Precio (ARS)</th>
                    <th className="text-center">Aprobación</th>
                    <th className="text-center">Acciones</th>
                  </tr>
                </thead>
                <tbody>
                  {productosFiltrados.length > 0 ? (
                    productosFiltrados.map((item, index) => (
                      <ItemProducto
                        key={item.id}
                        itemProducto={item}
                        fila={index + 1}
                        borrarProducto={borrarProducto}
                      />
                    ))
                  ) : (
                    <tr>
                      <td colSpan={7} className="text-center py-4 text-muted">
                        No se encontraron juegos que coincidan con la búsqueda.
                      </td>
                    </tr>
                  )}
                </tbody>
              </Table>
            </div>
          </Tab>

          {/* TAB USUARIOS */}
          <Tab
            eventKey="usuarios"
            title={`Gestión de Usuarios (${usuarios.length})`}
          >
            <div className="table-responsive">
              <Table hover variant="dark" className="epic-table align-middle">
                <thead>
                  <tr>
                    <th className="text-center">#</th>
                    <th>Nombre de Usuario</th>
                    <th>Correo Electrónico</th>
                    <th className="text-center">Rol</th>
                    <th className="text-center">Fecha Registro</th>
                    <th className="text-center">Acciones</th>
                  </tr>
                </thead>
                <tbody>
                  {usuarios.map((user, index) => {
                    const esAdminRol = user.rol === "admin";
                    const esMismoUsuario = usuarioActual && usuarioActual.id === user.id;

                    return (
                      <tr key={user.id}>
                        <td className="text-center text-muted fw-bold small">{index + 1}</td>
                        <td>
                          <div className="d-flex align-items-center gap-2">
                            <div
                              className="rounded-circle d-flex align-items-center justify-content-center text-white"
                              style={{
                                width: "30px",
                                height: "30px",
                                background: esAdminRol ? "#f59e0b" : "#0078f2"
                              }}
                            >
                              <i className={`bi ${esAdminRol ? "bi-shield-fill-check" : "bi-person-fill"}`}></i>
                            </div>
                            <div className="fw-semibold text-white small">
                              {user.nombre} {esMismoUsuario && <Badge bg="success" className="ms-1">Tú</Badge>}
                            </div>
                          </div>
                        </td>
                        <td className="text-muted small">{user.email}</td>
                        <td className="text-center">
                          <Badge
                            bg={esAdminRol ? "warning" : "secondary"}
                            text={esAdminRol ? "dark" : "white"}
                            className="px-2 py-1"
                          >
                            {esAdminRol ? "Administrador" : "Usuario Registrado"}
                          </Badge>
                        </td>
                        <td className="text-center text-muted small">
                          {user.fechaRegistro || "2025-01-01"}
                        </td>
                        <td className="text-center">
                          <Button
                            variant="outline-danger"
                            size="sm"
                            className="py-1 px-2"
                            onClick={() => handleEliminarUsuario(user)}
                            disabled={esMismoUsuario}
                            title={esMismoUsuario ? "No puedes eliminar tu propia cuenta activa" : "Eliminar Usuario"}
                          >
                            <i className="bi bi-trash me-1"></i> Eliminar
                          </Button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </Table>
            </div>
          </Tab>
        </Tabs>
      </Card>
    </div>
  );
};

export default Administrador;
