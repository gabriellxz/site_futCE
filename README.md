# Portal Esportivo - Análise do Projeto

## Objetivo

O Portal Esportivo tem como objetivo centralizar informações sobre times, notícias e ídolos do esporte, proporcionando ao usuário uma experiência intuitiva, visualmente agradável e de fácil navegação. O sistema foi desenvolvido para ser responsivo e acessível, facilitando o acesso a conteúdos relevantes do universo esportivo.

---

## Tecnologias Utilizadas

- **React.js**: Biblioteca principal para construção da interface do usuário.
- **TypeScript**: Superset do JavaScript, trazendo tipagem estática e maior segurança ao código.
- **React Router DOM**: Gerenciamento de rotas e navegação entre páginas.
- **Tailwind CSS**: Framework utilitário para estilização rápida e responsiva.
- **React Icons**: Biblioteca de ícones para enriquecer a interface.
- **JSON**: Utilizado para armazenamento e manipulação dos dados dos ídolos.

---

## Funcionalidades do Site

### 1. Página Inicial (`Home`)
- **Descrição**: Página de boas-vindas, com destaque visual para imagens e navegação facilitada.
- **Funcionalidades**:
  - Banner principal com imagem de fundo.
  - Links de acesso rápido para as páginas de times, notícias e ídolos.

### 2. Página de Times (`AllTeams`)
- **Descrição**: Lista todos os times cadastrados no sistema.
- **Funcionalidades**:
  - Exibição dos times com informações relevantes.
  - Estrutura preparada para detalhamento futuro de cada time.

### 3. Página de Notícias (`NewsPage`)
- **Descrição**: Central de notícias esportivas, exibindo novidades e acontecimentos.
- **Funcionalidades**:
  - Listagem de notícias com imagens, títulos e resumos.
  - Estrutura pronta para detalhamento individual de cada notícia.

### 4. Página de Ídolos (`IdolsPage`)
- **Descrição**: Galeria dos principais ídolos do esporte, com informações detalhadas.
- **Funcionalidades**:
  - Cards para cada ídolo, contendo foto, nome, posição e data de nascimento.
  - Layout responsivo, com imagens ajustadas para evitar overflow.
  - Navegação facilitada para retornar à página inicial.

---

## Considerações Finais

O projeto foi desenvolvido com foco em escalabilidade, manutenibilidade e experiência do usuário. Utilizando tecnologias modernas, o portal garante performance, segurança e flexibilidade para futuras expansões, mantendo uma interface limpa e eficiente.

---
```js
export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      ...tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      ...tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      ...tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
