import axios from "axios";
import { handleErrorProduto } from "../helpers/errorHandleProduto";

const api = "http://localhost:8080/";

type ProdutoRequest = {
  produto: {
    nome: string;
    categoria: string;
    codigoBarras: string;
    unidadeMedida: string;
    estoque: number;
    precoCusto: number;
    precoVenda: number;
    lucro: number;
    margemLucro: number;
  };
  imagem: File;
};

type ProdutoResponse = {
  preco: number;
  id: number;
  nome: string;
  categoria: string;
  codigoBarras: string;
  unidadeMedida: string;
  estoque: number;
  precoCusto: number;
  precoVenda: number;
  lucro: number;
  margemLucro: number;
  urlImagem: string;
};

export const listarProdutosAPI = async () => {
  try {
    const response = await axios.get<ProdutoResponse[]>(`${api}produto/listarProdutos`);
    return response.data;
  } catch (error) {
    handleErrorProduto(error);
  }
};

export const obterProdutoPorIdAPI = async (id: number) => {
  try {
    const response = await axios.get<ProdutoResponse>(`${api}produto/listarProdutos/${id}`);
    return response.data;
  } catch (error) {
    handleErrorProduto(error);
  }
};

export const cadastrarProdutoAPI = async (produtoData: ProdutoRequest) => {
  try {
    const formData = new FormData();
    formData.append("produto", JSON.stringify(produtoData.produto));
    formData.append("imagem", produtoData.imagem);

    const response = await axios.post<ProdutoResponse>(`${api}produto`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return response.data;
  } catch (error) {
    handleErrorProduto(error);
  }
};

export const removerProdutoAPI = async (id: number) => {
  try {
    await axios.delete(`${api}produto/excluirProduto/${id}`);
  } catch (error) {
    handleErrorProduto(error);
  }
};

export const produtoAPI = () => {
  return {
    listarProdutos: listarProdutosAPI,
    obterProdutoPorId: obterProdutoPorIdAPI,
    cadastrarProduto: cadastrarProdutoAPI,
    removerProduto: removerProdutoAPI,
  };
};
