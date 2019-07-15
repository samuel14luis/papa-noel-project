import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LisFavoritosComponent } from './lis-favoritos.component';

describe('LisFavoritosComponent', () => {
  let component: LisFavoritosComponent;
  let fixture: ComponentFixture<LisFavoritosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LisFavoritosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LisFavoritosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
