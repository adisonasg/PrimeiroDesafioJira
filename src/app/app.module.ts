import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { BoardComponent } from './components/board/board.component'; // ✅ Importação correta
import { TarefaService } from './services/tarefa.service';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [AppComponent, BoardComponent], // ✅ Adicionado aqui
  imports: [BrowserModule, FormsModule, RouterModule],
  providers: [TarefaService],
  bootstrap: [AppComponent]
})
export class AppModule {}
