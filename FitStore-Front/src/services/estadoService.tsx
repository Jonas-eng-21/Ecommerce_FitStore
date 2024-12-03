import axios from "axios";
import { handleEstadoError } from "../helpers/errorHandleEstado";

const api = "http://localhost:8080/";

// Define o tipo Estado
export type Estado = {
  id?: number; // Opcional, pois no cadastro não será enviado
  nome: string;
  sigla: string;
};

/**
 * Lista todos os estados
 */
export const listarEstadosAPI = async () => {
  try {
    const response = await axios.get<Estado[]>(`${api}estados`);
    return response.data;
  } catch (error) {
    handleEstadoError(error);
  }
};

/**
 * Busca um estado pelo ID
 * @param id ID do estado
 */
export const obterEstadoPorIdAPI = async (id: number) => {
  try {
    const response = await axios.get<Estado>(`${api}estado/${id}`);
    return response.data;
  } catch (error) {
    handleEstadoError(error);
  }
};

/**
 * Cadastra um novo estado
 * @param estado Dados do estado a ser cadastrado
 */
export const cadastrarEstadoAPI = async (estado: Estado) => {
  try {
    const response = await axios.post<Estado>(`${api}estado`, estado);
    return response.data;
  } catch (error) {
    handleEstadoError(error);
  }
};

/**
 * Atualiza um estado existente
 * @param id ID do estado a ser atualizado
 * @param estado Dados atualizados do estado
 */
export const editarEstadoAPI = async (id: number, estado: Estado) => {
  try {
    const response = await axios.put<Estado>(`${api}estado/${id}`, estado);
    return response.data;
  } catch (error) {
    handleEstadoError(error);
  }
};

/**
 * Remove um estado pelo ID
 * @param id ID do estado a ser removido
 */
export const removerEstadoAPI = async (id: number) => {
  try {
    await axios.delete(`${api}estado/${id}`);
  } catch (error) {
    handleEstadoError(error);
  }
};
