import { SxProps, Theme } from '@mui/system';

// Estilo para o container do Grid
export const gridContainerStyle: SxProps<Theme> = {
  marginTop: '25px', 
  display: 'flex',
  justifyContent: 'center',
  flexWrap: 'wrap',
  gap: '16px', 
  backgroundColor: '#6e6e6e',
};

// Estilos para cada Card
export const cardStyle: SxProps<Theme> = {
  minHeight: 300, // Ajusta a altura mínima do card
  maxHeight: 400, // Define a altura máxima
  minWidth: 180,  // Define a largura mínima
  maxWidth: 350,  // Define a largura máxima
  marginBottom: 5,
  marginLeft: 'auto',
  marginRight: 'auto', // Centraliza os cards
  display: 'flex', // Habilita o flexbox no card
  flexDirection: 'column', // Organiza os elementos do card verticalmente
};

// Estilos para o conteúdo do Card
export const cardContentStyle: SxProps<Theme> = {
  flexGrow: 1,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center', // Centraliza o conteúdo dentro do Card
  padding: 2, // Define o padding do conteúdo do card
};

// Estilo para o Box que envolve o preço e o botão
export const buttonBoxStyle: SxProps<Theme> = {
  display: 'flex',
  justifyContent: 'space-between', // Espaço entre o preço e o botão
  padding: '10px', // Adiciona padding no Box
  alignItems: 'flex-end', // Alinha o conteúdo na parte inferior
};

// Estilo do botão dentro do card
export const buttonStyle: SxProps<Theme> = {
  backgroundColor: '#3f51b5',
  color: '#fff',
  '&:hover': {
    backgroundColor: '#303f9f', // Cor do botão ao passar o mouse
  },
};
