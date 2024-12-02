import React, { useEffect, useState } from 'react';
import { listarProdutosAPI } from '../../services/produtoService';
import { Grid, Card, CardContent, Typography, CardMedia, Box, Button, Select, MenuItem } from '@mui/material';

interface Produto {
  nome: string;
  preco: number;
  urlImagem: string;
  categoria: string;
}

const ProdutoCard: React.FC = () => {
  const [produtos, setProdutos] = useState<Produto[]>([]);
  const [categoriaSelecionada, setCategoriaSelecionada] = useState<string>(''); // Estado para a categoria selecionada

  // Carregar dados dos produtos
  useEffect(() => {
    const fetchProdutos = async () => {
      const dadosProdutos = await listarProdutosAPI();
      if (dadosProdutos) {
        setProdutos(
          dadosProdutos.map((produto) => ({
            nome: produto.nome,
            preco: produto.precoVenda ?? 0, // Mapeando corretamente o preço
            urlImagem: produto.urlImagem ?? '', // URL da imagem
            categoria: produto.categoria ?? 'Outros', // Categoria do produto
          }))
        );
      }
    };

    fetchProdutos();
  }, []);

  // Filtro dos produtos pela categoria selecionada
  const produtosFiltrados = categoriaSelecionada
    ? produtos.filter(produto => produto.categoria === categoriaSelecionada)
    : produtos;

  return (
    <div>
      {/* Drop para selecionar a categoria */}
      <Box sx={{ marginBottom: '15px', marginTop: '15px', textAlign: 'end'}}>
        <Select
          value={categoriaSelecionada}
          onChange={e => setCategoriaSelecionada(e.target.value)}
          displayEmpty
          sx={{
            width: '200px',
            textAlign: 'center',
          }}
          MenuProps={{
            PaperProps: {
              style: {
                textAlign: 'center',
              },
            },
          }}
        >
          <MenuItem value="">Todas as Categorias</MenuItem>
          <MenuItem value="Suplementos">Suplementos</MenuItem>
          <MenuItem value="Roupas">Roupas</MenuItem>
        </Select>
      </Box>

      <Grid
        container
        spacing={2}
        justifyContent="center"
        sx={{ marginTop: '25px', backgroundColor: '#6e6e6e' }}
      >
        {produtosFiltrados.map((produto, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Card
              sx={{
                minHeight: 400,
                maxHeight: 450,
                minWidth: 200,
                maxWidth: 350,
                marginBottom: 5,
                marginLeft: 'auto',
                marginRight: 'auto',
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              {/*Exibe a imagem do produto*/}
              <CardMedia
                component="img"
                image={produto.urlImagem || '../../../assets/images/default-image.png'}
                alt={produto.nome}
                sx={{
                  height: 220, 
                  objectFit: 'contain', 
                  objectPosition: 'center', 
                  borderRadius: '10px', 
                }}
              />
              
              <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                <Typography gutterBottom variant="h5" component="div" align="center">
                  {produto.nome}
                </Typography>
                <Typography variant="body1" color="text.secondary" align="center">
                  Preço: R${produto.preco && !isNaN(produto.preco) ? produto.preco.toFixed(2) : '0.00'}
                </Typography>
              </CardContent>

              <Box sx={{ display: 'flex', justifyContent: 'center', padding: '10px' }}>
                <Button size="small" variant="contained" color="primary">
                  Ver Detalhes
                </Button>
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default ProdutoCard;
