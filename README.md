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