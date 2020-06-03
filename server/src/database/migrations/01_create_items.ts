import Knex from "knex"

export async function up(knex: Knex) {
   // função para fazer alguma coisa, nesse exemplo criar a tabela

   return knex.schema.createTable("items", table => {
      table.increments("id").primary()
      table.string("image").notNullable()
      table.string("title").notNullable()
   })
}

export async function down(knex: Knex) {
      // função inversa a anterior (desfazer o que foi feito), nesse exemplo deletar a tabela criada
      return knex.schema.dropTable("items")
}