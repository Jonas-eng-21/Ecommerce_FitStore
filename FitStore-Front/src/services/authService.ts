import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8080",
});


interface LoginResponse {
  token: string;
  userType: string;
}

export const login = async (email: string, senha: string): Promise<LoginResponse> => {
  const response = await api.post("/login", { email, senha });
  return response.data;
};

export const registerUser = async (userData: any, userType: "cliente" | "funcionario" | "fornecedor") => {
  const endpoint = `/${userType}`;
  const response = await api.post(endpoint, userData);
  return response.data;
};

export default api;
