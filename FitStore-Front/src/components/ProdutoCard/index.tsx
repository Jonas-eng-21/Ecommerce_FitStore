import React, { useEffect, useState } from 'react';
import { listarProdutosAPI } from '../../services/produtoService'; // Importe o serviço
import { Grid, Card, CardContent, Typography, Box, Button } from '@mui/material';

interface Produto {
  nome: string;
  preco: number;
}

const ProdutoCard: React.FC = () => {
  const [produtos, setProdutos] = useState<Produto[]>([]);

  // Carregar dados dos produtos ao montar o componente
  useEffect(() => {
    const fetchProdutos = async () => {
      const dadosProdutos = await listarProdutosAPI();
      if (dadosProdutos) {
        setProdutos(dadosProdutos.map(produto => ({
          nome: produto.nome,
          preco: produto.preco ?? 0, // Garantir que o preço não seja undefined ou null
        })));
      }
    };

    fetchProdutos();
  }, []);

  return (
    <Grid
      container
      spacing={2} // Aumente o espaçamento se necessário
      justifyContent="center" // Diminui o spacing entre os cards
      sx={{ marginTop: '25px', backgroundColor: '#6e6e6e' }} // Cor de fundo cinza
    >
      {produtos.map((produto, index) => (
        <Grid item xs={12} sm={6} md={3} key={index}>
          <Card
            sx={{
              minHeight: 300, // Ajusta a altura mínima do card
              maxHeight: 400, // Define a altura máxima
              minWidth: 180,  // Define a largura mínima
              maxWidth: 350,  // Define a largura máxima
              marginBottom: 5,
              marginLeft: 'auto',
              marginRight: 'auto', // Centraliza os cards
              display: 'flex', // Habilita o flexbox no card
              flexDirection: 'column', // Organiza os elementos do card verticalmente
            }}
          >
            {/* Centraliza o nome do produto */}
            <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
              <Typography gutterBottom variant="h5" component="div" align="center">
                {produto.nome}
              </Typography>
            </CardContent>

            {/* Box para o preço e botão "Ver Detalhes" alinhados na parte inferior */}
            <Box sx={{ display: 'flex', justifyContent: 'space-between', padding: '10px', alignItems: 'flex-end' }}>
              <Typography variant="body1" color="text.secondary" sx={{ flexGrow: 1 }}>
                Preço: R${produto.preco && !isNaN(produto.preco) ? produto.preco.toFixed(2) : '0.00'}
              </Typography>

              <Button size="small">Ver Detalhes</Button>
            </Box>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default ProdutoCard;
