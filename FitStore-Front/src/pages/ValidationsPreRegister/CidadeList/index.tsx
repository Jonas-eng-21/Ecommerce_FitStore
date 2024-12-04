import { useEffect, useState } from "react";
import {
  Box,
  Button,
  CardContent,
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  TextField,
} from "@mui/material";
import Footer from "../../../components/Footer";
import Navbar from "../../../components/NavBar";
import { Container, ContainerForm } from "./style";
import {
  listarCidadesAPI,
  Cidade,
  cadastrarCidadeAPI,
} from "../../../services/cidadeService";
import {
  ButtonSubmit,
  ContainerTextField,
} from "../../Register/CadastroCliente/style";
import HowToRegIcon from "@mui/icons-material/HowToReg";
import * as Yup from "yup";
import { useFormik } from "formik";
import { Estado, listarEstadosAPI } from "../../../services/estadoService";
import { useNavigate, useLocation } from "react-router-dom";
import { toast } from "react-toastify";

export default function CidadeList() {
  const navigate = useNavigate();
  const location = useLocation();
  const [cidadeSelecionada, setCidadeSelecionada] = useState<string>("");
  const [cidades, setCidades] = useState<Cidade[]>([]);
  const [mostrarForm, setMostrarForm] = useState(false);
  const [estados, setEstados] = useState<Estado[]>([]);
  const [estadoSelecionado, setEstadoSelecionado] = useState<string>("");

  const goToCadastroEstado = () => navigate("/cidadeRegister");
  const tipoCadastro = location.state?.tipoCadastro;

  const redirecionarParaCadastro = (cidadeId: string) => {
    if (tipoCadastro) {
      navigate(
        `/Cadastro${
          tipoCadastro.charAt(0).toUpperCase() + tipoCadastro.slice(1)
        }`,
        {
          state: { cidadeId },
        }
      );
    } else {
      console.error("Tipo de cadastro não definido.");
    }
  };

  useEffect(() => {
    const fetchEstados = async () => {
      const data = await listarEstadosAPI();
      if (data) {
        setEstados(data);
      }
    };
    fetchEstados();
  }, []);

  useEffect(() => {
    const fetchCidades = async () => {
      const data = await listarCidadesAPI();
      if (data) {
        setCidades(data);
      }
    };
    fetchCidades();
  }, []);

  const formik = useFormik({
    initialValues: {
      nome: "",
      cep: "",
      estado: "",
    },
    validationSchema: Yup.object({
      nome: Yup.string().required("O nome é obrigatório"),
      cep: Yup.string().required("O CEP é obrigatório"),
      estado: Yup.string().required("O Estado é obrigatório"),
    }),
    onSubmit: async (values, { resetForm }) => {
      try {
        const estadoSelecionadoObj = estados.find(
          (estado) => estado.nome === estadoSelecionado
        );

        if (!estadoSelecionadoObj) {
          toast.info("Selecione um estado válido.");
          return;
        }

        const payload = {
          ...values,
          estado: {
            id: estadoSelecionadoObj.id,
          },
        };

        const response = await cadastrarCidadeAPI(payload);

        if (response && response.id) {
          toast.success("Cidade cadastrada com sucesso!");
          redirecionarParaCadastro(response.id);
        } else {
          console.error("Resposta inválida da API ao cadastrar cidade.");
          toast.error("Erro ao cadastrar a cidade. Tente novamente.");
        }

        resetForm();
      } catch (error) {
        console.error("Erro ao cadastrar cidade:", error);
        toast.error("Erro ao cadastrar a cidade. Tente novamente.");
      }
    },
  });

  const handleChange = (event: SelectChangeEvent) => {
    setCidadeSelecionada(event.target.value as string);
  };

  const handleEstadoChange = (event: SelectChangeEvent) => {
    setEstadoSelecionado(event.target.value as string);
  };

  const handleSelecionarCidade = () => {
    const cidade = cidades.find((c) => c.nome === cidadeSelecionada);
    if (cidade) {
      redirecionarParaCadastro(cidade.id);
    } else {
      toast.error("Selecione uma cidade válida.");
    }
  };

  return (
    <Container>
      <Navbar />
      <ContainerForm>
        <Box className="BoxContainer">
          {!mostrarForm ? (
            <>
              <h1 className="textH1">A sua cidade consta na lista abaixo?</h1>
              <h4 className="textH1">Selecione a sua cidade, por favor</h4>
              <FormControl fullWidth>
                <InputLabel id="cidade-select-label">Cidade</InputLabel>
                <Select
                  labelId="cidade-select-label"
                  id="cidade-select"
                  value={cidadeSelecionada}
                  label="Cidade"
                  onChange={handleChange}
                >
                  {cidades.map((cidade) => (
                    <MenuItem key={cidade.nome} value={cidade.nome}>
                      {cidade.nome}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
              <Button
                onClick={handleSelecionarCidade}
                disabled={!cidadeSelecionada}
              >
                Continuar
              </Button>
              <div className="ContainerButton">
                <h4 className="textH1">
                  Sua cidade não consta na lista acima?
                </h4>
                <Button onClick={() => setMostrarForm(true)}>
                  Cadastre sua cidade
                </Button>
              </div>
            </>
          ) : (
            <CardContent>
              <h1>Faça o cadastro da sua cidade</h1>
              <form onSubmit={formik.handleSubmit}>
                <ContainerTextField>
                  <TextField
                    id="nome"
                    name="nome"
                    label="Nome da Cidade"
                    placeholder="Digite o nome da cidade"
                    value={formik.values.nome}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.touched.nome && Boolean(formik.errors.nome)}
                    helperText={formik.touched.nome && formik.errors.nome}
                    fullWidth
                    margin="normal"
                  />
                  <TextField
                    id="cep"
                    name="cep"
                    label="CEP"
                    placeholder="Digite o CEP"
                    value={formik.values.cep}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.touched.cep && Boolean(formik.errors.cep)}
                    helperText={formik.touched.cep && formik.errors.cep}
                    fullWidth
                    margin="normal"
                  />
                  <FormControl
                    fullWidth
                    margin="normal"
                    error={
                      formik.touched.estado && Boolean(formik.errors.estado)
                    }
                  >
                    <InputLabel id="estado-select-label">Estado</InputLabel>
                    <Select
                      labelId="estado-select-label"
                      id="estado-select"
                      name="estado"
                      value={estadoSelecionado}
                      onChange={(event) => {
                        handleEstadoChange(event);
                        formik.handleChange(event);
                      }}
                      onBlur={formik.handleBlur}
                    >
                      {estados.map((estado) => (
                        <MenuItem key={estado.nome} value={estado.nome}>
                          {estado.nome}
                        </MenuItem>
                      ))}
                    </Select>
                    {formik.touched.estado && formik.errors.estado && (
                      <FormHelperText>{formik.errors.estado}</FormHelperText>
                    )}
                  </FormControl>
                </ContainerTextField>
                <ButtonSubmit type="submit" className="buttonLogin">
                  Cadastre sua cidade
                  <HowToRegIcon />
                </ButtonSubmit>
              </form>
              <div className="ContainerButton">
                <h4 className="textH1">
                  Seu estado não consta na lista acima?
                </h4>
                <Button onClick={goToCadastroEstado}>
                  Cadastre seu Estado
                </Button>
              </div>
            </CardContent>
          )}
        </Box>
        <Footer />
      </ContainerForm>
    </Container>
  );
}
