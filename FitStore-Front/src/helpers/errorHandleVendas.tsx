import axios from "axios";
import { toast } from "react-toastify";

export const handleErrorVenda = (error: unknown) => {
  if (axios.isAxiosError(error)) {
    const response = error.response;

    // Verifica se a resposta contém dados e se a lista de vendas está vazia
    if (response?.data) {
      // Verifica se a resposta contém um array de erros
      if (Array.isArray(response.data.errors)) {
        for (const val of response.data.errors) {
          toast.warning(`Venda Error: ${val.description}`);
        }
      } else if (typeof response.data.errors === "object") {
        // Lidar com erro quando errors é um objeto
        for (const key in response.data.errors) {
          toast.warning(`Venda Error: ${response.data.errors[key][0]}`);
        }
      } else {
        toast.warning(`Venda Error: ${response.data}`);
      }
    } else if (response?.status === 400) {
      // Erro de Bad Request
      toast.warning("Venda: Dados inválidos. Verifique as informações enviadas.");
    } else if (response?.status === 401) {
      // Não autorizado
      toast.warning("Venda: Unauthorized. Please login.");
      window.history.pushState({}, "LoginPage", "/login");
    } else if (response?.status === 404) {
      // Não encontrado
      toast.warning("Venda not found.");
    } else if (response?.status === 500) {
      // Erro interno do servidor
      toast.error("Venda API is down. Please try again later.");
    } else {
      toast.warning("An unknown error occurred while handling the sale.");
    }
  } else {
    // Erro inesperado
    toast.error("An unexpected error occurred while handling the sale.");
  }
};
