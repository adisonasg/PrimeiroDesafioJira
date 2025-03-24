import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Tarefa } from '../../models/tarefa.model';

@Component({
  standalone: false,
  selector: 'app-task-column',
  templateUrl: './task-column.component.html',
  styleUrls: ['./task-column.component.scss']
})
export class TaskColumnComponent {
  @Input() titulo!: string;
  @Input() tarefas: Tarefa[] = [];
  @Output() avancar = new EventEmitter<number>();

  avancarTarefa(id: number) {
    this.avancar.emit(id);
  }
}
