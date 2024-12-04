import { Card, CardActionArea, CardContent, Typography } from "@mui/material";
import { Container } from "./style";
import { useNavigate } from "react-router-dom";

export default function ChooseProfile() {
  const navigate = useNavigate();

  const goToCidadeList = (tipoCadastro: string) => {
    navigate("/cidadeList", { state: { tipoCadastro } });
  };

  return (
    <Container>
      <Card sx={{ maxWidth: 300 }}>
        <CardActionArea onClick={() => goToCidadeList("fornecedor")}>
          <CardContent>
            <Typography variant="body2" sx={{ color: "text.secondary" }}>
              Fornecedor
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>

      <Card sx={{ maxWidth: 300 }}>
        <CardActionArea onClick={() => goToCidadeList("cliente")} >
          <CardContent>
            <Typography variant="body2" sx={{ color: "text.secondary" }}>
              Cliente
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>

      <Card sx={{ maxWidth: 300 }}>
        <CardActionArea onClick={() => goToCidadeList("funcionario")}>
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
