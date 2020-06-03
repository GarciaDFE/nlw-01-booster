## Principais conceitos HTTP e Back-end

### Rota
- Endereço completo da requisição
- Exemplo: "http://localhost:3333/users"

### Recurso
- Entidade do sistema que estamos acessando
- Exemplo: "users"

### Requisições
- GET -> Buscar uma ou mais informações do back-end
- POST -> Criar uma nova informação no back-end
- PUT -> Atualizar uma informação existente no back-end
- DELETE -> Remover uma informação do back-end
- Exemplos:
   - POST http://localhost:3333/users -> Criar um usuário
   - GET http://localhost:3333/users -> Listar usuários
   - GET http://localhost:3333/users/5 -> Buscar dados do usuário com ID = 5

### Tipos de parâmetros
- Request Param -> Parâmetros escritos na própria rota que identificam um recurso e normalmente obrigatório para o funcionamento da rota
- Query Param -> Parâmetros que vem na própria rota, opcionais para filtros, paginações, etc
- Request Body -> Parâmetros para criação/atualização de informações

## Banco de Dados
- SQLite -> Banco de dados SQL que não precisa instalação, pois guarda tudo em um único arquivo ".sqlite"
- KnexJS -> Interface/Biblioteca para trabalhar com Banco de dados SQL de forma unificada, servindo para Postgres, MSSQL, MySQL, Oracle, entre outros, de forma flexível, portátil e divertido de usar
- Exemplo query em SQL -> SELECT * FROM users WHERE name = "Marcial"
- Exemplo query em KnexJS -> Knex("users").where("name", "Marcial").select("*")
- Vantagens em usar um query builder como o KnexJS:
   - Continuar escrevendo em Javascript
   - Queries criadas para um BD funcionam para outros BDs, sem precisar reescrever nada
- Migration -> Armazena os comandos SQL para reutilzações como um histórico dos comando para o banco de dados
- Práticas de mercado na nomenclatura dos métodos de controller -> **index:** para listagem, **show:** para mostrar um registro, **create:** para criar um registro, **update:** para atualizar um registro, **delete:** para excluir um registro

## Cors
- Define quais urls podem acessar nossa API