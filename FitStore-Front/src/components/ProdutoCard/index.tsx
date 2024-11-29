import React, { useEffect, useState } from 'react';
import { listarProdutosAPI } from '../../services/produtoService'; // Importe o serviço
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

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

  // Função para dividir os produtos em grupos de 4
  const chunkArray = (arr: Produto[], chunkSize: number) => {
    const result: Produto[][] = [];
    for (let i = 0; i < arr.length; i += chunkSize) {
      result.push(arr.slice(i, i + chunkSize));
    }
    return result;
  };

  const produtosEmGrupos = chunkArray(produtos, 4);

  return (
    <div>
      {produtosEmGrupos.map((grupo, index) => (
        <div key={index} style={{ width: '100%', marginLeft: '20%', marginRight: '20%', marginBottom: '20px' }}>
          <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between' }}>
            {grupo.map((produto, index) => (
              <Card sx={{ minWidth: 275, marginBottom: 2, flex: '1 1 calc(25% - 20px)' }} key={index}>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {produto.nome}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Preço: R${produto.preco && !isNaN(produto.preco) ? produto.preco.toFixed(2) : '0.00'}
                  </Typography>
                </CardContent>
                <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                  <Button size="small">Ver Detalhes</Button>
                </Box>
              </Card>
            ))}
          </Box>
        </div>
      ))}
    </div>
  );
};

export default ProdutoCard;
