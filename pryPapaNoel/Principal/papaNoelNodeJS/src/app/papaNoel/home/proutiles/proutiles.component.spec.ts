import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProutilesComponent } from './proutiles.component';

describe('ProutilesComponent', () => {
  let component: ProutilesComponent;
  let fixture: ComponentFixture<ProutilesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProutilesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProutilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
