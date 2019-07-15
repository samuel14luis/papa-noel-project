import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PromochilasComponent } from './promochilas.component';

describe('PromochilasComponent', () => {
  let component: PromochilasComponent;
  let fixture: ComponentFixture<PromochilasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PromochilasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PromochilasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
