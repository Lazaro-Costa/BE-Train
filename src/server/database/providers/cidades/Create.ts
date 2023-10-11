import { ETableNames } from "../../ETableNames"
import { ICidade } from "../../models"
import { Knex } from "../../knex";

export const create = async (cidade: Omit<ICidade, 'id'>): Promise<number | Error> =>{
  try {
    const [result] = await Knex(ETableNames.Cidade).insert(cidade).returning('id');
    if(typeof result === 'object'){
      return result.id;
    }else if (typeof result === 'number') {
      return result;
    }
    return new Error('Erro ao cadastrar a cidade');
  } catch (error) {
    return new Error('Erro ao cadastrar o registro');
  }
}