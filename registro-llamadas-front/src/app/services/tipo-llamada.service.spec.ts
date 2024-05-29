import { TestBed } from '@angular/core/testing';

import { TipoLlamadaService } from './tipo-llamada.service';

describe('TipoLlamadaService', () => {
  let service: TipoLlamadaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TipoLlamadaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
