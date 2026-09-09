import { createContext, useContext, useState } from "react";
import { Modal, Button, Badge } from "react-bootstrap";
import { Link } from "react-router";
import { useAuth } from "./AuthContext";

const UIModalContext = createContext();

// eslint-disable-next-line react-refresh/only-export-components
export const useUIModal = () => {
  const context = useContext(UIModalContext);
  if (!context) {
    throw new Error("useUIModal debe usarse dentro de un UIModalProvider");
  }
  return context;
};

export const UIModalProvider = ({ children }) => {
  const [modalActivo, setModalActivo] = useState(null); // 'noticias' | 'ayuda' | 'distribucion' | 'terminos' | 'privacidad' | 'reembolsos' | 'seguridad' | null
  const { esAdmin, usuarioActual } = useAuth();

  const abrirModal = (tipo) => setModalActivo(tipo);
  const cerrarModal = () => setModalActivo(null);

  return (
    <UIModalContext.Provider value={{ abrirModal, cerrarModal }}>
      {children}

      {/* Global Info Modal */}
      <Modal
        show={modalActivo !== null}
        onHide={cerrarModal}
        centered
        size={modalActivo === "noticias" || modalActivo === "ayuda" ? "lg" : "md"}
        contentClassName="bg-dark text-light border border-secondary border-opacity-25 shadow-lg"
      >
        <Modal.Header closeButton closeVariant="white" className="border-secondary border-opacity-25 pb-3">
          <Modal.Title className="fs-5 fw-bold d-flex align-items-center gap-2 text-white">
            {modalActivo === "noticias" && (
              <>
                <i className="bi bi-newspaper text-primary fs-4"></i>
                <span>Noticias & Parches Oficiales</span>
              </>
            )}
            {modalActivo === "ayuda" && (
              <>
                <i className="bi bi-question-circle-fill text-info fs-4"></i>
                <span>Centro de Ayuda & Soporte Gamer</span>
              </>
            )}
            {modalActivo === "distribucion" && (
              <>
                <i className="bi bi-box-seam-fill text-warning fs-4"></i>
                <span>Distribución & Publicación de Videojuegos</span>
              </>
            )}
            {modalActivo === "terminos" && (
              <>
                <i className="bi bi-file-text-fill text-primary fs-4"></i>
                <span>Términos del Servicio</span>
              </>
            )}
            {modalActivo === "privacidad" && (
              <>
                <i className="bi bi-shield-lock-fill text-success fs-4"></i>
                <span>Política de Privacidad</span>
              </>
            )}
            {modalActivo === "reembolsos" && (
              <>
                <i className="bi bi-arrow-repeat text-danger fs-4"></i>
                <span>Política de Reembolsos de ROLLING GAMER</span>
              </>
            )}
            {modalActivo === "seguridad" && (
              <>
                <i className="bi bi-shield-check text-info fs-4"></i>
                <span>Seguridad de la Cuenta</span>
              </>
            )}
          </Modal.Title>
        </Modal.Header>

        <Modal.Body className="py-4" style={{ maxHeight: "70vh", overflowY: "auto" }}>
          {/* NOTICIAS */}
          {modalActivo === "noticias" && (
            <div className="d-flex flex-column gap-3">
              <div className="epic-box p-3">
                <div className="d-flex justify-content-between align-items-center mb-1">
                  <Badge bg="primary">Actualización 2.0</Badge>
                  <small className="text-muted">Septiembre 2026</small>
                </div>
                <h6 className="fw-bold text-white mb-1">
                  ¡Bienvenido a la nueva experiencia de ROLLING GAMER!
                </h6>
                <p className="small text-muted mb-0">
                  Lanzamos oficialmente la tienda con diseño cinematográfico, catálogo de más de 20 títulos AAA e independientes, motor de búsqueda en tiempo real y soporte responsive para celulares.
                </p>
              </div>

              <div className="epic-box p-3">
                <div className="d-flex justify-content-between align-items-center mb-1">
                  <Badge bg="warning" text="dark">Temporada de Ofertas</Badge>
                  <small className="text-muted">Vigente</small>
                </div>
                <h6 className="fw-bold text-white mb-1">
                  Descuentos de hasta el 40% en títulos seleccionados
                </h6>
                <p className="small text-muted mb-0">
                  Aprovecha los descuentos en juegos como Cyberpunk 2077 (-30%), Red Dead Redemption 2 (-40%) y Hogwarts Legacy (-35%).
                </p>
              </div>

              <div className="epic-box p-3">
                <div className="d-flex justify-content-between align-items-center mb-1">
                  <Badge bg="secondary">Notas de Parche v2.4</Badge>
                  <small className="text-muted">Hace 2 días</small>
                </div>
                <h6 className="fw-bold text-white mb-1">
                  Mejoras de rendimiento y navegación táctil
                </h6>
                <p className="small text-muted mb-0">
                  Optimización de tiempos de carga, nuevo scroll horizontal de categorías para celulares y carrusel interactivo en móviles.
                </p>
              </div>
            </div>
          )}

          {/* AYUDA & SOPORTE */}
          {modalActivo === "ayuda" && (
            <div className="d-flex flex-column gap-3">
              <div className="epic-box p-3">
                <h6 className="fw-bold text-white mb-2">
                  <i className="bi bi-question-diamond text-primary me-2"></i>
                  ¿Cómo se entregan los videojuegos comprados?
                </h6>
                <p className="small text-muted mb-0">
                  Al completar el pedido, la licencia digital queda vinculada de forma permanente a tu cuenta de ROLLING GAMER en tu biblioteca personal.
                </p>
              </div>

              <div className="epic-box p-3">
                <h6 className="fw-bold text-white mb-2">
                  <i className="bi bi-credit-card text-success me-2"></i>
                  ¿Qué métodos de pago puedo utilizar?
                </h6>
                <p className="small text-muted mb-0">
                  Aceptamos tarjetas de crédito y débito (Visa, Mastercard, American Express), transferencias bancarias, Mercado Pago y PayPal con procesamiento seguro.
                </p>
              </div>

              <div className="epic-box p-3">
                <h6 className="fw-bold text-white mb-2">
                  <i className="bi bi-laptop text-warning me-2"></i>
                  ¿Cómo sé si mi computadora cumple con los requisitos?
                </h6>
                <p className="small text-muted mb-0">
                  En la ficha técnica de cada juego encontrarás la tabla detallada de especificaciones con requisitos mínimos y recomendados de hardware (CPU, RAM, GPU y almacenamiento).
                </p>
              </div>

              <div className="epic-box p-3 text-center bg-dark border border-primary border-opacity-50">
                <div className="fw-bold text-white mb-1">¿Necesitas ayuda adicional?</div>
                <p className="small text-muted mb-2">Nuestro equipo de soporte está disponible las 24 horas.</p>
                <div className="badge bg-primary text-white py-2 px-3 fs-6">
                  <i className="bi bi-envelope-fill me-2"></i> soporte@rollinggamer.com
                </div>
              </div>
            </div>
          )}

          {/* DISTRIBUCION */}
          {modalActivo === "distribucion" && (
            <div>
              <p className="text-secondary small mb-3">
                En <strong>ROLLING GAMER</strong> apoyamos tanto a estudios consagrados como a desarrolladores independientes que buscan publicar sus creaciones.
              </p>

              <div className="epic-box p-3 mb-3">
                <div className="fw-bold text-white mb-1">
                  <i className="bi bi-pie-chart-fill text-warning me-2"></i> Reparto de Ingresos 88% / 12%
                </div>
                <p className="small text-muted mb-0">
                  Los creadores conservan el 88% de los ingresos netos obtenidos por la venta de sus videojuegos en nuestra tienda.
                </p>
              </div>

              <div className="epic-box p-3 mb-3">
                <div className="fw-bold text-white mb-1">
                  <i className="bi bi-tools text-primary me-2"></i> Portal de Desarrollador Integral
                </div>
                <p className="small text-muted mb-0">
                  Gestiona precios, ofertas de descuento, requisitos de sistema y consulta reseñas comunitarias en tiempo real.
                </p>
              </div>

              {esAdmin ? (
                <div className="d-grid mt-3">
                  <Button
                    as={Link}
                    to="/crear"
                    onClick={cerrarModal}
                    className="btn-epic-primary py-2"
                  >
                    <i className="bi bi-plus-circle me-1"></i> Ir al Formulario de Publicación
                  </Button>
                </div>
              ) : (
                <div className="d-grid mt-3">
                  <Button
                    as={Link}
                    to="/login"
                    onClick={cerrarModal}
                    className="btn-epic-primary py-2"
                  >
                    <i className="bi bi-person-lock me-1"></i> Iniciar Sesión para Publicar
                  </Button>
                </div>
              )}
            </div>
          )}

          {/* TERMINOS */}
          {modalActivo === "terminos" && (
            <div className="small text-muted d-flex flex-column gap-3">
              <div>
                <strong className="text-white d-block mb-1">1. Aceptación del Servicio</strong>
                El acceso y uso de ROLLING GAMER implica la aceptación plena de las presentes condiciones de uso y normativas aplicables al comercio digital de software.
              </div>
              <div>
                <strong className="text-white d-block mb-1">2. Licencias de Uso</strong>
                La adquisición de cualquier videojuego otorga al usuario una licencia digital intransferible y no exclusiva para uso personal y recreativo.
              </div>
              <div>
                <strong className="text-white d-block mb-1">3. Cuentas y Conducta</strong>
                Los usuarios son responsables de resguardar la confidencialidad de sus credenciales. No se tolera el uso de lenguaje de odio o spam en las opiniones.
              </div>
            </div>
          )}

          {/* PRIVACIDAD */}
          {modalActivo === "privacidad" && (
            <div className="small text-muted d-flex flex-column gap-3">
              <div>
                <strong className="text-white d-block mb-1">1. Protección de Datos</strong>
                En ROLLING GAMER respetamos tu privacidad. No comercializamos ni transferimos tu información a terceros bajo ninguna circunstancia.
              </div>
              <div>
                <strong className="text-white d-block mb-1">2. Información Recopilada</strong>
                Únicamente almacenamos tu nombre de usuario, dirección de correo electrónico para el inicio de sesión y tus juegos guardados en lista de deseos.
              </div>
              <div>
                <strong className="text-white d-block mb-1">3. Persistencia Segura</strong>
                Tus datos se encuentran resguardados en el almacenamiento local seguro de tu navegador mediante estándares modernos de cifrado.
              </div>
            </div>
          )}

          {/* REEMBOLSOS */}
          {modalActivo === "reembolsos" && (
            <div className="small text-muted d-flex flex-column gap-3">
              <div className="epic-box p-3">
                <strong className="text-white d-block mb-1">Garantía de 14 Días</strong>
                Todos los títulos comprados en ROLLING GAMER son aptos para un reembolso completo hasta 14 días después de la compra, siempre que el tiempo de juego sea menor a 2 horas.
              </div>
              <div>
                <strong className="text-white d-block mb-1">Plazo de Reintegro</strong>
                Una vez procesada la solicitud, los fondos se reintegrarán a tu medio de pago original en un plazo estimado de 3 a 5 días hábiles.
              </div>
            </div>
          )}

          {/* SEGURIDAD */}
          {modalActivo === "seguridad" && (
            <div className="small text-muted d-flex flex-column gap-3">
              <div>
                <strong className="text-white d-block mb-1">Recomendaciones de Seguridad</strong>
                Protege tu cuenta utilizando una clave segura única de al menos 6 caracteres que combine letras y números.
              </div>
              <div className="epic-box p-3">
                <strong className="text-white d-block mb-1">Cierre de Sesión Seguro</strong>
                Recuerda siempre pulsar en <em>"Cerrar Sesión"</em> al utilizar dispositivos compartidos o públicos para evitar accesos no autorizados a tu inventario.
              </div>
            </div>
          )}
        </Modal.Body>

        <Modal.Footer className="border-secondary border-opacity-25 pt-2">
          <Button variant="secondary" size="sm" onClick={cerrarModal} className="px-3">
            Cerrar
          </Button>
        </Modal.Footer>
      </Modal>
    </UIModalContext.Provider>
  );
};

export default UIModalContext;
