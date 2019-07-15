import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EstPedidoComponent } from './est-pedido.component';

describe('EstPedidoComponent', () => {
  let component: EstPedidoComponent;
  let fixture: ComponentFixture<EstPedidoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EstPedidoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EstPedidoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
