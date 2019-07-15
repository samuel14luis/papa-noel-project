import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UtilesComponent } from './utiles.component';

describe('UtilesComponent', () => {
  let component: UtilesComponent;
  let fixture: ComponentFixture<UtilesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UtilesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UtilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
