# Portfólio em React (Vite + React Router)

**Como rodar localmente**

1) Instale as dependências:
   ```bash
   npm install
   ```

2) Rode o servidor de desenvolvimento:
   ```bash
   npm run dev
   ```

3) Abra o link que aparecer no terminal (geralmente http://localhost:5173).

**Build para produção**

```bash
npm run build
npm run preview
```

**Estrutura**
- `public/img` — imagens do portfólio
- `public/curriculo.pdf` — currículo para download
- `src/pages` — páginas Home, Sobre, Projetos, Contato
- `src/styles/style.css` — estilos reaproveitados da versão HTML/CSS
- `src/App.jsx` — layout, header e footer com animação toggle
- `src/main.jsx` — configuração das rotas
