import { Card, CardActionArea, CardContent, Typography } from "@mui/material";
import { Container } from "./style";
import { useNavigate } from "react-router-dom";

export default function ChooseProfile() {
  const navigate = useNavigate();

  const goToCadastroFornecedor = () => navigate("/CadastroFornecedor");
  const goToCadastroCliente = () => navigate("/CadastroCliente");
  const goToCadastroFuncionario = () => navigate("/CadastroFuncionario");
  return (
    <Container>
      <Card sx={{ maxWidth: 300 }}>
        <CardActionArea onClick={goToCadastroFornecedor}>
          <CardContent>
            <Typography variant="body2" sx={{ color: "text.secondary" }}>
              Fornecedor
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>

      <Card sx={{ maxWidth: 300 }}>
        <CardActionArea onClick={goToCadastroCliente} >
          <CardContent>
            <Typography variant="body2" sx={{ color: "text.secondary" }}>
              Cliente
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>

      <Card sx={{ maxWidth: 300 }}>
        <CardActionArea onClick={goToCadastroFuncionario}>
          <CardContent>
            <Typography variant="body2" sx={{ color: "text.secondary" }}>
              Funcionario
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Container>
  );
}
