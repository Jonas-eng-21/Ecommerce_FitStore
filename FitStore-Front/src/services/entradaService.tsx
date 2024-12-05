import axios from "axios";
import { handleErrorEntrada } from "../helpers/errorHandleEntradas";

const api = "http://localhost:8080/api/entradas";

type ItemEntrada = {
    id: number;
    produtoId: number;
    nomeProduto: string | null;
    categoriaProduto: string | null;
    urlImagemProduto: string | null;
    precoProduto: number;
    quantidade: number;
    valor: number;
    valorCusto: number;
};

type EntradaRequest = {
    obs: string;
    valorTotal: number;
    quantidadeTotal: number;
    itensEntrada: Array<{
        produtoId: number;
        quantidade: number;
        valor: number;
        valorCusto: number;
    }>;
    fornecedorId: number; 
    funcionarioId: number; 
};

type EntradaResponse = {
    id: number;
    valorTotal: number;
    quantidadeTotal: number;
    itensEntrada: ItemEntrada[];
};

// Listar todas as entradas
export const listarEntradasAPI = async (): Promise<EntradaResponse[]> => {
    try {
        const response = await axios.get<EntradaResponse[]>(api);
        return response.data;
    } catch (error) {
        handleErrorEntrada(error);
        return [];
    }
};

// Cadastrar uma entrada
export const cadastrarEntradaAPI = async (
    entradaData: EntradaRequest
): Promise<EntradaResponse | undefined> => {
    try {
        const response = await axios.post<EntradaResponse>(api, entradaData);
        return response.data;
    } catch (error) {
        handleErrorEntrada(error);
    }
};

// Remover uma entrada por ID
export const removerEntradaAPI = async (id: number): Promise<void> => {
    try {
        await axios.delete(`${api}${id}`);
    } catch (error) {
        handleErrorEntrada(error);
    }
};

// Remover um item de entrada por ID
export const removerItemEntradaAPI = async (id: number): Promise<void> => {
    try {
        await axios.delete(`${api}item/${id}`);
    } catch (error) {
        handleErrorEntrada(error);
    }
};

// Exportação das funções do serviço
export const entradaAPI = () => {
    return {
        listarEntradas: listarEntradasAPI,
        cadastrarEntrada: cadastrarEntradaAPI,
        removerEntrada: removerEntradaAPI,
        removerItemEntrada: removerItemEntradaAPI,
    };
};
