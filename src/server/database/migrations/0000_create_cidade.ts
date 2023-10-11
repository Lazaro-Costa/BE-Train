import { Knex } from "knex";
import { ETableNames } from "../ETableNames";


export async function up(knex: Knex) {
  return knex
  .schema
  .createTable(ETableNames.Cidade, table => {
    table.bigIncrements('id').primary().index();
    table.string('nome', 150).checkLength('<=', 150).index().notNullable();

    table.comment('Tabela usada para armazenar cidades no Sistema');
  })
  .then(()=> console.log(`# Created table ${ETableNames.Cidade}`));
}
export async function down(knex: Knex) {
  return knex
  .schema
  .dropTable(ETableNames.Cidade)
  .then(()=> console.log(`# Droped table ${ETableNames.Cidade}`));
}

