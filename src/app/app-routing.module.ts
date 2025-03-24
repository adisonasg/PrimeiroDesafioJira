import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TasksDoneComponent } from './components/tasks-done/tasks-done.component';
import { BoardComponent } from './components/board/board.component';


const routes: Routes = [
  { path: '', component: BoardComponent, pathMatch: 'full' }, // Página inicial
  { path: 'tasks-done', component: TasksDoneComponent },
  { path: '**', redirectTo: '' } // Redireciona qualquer rota desconhecida para a home
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
