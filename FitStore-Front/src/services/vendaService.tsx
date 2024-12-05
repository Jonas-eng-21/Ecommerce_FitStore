import axios from "axios";
import { handleErrorVenda } from "../helpers/errorHandleVendas"; // Certifique-se de criar um helper para tratamento de erros

const api = "http://localhost:8080/api/vendas";

type ItemVenda = {
    id: number;
    produtoId: number;
    nomeProduto: string | null;
    categoriaProduto: string | null;
    urlImagemProduto: string | null;
    precoProduto: number;
    quantidade: number;
    valor: number;
    subtotal: number;
};

type VendaRequest = {
    obs: string;
    itensVenda: Array<{
        produtoId: number;
        quantidade: number;
        valor: number;
    }>;
};

type VendaResponse = {
    id: number;
    valorTotal: number;
    quantidadeTotal: number;
    itensVenda: ItemVenda[];
};

// Listar todas as vendas
export const listarVendasAPI = async (): Promise<VendaResponse[]> => {
    try {
        const response = await axios.get<VendaResponse[]>(api);
        return response.data;
    } catch (error) {
        handleErrorVenda(error);
        return [];
    }
};

// Cadastrar uma nova venda
export const cadastrarVendaAPI = async (
    vendaData: VendaRequest
): Promise<VendaResponse | undefined> => {
    try {
        const response = await axios.post<VendaResponse>(api, vendaData);
        return response.data;
    } catch (error) {
        handleErrorVenda(error);
    }
};

// Remover uma venda por ID (caso necessário)
export const removerVendaAPI = async (id: number): Promise<void> => {
    try {
        await axios.delete(`${api}/${id}`);
    } catch (error) {
        handleErrorVenda(error);
    }
};

// Exportação das funções do serviço
export const vendaAPI = () => {
    return {
        listarVendas: listarVendasAPI,
        cadastrarVenda: cadastrarVendaAPI,
        removerVenda: removerVendaAPI,
    };
};
