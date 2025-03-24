import { Component, OnInit } from '@angular/core';
import { TarefaService } from '../../services/tarefa.service';
import { Tarefa } from '../../models/tarefa.model';
import { Status } from '../../models/status.enum';
import { Categoria } from '../../models/categoria.enum'; // ADICIONE ESTA IMPORTAÇÃO

@Component({
  selector: 'app-tasks-done',
  standalone: false,
  templateUrl: './tasks-done.component.html',
  styleUrls: ['./tasks-done.component.scss']
})
export class TasksDoneComponent implements OnInit {
  tarefasDev: Tarefa[] = [];
  tarefasIA: Tarefa[] = [];

  constructor(private tarefaService: TarefaService) {}

  ngOnInit(): void {
    const tarefasFeitas = this.tarefaService.getTarefas().filter(t => t.status === Status.FEITA);
    
    this.tarefasDev = tarefasFeitas.filter(t => t.categoria === Categoria.DESENVOLVIMENTO);
    this.tarefasIA = tarefasFeitas.filter(t => t.categoria === Categoria.INTELIGENCIA_ARTIFICIAL);
  }
}
