import axios from "axios";
import { toast } from "react-toastify";

export const handleCidadeError = (error: unknown) => {
  if (axios.isAxiosError(error)) {
    const response = error.response;
    if (response?.data) {
      if (Array.isArray(response.data.errors)) {
        for (const val of response.data.errors) {
          toast.warning(`Erro no cadastro de cidade: ${val.description}`);
        }
      } else if (typeof response.data.errors === "object") {
        for (const key in response.data.errors) {
          toast.warning(
            `Erro no campo ${key}: ${response.data.errors[key][0]}`
          );
        }
      } else if (typeof response.data === "string") {
        toast.warning(`Erro: ${response.data}`);
      } else {
        toast.warning("Erro desconhecido ao processar a cidade.");
      }
    } else if (response?.status === 404) {
      toast.warning("Cidade não encontrada.");
    } else if (response?.status === 400) {
      toast.warning("Dados inválidos fornecidos para a cidade.");
    } else if (response?.status === 401) {
      toast.warning("Por favor, faça login.");
      window.history.pushState({}, "LoginPage", "/login");
    } else {
      toast.warning(
        "Ocorreu um erro desconhecido ao acessar o serviço de cidades."
      );
    }
  } else {
    toast.error("Um erro inesperado ocorreu no serviço de cidades.");
  }
};
