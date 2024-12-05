import { Card, CardContent, TextField, Tab, Tabs, Button } from "@mui/material";
import Navbar from "../../components/NavBar";
import {
  ButtonSubmit,
  Container,
  ContainerForm,
  ContainerTextField,
} from "../Register/CadastroCliente/style";
import * as Yup from "yup";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { AxiosError } from "axios";
import Footer from "../../components/Footer";
import { cadastrarProdutoAPI } from "../../services/produtoService";
import ListaProdutos from "../../components/ListaProdutos";
import React, { useState } from "react";

export default function HomeFornecedor() {
  const navigate = useNavigate();
  
  // Estado para controlar a aba ativa
  const [tabIndex, setTabIndex] = useState(0);

  const validationSchema = Yup.object({
    nome: Yup.string().required("O nome do produto é obrigatório"),
    categoria: Yup.string().required("A categoria do produto é obrigatória"),
    codigoBarras: Yup.string()
      .matches(/^\d{13}$/, "O código de barras deve conter 13 dígitos")
      .required("O código de barras é obrigatório"),
    unidadeMedida: Yup.string().required("A unidade de medida é obrigatória"),
    estoque: Yup.number().required("O número em estoque é obrigatório"),
    precoCusto: Yup.number().required("O preço de custo é obrigatório"),
    precoVenda: Yup.number().required("O preço de venda é obrigatório"),
    lucro: Yup.number().required("O valor de lucro é obrigatório"),
    margemLucro: Yup.number().required("A margem de lucro é obrigatória"),
  });

  const formik = useFormik({
    initialValues: {
      nome: "",
      categoria: "",
      codigoBarras: "",
      unidadeMedida: "",
      estoque: 0,
      precoCusto: 0,
      precoVenda: 0,
      lucro: 0,
      margemLucro: 0,
      imagem: new File([""], "defaultImagem.jpg"),
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      const { imagem, ...produto } = values;

      const dataToSendFormatted = {
        produto: {
          ...produto,
        },
        imagem, // Adiciona o arquivo de imagem ao formato esperado
      };

      try {
        const response = await cadastrarProdutoAPI(dataToSendFormatted);
        if (response) {
          toast.success("Produto cadastrado!");
          setTabIndex(1); // Mudar para a aba de lista de produtos
        }
      } catch (error: unknown) {
        if (error instanceof AxiosError && error.response) {
          toast.warning(error.response.data.message);
          console.error("Erro ao realizar cadastro:", error.response.data.message);
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
            <h1>Fornecedor - Cadastro de Produto</h1>
            {/* Navegação com abas */}
            <Tabs value={tabIndex} onChange={(event, newTabIndex) => setTabIndex(newTabIndex)} centered>
              <Tab label="Cadastrar Produto" />
              <Tab label="Lista de Produtos" />
            </Tabs>

            {/* Exibição de formulário de cadastro */}
            {tabIndex === 0 && (
              <form onSubmit={formik.handleSubmit}>
                <ContainerTextField>
                  <TextField
                    id="nome"
                    name="nome"
                    label="Nome do Produto"
                    placeholder="Digite o nome do produto"
                    value={formik.values.nome}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.touched.nome && Boolean(formik.errors.nome)}
                    helperText={formik.touched.nome && formik.errors.nome}
                    fullWidth
                    margin="normal"
                  />
                  <TextField
                    id="categoria"
                    name="categoria"
                    label="Categoria"
                    placeholder="Digite a categoria do produto"
                    value={formik.values.categoria}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.touched.categoria && Boolean(formik.errors.categoria)}
                    helperText={formik.touched.categoria && formik.errors.categoria}
                    fullWidth
                    margin="normal"
                  />
                  <TextField
                    id="codigoBarras"
                    name="codigoBarras"
                    label="Código de Barras"
                    placeholder="Digite o código de barras"
                    value={formik.values.codigoBarras}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.touched.codigoBarras && Boolean(formik.errors.codigoBarras)}
                    helperText={formik.touched.codigoBarras && formik.errors.codigoBarras}
                    fullWidth
                    margin="normal"
                  />
                  <TextField
                    id="unidadeMedida"
                    name="unidadeMedida"
                    label="Unidade de Medida"
                    placeholder="Digite a unidade de medida"
                    value={formik.values.unidadeMedida}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.touched.unidadeMedida && Boolean(formik.errors.unidadeMedida)}
                    helperText={formik.touched.unidadeMedida && formik.errors.unidadeMedida}
                    fullWidth
                    margin="normal"
                  />
                </ContainerTextField>
                <ContainerTextField>
                  <TextField
                    id="estoque"
                    name="estoque"
                    label="Estoque"
                    placeholder="Digite a quantidade em estoque"
                    type="number"
                    value={formik.values.estoque}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.touched.estoque && Boolean(formik.errors.estoque)}
                    helperText={formik.touched.estoque && formik.errors.estoque}
                    fullWidth
                    margin="normal"
                  />
                  <TextField
                    id="precoCusto"
                    name="precoCusto"
                    label="Preço de Custo"
                    placeholder="Digite o preço de custo"
                    type="number"
                    value={formik.values.precoCusto}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.touched.precoCusto && Boolean(formik.errors.precoCusto)}
                    helperText={formik.touched.precoCusto && formik.errors.precoCusto}
                    fullWidth
                    margin="normal"
                  />
                  <TextField
                    id="precoVenda"
                    name="precoVenda"
                    label="Preço de Venda"
                    placeholder="Digite o preço de venda"
                    type="number"
                    value={formik.values.precoVenda}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.touched.precoVenda && Boolean(formik.errors.precoVenda)}
                    helperText={formik.touched.precoVenda && formik.errors.precoVenda}
                    fullWidth
                    margin="normal"
                  />
                </ContainerTextField>
                <ContainerTextField>
                  <TextField
                    id="lucro"
                    name="lucro"
                    label="Lucro"
                    placeholder="Digite o valor do lucro"
                    type="number"
                    value={formik.values.lucro}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.touched.lucro && Boolean(formik.errors.lucro)}
                    helperText={formik.touched.lucro && formik.errors.lucro}
                    fullWidth
                    margin="normal"
                  />
                  <TextField
                    id="margemLucro"
                    name="margemLucro"
                    label="Margem de Lucro"
                    placeholder="Digite a margem de lucro"
                    type="number"
                    value={formik.values.margemLucro}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.touched.margemLucro && Boolean(formik.errors.margemLucro)}
                    helperText={formik.touched.margemLucro && formik.errors.margemLucro}
                    fullWidth
                    margin="normal"
                  />
                </ContainerTextField>
                <ContainerTextField>
                  <label htmlFor="imagem">
                    <input
                      id="imagem"
                      name="imagem"
                      type="file"
                      accept="image/*"
                      style={{ display: "none" }}
                      onChange={(event) => {
                        const file = event.target.files ? event.target.files[0] : null;
                        formik.setFieldValue("imagem", file);
                      }}
                      onBlur={formik.handleBlur}
                    />
                    <Button
                      variant="contained"
                      component="span"
                      color="inherit"
                      sx={{ marginTop: 2 }}
                    >
                      Anexar Imagem
                    </Button>
                  </label>
                  {formik.touched.imagem && formik.errors.imagem && typeof formik.errors.imagem === "string" && (
                    <div style={{ color: "red", marginTop: "8px" }}>{formik.errors.imagem}</div>
                  )}
                  {formik.values.imagem && formik.values.imagem.name !== "defaultImagem.jpg" && (
                  <div style={{ marginTop: 12 }}>
                    <p><strong>Imagem Anexada:</strong> {formik.values.imagem.name}</p>
                    {/* Mostrar uma pré-visualização da imagem, caso o arquivo seja uma imagem */}
                    {formik.values.imagem.type.startsWith("image/") && (
                      <img
                        src={URL.createObjectURL(formik.values.imagem)}
                        alt="Imagem pré-visualizada"
                        style={{ width: 100, height: 100, objectFit: "cover", marginTop: 8 }}
                      />
                    )}
                  </div>
)}
                </ContainerTextField>
                <ButtonSubmit type="submit" className="buttonLogin">
                  Cadastrar Produto
                </ButtonSubmit>
              </form>
            )}

            {/* Exibição da lista de produtos */}
            {tabIndex === 1 && (
              <ListaProdutos />
            )}
          </CardContent>
        </Card>
        <Footer />
      </ContainerForm>
    </Container>
  );
}
