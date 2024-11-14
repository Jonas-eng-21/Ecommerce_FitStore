import React, { createContext, useContext, useState } from "react";
import { login as loginService } from "../services/authService";

interface User {
  email: string;
  userType: "cliente" | "funcionario" | "fornecedor";
}

interface AuthContextType {
  user: User | null;
  token: string | null;
  login: (email: string, senha: string, userType: "cliente" | "funcionario" | "fornecedor") => Promise<void>;
  logout: () => void;
}


const AuthContext = createContext<AuthContextType | undefined>(undefined);

interface AuthProviderProps {
  children: React.ReactNode;
}


export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [token, setToken] = useState<string | null>(null);

  const login = async (email: string, senha: string, userType: "cliente" | "funcionario" | "fornecedor") => {
    try {
      const { token } = await loginService(email, senha, userType);
      setToken(token);
      setUser({ email, userType });
      localStorage.setItem("token", token);
    } catch (error) {
      console.error("Erro no login", error);
      throw new Error("Erro ao fazer login");
    }
  };

  const logout = () => {
    setUser(null);
    setToken(null);
    localStorage.removeItem("token");
  };

  return (
    <AuthContext.Provider value={{ user, token, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};


export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth deve ser usado dentro de um AuthProvider");
  }
  return context;
};
