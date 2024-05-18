  <h1 align="center">FisioFluxo</h1>

## Descrição

Gerenciamento de atendimentos e previsão de receita para fisioterapeutas autônomos.

### Features

- Calcular rendimento mensal por clínica, por paciente, por forma de pagamento e total;
- Calcular previsão de pagamentos para os próximos 3 meses por clínica;
- Calcular número de atendimentos por dia, semana e mês, podendo filtrar por clínica;

### Tecnologias

- Node.js
- Typescript
- Nest.js
- MongoDB

### Modelagem de dados

Utilizei o extended refference pattern para evitar múltiplos lookup e queries desnecessárias, repetindo somente os dados necessários e que não serão alterados constantemente de forma a preservar ao máximo a integridade dos dados.

## Instalação

```bash
$ npm install
```

## Executando o app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Testes

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```
