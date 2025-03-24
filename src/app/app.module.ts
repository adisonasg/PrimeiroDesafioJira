import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

//Components
import { TarefaService } from './services/tarefa.service';
import { BoardComponent } from './components/board/board.component'; 
import { TaskColumnComponent } from './components/task-column/task-column.component';
import { TasksDoneComponent } from './components/tasks-done/tasks-done.component';

@NgModule({
  declarations: [AppComponent, BoardComponent, TaskColumnComponent, TasksDoneComponent],
  imports: [BrowserModule, FormsModule, RouterModule, AppRoutingModule], 
  providers: [TarefaService],
  bootstrap: [AppComponent]
})
export class AppModule {}
