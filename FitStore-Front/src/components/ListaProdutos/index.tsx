import { useState, useEffect } from "react";
import { Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from "@mui/material";
import { listarProdutosAPI, removerProdutoAPI } from "../../services/produtoService"; // Certifique-se de que o caminho está correto

type ProdutoResponse = {
  id: number;
  nome: string;
  categoria: string;
  codigoBarras: string;
  estoque: number;
  precoVenda: number;
};

export default function ListaProdutos() {
  const [produtos, setProdutos] = useState<ProdutoResponse[]>([]);

  // Função para listar os produtos
  const listarProdutos = async () => {
    try {
      const data = await listarProdutosAPI();
      setProdutos(data || []); // Define os produtos no estado
    } catch (error) {
      console.error("Erro ao listar produtos:", error);
    }
  };

  // Função para remover produto
  const handleRemover = async (id: number) => {
    try {
      await removerProdutoAPI(id); // Chama o serviço para remover o produto
      setProdutos((prev) => prev.filter((produto) => produto.id !== id)); // Remove da lista local
    } catch (error) {
      console.error("Erro ao remover produto:", error);
    }
  };

  // Carregar os produtos quando o componente for montado
  useEffect(() => {
    listarProdutos();
  }, []);

  return (
    <div>
      <h2>Lista de Produtos</h2>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Nome</TableCell>
              <TableCell>Categoria</TableCell>
              <TableCell>Código de Barras</TableCell>
              <TableCell>Estoque</TableCell>
              <TableCell>Preço de Venda</TableCell>
              <TableCell>Ações</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {produtos.map((produto) => (
              <TableRow key={produto.id}>
                <TableCell>{produto.nome}</TableCell>
                <TableCell>{produto.categoria}</TableCell>
                <TableCell>{produto.codigoBarras}</TableCell>
                <TableCell>{produto.estoque}</TableCell>
                <TableCell>{produto.precoVenda}</TableCell>
                <TableCell>
                  <Button
                    variant="contained"
                    color="error"
                    onClick={() => handleRemover(produto.id)} // Passa o id do produto para a função
                  >
                    Remover
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
