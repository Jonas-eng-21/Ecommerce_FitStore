import axios from "axios";
import { handleErrorEntrada } from "../helpers/errorHandleEntradas";

const api = "http://localhost:8080/api/entradas";

type ItemEntrada = {
  id?: number;
  produto: { id: number };
  quantidade: number;
  valor: number;
  valorCusto: number;
};

type EntradaRequest = {
  itensEntrada: ItemEntrada[];
  valorTotal: number;
  quantidadeTotal: number;
};

type EntradaResponse = {
  id: number;
  itensEntrada: ItemEntrada[];
  valorTotal: number;
  quantidadeTotal: number;
  dataCriacao: string;
};

export const listarEntradasAPI = async () => {
  try {
    const response = await axios.get<EntradaResponse[]>(api);
    return response.data;
  } catch (error) {
    handleErrorEntrada(error);
  }
};

export const cadastrarEntradaAPI = async (entradaData: EntradaRequest) => {
  try {
    const response = await axios.post<EntradaResponse>(api, entradaData);
    return response.data;
  } catch (error) {
    handleErrorEntrada(error);
  }
};

export const removerEntradaAPI = async (id: number) => {
  try {
    await axios.delete(`${api}/${id}`);
  } catch (error) {
    handleErrorEntrada(error);
  }
};

export const removerItemEntradaAPI = async (id: number) => {
  try {
    await axios.delete(`${api}/item/${id}`);
  } catch (error) {
    handleErrorEntrada(error);
  }
};

export const entradaAPI = () => {
  return {
    listarEntradas: listarEntradasAPI,
    cadastrarEntrada: cadastrarEntradaAPI,
    removerEntrada: removerEntradaAPI,
    removerItemEntrada: removerItemEntradaAPI,
  };
};
