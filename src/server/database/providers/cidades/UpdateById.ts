import { ETableNames } from "../../ETableNames";
import { Knex } from "../../knex";

export const updateById = async (id: number, newName: string): Promise<void | Error> => {
  try {
    const result = await Knex(ETableNames.Cidade)
      .where('id', id)
      .update({ nome: newName });

    if (result === 0) {
      return new Error('Registro não encontrado para atualização');
    }

    // Se chegamos aqui, a atualização foi bem-sucedida, mas não retornamos o corpo
    return;
  } catch (error) {
    return new Error('Erro ao atualizar o registro por ID');
  }
};