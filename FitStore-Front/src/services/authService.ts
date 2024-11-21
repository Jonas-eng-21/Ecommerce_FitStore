import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8080",
});

interface LoginResponse {
  token: string;
  userType: string;
}

export const login = async (
  email: string,
  senha: string,
  userType: "cliente" | "funcionario" | "fornecedor"
): Promise<LoginResponse> => {
  const endpoint = `/auth/login/${userType}`;
  const response = await api.post(endpoint, { email, senha });
  return response.data;
};

export const registerUser = async (userData: any, userType: "cliente" | "funcionario" | "fornecedor") => {
  const endpoint = `/auth/register/${userType}`;
  const response = await api.post(endpoint, userData);
  return response.data;
};

export default api;
