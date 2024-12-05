import { createContext, useEffect, useState } from "react";
import { UserProfile } from "../models/user";
import { useNavigate } from "react-router-dom";
import { loginAPI, registerAPI } from "../services/authService";
import { toast } from "react-toastify";
import React from "react";
import axios from "axios";

type UserContextType = {
  user: UserProfile | null;
  token: string | null;
  loginUser: (email: string, senha: string, userType: string) => Promise<void>;
  logout: () => void;
  isLoggedIn: () => boolean;
};

type Props = { children: React.ReactNode };

const UserContext = createContext<UserContextType>({} as UserContextType);

export const UserProvider = ({ children }: Props) => {
  const navigate = useNavigate();
  const [token, setToken] = useState<string | null>(null);
  const [user, setUser] = useState<UserProfile | null>(null);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    const storedUserType = localStorage.getItem("userType");

    if (storedToken && storedUserType) {
      axios.defaults.headers.common["Authorization"] = `Bearer ${storedToken}`;
      setToken(storedToken);
      setUser({ email: "usuario@exemplo.com", role: storedUserType }); // Incluímos o "role"
    }

    setIsReady(true);
  }, []);

  const loginUser = async (email: string, senha: string, userType: string) => {
    try {
      const res = await loginAPI(email, senha, userType);

      if (res && res.data) {
        const token = res.data.token;
        localStorage.setItem("token", token);
        localStorage.setItem("userType", userType);

        setToken(token);
        setUser({ email, role: userType }); // Adiciona o tipo de usuário

        axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
        toast.success("Login bem-sucedido!");

        // Redireciona com base no tipo de usuário
        if (userType === "fornecedor") {
          navigate("/homefornecedor");
        } else if (userType === "funcionario") {
          navigate("/homeFuncionario");
        } else {
          navigate("/");
        }
      } else {
        toast.error("Falha ao autenticar. Tente novamente.");
      }
    } catch (error) {
      console.error("Erro no login:", error);
      toast.warning("Erro no servidor");
    }
  };

  const isLoggedIn = () => {
    return !!token;
  };

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userType");
    setUser(null);
    setToken(null);
    delete axios.defaults.headers.common["Authorization"];
    navigate("/login");
  };

  return (
    <UserContext.Provider value={{ loginUser, user, token, logout, isLoggedIn }}>
      {isReady ? children : null}
    </UserContext.Provider>
  );
};

export const useAuth = () => React.useContext(UserContext);
