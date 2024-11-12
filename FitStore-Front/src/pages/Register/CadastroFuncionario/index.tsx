import React from "react";
import FormCadastro from "../../../components/FormCadastro";
import { Container, ContainerLeft, ContainerRight } from "./style";

interface FormData {
  nome?: string;
  cpf?: string;
  telefone?: string;
  endereco?: string;
  numero?: string;
  funcao?: string;
  bairro?: string;
  email?: string;
}

const initialClienteData: FormData = {
  nome: "",
  cpf: "",
  telefone: "",
  endereco: "",
  numero: "",
  funcao: "",
  bairro: "",
  email: "",
};

export default function CadastroFuncinoario() {
  const handleClienteSubmit = (data: FormData) => {
    console.log("Dados do Cliente:", data);
    // Aqui fazer tratamento dos dados para envio ao backend
  };

  return (
    <Container>
      <ContainerLeft>
        <FormCadastro
          initialData={initialClienteData}
          onSubmit={handleClienteSubmit}
          fields={["nome", "cpf", "telefone", "endereco", "numero", "funcao", "bairro", "email"]}
        />
      </ContainerLeft>
      <ContainerRight>
        <h1>Cadastro de Funcionario</h1>
      </ContainerRight>
    </Container>
  );
}
