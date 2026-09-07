import { createContext, useContext, useState, useEffect } from "react";
import usuariosIniciales from "../data/usuariosIniciales";
import { v4 as uuidv4 } from "uuid";

const AuthContext = createContext();

// eslint-disable-next-line react-refresh/only-export-components
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth debe usarse dentro de un AuthProvider");
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  // 1. Usuarios registrados (persistencia en LocalStorage)
  const [usuarios, setUsuarios] = useState(() => {
    try {
      const guardados = localStorage.getItem("usuarios_rolling_key");
      return guardados ? JSON.parse(guardados) : usuariosIniciales;
    } catch {
      return usuariosIniciales;
    }
  });

  // 2. Sesión del usuario actual (persistencia en LocalStorage)
  const [usuarioActual, setUsuarioActual] = useState(() => {
    try {
      const sesion = localStorage.getItem("sesion_rolling_key");
      return sesion ? JSON.parse(sesion) : null;
    } catch {
      return null;
    }
  });

  // 3. Lista de deseos (Wishlist) organizada por usuarioId: { [usuarioId]: [juegoId, ...] }
  const [wishlists, setWishlists] = useState(() => {
    try {
      const guardado = localStorage.getItem("wishlist_rolling_key");
      return guardado ? JSON.parse(guardado) : {};
    } catch {
      return {};
    }
  });

  // Sincronización con LocalStorage mediante useEffect
  useEffect(() => {
    localStorage.setItem("usuarios_rolling_key", JSON.stringify(usuarios));
  }, [usuarios]);

  useEffect(() => {
    if (usuarioActual) {
      localStorage.setItem("sesion_rolling_key", JSON.stringify(usuarioActual));
    } else {
      localStorage.removeItem("sesion_rolling_key");
    }
  }, [usuarioActual]);

  useEffect(() => {
    localStorage.setItem("wishlist_rolling_key", JSON.stringify(wishlists));
  }, [wishlists]);

  // Funciones de Autenticación
  const login = (email, password) => {
    const usuarioEncontrado = usuarios.find(
      (u) => u.email.trim().toLowerCase() === email.trim().toLowerCase() && u.password === password
    );

    if (usuarioEncontrado) {
      // Guardar copia sin exponer la contraseña en la sesión activa si se desea,
      // pero manteniendo el id y rol para validaciones
      const datosSesion = {
        id: usuarioEncontrado.id,
        nombre: usuarioEncontrado.nombre,
        email: usuarioEncontrado.email,
        rol: usuarioEncontrado.rol
      };
      setUsuarioActual(datosSesion);
      return { success: true, user: datosSesion };
    }
    return { success: false, message: "Correo electrónico o contraseña incorrectos" };
  };

  const logout = () => {
    setUsuarioActual(null);
  };

  const register = (nombre, email, password) => {
    const existe = usuarios.some(
      (u) => u.email.trim().toLowerCase() === email.trim().toLowerCase()
    );

    if (existe) {
      return { success: false, message: "Ya existe una cuenta con este correo electrónico" };
    }

    const nuevoUsuario = {
      id: uuidv4(),
      nombre: nombre.trim(),
      email: email.trim().toLowerCase(),
      password: password,
      rol: "usuario",
      fechaRegistro: new Date().toISOString().split("T")[0]
    };

    setUsuarios((prev) => [...prev, nuevoUsuario]);

    // Iniciar sesión automáticamente
    const datosSesion = {
      id: nuevoUsuario.id,
      nombre: nuevoUsuario.nombre,
      email: nuevoUsuario.email,
      rol: nuevoUsuario.rol
    };
    setUsuarioActual(datosSesion);
    return { success: true, user: datosSesion };
  };

  const borrarUsuario = (idUsuario) => {
    if (usuarioActual && usuarioActual.id === idUsuario) {
      return { success: false, message: "No puedes eliminar tu propia cuenta en sesión activa" };
    }
    setUsuarios((prev) => prev.filter((u) => u.id !== idUsuario));
    return { success: true };
  };

  // Funciones de Wishlist (Lista de Deseos)
  const userWishlist = (usuarioActual && wishlists[usuarioActual.id]) || [];

  const isWishlisted = (juegoId) => {
    if (!usuarioActual) return false;
    return userWishlist.includes(juegoId);
  };

  const toggleWishlist = (juegoId) => {
    if (!usuarioActual) {
      return { success: false, requireAuth: true };
    }

    const userId = usuarioActual.id;
    const currentList = wishlists[userId] || [];
    const exists = currentList.includes(juegoId);

    const updatedList = exists
      ? currentList.filter((id) => id !== juegoId)
      : [...currentList, juegoId];

    setWishlists((prev) => ({
      ...prev,
      [userId]: updatedList
    }));

    return {
      success: true,
      added: !exists,
      count: updatedList.length
    };
  };

  const getWishlistJuegos = (todosLosJuegos) => {
    if (!usuarioActual) return [];
    const currentIds = wishlists[usuarioActual.id] || [];
    return todosLosJuegos.filter((j) => currentIds.includes(j.id));
  };

  const esAdmin = usuarioActual?.rol === "admin";

  return (
    <AuthContext.Provider
      value={{
        usuarios,
        usuarioActual,
        esAdmin,
        login,
        logout,
        register,
        borrarUsuario,
        wishlistIds: userWishlist,
        isWishlisted,
        toggleWishlist,
        getWishlistJuegos
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
