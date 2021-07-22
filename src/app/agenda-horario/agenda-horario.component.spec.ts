import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgendaHorarioComponent } from './agenda-horario.component';

describe('AgendaHorarioComponent', () => {
  let component: AgendaHorarioComponent;
  let fixture: ComponentFixture<AgendaHorarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgendaHorarioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgendaHorarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
