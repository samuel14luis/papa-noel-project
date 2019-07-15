import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SlaiderComponent } from './slaider.component';

describe('SlaiderComponent', () => {
  let component: SlaiderComponent;
  let fixture: ComponentFixture<SlaiderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SlaiderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SlaiderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
