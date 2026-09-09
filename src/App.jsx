import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router";
import Menu from "./components/common/Menu";
import Footer from "./components/common/Footer";
import RutaProtegida from "./components/common/RutaProtegida";
import Inicio from "./components/pages/Inicio";
import DetalleDeProducto from "./components/pages/DetalleDeProducto";
import Administrador from "./components/pages/Administrador";
import FormularioProducto from "./components/pages/producto/FormularioProducto";
import Login from "./components/pages/Login";
import Wishlist from "./components/pages/Wishlist";
import About from "./components/pages/About";
import Error404 from "./components/pages/Error404";
import { AuthProvider } from "./context/AuthContext";
import { UIModalProvider } from "./context/UIModalContext";
import juegosIniciales from "./data/juegosIniciales";

function App() {
  // Inicialización con persistencia en LocalStorage
  // Si no hay datos guardados o si hay datos antiguos de comida ("Pizza"), inicializamos con los 22 videojuegos
  const [productos, setProductos] = useState(() => {
    try {
      const datosGuardados = localStorage.getItem("productosKey");
      if (!datosGuardados) return juegosIniciales;

      const parseados = JSON.parse(datosGuardados);
      // Validar si los datos corresponden a videojuegos (mínimo 20 y con propiedad 'nombre' o 'requisitos')
      const esCatalogoJuegos =
        Array.isArray(parseados) &&
        parseados.length >= 10 &&
        parseados.some((p) => p.categoria === "RPG" || p.categoria === "Acción");

      return esCatalogoJuegos ? parseados : juegosIniciales;
    } catch {
      return juegosIniciales;
    }
  });

  // Guardar automáticamente en LocalStorage cada vez que cambie el inventario
  useEffect(() => {
    localStorage.setItem("productosKey", JSON.stringify(productos));
  }, [productos]);

  // Funciones CRUD para el catálogo
  const crearProducto = (productoNuevo) => {
    setProductos((prev) => [productoNuevo, ...prev]);
    return true;
  };

  const borrarProducto = (idProducto) => {
    setProductos((prev) => prev.filter((item) => item.id !== idProducto));
    return true;
  };

  const buscarProducto = (idProducto) => {
    return productos.find((prod) => prod.id === idProducto);
  };

  const modificarProducto = (idProducto, datosProducto) => {
    setProductos((prev) =>
      prev.map((item) => {
        if (item.id === idProducto) {
          return {
            ...item,
            ...datosProducto
          };
        }
        return item;
      })
    );
    return true;
  };

  // Función para agregar reseña comunitaria a un juego
  const agregarResena = (juegoId, nuevaResena) => {
    setProductos((prev) =>
      prev.map((j) => {
        if (j.id === juegoId) {
          const resenasActuales = j.resenas || [];
          return {
            ...j,
            resenas: [nuevaResena, ...resenasActuales]
          };
        }
        return j;
      })
    );
  };

  return (
    <AuthProvider>
      <UIModalProvider>
        <BrowserRouter>
          <Menu />
          <main className="container-fluid px-3 px-md-4 my-3">
            <Routes>
              {/* Rutas Públicas */}
              <Route path="/" element={<Inicio juegos={productos} />} />
              <Route
                path="/detalle/:id"
                element={
                  <DetalleDeProducto
                    buscarProducto={buscarProducto}
                    agregarResena={agregarResena}
                  />
                }
              />
              <Route path="/about" element={<About />} />
              <Route path="/login" element={<Login />} />

              {/* Lista de Deseos (Usuario Autenticado) */}
              <Route
                path="/wishlist"
                element={
                  <RutaProtegida>
                    <Wishlist juegos={productos} />
                  </RutaProtegida>
                }
              />

              {/* Rutas Protegidas de Administración (Solo Rol Admin) */}
              <Route
                path="/admin"
                element={
                  <RutaProtegida soloAdmin={true}>
                    <Administrador
                      productos={productos}
                      setProductos={setProductos}
                      borrarProducto={borrarProducto}
                    />
                  </RutaProtegida>
                }
              />
              {/* Redirección de compatibilidad para /administrador */}
              <Route path="/administrador" element={<Navigate to="/admin" replace />} />

              <Route
                path="/crear"
                element={
                  <RutaProtegida soloAdmin={true}>
                    <FormularioProducto
                      titulo="Crear Videojuego"
                      crearProducto={crearProducto}
                    />
                  </RutaProtegida>
                }
              />

              <Route
                path="/editar/:id"
                element={
                  <RutaProtegida soloAdmin={true}>
                    <FormularioProducto
                      titulo="Editar Videojuego"
                      buscarProducto={buscarProducto}
                      modificarProducto={modificarProducto}
                    />
                  </RutaProtegida>
                }
              />

              {/* Página de Error 404 Personalizada */}
              <Route path="/404" element={<Error404 />} />
              <Route path="*" element={<Error404 />} />
            </Routes>
          </main>
          <Footer />
        </BrowserRouter>
      </UIModalProvider>
    </AuthProvider>
  );
}

export default App;
