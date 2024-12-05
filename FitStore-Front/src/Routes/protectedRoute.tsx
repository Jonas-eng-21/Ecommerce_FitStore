import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../contexts/useAuth";

type Props = {
  children: React.ReactNode;
  allowedRoles?: string[]; // Lista de papéis permitidos
};

const ProtectedRoute = ({ children, allowedRoles }: Props) => {
  const location = useLocation();
  const { user, isLoggedIn } = useAuth();

  if (!isLoggedIn()) {
    // Redireciona para login se não estiver autenticado
    return <Navigate to="/Login" state={{ from: location }} replace />;
  }

  if (allowedRoles && (!user || !allowedRoles.includes(user.role))) {
    // Redireciona para a página inicial se o papel do usuário não for permitido
    return <Navigate to="/" replace />;
  }

  return <>{children}</>;
};

export default ProtectedRoute;
