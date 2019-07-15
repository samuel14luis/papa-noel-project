import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LisComprasComponent } from './lis-compras.component';

describe('LisComprasComponent', () => {
  let component: LisComprasComponent;
  let fixture: ComponentFixture<LisComprasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LisComprasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LisComprasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
