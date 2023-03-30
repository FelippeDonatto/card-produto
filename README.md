<div align="center">
  <img src="https://user-images.githubusercontent.com/7221671/228865434-48fb40fe-58f8-49b1-8a7b-0627b1846165.png" width="150" />
</div>

<h2 align="center"> Play de musica - Desafio 1 - #bora codar Rocketseat</h2>

<div align="center"> 
  <img src="https://user-images.githubusercontent.com/7221671/228925941-2b7aa7fc-04f5-4808-b9bd-a128944b5fe8.png" width="1920" />
</div>

<h1>Bora Codar - Card Product</h1>

<p align="center">Desenvolvi essa aplicação utilizando como base o modelo sugerido no evento da Rockeseat #boraCodar. Foi utilizadas as tecnologias como NEXT, Tailwind.</p>

<h2>Referência</h2>

- [Template Bora Codar](https://www.figma.com/community/file/1195050984449538256/%23boraCodar---Desafio-2)
- [GitHub BoraCoadar](https://github.com/maykbrito/boracodar)

<h2>Licença</h2>

[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://choosealicense.com/licenses/mit/)

<h2>Documentação de cores</h2>

| Cor      | Hexadecimal                                                      |
| -------- | ---------------------------------------------------------------- |
| Rose 900 | ![#271A45](https://via.placeholder.com/10/271A45?text=+) #271A45 |
| Rose 100 | ![#D9CDF7](https://via.placeholder.com/10/D9CDF7?text=+) #D9CDF7 |

<h2>Instalação</h2>

Instale Card Produto com npm

_Para instalar as dependencias_

```bash
  npm intall
```

_Para rodar o projeto_

```bash
  npm run dev
```

<h2>Tecnologias utilizadas</h2>

_Instalação do Tailwind para Next_

```bash
  npm install -D tailwindcss postcss autoprefixer
```

```bash
  npx tailwindcss init -p
```

_Adicionar ao arquivo tailwind.config.js_

```bash
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    colors: {
      rose: {
        900: '#271A45',
        100: '#D9CDF7'
      }
    },
    extend: {
      fontFamily: {
        sans: ['var(--font-crimson)'],
        mono: ['var(--font-lato)']
      }
    }
  },
  plugins: []
}


```

_Adicione ao seu CSS global_

```bash
  @tailwind base;
  @tailwind components;
  @tailwind utilities;
```
