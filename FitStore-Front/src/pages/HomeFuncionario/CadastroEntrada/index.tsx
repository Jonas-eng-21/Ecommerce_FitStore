import { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
  TextField,
} from "@mui/material";
import {
  ButtonSubmit,
  ContainerTextField,
} from "../../Register/CadastroCliente/style";
import HowToRegIcon from "@mui/icons-material/HowToReg";
import { useFormik } from "formik";
import * as Yup from "yup";
import { cadastrarEntradaAPI } from "../../../services/entradaService";
import { listarProdutosAPI } from "../../../services/produtoService";
import { toast } from "react-toastify";

export default function CadastroEntrada() {
  const [produtos, setProdutos] = useState([]);
  const [itensEntrada, setItensEntrada] = useState([]); // Lista de itens
  const [produtoSelecionado, setProdutoSelecionado] = useState(false);

  useEffect(() => {
    const fetchProdutos = async () => {
      try {
        const produtos = await listarProdutosAPI();
        setProdutos(produtos);
      } catch (error) {
        console.log("Erro ao carregar os produtos:", error);
        toast.error("Erro ao carregar os produtos.");
      }
    };

    fetchProdutos();
  }, []);

  const validationSchema = Yup.object({
    valorTotal: Yup.number()
      .required("O valor total é obrigatório")
      .positive("O valor total deve ser maior que zero"),
    quantidadeTotal: Yup.number()
      .required("A quantidade total é obrigatória")
      .positive("A quantidade total deve ser maior que zero"),
    produtoId: Yup.string().required("Selecione um produto"),
    quantidade: Yup.number()
      .required("A quantidade é obrigatória")
      .positive("A quantidade deve ser maior que zero"),
    valor: Yup.number()
      .required("O valor é obrigatório")
      .positive("O valor deve ser maior que zero"),
    valorCusto: Yup.number()
      .required("O valor de custo é obrigatório")
      .positive("O valor de custo deve ser maior que zero"),
  });

  const formik = useFormik({
    initialValues: {
      valorTotal: "",
      quantidadeTotal: "",
      produtoId: "",
      quantidade: "",
      valor: "",
      valorCusto: "",
    },
    validationSchema,
    onSubmit: async (values, { resetForm }) => {
      try {
        const entradaData = {
          valorTotal: parseFloat(values.valorTotal),
          quantidadeTotal: parseFloat(values.quantidadeTotal),
          itensEntrada: itensEntrada,
        };

        await cadastrarEntradaAPI(entradaData);
        toast.success("Entrada cadastrada com sucesso!");
        console.log("Entrada cadastrada com sucesso!", entradaData);
        resetForm();
        setItensEntrada([]);
        setProdutoSelecionado(false);
      } catch (error) {
        console.log("Erro ao cadastrar a entrada:", error);
        toast.error("Erro ao cadastrar a entrada.");
      }
    },
  });

  const adicionarItem = () => {
    const novoItem = {
      produto: { id: formik.values.produtoId },
      quantidade: parseFloat(formik.values.quantidade),
      valor: parseFloat(formik.values.valor),
      valorCusto: parseFloat(formik.values.valorCusto),
    };

    setItensEntrada([...itensEntrada, novoItem]);
    formik.setFieldValue("produtoId", "");
    formik.setFieldValue("quantidade", "");
    formik.setFieldValue("valor", "");
    formik.setFieldValue("valorCusto", "");
    setProdutoSelecionado(false);
  };

  return (
    <div>
      <h1>
        <Card className="CardContainer">
          <CardContent>
            <h3>Faça cadastro da Entrada do produto selecionado</h3>
            <form onSubmit={formik.handleSubmit}>
              {/* Inputs de valor total e quantidade total */}
              <ContainerTextField>
                <TextField
                  id="valorTotal"
                  name="valorTotal"
                  label="Valor Total da Entrada"
                  type="number"
                  placeholder="Digite o valor total da entrada"
                  value={formik.values.valorTotal}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={
                    formik.touched.valorTotal &&
                    Boolean(formik.errors.valorTotal)
                  }
                  helperText={
                    formik.touched.valorTotal && formik.errors.valorTotal
                  }
                  fullWidth
                  margin="normal"
                />
                <TextField
                  id="quantidadeTotal"
                  name="quantidadeTotal"
                  label="Quantidade Total"
                  type="number"
                  placeholder="Digite a quantidade total"
                  value={formik.values.quantidadeTotal}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={
                    formik.touched.quantidadeTotal &&
                    Boolean(formik.errors.quantidadeTotal)
                  }
                  helperText={
                    formik.touched.quantidadeTotal &&
                    formik.errors.quantidadeTotal
                  }
                  fullWidth
                  margin="normal"
                />
              </ContainerTextField>

              {/* Seleção do produto */}
              <ContainerTextField>
                <FormControl
                  fullWidth
                  margin="normal"
                  error={
                    formik.touched.produtoId && Boolean(formik.errors.produtoId)
                  }
                >
                  <InputLabel id="produto-select-label">Produto</InputLabel>
                  <Select
                    labelId="produto-select-label"
                    id="produto-select"
                    name="produtoId"
                    value={formik.values.produtoId}
                    onChange={(event) => {
                      formik.handleChange(event);
                      setProdutoSelecionado(Boolean(event.target.value));
                    }}
                    onBlur={formik.handleBlur}
                    input={<OutlinedInput label="Produto" />}
                  >
                    {produtos.map((produto) => (
                      <MenuItem key={produto.id} value={produto.id}>
                        {produto.nome}
                      </MenuItem>
                    ))}
                  </Select>
                  {formik.touched.produtoId && formik.errors.produtoId && (
                    <FormHelperText>{formik.errors.produtoId}</FormHelperText>
                  )}
                </FormControl>
              </ContainerTextField>

              {/* Campos adicionais para o produto selecionado */}
              {produtoSelecionado && (
                <ContainerTextField>
                  <TextField
                    id="quantidade"
                    name="quantidade"
                    label="Quantidade"
                    type="number"
                    placeholder="Digite a quantidade"
                    value={formik.values.quantidade}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={
                      formik.touched.quantidade &&
                      Boolean(formik.errors.quantidade)
                    }
                    helperText={
                      formik.touched.quantidade && formik.errors.quantidade
                    }
                    fullWidth
                    margin="normal"
                  />
                  <TextField
                    id="valor"
                    name="valor"
                    label="Valor"
                    type="number"
                    placeholder="Digite o valor"
                    value={formik.values.valor}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.touched.valor && Boolean(formik.errors.valor)}
                    helperText={formik.touched.valor && formik.errors.valor}
                    fullWidth
                    margin="normal"
                  />
                  <TextField
                    id="valorCusto"
                    name="valorCusto"
                    label="Valor de Custo"
                    type="number"
                    placeholder="Digite o valor de custo"
                    value={formik.values.valorCusto}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={
                      formik.touched.valorCusto &&
                      Boolean(formik.errors.valorCusto)
                    }
                    helperText={
                      formik.touched.valorCusto && formik.errors.valorCusto
                    }
                    fullWidth
                    margin="normal"
                  />
                  <ButtonSubmit
                    type="button"
                    onClick={adicionarItem}
                    className="buttonLogin"
                  >
                    Adicionar Item
                  </ButtonSubmit>
                </ContainerTextField>
              )}
              {itensEntrada.length > 0 && (
                <div>
                  <h5>Itens Adicionados:</h5>
                  <ul>
                    {itensEntrada.map((item, index) => (
                      <li key={index}>
                        Produto: {item.produto.id},
                        Quantidade:{" "} {item.quantidade},
                        Valor: {item.valor},
                        Valor de Custo:{" "} {item.valorCusto}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <ButtonSubmit type="submit" className="buttonLogin">
                <HowToRegIcon />
                Enviar
              </ButtonSubmit>
            </form>
          </CardContent>
        </Card>
      </h1>
    </div>
  );
}
