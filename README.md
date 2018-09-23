# Hibeats - Spotify API e React JS

Aplicação React que através da API do Spotify, permite a autenticação e busca de artistas, albuns e tracks. A busca de artistas retorna informações de classificação e popularida dos artistas e albuns, podendo esses serem favoritados (Persistência realizada no localStorage do navegador)

Detalhes técnicos

- Configuração do Webpack do zero para rodar com o React
- Uso do Sass direto no projeto o que facilitou muito a estilização e responsividade do mesmo
- Autenticação via Token com uso da API Spotify


![Imagem do projeto](/misc/hibeats_app.png)

![Imagem do projeto](/misc/hibeats_mobile.jpg)
 

  - `git clone https://www.github.com/lucazweb/hibeats`
  - Para rodar o projeto no modo desenvolvedor, configurar o `cliente_id` do Spotify e `redirect_uri` no arquivo `src/Login.js`
  - Config. do Router history no arquivo `src/history.js`
  - [webpack dev server] `npm run dev`
  - [Link em prod.]: `http://www.lucazweb.com.br/hibeats ` 
