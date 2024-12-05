import { Card, CardContent, TextField } from "@mui/material";
import Navbar from "../../../components/NavBar";
import {
  ButtonSubmit,
  Container,
  ContainerForm,
  ContainerTextField,
} from "../CadastroCliente/style";
import * as Yup from "yup";
import { useFormik } from "formik";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { AxiosError } from "axios";
import { registerFuncionarioAPI } from "../../../services/authService";
import HowToRegIcon from "@mui/icons-material/HowToReg";
import Footer from "../../../components/Footer";

function formatCPF(value: string): string {
  return value
    .replace(/\D/g, "")
    .replace(/(\d{3})(\d)/, "$1.$2")
    .replace(/(\d{3})(\d)/, "$1.$2")
    .replace(/(\d{3})(\d{1,2})$/, "$1-$2")
    .slice(0, 14);
}

function formatTelefone(value: string): string {
  return value
    .replace(/\D/g, "")
    .replace(/(\d{2})(\d)/, "($1) $2")
    .replace(/(\d{5})(\d{4})$/, "$1-$2")
    .slice(0, 15);
}

export default function CadastroFuncinoario() {
  const location = useLocation();
  const cidadeId = location.state?.cidadeId;
  const navigate = useNavigate();

  const validationSchema = Yup.object({
    nome: Yup.string().required("O nome é obrigatório"),
    cpf: Yup.string()
      .matches(/^\d{3}\.\d{3}\.\d{3}-\d{2}$/, "Formato de CPF inválido")
      .required("O CPF é obrigatório"),
    telefone: Yup.string()
      .matches(/^\(\d{2}\) \d{4,5}-\d{4}$/, "Formato de telefone inválido")
      .required("O telefone é obrigatório"),
    endereco: Yup.string().required("O endereço é obrigatório"),
    numero: Yup.string().required("O número é obrigatório"),
    bairro: Yup.string().required("O bairro é obrigatório"),
    funcao: Yup.string().required("A função é obrigatória"),
    email: Yup.string()
      .email("E-mail inválido")
      .required("O e-mail é obrigatório"),
    senha: Yup.string().required("A senha é obrigatória"),
    confirmarSenha: Yup.string()
      .oneOf([Yup.ref("senha"), undefined], "As senhas devem ser iguais")
      .required("A confirmação de senha é obrigatória"),
  });

  const formik = useFormik({
    initialValues: {
      nome: "",
      cpf: "",
      telefone: "",
      endereco: "",
      numero: "",
      bairro: "",
      funcao: "",
      email: "",
      senha: "",
      confirmarSenha: "",
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      const { confirmarSenha, ...dataToSend } = values;

      const dataToSendFormatted = {
        ...dataToSend,
        cidade: { id: cidadeId },
      };

      try {
        const response = await registerFuncionarioAPI(dataToSendFormatted);
        if (response) {
          toast.success(
            "Cadastro bem-sucedido!"
          );
          navigate("/");
        }
      } catch (error: unknown) {
        if (error instanceof AxiosError && error.response) {
          toast.warning(error.response.data.message);
          console.error(
            "Erro ao realizar cadastro:",
            error.response.data.message
          );
        } else {
          toast.error("Ocorreu um erro inesperado. Tente novamente.");
          console.error("Erro inesperado:", error);
        }
      }
    },
  });

  return (
    <Container>
      <Navbar />
      <ContainerForm>
        <Card className="CardContainer">
          <CardContent>
            <h1>Faça o seu cadastro</h1>
            <form onSubmit={formik.handleSubmit}>
              <ContainerTextField>
                <TextField
                  id="nome"
                  name="nome"
                  label="Nome Completo"
                  placeholder="Digite seu nome completo"
                  value={formik.values.nome}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={formik.touched.nome && Boolean(formik.errors.nome)}
                  helperText={formik.touched.nome && formik.errors.nome}
                  fullWidth
                  margin="normal"
                />
                <TextField
                  id="cpf"
                  name="cpf"
                  label="CPF"
                  placeholder="Digite seu CPF"
                  value={formik.values.cpf}
                  onChange={(e) =>
                    formik.setFieldValue("cpf", formatCPF(e.target.value))
                  }
                  onBlur={formik.handleBlur}
                  error={formik.touched.cpf && Boolean(formik.errors.cpf)}
                  helperText={formik.touched.cpf && formik.errors.cpf}
                  fullWidth
                  margin="normal"
                />
                <TextField
                  id="telefone"
                  name="telefone"
                  label="Telefone"
                  placeholder="Digite seu telefone"
                  value={formik.values.telefone}
                  onChange={(e) =>
                    formik.setFieldValue(
                      "telefone",
                      formatTelefone(e.target.value)
                    )
                  }
                  onBlur={formik.handleBlur}
                  error={
                    formik.touched.telefone && Boolean(formik.errors.telefone)
                  }
                  helperText={formik.touched.telefone && formik.errors.telefone}
                  fullWidth
                  margin="normal"
                />
              </ContainerTextField>
              <ContainerTextField>
                <TextField
                  id="endereco"
                  name="endereco"
                  label="Endereço"
                  placeholder="Digite seu endereço"
                  value={formik.values.endereco}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={
                    formik.touched.endereco && Boolean(formik.errors.endereco)
                  }
                  helperText={formik.touched.endereco && formik.errors.endereco}
                  fullWidth
                  margin="normal"
                />
                <TextField
                  id="numero"
                  name="numero"
                  label="Número"
                  placeholder="Digite o número"
                  value={formik.values.numero}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={formik.touched.numero && Boolean(formik.errors.numero)}
                  helperText={formik.touched.numero && formik.errors.numero}
                  fullWidth
                  margin="normal"
                />
                <TextField
                  id="bairro"
                  name="bairro"
                  label="Bairro"
                  placeholder="Digite o bairro"
                  value={formik.values.bairro}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={formik.touched.bairro && Boolean(formik.errors.bairro)}
                  helperText={formik.touched.bairro && formik.errors.bairro}
                  fullWidth
                  margin="normal"
                />
                <TextField
                  id="funcao"
                  name="funcao"
                  label="funcao"
                  placeholder="Digite qual a sua função"
                  value={formik.values.funcao}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={formik.touched.funcao && Boolean(formik.errors.funcao)}
                  helperText={formik.touched.funcao && formik.errors.funcao}
                  fullWidth
                  margin="normal"
                />
              </ContainerTextField>
              <ContainerTextField>
                <TextField
                  id="email"
                  name="email"
                  label="E-mail"
                  placeholder="Digite seu e-mail"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={formik.touched.email && Boolean(formik.errors.email)}
                  helperText={formik.touched.email && formik.errors.email}
                  fullWidth
                  margin="normal"
                />
                <TextField
                  id="senha"
                  name="senha"
                  label="Senha"
                  type="password"
                  placeholder="Digite sua senha"
                  value={formik.values.senha}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={formik.touched.senha && Boolean(formik.errors.senha)}
                  helperText={formik.touched.senha && formik.errors.senha}
                  fullWidth
                  margin="normal"
                />
                <TextField
                  id="confirmarSenha"
                  name="confirmarSenha"
                  label="Confirmar Senha"
                  type="password"
                  placeholder="Digite novamente sua senha"
                  value={formik.values.confirmarSenha}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={
                    formik.touched.confirmarSenha &&
                    Boolean(formik.errors.confirmarSenha)
                  }
                  helperText={
                    formik.touched.confirmarSenha &&
                    formik.errors.confirmarSenha
                  }
                  fullWidth
                  margin="normal"
                />
              </ContainerTextField>

              <ButtonSubmit type="submit" className="buttonLogin">
                Cadastre-se
                <HowToRegIcon />
              </ButtonSubmit>
            </form>
          </CardContent>
        </Card>
        <Footer />
      </ContainerForm>
    </Container>
  );
}
