# Portal Esportivo - Pitch de Apresentação

## Objetivo

O Portal Esportivo foi criado para ser uma plataforma digital centralizadora de informações sobre times, notícias, estádios e ídolos do esporte. O objetivo é oferecer uma experiência moderna, intuitiva e responsiva, conectando fãs ao universo esportivo de forma simples e eficiente.

---

## Tecnologias Utilizadas

- **React.js**: Estrutura principal para construção da interface dinâmica e reativa.
- **TypeScript**: Tipagem estática para maior robustez e segurança no desenvolvimento.
- **React Router DOM**: Navegação fluida entre páginas sem recarregamento.
- **Tailwind CSS**: Estilização rápida, responsiva e consistente.
- **React Icons**: Ícones modernos para enriquecer a experiência visual.
- **JSON**: Estrutura leve para armazenamento e manipulação dos dados dos ídolos.

---

## Funcionalidades Principais

### Página Inicial
- **Apresentação visual marcante** com banner e navegação clara.
- **Acesso rápido** às principais seções do portal.

### Página de Times
- **Listagem organizada** dos times cadastrados.
- **Estrutura preparada** para detalhamento futuro de cada equipe.

### Página de Notícias
- **Central de novidades** com exibição de notícias esportivas.
- **Layout preparado** para expansão e detalhamento de cada notícia.

### Página de Estádios
- **Exibição dos principais estádios** relacionados ao universo esportivo.
- **Informações relevantes** sobre cada estádio, como nome, localização e capacidade.
- **Design responsivo** para melhor visualização em diferentes dispositivos.

### Página de Ídolos
- **Galeria de ídolos** com cards individuais.
- **Informações completas**: foto, nome, posição e data de nascimento.
- **Design responsivo** e imagens ajustadas para melhor visualização.

---

## Diferenciais

- **Interface moderna e responsiva**, adaptada para diferentes dispositivos.
- **Navegação intuitiva**, facilitando o acesso a conteúdos relevantes.
- **Código escalável e seguro**, pronto para futuras expansões e integrações.

---

## Conclusão

O Portal Esportivo entrega uma solução inovadora para fãs de esportes, reunindo informações essenciais em um ambiente digital agradável, eficiente e preparado para crescer junto com as demandas do público.

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
