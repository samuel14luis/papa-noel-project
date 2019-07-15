import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProelectrodomesticoComponent } from './proelectrodomestico.component';

describe('ProelectrodomesticoComponent', () => {
  let component: ProelectrodomesticoComponent;
  let fixture: ComponentFixture<ProelectrodomesticoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProelectrodomesticoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProelectrodomesticoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
