import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilaheroesComponent } from './filaheroes.component';

describe('FilaheroesComponent', () => {
  let component: FilaheroesComponent;
  let fixture: ComponentFixture<FilaheroesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilaheroesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilaheroesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
