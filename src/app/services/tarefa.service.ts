import { Injectable } from '@angular/core';
import { Tarefa } from '../models/tarefa.model';
import { Status } from '../models/status.enum';
import { Categoria } from '../models/categoria.enum';

@Injectable({
  providedIn: 'root',
})
export class TarefaService {
  private tarefas: Tarefa[] = [
    { id: 1, descricao: 'Criar API', status: Status.A_FAZER, categoria: Categoria.DESENVOLVIMENTO },
    { id: 2, descricao: 'Treinar modelo IA', status: Status.EM_ANDAMENTO, categoria: Categoria.INTELIGENCIA_ARTIFICIAL },
  ];

  constructor() {
    // Map para definir o autor conforme a categoria
    this.tarefas = this.tarefas.map(tarefa => ({
      ...tarefa,
      autor: tarefa.categoria === Categoria.DESENVOLVIMENTO ? 'Camila' : 'Renata'
    }));
    this.tarefas = this.tarefas.map(tarefa => {
      tarefa.autor = tarefa.categoria === Categoria.DESENVOLVIMENTO ? 'Camila' : 'Renata';
      return tarefa
    })
  }

  getTarefas(): Tarefa[] {
    return this.tarefas;
  }

  adicionarTarefa(descricao: string, categoria: Categoria) {
    const novaTarefa: Tarefa = {
      id: this.tarefas.length + 1,
      descricao,
      status: Status.A_FAZER,
      categoria,
      autor: categoria === Categoria.DESENVOLVIMENTO ? 'Camila' : 'Renata'
    };
    this.tarefas.push(novaTarefa);
  }

  atualizarStatus(id: number) {
    var tarefa = this.tarefas.find(tarefa => tarefa.id == id)
    
      if (tarefa?.status === Status.A_FAZER)
        tarefa.status = Status.EM_ANDAMENTO

      else if (tarefa?.status === Status.EM_ANDAMENTO)
        tarefa.status = Status.FEITA
      

    // this.tarefas = this.tarefas.map(tarefa => {
    //   if (tarefa.id === id) {
    //     if (tarefa.status === Status.A_FAZER) return { ...tarefa, status: Status.EM_ANDAMENTO };
    //     if (tarefa.status === Status.EM_ANDAMENTO) return { ...tarefa, status: Status.FEITA };
    //   }
    //   return tarefa;
    // });
  }
}
