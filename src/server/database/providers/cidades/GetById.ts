import { ETableNames } from "../../ETableNames"
import { ICidade } from "../../models"
import { Knex } from "../../knex";

export const getById = async (id: number): Promise<ICidade | Error> => {
  try {
    const result = await Knex.select('*').from(ETableNames.Cidade).where('id', id).first();

    if (!result) {
      return new Error('Registro não encontrado');
    }

    return result as ICidade;
  } catch (error) {
    return new Error('Erro ao buscar o registro por ID');
  }
};
