import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { listarEntradasAPI } from '../../services/entradaService';
import { Grid, Card, CardContent, Typography, CardMedia, Box, Button, Select, MenuItem } from '@mui/material';

interface ItemEntrada {
  nomeProduto: string | null;
  precoProduto: number;
  urlImagemProduto: string | null;
  categoriaProduto: string | null;
  quantidade: number;
  valor: number;
}

const ProdutoCard: React.FC = () => {
  const [itensEntrada, setItensEntrada] = useState<ItemEntrada[]>([]);
  const [categoriaSelecionada, setCategoriaSelecionada] = useState<string>(''); // Estado para a categoria selecionada
  const [categorias, setCategorias] = useState<string[]>([]); // Estado para armazenar as categorias únicas
  const navigate = useNavigate();

  // Carregar dados das entradas
  useEffect(() => {
    const fetchEntradas = async () => {
      const dadosEntradas = await listarEntradasAPI();
      if (dadosEntradas) {
        const items = dadosEntradas.flatMap((entrada) => entrada.itensEntrada); // Flatten para pegar todos os itens de todas as entradas
        setItensEntrada(items);

        // Obter as categorias únicas dos produtos
        const categoriasUnicas = Array.from(new Set(items.map(item => item.categoriaProduto)))
          .filter((categoria): categoria is string => categoria !== null); // Filtro que garante que o valor seja string
        setCategorias(categoriasUnicas);
      }
    };

    fetchEntradas();
  }, []);

  // Filtro dos itens pela categoria selecionada
  const itensFiltrados = categoriaSelecionada
    ? itensEntrada.filter(item => item.categoriaProduto === categoriaSelecionada)
    : itensEntrada;

  // Função para redirecionar para a página de detalhes
  const handleVerDetalhes = (item: ItemEntrada) => {
    navigate('/detalhes', { state: { produto: item } }); // Passa o produto como estado
  };

  return (
    <div>
      {/* Drop para selecionar a categoria */}
      <Box sx={{ marginBottom: '15px', marginTop: '15px', textAlign: 'end' }}>
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
          {/* Renderiza as categorias dinamicamente */}
          {categorias.map((categoria, index) => (
            <MenuItem key={index} value={categoria}>
              {categoria}
            </MenuItem>
          ))}
        </Select>
      </Box>

      <Grid
        container
        spacing={2}
        justifyContent="center"
        sx={{ marginTop: '25px', backgroundColor: '#6e6e6e' }}
      >
        {itensFiltrados.map((item, index) => (
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
              {/* Imagem do produto */}
              <CardMedia
                component="img"
                image={item.urlImagemProduto || '../../../assets/images/default-image.png'}
                alt={item.nomeProduto || 'Produto'}
                sx={{
                  height: 220,
                  objectFit: 'contain',
                  objectPosition: 'center',
                  borderRadius: '10px',
                }}
              />
              <CardContent
                sx={{
                  flexGrow: 1,
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                {/* Título truncado */}
                <Typography
                  gutterBottom
                  variant="h5"
                  component="div"
                  align="center"
                  sx={{
                    textOverflow: 'ellipsis',
                    whiteSpace: 'nowrap',
                    overflow: 'hidden',
                    width: '100%',
                  }}
                >
                  {item.nomeProduto}
                </Typography>
                {/* Preço truncado */}
                <Typography
                  variant="body1"
                  color="text.secondary"
                  align="center"
                  sx={{
                    textOverflow: 'ellipsis',
                    whiteSpace: 'nowrap',
                    overflow: 'hidden',
                    width: '100%',
                  }}
                >
                  Preço: R${item.precoProduto && !isNaN(item.precoProduto) ? item.precoProduto.toFixed(2) : '0.00'}
                </Typography>
              </CardContent>

              <Box sx={{ display: 'flex', justifyContent: 'center', padding: '10px' }}>
                <Button
                  size="small"
                  variant="contained"
                  color="primary"
                  onClick={() => handleVerDetalhes(item)} // Passa o produto para a navegação
                >
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
