import { Card, CardContent } from "@mui/material";
import Navbar from "../../../components/NavBar";
import { Container, ContainerForm } from "./style";

export default function CadastroCliente() {
  return (
    <Container>
      <Navbar />
      <ContainerForm>
        <Card className="CardContainer">
          <CardContent>
          </CardContent>
        </Card>
      </ContainerForm>
    </Container>
  );
}
