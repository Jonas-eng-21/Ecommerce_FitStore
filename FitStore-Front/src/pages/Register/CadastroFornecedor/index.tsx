import React from "react";
import FormCadastro from "../../../components/FormCadastro";
import { Container, ContainerLeft, ContainerRight } from "./style";

interface FormData {
  nome?: string;
  cnpj?: string;
  telefone?: string;
  endereco?: string;
  numero?: string;
  bairro?: string;
  email?: string;
}

const initialClienteData: FormData = {
  nome: "",
  cnpj: "",
  telefone: "",
  endereco: "",
  numero: "",
  bairro: "",
  email: "",
};

export default function CadastroFornecedor() {
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
          fields={["nome", "cnpj", "telefone", "endereco", "numero", "bairro", "email"]}
        />
      </ContainerLeft>
      <ContainerRight>
        <h1>Cadastro de Fornecedor</h1>
      </ContainerRight>
    </Container>
  );
}
