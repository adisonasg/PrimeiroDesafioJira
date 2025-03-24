import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TarefasFeitasComponent } from './tasks-done.component';

describe('TarefasFeitasComponent', () => {
  let component: TarefasFeitasComponent;
  let fixture: ComponentFixture<TarefasFeitasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TarefasFeitasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TarefasFeitasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
