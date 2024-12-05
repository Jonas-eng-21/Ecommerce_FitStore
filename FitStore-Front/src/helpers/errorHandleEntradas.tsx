import axios from "axios";
import { toast } from "react-toastify";

export const handleErrorEntrada = (error: unknown) => {
  if (axios.isAxiosError(error)) {
    const response = error.response;

    if (response?.data) {
      if (Array.isArray(response.data.errors)) {
        for (const val of response.data.errors) {
          toast.warning(val.description || "Erro desconhecido");
        }
      }
      else if (typeof response.data.errors === "object") {
        for (const key in response.data.errors) {
          if (Array.isArray(response.data.errors[key])) {
            response.data.errors[key].forEach((msg: string) =>
              toast.warning(msg)
            );
          } else {
            toast.warning(response.data.errors[key]);
          }
        }
      }
      else {
        toast.warning(response.data.message || "Erro desconhecido");
      }
    }
    else if (response?.status === 401) {
      toast.warning("Acesso não autorizado. Faça login novamente.");
      window.history.pushState({}, "LoginPage", "/login");
    }
    else {
      toast.warning("Ocorreu um erro desconhecido ao acessar o servidor.");
    }
  } else {
    toast.error("Erro inesperado. Tente novamente.");
  }
};
