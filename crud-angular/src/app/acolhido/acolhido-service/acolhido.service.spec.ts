import { TestBed } from '@angular/core/testing';

import { AcolhidosService } from './acolhido.service';

describe('AcolhidoService', () => {
  let service: AcolhidosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AcolhidosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
