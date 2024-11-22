import axios from "axios";
import { handleError } from "../helpers/errorHandler";
import { UserProfileToken } from "../models/user";

const api = "http://localhost:8080/";

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

export const loginAPI = async (nome: string, senha: string) => {
  try {
    const data = await axios.post<UserProfileToken>(api + "account/login", {
      nome: nome,
      senha: senha,
    });
    return data;
  } catch (error) {
    handleError(error);
  }
};

export const registerAPI = async (userData: RegisterUserData) => {
  try {
    const data = await axios.post<UserProfileToken>(
      api + "account/register",
      userData
    );
    return data;
  } catch (error) {
    handleError(error);
  }
};
