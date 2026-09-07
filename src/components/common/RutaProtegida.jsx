import { Navigate } from "react-router";
import { useAuth } from "../../context/AuthContext";

const RutaProtegida = ({ children, soloAdmin = false }) => {
  const { usuarioActual, esAdmin } = useAuth();

  if (!usuarioActual) {
    // Si no ha iniciado sesión, redirigir a Login
    return <Navigate to="/login" replace />;
  }

  if (soloAdmin && !esAdmin) {
    // Si la ruta requiere administrador y no lo es, redirigir a Inicio
    return <Navigate to="/" replace />;
  }

  return children;
};

export default RutaProtegida;
