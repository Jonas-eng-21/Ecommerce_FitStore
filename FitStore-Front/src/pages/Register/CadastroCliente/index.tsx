import FormCadastro from "./FormCadastro/index";
import { Container, ContainerLeft, ContainerRight } from "./style";

interface FormData {
  nome: string;
  cpf: string;
  telefone: string;
  endereco: string;
  numero: string;
  bairro: string;
  email: string;
}



const initialClienteData: FormData = {
  nome: "",
  cpf: "",
  telefone: "",
  endereco: "",
  numero: "",
  bairro: "",
  email: "",
};

export default function CadastroCliente() {
  const handleClienteSubmit = (data: FormData) => {
    console.log("Dados do Cliente:", data);
  };

  return (
    <Container>
      <ContainerLeft>
        <FormCadastro
          initialData={initialClienteData}
          onSubmit={handleClienteSubmit}
          fields={["nome", "cpf", "telefone", "endereco", "numero", "bairro", "email"]}
        />
      </ContainerLeft>
      <ContainerRight>
        <h1>Cadastro de Cliente</h1>
      </ContainerRight>
    </Container>
  );
}
