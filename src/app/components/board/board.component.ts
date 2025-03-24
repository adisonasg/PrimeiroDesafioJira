import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { TarefaService } from '../../services/tarefa.service';
import { Tarefa } from '../../models/tarefa.model';
import { Status } from '../../models/status.enum';
import { Categoria } from '../../models/categoria.enum';
import { Router } from '@angular/router';


@Component({
  standalone: false, 
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss'], 
  encapsulation: ViewEncapsulation.Emulated
})
export class BoardComponent implements OnInit {
  tarefasAFazer: Tarefa[] = [];
  tarefasEmAndamento: Tarefa[] = [];
  tarefasFeitas: Tarefa[] = [];

  descricao: string = '';
  categoria: Categoria = Categoria.DESENVOLVIMENTO;

  constructor(private tarefaService: TarefaService, private router: Router) {}

  ngOnInit(): void {
    this.atualizarListas();
  }

  atualizarListas() {
    const tarefas = this.tarefaService.getTarefas();
    this.tarefasAFazer = tarefas.filter(t => t.status === Status.A_FAZER);
    this.tarefasEmAndamento = tarefas.filter(t => t.status === Status.EM_ANDAMENTO);
    this.tarefasFeitas = tarefas.filter(t => t.status === Status.FEITA);
  }

  avancarStatus(id: number) {
    this.tarefaService.atualizarStatus(id);
    this.atualizarListas();
  }
  
  criarTarefa() {
    if (!this.descricao) return;
    this.tarefaService.adicionarTarefa(this.descricao, this.categoria);
    this.descricao = '';
    this.atualizarListas();
}
  verTarefasFeitas() {
    this.router.navigate(['/tasks-done']);
  }
}

