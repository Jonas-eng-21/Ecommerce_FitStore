# 🖥️ Projeto E-commerce FitStore - Guia de Estrutura e Funcionamento

Bem-vindo ao projeto E-commerce FitStore! Este guia foi criado para ajudar na configuração inicial, entender a estrutura de pastas e manter a padronização no desenvolvimento. Siga as instruções abaixo para garantir o funcionamento correto e a consistência do projeto.

---

## 🚀 Primeiros Passos

### Instalação das Dependências
> [!important]
> Após clonar o repositório, instale as dependências do projeto com o seguinte comando:
```bash
npm install
```
---

### Executando o Projeto
Para iniciar o servidor de desenvolvimento e visualizar o projeto, execute:

Copiar código
```bash
npm run dev
```
Esse comando irá rodar o projeto localmente, geralmente em http://localhost:3000, onde você pode acessar e visualizar as mudanças em tempo real.

---

### 🎨 Estilização
Este projeto utiliza Styled Components como a solução principal de estilização. Garanta que todos os estilos estejam encapsulados e reutilizáveis, criando um design consistente e facilitando a manutenção.

Para mais informações sobre Styled Components, você pode conferir a documentação oficial.

---
### 📂 Estrutura de Pastas
Abaixo está a estrutura padrão de diretórios que devemos manter para garantir a organização e a legibilidade do código. Cada pasta possui uma descrição de seu propósito e da melhor forma de utilizá-la.

#### 🧩 Components
Descrição: A pasta Components contém componentes reutilizáveis da interface, como botões, inputs, cards, entre outros elementos independentes.
Uso: Cada componente deve estar em uma pasta própria e incluir seu arquivo .tsx e .styled.ts para os estilos.
Exemplo:
plaintext
Copiar código
└── Components
    ├── Button
    │   ├── Button.tsx
    │   └── Button.styled.ts
    ├── Card
    │   ├── Card.tsx
    │   └── Card.styled.ts

#### 📄 Pages
Descrição: A pasta Pages é onde residem as páginas principais do projeto, como Home, Login, Dashboard, entre outras.
Uso: Cada página deve ser composta por componentes e, se necessário, conter subcomponentes específicos da página. Mantenha a responsabilidade de cada página clara e organizada.
Exemplo:
plaintext
Copiar código
└── Pages
    ├── Home
    │   └── Home.tsx
    ├── Login
    │   └── Login.tsx

#### 🔌 Services

Descrição: Em Services, você encontrará os arquivos responsáveis por todas as chamadas à API. Centralizar essas funções facilita o gerenciamento e a reutilização de chamadas e configurações de rede.
Uso: Crie arquivos ou funções específicas para cada endpoint da API, utilizando o padrão de serviços e facilitando a manutenção e organização.
Exemplo:
plaintext
Copiar código
└── Services
    ├── api.ts
    └── userService.ts
---

### 📘 Dicas e Boas Práticas
> [!note]
> Consistência: Utilize a mesma estrutura e nomenclatura para todos os arquivos e pastas.
> Componentes Reutilizáveis: Prefira componentes reutilizáveis e bem definidos na pasta Components.
> Isolamento de Estilos: Use Styled Components para isolar e manter a consistência de estilos entre os elementos.

---

### 🔗 Links Úteis
[Documentação Styled Components](https://styled-components.com/)
[Documentação React](https://react.dev/)

---
Qualquer dúvida ou sugestão, entre em contato com a equipe! 👩‍💻👨‍💻