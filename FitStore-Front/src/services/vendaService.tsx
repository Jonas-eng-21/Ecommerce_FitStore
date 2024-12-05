import axios from "axios";
import { handleErrorVenda } from "../helpers/errorHandleVendas"; 

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

export const listarVendasAPI = async (): Promise<VendaResponse[]> => {
    try {
        const response = await axios.get<VendaResponse[]>(api);
        return response.data;
    } catch (error) {
        handleErrorVenda(error);
        return [];
    }
};

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

export const removerVendaAPI = async (id: number): Promise<void> => {
    try {
        await axios.delete(`${api}/${id}`);
    } catch (error) {
        handleErrorVenda(error);
    }
};

export const vendaAPI = () => {
    return {
        listarVendas: listarVendasAPI,
        cadastrarVenda: cadastrarVendaAPI,
        removerVenda: removerVendaAPI,
    };
};
