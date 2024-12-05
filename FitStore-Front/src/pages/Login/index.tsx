import React from "react";
import Navbar from "../../components/NavBar";
import { Container, Footer, ContactForm, ContainerSignUp } from "./style";
import TextField from "@mui/material/TextField";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  FormHelperText,
  OutlinedInput,
} from "@mui/material";
import ChooseProfile from "../../components/ChooseProfile";
import { useFormik } from "formik";
import * as Yup from "yup";
import { loginAPI } from "../../services/authService";
import { toast } from "react-toastify";
import { AxiosError } from "axios";
import { useNavigate } from "react-router-dom";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

type UserType = "cliente" | "fornecedor" | "funcionario";

export default function Login() {
  const [open, setOpen] = React.useState(false);
  const navigate = useNavigate();
  const [userType, setUserType] = React.useState("");

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleUserTypeChange = (event: SelectChangeEvent) => {
    setUserType(event.target.value);
  };

  const validationSchema = Yup.object({
    email: Yup.string()
      .email("E-mail inválido")
      .required("O e-mail é obrigatório"),
    senha: Yup.string().required("A senha é obrigatória"),
    userType: Yup.string()
      .oneOf(["cliente", "fornecedor", "funcionario"], "Tipo de usuário inválido")
      .required("Selecione o tipo de usuário"),
  });

  const formik = useFormik({
    initialValues: {
      email: "",
      senha: "",
      userType: "" as UserType,
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      try {
        const response = await loginAPI(values.email, values.senha, values.userType);
        if (response) {
          localStorage.setItem("token", response.data.token);
          localStorage.setItem("userType", values.userType);
          toast.success("Login bem-sucedido!");

          // Redireciona o usuário com base no tipo
          if (values.userType === "fornecedor") {
            navigate("/homefornecedor");
          } else {
            navigate("/");
          }
        }
      } catch (error: unknown) {
        if (error instanceof AxiosError && error.response) {
          toast.warning(error.response.data.message);
          console.error("Erro ao realizar login:", error.response.data.message);
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
      <ContactForm>
        <h1>Login</h1>
        <p>Faça o seu login para continuar suas compras!</p>
        <form onSubmit={formik.handleSubmit}>
          <TextField
            className="TextField"
            id="email"
            name="email"
            label="Seu e-mail"
            placeholder="Digite aqui o seu e-mail"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
            fullWidth
            margin="normal"
          />
          <TextField
            className="TextField"
            id="senha"
            name="senha"
            label="Sua senha"
            placeholder="Digite aqui a sua senha"
            type="password"
            value={formik.values.senha}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.senha && Boolean(formik.errors.senha)}
            helperText={formik.touched.senha && formik.errors.senha}
            fullWidth
            margin="normal"
          />

          <FormControl
            fullWidth
            margin="normal"
            error={formik.touched.userType && Boolean(formik.errors.userType)}
          >
            <InputLabel id="user-type-label">Tipo de Usuário</InputLabel>
            <Select
              labelId="user-type-label"
              id="userType"
              name="userType"
              value={userType}
              onChange={(event) => {
                handleUserTypeChange(event);
                formik.handleChange(event);
              }}
              onBlur={formik.handleBlur}
              input={<OutlinedInput label="Tipo de Usuário" />}
            >
              <MenuItem value="">
                <em>Selecione</em>
              </MenuItem>
              <MenuItem value="cliente">Usuário Comum</MenuItem>
              <MenuItem value="fornecedor">Sou Fornecedor</MenuItem>
              <MenuItem value="funcionario">Sou Funcionário</MenuItem>
            </Select>
            {formik.touched.userType && formik.errors.userType && (
              <FormHelperText>{formik.errors.userType}</FormHelperText>
            )}
          </FormControl>

          <button type="submit" className="buttonLogin">
            Logar
          </button>
        </form>
        <ContainerSignUp>
          <p className="textSignUp">Ainda não possui uma conta?</p>
          <button className="buttonSignUp" onClick={handleClickOpen}>
            Cadastre-se
          </button>

          <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <DialogTitle id="alert-dialog-title">
              {"Que tipo de conta deseja criar?"}
            </DialogTitle>
            <DialogContent>
              <ChooseProfile />
            </DialogContent>
          </Dialog>
        </ContainerSignUp>
      </ContactForm>

      <Footer>
        <p>Obrigado por escolher a Fit Store! 🚀</p>
      </Footer>
    </Container>
  );
}
