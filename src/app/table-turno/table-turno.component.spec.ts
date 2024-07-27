import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableTurnoComponent } from './table-turno.component';

describe('TableTurnoComponent', () => {
  let component: TableTurnoComponent;
  let fixture: ComponentFixture<TableTurnoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TableTurnoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TableTurnoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
