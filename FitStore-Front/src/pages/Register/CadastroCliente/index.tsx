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
  senha: string;
  cidade: string;
}



const initialClienteData: FormData = {
  nome: "",
  cpf: "",
  telefone: "",
  endereco: "",
  numero: "",
  bairro: "",
  email: "",
  senha: "",
  cidade: "",
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
          fields={["nome", "cpf", "telefone", "endereco", "numero", "bairro", "email", "senha", "cidade"]}
        />
      </ContainerLeft>
      <ContainerRight>
        <h1>Cadastro de Cliente</h1>
      </ContainerRight>
    </Container>
  );
}
