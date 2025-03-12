import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: false,
  template: `

  <app-board></app-board> 
  <router-outlet />`
})
export class AppComponent {
}
