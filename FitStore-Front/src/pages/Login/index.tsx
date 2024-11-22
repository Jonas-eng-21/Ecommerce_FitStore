// import React, { useState } from "react";
// //import FormLogin from "../../components/FormLogin";
// import { useAuth } from "../../contexts/authContext";
// //import { Container, ContainerLeft, ContainerRight } from "./style";

// interface FormData {
//     email: string;
//     senha: string;
// }


// const initialLoginForm: FormData = {
//     email: "",
//     senha: "",
// };

// export default function Login() {

//     const { login } = useAuth();
//     const [email, setEmail] = useState("");
//     const [senha, setSenha] = useState("");
//     const [userType, setUserType] = useState<"cliente" | "funcionario" | "fornecedor">("cliente");

//     const handleSubmit = async (e: React.FormEvent) => {
//         e.preventDefault();
//         try {
//             await login(email, senha, userType);
//             // Redirecionar para a página principal ou outra rota protegida
//         } catch (error) {
//             console.error("Erro ao fazer login:", error);
//         }
//     };


//     return (
//         <form onSubmit={handleSubmit}>
//             <input
//                 type="email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 placeholder="Email"
//             />
//             <input
//                 type="password"
//                 value={senha}
//                 onChange={(e) => setSenha(e.target.value)}
//                 placeholder="Senha"
//             />
//             <select value={userType} onChange={(e) => setUserType(e.target.value as "cliente" | "funcionario" | "fornecedor")}>
//                 <option value="cliente">Cliente</option>
//                 <option value="funcionario">Funcionário</option>
//                 <option value="fornecedor">Fornecedor</option>
//             </select>
//             <button type="submit">Login</button>
//         </form>
//     );
// }
