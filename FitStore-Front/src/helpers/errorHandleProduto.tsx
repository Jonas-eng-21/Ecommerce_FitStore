import axios from "axios";
import { toast } from "react-toastify";

export const handleErrorProduto = (error: unknown) => {
  if (axios.isAxiosError(error)) {
    const response = error.response;

    // Verifica se a resposta contém dados e se a lista de produtos está vazia
    if (response?.data) {
      if (Array.isArray(response.data) && response.data.length === 0) {
        toast.warning("O banco de dados está vazio. Nenhum produto encontrado.");
        return;
      }

      // Lidar com erro quando errors é um array
      if (Array.isArray(response.data.errors)) {
        for (const val of response.data.errors) {
          toast.warning(`Produto Error: ${val.description}`);
        }
      } else if (typeof response.data.errors === "object") {
        // Lidar com erro quando errors é um objeto
        for (const key in response.data.errors) {
          toast.warning(`Produto Error: ${response.data.errors[key][0]}`);
        }
      } else {
        toast.warning(`Produto Error: ${response.data}`);
      }
    } else if (response?.status === 401) {
      toast.warning("Produto: Unauthorized. Please login.");
      window.history.pushState({}, "LoginPage", "/login");
    } else if (response?.status === 404) {
      toast.warning("Produto not found.");
    } else if (response?.status === 500) {
      toast.error("Produto API is down. Please try again later.");
    } else {
      toast.warning("An unknown error occurred while handling the product.");
    }
  } else {
    toast.error("An unexpected error occurred while handling the product.");
  }
};
