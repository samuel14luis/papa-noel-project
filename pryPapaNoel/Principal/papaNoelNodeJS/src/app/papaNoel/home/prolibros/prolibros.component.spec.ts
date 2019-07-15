import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProlibrosComponent } from './prolibros.component';

describe('ProlibrosComponent', () => {
  let component: ProlibrosComponent;
  let fixture: ComponentFixture<ProlibrosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProlibrosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProlibrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
