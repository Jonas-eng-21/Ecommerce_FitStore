import React from "react";
import FormLogin from "../../components/FormLogin";
import { Container, ContainerLeft, ContainerRight } from "./style";

interface FormData {
  email: string;
  senha: string;
}


const initialLoginForm: FormData = {
  email: "",
  senha: "",
};

export default function Login() {
  const handleClienteSubmit = (data: FormData) => {
    console.log("Dados do Cliente:", data);
  };

  return (
    <Container>
      <ContainerLeft>
        <FormLogin
          initialData={initialLoginForm}
          onSubmit={handleClienteSubmit}
          fields={["email", "senha"]}
        />
      </ContainerLeft>
      <ContainerRight>
        <h1>LOGIN</h1>
      </ContainerRight>
    </Container>
  );
}
