import React, { createContext, useContext, useState } from "react";
import { login } from "../services/authService";

// Interface para o AuthContext
interface AuthContextProps {
  user: { email: string; userType: string } | null;
  token: string | null;
  login: (email: string, senha: string) => Promise<void>;
  logout: () => void;
}

// Cria o AuthContext
const AuthContext = createContext<AuthContextProps | undefined>(undefined);

export const AuthProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState<AuthContextProps["user"]>(null);
  const [token, setToken] = useState<string | null>(null);

  // Função de login
  const handleLogin = async (email: string, senha: string) => {
    const data = await login(email, senha);
    setUser({ email, userType: data.userType });
    setToken(data.token);
    localStorage.setItem("token", data.token); // Armazena o token no localStorage
  };

  // Função de logout
  const logout = () => {
    setUser(null);
    setToken(null);
    localStorage.removeItem("token");
  };

  return (
    <AuthContext.Provider value={{ user, token, login: handleLogin, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Hook para usar o AuthContext
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth deve ser usado dentro de um AuthProvider");
  }
  return context;
};
