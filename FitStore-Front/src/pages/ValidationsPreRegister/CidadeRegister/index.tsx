import { Box, CardContent, TextField } from "@mui/material";
import Footer from "../../../components/Footer";
import Navbar from "../../../components/NavBar";
import { Container, ContainerForm } from "../CidadeList/style";
import {
  ButtonSubmit,
  ContainerTextField,
} from "../../Register/CadastroCliente/style";
import HowToRegIcon from "@mui/icons-material/HowToReg";
import * as Yup from "yup";
import { useFormik } from "formik";
import { cadastrarEstadoAPI } from "../../../services/estadoService";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const validationSchema = Yup.object({
  nome: Yup.string().required("O nome do estado é obrigatório"),
  sigla: Yup.string()
    .required("A sigla do estado é obrigatória")
    .length(2, "A sigla do estado deve ter 2 caracteres"),
});

export default function CidadeRegister() {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      nome: "",
      sigla: "",
    },
    validationSchema,
    onSubmit: async (values, { resetForm }) => {
      try {
        const response = await cadastrarEstadoAPI(values);

        if (response) {
          toast.success("Estado cadastrado com sucesso!");
          toast.success("Continue o seu cadastro");
          navigate("/CidadeList");
          resetForm();
        } else {
          toast.error("Erro ao cadastrar o estado.");
        }
      } catch (error) {
        toast.error("Erro ao cadastrar o estado. Tente novamente.");
        console.error(error);
      }
    },
  });

  return (
    <Container>
      <Navbar />
      <ContainerForm>
        <Box className="BoxContainer">
          <CardContent>
            <h1>Faça o cadastro do seu estado aqui e também a sua sigla</h1>
            <form onSubmit={formik.handleSubmit}>
              <ContainerTextField>
                <TextField
                  id="nome"
                  name="nome"
                  label="Nome do estado"
                  placeholder="Digite o nome do seu estado aqui"
                  value={formik.values.nome}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={formik.touched.nome && Boolean(formik.errors.nome)}
                  helperText={formik.touched.nome && formik.errors.nome}
                  fullWidth
                  margin="normal"
                />
                <TextField
                  id="sigla"
                  name="sigla"
                  label="Sigla"
                  placeholder="Digite a sigla do seu estado"
                  value={formik.values.sigla}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={formik.touched.sigla && Boolean(formik.errors.sigla)}
                  helperText={formik.touched.sigla && formik.errors.sigla}
                  fullWidth
                  margin="normal"
                />
              </ContainerTextField>
              <ButtonSubmit type="submit" className="buttonLogin">
                Cadastre seu estado
                <HowToRegIcon />
              </ButtonSubmit>
            </form>
          </CardContent>
        </Box>
        <Footer />
      </ContainerForm>
    </Container>
  );
}
