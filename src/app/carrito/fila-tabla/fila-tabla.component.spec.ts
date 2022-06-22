import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilaTablaComponent } from './fila-tabla.component';

describe('FilaTablaComponent', () => {
  let component: FilaTablaComponent;
  let fixture: ComponentFixture<FilaTablaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilaTablaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FilaTablaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
