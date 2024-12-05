import axios from "axios";
import { handleError } from "../helpers/errorHandler";
import { UserProfileToken } from "../models/user";

const api = "http://localhost:8080/";

type RegisterCliente = {
  nome: string;
  cpf: string;
  telefone: string;
  endereco: string;
  numero: string;
  bairro: string;
  email: string;
  senha: string;
  cidade: { id: number };
};

type RegisterFuncionario = {
  nome: string;
  cpf: string;
  telefone: string;
  endereco: string;
  numero: string;
  bairro: string;
  email: string;
  senha: string;
  cidade: { id: number };
};

type RegisterFornecedor = {
  nome: string;
  cnpj: string;
  telefone: string;
  endereco: string;
  numero: string;
  bairro: string;
  email: string;
  senha: string;
  funcao: string;
  cidade: { id: number };
};

// Função para login com base no tipo de usuário
export const loginAPI = async (email: string, senha: string, userType: string) => {
  try {
    const api = `http://localhost:8080/auth/login/${userType}`;
    const response = await axios.post<UserProfileToken>(api, {
      email: email,
      senha: senha,
    });
    return response;
  } catch (error) {
    handleError(error);
  }
};

// Cadastro de cliente
export const registerClienteAPI = async (userData: RegisterCliente) => {
  try {
    const data = await axios.post<UserProfileToken>(api + "cliente", userData);
    return data;
  } catch (error) {
    handleError(error);
  }
};

// Cadastro de funcionário
export const registerFuncionarioAPI = async (userData: RegisterFuncionario) => {
  try {
    const data = await axios.post<UserProfileToken>(
      api + "funcionario",
      userData
    );
    return data;
  } catch (error) {
    handleError(error);
  }
};

// Cadastro de fornecedor
export const registerFornecedorAPI = async (userData: RegisterFornecedor) => {
  try {
    const data = await axios.post<UserProfileToken>(
      api + "fornecedor",
      userData
    );
    return data;
  } catch (error) {
    handleError(error);
  }
};

// Agrupamento de APIs de registro
export const registerAPI = () => {
  return {
    registerCliente: registerClienteAPI,
    registerFuncionario: registerFuncionarioAPI,
    registerFornecedor: registerFornecedorAPI,
  };
};
