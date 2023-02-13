# Teste API Orçamento

Este repositório foi criado para testar a API de orçamento.

## Utilização

- A API estará disponível na URL http://localhost:3000/ após iniciar o projeto.

A aplicação consiste em três endpoints:

- Endpoint para consultar lista de usuários pelo id, utilizando a rota: http://localhost:3000/users.

- Endpoint para consultar lista de produtos pela rota: http://localhost:3000/products

- O endpoint com a rota http://localhost:3000/users/:userId/products/:productIds deve consultar os produtos de um usuário, através do seu id, retornando o total de pagamento dos produtos que o usuário deverá pagar.

> Para teste, deverão ser usados os dados mockados:

```
{
  "User": {
    "name": { "string": {}},
    "tax": { "int": { "min": 10, "max": 200 }}
  },
  "Product": {
    "name": { "loremWords": { "minLength": 5, "maxLength": 150 }},
    "price": {"int": { "min": 10, "max": 15000 } }
  }
}
```

- Descrição do projeto:

https://forest-beechnut-57c.notion.site/Teste-API-de-or-amento-51c33eb367764d598affbd68cf0cef91

## Licença

Este projeto está licenciado sob a licença MIT. Veja o arquivo LICENSE para mais informações.