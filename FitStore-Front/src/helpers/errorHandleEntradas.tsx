import axios from "axios";
import { toast } from "react-toastify";

export const handleErrorEntrada = (error: unknown) => {
    if (axios.isAxiosError(error)) {
        const response = error.response;

        if (response?.data) {
            if (Array.isArray(response.data.errors)) {
                for (const val of response.data.errors) {
                    toast.warning(`Erro em entrada: ${val.description}`);
                }
            }
            else if (typeof response.data.errors === "object") {
                for (const key in response.data.errors) {
                    toast.warning(`Erro no campo "${key}": ${response.data.errors[key][0]}`);
                }
            }
            else {
                toast.warning(`Erro em entrada: ${response.data}`);
            }
        }
        else if (response?.status === 401) {
            toast.warning("Você precisa estar logado para realizar esta ação.");
            window.history.pushState({}, "LoginPage", "/login");
        }
        else {
            toast.warning("Ocorreu um erro desconhecido ao processar a entrada.");
        }
    } else {
        toast.error("Ocorreu um erro inesperado ao processar a entrada.");
    }
};
