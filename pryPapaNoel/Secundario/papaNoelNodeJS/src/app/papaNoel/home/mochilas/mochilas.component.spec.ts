import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MochilasComponent } from './mochilas.component';

describe('MochilasComponent', () => {
  let component: MochilasComponent;
  let fixture: ComponentFixture<MochilasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MochilasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MochilasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
