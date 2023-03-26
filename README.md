# Marvel Comic Books - Front end

# Descrição da aplicação:

A aplicação é uma ecommerce de quadrinhos da Marvel. Nessa aplicação o usuário tem a possibilidade de: visualizar todos os quadrinhos, passar páginas, visulizar a página de cada quadrinho específico, adicionar quadrinhos ao carrinho, remover quadrinhos do carrinho e adicionar um cupom de desconto.

## Tecnologias/ferramentas utilizadas na aplicação:

- ReactJS
- TypeScript
- styled-components
- axios
- react-hook-form
- react-icons
- react-router-dom
- yup
- Context-api

## Antes de iniciar a aplicação, rode o seguinte comando para instalar as dependências:

`npm install`

## Preencha as váriaveis de ambiente:

`Utilize o arquivo env.example como base`

`Variável "VITE_PRIVATE_KEY" deve ser preenchida com sua chave privada advinda do website da api da Marvel: http://gateway.marvel.com`

`Variável "VITE_API_KEY" deve ser preenchida com sua chave pública advinda do website da api da Marvel: http://gateway.marvel.com`

## Para inicializar a aplicação localmente, execute:

`npm run dev`

## Para inicializar a aplicação com dockerfile, execute:

`docker build -t example/latest .`

`docker run --name example -p 5173:5173 heroes/latest`

## Para inicializar a aplicação com docker compose, execute:

`docker compose up`

## Essa aplicação possui testes E2E com cypress, para executá-los:

`Rode a aplicação com: npm run dev`

`Com a aplicação rodando, abra outro terminal e execute: npx cypress open`

## Cupons de desconto mock:

`cupom de 5% de desconto para cards raros: rare5`

`cupom de 10% de desconto para cards comuns: notRare10`
