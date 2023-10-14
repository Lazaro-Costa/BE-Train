import { ETableNames } from "../../ETableNames"
import { Knex } from "../../knex";

export const deleteById = async (id: number): Promise<void | Error> => {
  try {
    const result = await Knex(ETableNames.Cidade).where('id', id).del();

    if (result === 0) {
      return new Error('Registro não encontrado para exclusão');
    }

    // Se chegamos aqui, a exclusão foi bem-sucedida
    return;
  } catch (error) {
    return new Error('Erro ao excluir o registro por ID');
  }
};
