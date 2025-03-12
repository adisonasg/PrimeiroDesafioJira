import { Status } from './status.enum';
import { Categoria } from './categoria.enum';

export interface Tarefa {
  id: number;           // Identificador único da tarefa
  descricao: string;    // Descrição da tarefa
  status: Status;       // Status da tarefa (A Fazer, Em Andamento, Feita)
  categoria: Categoria; // Categoria da tarefa (Desenvolvimento, IA)
  autor?: string;       // Autor da tarefa (opcional)
}
