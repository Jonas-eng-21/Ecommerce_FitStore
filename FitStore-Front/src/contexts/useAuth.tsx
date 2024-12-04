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
  registerUser: (email: string, senha: string) => void;
  loginUser: (email: string, senha: string, userType: string) => void;
  logout: () => void;
  isLoggedIn: () => boolean;
};

type RegisterUserData = {
  nome: string;
  cpf?: string;
  cnpj?: string;
  telefone: string;
  endereco: string;
  numero: string;
  bairro: string;
  email: string;
  senha: string;
  cidade: { id: number };
  funcao?: string;
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
    if (storedToken) {
      axios.defaults.headers.common["Authorization"] = `Bearer ${storedToken}`;
      setToken(storedToken);

      const storedUser = localStorage.getItem("user");
      if (storedUser) {
        setUser(JSON.parse(storedUser));
      }
    }
    setIsReady(true);
  }, []);

  const registerUser = async (userData: RegisterUserData) => {
    await registerAPI(userData)
      .then((res) => {
        if (res) {
          localStorage.setItem("token", res?.data.token);
          const userObj = {
            nome: res?.data.nome,
            email: res?.data.email,
          };
          localStorage.setItem("user", JSON.stringify(userObj));
          setToken(res.data.token!);
          setUser(userObj!);
          toast.success("Cadastro realizado com sucesso!");
          navigate("/search");
        }
      })
      .catch((e) => toast.warning("Erro no servidor"));
  };

  const loginUser = async (email: string, senha: string, userType: string) => {
    try {
      const res = await loginAPI(email, senha, userType);

      console.log("Resposta da API:", res);

      if (res && res.data) {
        const token = res.data;
        console.log("Token recebido:", token);

        localStorage.setItem("token", token);
        console.log("Token armazenado no localStorage.");

        const userObj = { email };
        localStorage.setItem("user", JSON.stringify(userObj));
        console.log("Usuário armazenado no localStorage:", userObj);

        setToken(token);
        setUser(userObj);

        axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
        toast.success("Login bem-sucedido!");
      } else {
        console.error("Token ausente na resposta da API.");
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
    setUser(null);
    setToken(null);
    delete axios.defaults.headers.common["Authorization"];
    navigate("/Login");
  };

  return (
    <UserContext.Provider
      value={{ loginUser, user, token, logout, isLoggedIn, registerUser }}
    >
      {isReady ? children : null}
    </UserContext.Provider>
  );
};

export const useAuth = () => React.useContext(UserContext);
