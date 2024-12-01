import axios from "axios";
import { handleErrorProduto } from "../helpers/errorHandleProduto";
import { Produto } from "../models/produto";

const api = "http://localhost:8080/"; // Ajuste a URL conforme necessário

// Tipagem dos dados do produto
type ProdutoRequest = {
  nome: string;
  preco: number;
  descricao: string;
  categoria: string;
};

type ProdutoResponse = {
  id: number;
  nome: string;
  preco: number;
  descricao: string;
  categoria: string;
};

export const listarProdutosAPI = async () => {
  try {
    const response = await axios.get<ProdutoResponse[]>(api + "produtos");
    return response.data;
  } catch (error) {
    handleErrorProduto(error);
  }
};

export const obterProdutoPorIdAPI = async (id: number) => {
  try {
    const response = await axios.get<ProdutoResponse>(api + `produto/${id}`);
    return response.data;
  } catch (error) {
    handleErrorProduto(error);
  }
};

export const cadastrarProdutoAPI = async (produtoData: ProdutoRequest) => {
  try {
    const response = await axios.post<ProdutoResponse>(api + "produto", produtoData);
    return response.data;
  } catch (error) {
    handleErrorProduto(error);
  }
};

export const editarProdutoAPI = async (id: number, produtoData: ProdutoRequest) => {
  try {
    const response = await axios.put<ProdutoResponse>(api + `produto/${id}`, produtoData);
    return response.data;
  } catch (error) {
    handleErrorProduto(error);
  }
};

export const removerProdutoAPI = async (id: number) => {
  try {
    await axios.delete(api + `produto/${id}`);
  } catch (error) {
    handleErrorProduto(error);
  }
};

export const produtoAPI = () => {
  return {
    listarProdutos: listarProdutosAPI,
    obterProdutoPorId: obterProdutoPorIdAPI,
    cadastrarProduto: cadastrarProdutoAPI,
    editarProduto: editarProdutoAPI,
    removerProduto: removerProdutoAPI,
  };
};
