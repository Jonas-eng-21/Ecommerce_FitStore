import axios from "axios";
import { handleCidadeError } from "../helpers/errorHandleCidades";

const api = "http://localhost:8080/";

export type Cidade = {
  nome: string;
  estado: { id: number };
};

export const listarCidadesAPI = async () => {
  try {
    const response = await axios.get<Cidade[]>(`${api}cidades`);
    return response.data;
  } catch (error) {
    handleCidadeError(error);
  }
};

/**
 * Busca uma cidade pelo ID
 * @param id ID da cidade
 */
export const obterCidadePorIdAPI = async (id: number) => {
  try {
    const response = await axios.get<Cidade>(`${api}cidade/${id}`);
    return response.data;
  } catch (error) {
    handleCidadeError(error);
  }
};

/**
 * Cadastra uma nova cidade
 * @param cidade Dados da cidade a serem cadastrados
 */
export const cadastrarCidadeAPI = async (cidade: Cidade) => {
  try {
    const response = await axios.post<Cidade>(`${api}cidade`, cidade);
    return response.data;
  } catch (error) {
    handleCidadeError(error);
  }
};

/**
 * Atualiza uma cidade existente
 * @param id ID da cidade a ser atualizada
 * @param cidade Dados atualizados da cidade
 */
export const editarCidadeAPI = async (id: number, cidade: Cidade) => {
  try {
    const response = await axios.put<Cidade>(`${api}cidade/${id}`, cidade);
    return response.data;
  } catch (error) {
    handleCidadeError(error);
  }
};

/**
 * Remove uma cidade pelo ID
 * @param id
 */
export const removerCidadeAPI = async (id: number) => {
  try {
    await axios.delete(`${api}cidade/${id}`);
  } catch (error) {
    handleCidadeError(error);
  }
};
