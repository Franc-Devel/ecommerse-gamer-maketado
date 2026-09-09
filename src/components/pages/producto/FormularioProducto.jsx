import { useEffect } from "react";
import { Form, Button, Row, Col, Card } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useNavigate, useParams, Link } from "react-router";
import Swal from "sweetalert2";
import { v4 as uuidv4 } from "uuid";

const CATEGORIAS = [
  "RPG",
  "Acción",
  "Aventura",
  "Terror",
  "Simulación",
  "Deportes",
  "Indie",
  "Estrategia"
];

const FormularioProducto = ({ titulo, crearProducto, buscarProducto, modificarProducto }) => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors }
  } = useForm();

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (titulo === "Editar Videojuego" && id) {
      const juegoBuscado = buscarProducto(id);
      if (juegoBuscado) {
        setValue("nombre", juegoBuscado.nombre);
        setValue("precio", juegoBuscado.precio);
        setValue("descuento", juegoBuscado.descuento || 0);
        setValue("categoria", juegoBuscado.categoria);
        setValue("desarrollador", juegoBuscado.desarrollador);
        setValue("editor", juegoBuscado.editor || "");
        setValue("fechaLanzamiento", juegoBuscado.fechaLanzamiento || "");
        setValue("imagen", juegoBuscado.imagen);
        setValue("galeria", (juegoBuscado.galeria || []).join(", "));
        setValue("descripcion_breve", juegoBuscado.descripcion_breve);
        setValue("descripcion_amplia", juegoBuscado.descripcion_amplia);

        setValue("min_so", juegoBuscado.requisitos?.minimos?.so || "Windows 10 64-bit");
        setValue("min_procesador", juegoBuscado.requisitos?.minimos?.procesador || "Intel Core i5 o Ryzen 3");
        setValue("min_memoria", juegoBuscado.requisitos?.minimos?.memoria || "8 GB RAM");
        setValue("min_graficos", juegoBuscado.requisitos?.minimos?.graficos || "GeForce GTX 1060 o Radeon RX 580");
        setValue("min_almacenamiento", juegoBuscado.requisitos?.minimos?.almacenamiento || "50 GB disponibles");

        setValue("rec_so", juegoBuscado.requisitos?.recomendados?.so || "Windows 11 64-bit");
        setValue("rec_procesador", juegoBuscado.requisitos?.recomendados?.procesador || "Intel Core i7 o Ryzen 7");
        setValue("rec_memoria", juegoBuscado.requisitos?.recomendados?.memoria || "16 GB RAM");
        setValue("rec_graficos", juegoBuscado.requisitos?.recomendados?.graficos || "GeForce RTX 3070 o Radeon RX 6700 XT");
        setValue("rec_almacenamiento", juegoBuscado.requisitos?.recomendados?.almacenamiento || "50 GB SSD");
      }
    }
  }, [titulo, id, buscarProducto, setValue]);

  const onSubmit = (data) => {
    const galeriaArray = data.galeria
      ? data.galeria.split(",").map((url) => url.trim()).filter((url) => url.length > 0)
      : [data.imagen];

    const datosJuego = {
      nombre: data.nombre.trim(),
      precio: Number(data.precio),
      descuento: Number(data.descuento || 0),
      categoria: data.categoria,
      desarrollador: data.desarrollador.trim(),
      editor: data.editor ? data.editor.trim() : data.desarrollador.trim(),
      fechaLanzamiento: data.fechaLanzamiento || "2024",
      imagen: data.imagen.trim(),
      galeria: galeriaArray,
      descripcion_breve: data.descripcion_breve.trim(),
      descripcion_amplia: data.descripcion_amplia.trim(),
      requisitos: {
        minimos: {
          so: data.min_so || "Windows 10 64-bit",
          procesador: data.min_procesador || "Intel Core i5",
          memoria: data.min_memoria || "8 GB RAM",
          graficos: data.min_graficos || "GeForce GTX 1060",
          almacenamiento: data.min_almacenamiento || "50 GB disponibles"
        },
        recomendados: {
          so: data.rec_so || "Windows 11 64-bit",
          procesador: data.rec_procesador || "Intel Core i7",
          memoria: data.rec_memoria || "16 GB RAM",
          graficos: data.rec_graficos || "GeForce RTX 3070",
          almacenamiento: data.rec_almacenamiento || "50 GB SSD"
        }
      }
    };

    if (titulo === "Crear Videojuego") {
      datosJuego.id = `game-${uuidv4().slice(0, 8)}`;
      datosJuego.resenas = [];
      datosJuego.destacado = false;

      if (crearProducto(datosJuego)) {
        Swal.fire({
          title: "¡Publicado en ROLLING GAMER!",
          text: `"${datosJuego.nombre}" ha sido añadido con éxito.`,
          icon: "success",
          confirmButtonColor: "#0078f2"
        });
        navigate("/admin");
      }
    } else {
      if (modificarProducto(id, datosJuego)) {
        Swal.fire({
          title: "¡Cambios Guardados!",
          text: `"${datosJuego.nombre}" ha sido actualizado en la tienda.`,
          icon: "success",
          confirmButtonColor: "#0078f2"
        });
        navigate("/admin");
      } else {
        Swal.fire({
          title: "Error",
          text: "No se pudo actualizar el juego.",
          icon: "error"
        });
      }
    }
  };

  return (
    <div className="py-5">
      <div className="d-flex flex-column flex-sm-row justify-content-between align-items-start align-items-sm-center gap-3 mb-4">
        <div>
          <span className="epic-subheading mb-1 d-block text-warning">
            PORTAL DE PUBLICACIÓN • ROLLING GAMER
          </span>
          <h1 className="fs-2 fw-bold text-white mb-0">
            {titulo}
          </h1>
        </div>
        <Link to="/admin" className="btn-epic-secondary py-2 px-3 small">
          Volver al Panel
        </Link>
      </div>

      <Card className="epic-box p-4 border-0">
        <Form onSubmit={handleSubmit(onSubmit)}>
          <div className="epic-subheading mb-3 text-white">
            1. Información Básica del Título
          </div>

          <Row className="gy-3 mb-4">
            <Col md={6}>
              <Form.Group controlId="formNombre">
                <Form.Label className="small text-muted text-uppercase fw-bold" style={{ fontSize: "0.72rem" }}>
                  Título del Videojuego *
                </Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Ej: Cyberpunk 2077"
                  className="epic-input"
                  {...register("nombre", {
                    required: "El título es obligatorio",
                    minLength: { value: 2, message: "Mínimo 2 caracteres" }
                  })}
                />
                {errors.nombre && <small className="text-danger">{errors.nombre.message}</small>}
              </Form.Group>
            </Col>

            <Col sm={6} md={3}>
              <Form.Group controlId="formPrecio">
                <Form.Label className="small text-muted text-uppercase fw-bold" style={{ fontSize: "0.72rem" }}>
                  Precio (ARS) *
                </Form.Label>
                <Form.Control
                  type="number"
                  placeholder="Ej: 35000"
                  className="epic-input"
                  {...register("precio", {
                    required: "El precio es obligatorio",
                    min: { value: 50, message: "Precio mínimo $50" }
                  })}
                />
                {errors.precio && <small className="text-danger">{errors.precio.message}</small>}
              </Form.Group>
            </Col>

            <Col sm={6} md={3}>
              <Form.Group controlId="formDescuento">
                <Form.Label className="small text-muted text-uppercase fw-bold" style={{ fontSize: "0.72rem" }}>
                  Descuento en % (Opcional)
                </Form.Label>
                <Form.Control
                  type="number"
                  placeholder="0 - 90"
                  className="epic-input"
                  {...register("descuento", {
                    min: { value: 0, message: "Mínimo 0%" },
                    max: { value: 90, message: "Máximo 90%" }
                  })}
                />
              </Form.Group>
            </Col>

            <Col sm={6} md={4}>
              <Form.Group controlId="formCategoria">
                <Form.Label className="small text-muted text-uppercase fw-bold" style={{ fontSize: "0.72rem" }}>
                  Categoría / Género *
                </Form.Label>
                <Form.Select
                  className="epic-input"
                  {...register("categoria", { required: "Selecciona una categoría" })}
                >
                  <option value="">Selecciona una opción</option>
                  {CATEGORIAS.map((cat) => (
                    <option key={cat} value={cat}>{cat}</option>
                  ))}
                </Form.Select>
                {errors.categoria && <small className="text-danger">{errors.categoria.message}</small>}
              </Form.Group>
            </Col>

            <Col sm={6} md={4}>
              <Form.Group controlId="formDesarrollador">
                <Form.Label className="small text-muted text-uppercase fw-bold" style={{ fontSize: "0.72rem" }}>
                  Desarrollador *
                </Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Ej: Epic Games / Remedy"
                  className="epic-input"
                  {...register("desarrollador", { required: "El desarrollador es obligatorio" })}
                />
                {errors.desarrollador && <small className="text-danger">{errors.desarrollador.message}</small>}
              </Form.Group>
            </Col>

            <Col sm={6} md={4}>
              <Form.Group controlId="formEditor">
                <Form.Label className="small text-muted text-uppercase fw-bold" style={{ fontSize: "0.72rem" }}>
                  Editor / Distribuidor
                </Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Ej: Epic Games Publishing"
                  className="epic-input"
                  {...register("editor")}
                />
              </Form.Group>
            </Col>
          </Row>

          <div className="epic-subheading mb-3 text-white pt-3 border-top border-secondary border-opacity-25">
            2. Recursos Multimedia y Carátula
          </div>

          <Row className="gy-3 mb-4">
            <Col md={6}>
              <Form.Group controlId="formImagen">
                <Form.Label className="small text-muted text-uppercase fw-bold" style={{ fontSize: "0.72rem" }}>
                  URL de Imagen Principal (Aspecto 3:4 o 16:9) *
                </Form.Label>
                <Form.Control
                  type="url"
                  placeholder="https://..."
                  className="epic-input"
                  {...register("imagen", { required: "La imagen es obligatoria" })}
                />
                {errors.imagen && <small className="text-danger">{errors.imagen.message}</small>}
              </Form.Group>
            </Col>

            <Col md={6}>
              <Form.Group controlId="formGaleria">
                <Form.Label className="small text-muted text-uppercase fw-bold" style={{ fontSize: "0.72rem" }}>
                  Galería de Capturas (URLs separadas por coma)
                </Form.Label>
                <Form.Control
                  type="text"
                  placeholder="https://foto1.jpg, https://foto2.jpg"
                  className="epic-input"
                  {...register("galeria")}
                />
              </Form.Group>
            </Col>
          </Row>

          <div className="epic-subheading mb-3 text-white pt-3 border-top border-secondary border-opacity-25">
            3. Descripciones del Título
          </div>

          <Row className="gy-3 mb-4">
            <Col md={12}>
              <Form.Group controlId="formDescBreve">
                <Form.Label className="small text-muted text-uppercase fw-bold" style={{ fontSize: "0.72rem" }}>
                  Descripción Breve (Teaser de la tienda) *
                </Form.Label>
                <Form.Control
                  as="textarea"
                  rows={2}
                  placeholder="Resumen atractivo..."
                  className="epic-input"
                  {...register("descripcion_breve", {
                    required: "La descripción breve es obligatoria",
                    minLength: { value: 10, message: "Mínimo 10 caracteres" }
                  })}
                />
                {errors.descripcion_breve && <small className="text-danger">{errors.descripcion_breve.message}</small>}
              </Form.Group>
            </Col>

            <Col md={12}>
              <Form.Group controlId="formDescAmplia">
                <Form.Label className="small text-muted text-uppercase fw-bold" style={{ fontSize: "0.72rem" }}>
                  Descripción Amplia (Sinopsis Completa) *
                </Form.Label>
                <Form.Control
                  as="textarea"
                  rows={4}
                  placeholder="Detalles sobre jugabilidad, historia, mundo abierto..."
                  className="epic-input"
                  {...register("descripcion_amplia", {
                    required: "La descripción amplia es obligatoria",
                    minLength: { value: 20, message: "Mínimo 20 caracteres" }
                  })}
                />
                {errors.descripcion_amplia && <small className="text-danger">{errors.descripcion_amplia.message}</small>}
              </Form.Group>
            </Col>
          </Row>

          <div className="epic-subheading mb-3 text-white pt-3 border-top border-secondary border-opacity-25">
            4. Especificaciones del Sistema (Windows)
          </div>

          <Row className="gy-3 mb-4">
            <Col md={6}>
              <div className="epic-specs-col">
                <div className="epic-specs-title">MÍNIMO</div>
                <Form.Group className="mb-2">
                  <Form.Label className="small text-muted mb-0">SO</Form.Label>
                  <Form.Control type="text" className="epic-input form-control-sm" {...register("min_so")} />
                </Form.Group>
                <Form.Group className="mb-2">
                  <Form.Label className="small text-muted mb-0">Procesador</Form.Label>
                  <Form.Control type="text" className="epic-input form-control-sm" {...register("min_procesador")} />
                </Form.Group>
                <Form.Group className="mb-2">
                  <Form.Label className="small text-muted mb-0">RAM</Form.Label>
                  <Form.Control type="text" className="epic-input form-control-sm" {...register("min_memoria")} />
                </Form.Group>
                <Form.Group className="mb-2">
                  <Form.Label className="small text-muted mb-0">Gráficos</Form.Label>
                  <Form.Control type="text" className="epic-input form-control-sm" {...register("min_graficos")} />
                </Form.Group>
                <Form.Group>
                  <Form.Label className="small text-muted mb-0">Almacenamiento</Form.Label>
                  <Form.Control type="text" className="epic-input form-control-sm" {...register("min_almacenamiento")} />
                </Form.Group>
              </div>
            </Col>

            <Col md={6}>
              <div className="epic-specs-col">
                <div className="epic-specs-title">RECOMENDADO</div>
                <Form.Group className="mb-2">
                  <Form.Label className="small text-muted mb-0">SO</Form.Label>
                  <Form.Control type="text" className="epic-input form-control-sm" {...register("rec_so")} />
                </Form.Group>
                <Form.Group className="mb-2">
                  <Form.Label className="small text-muted mb-0">Procesador</Form.Label>
                  <Form.Control type="text" className="epic-input form-control-sm" {...register("rec_procesador")} />
                </Form.Group>
                <Form.Group className="mb-2">
                  <Form.Label className="small text-muted mb-0">RAM</Form.Label>
                  <Form.Control type="text" className="epic-input form-control-sm" {...register("rec_memoria")} />
                </Form.Group>
                <Form.Group className="mb-2">
                  <Form.Label className="small text-muted mb-0">Gráficos</Form.Label>
                  <Form.Control type="text" className="epic-input form-control-sm" {...register("rec_graficos")} />
                </Form.Group>
                <Form.Group>
                  <Form.Label className="small text-muted mb-0">Almacenamiento</Form.Label>
                  <Form.Control type="text" className="epic-input form-control-sm" {...register("rec_almacenamiento")} />
                </Form.Group>
              </div>
            </Col>
          </Row>

          <div className="d-flex flex-column-reverse flex-sm-row justify-content-end gap-2 pt-3 border-top border-secondary border-opacity-25">
            <Button
              as={Link}
              to="/admin"
              className="btn-epic-secondary w-100 w-sm-auto text-center"
            >
              Cancelar
            </Button>
            <Button
              type="submit"
              className="btn-epic-primary px-4 w-100 w-sm-auto text-center"
            >
              {titulo === "Crear Videojuego" ? "PUBLICAR JUEGO EN LA TIENDA" : "GUARDAR CAMBIOS"}
            </Button>
          </div>
        </Form>
      </Card>
    </div>
  );
};

export default FormularioProducto;
