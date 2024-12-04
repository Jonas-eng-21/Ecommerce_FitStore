import axios from "axios";
import { toast } from "react-toastify";

/**
 * Trata os erros relacionados às operações do estadoService
 * @param error
 */
export const handleEstadoError = (error: unknown) => {
  if (axios.isAxiosError(error)) {
    const response = error.response;

    if (response?.data) {
      if (Array.isArray(response.data.errors)) {
        response.data.errors.forEach((val: { description: string }) => {
          toast.warning(val.description || "Erro desconhecido");
        });
      } else if (typeof response.data.errors === "object") {
        for (const key in response.data.errors) {
          if (Array.isArray(response.data.errors[key])) {
            toast.warning(response.data.errors[key][0] || "Erro desconhecido");
          } else {
            toast.warning(response.data.errors[key] || "Erro desconhecido");
          }
        }
      } else {
        toast.warning(response.data || "Erro desconhecido");
      }
    } else if (response?.status === 401) {
      toast.warning("Por favor, faça login para continuar.");
      window.history.pushState({}, "LoginPage", "/login");
    } else {
      toast.warning("Ocorreu um erro desconhecido no servidor.");
    }
  } else {
    toast.error("Ocorreu um erro inesperado.");
  }
};
