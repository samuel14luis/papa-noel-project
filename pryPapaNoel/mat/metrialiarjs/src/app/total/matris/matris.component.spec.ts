import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatrisComponent } from './matris.component';

describe('MatrisComponent', () => {
  let component: MatrisComponent;
  let fixture: ComponentFixture<MatrisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatrisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatrisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
