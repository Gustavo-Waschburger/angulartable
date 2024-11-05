import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcolhidoComponent } from './acolhido.component';

describe('AcolhidoComponent', () => {
  let component: AcolhidoComponent;
  let fixture: ComponentFixture<AcolhidoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AcolhidoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AcolhidoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
