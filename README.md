# Basic Node and Express

This is the boilerplate code for the Basic Node and Express Challenges. Instructions for working on these challenges start at https://www.freecodecamp.org/learn/apis-and-microservices/basic-node-and-express/

## Conceito de middleware

Middleware são funções que interceptam manipuladores da rota, adicionando algum tipo de informação.

> O middleware é um software que diferentes aplicações usam para se comunicar umas com as outras. Ele oferece funcionalidade para conectar aplicações de modo inteligente e eficiente, para que você possa inovar mais rapidamente. O middleware atua como uma ponte entre diversas tecnologias, ferramentas e bancos de dados para integrá-los perfeitamente em um único sistema. - *Fonte:* [AWS - O que é middleware](https://aws.amazon.com/pt/what-is/middleware/)

Usando um middleware:

```js
app.use(path, middlewareFunction);
```

- Path: Parâmetro opcional, caso não seja passado, será executado em todas as solicitações.

## Arquivo .env

Arquivo `.env` é um arquivo oculto usado para passar variáveis ambientes para o aplicativo.

geralmente utilizado para manter informações ocultas, como chaves da API ou URL do banco de dados ou arquivos de configuração.

> As variáveis de ambiente podem ser acessadas pelo aplicativo usando `process.env.VAR_NAME`. O objeto process.env é um objeto global do Node e suas variáveis são passadas como strings. Por convenção, os nomes de variáveis ficam todos em letras maiúsculas, com palavras separadas por um sublinhado. Também é importante notar que não pode haver espaço em torno do sinal de igual quando você estiver atribuindo valores às suas variáveis, como, por exemplo, VAR_NAME=value

