import { TestBed } from '@angular/core/testing';

import { TelefonoUsuarioService } from './telefono-usuario.service';

describe('TelefonoUsuarioService', () => {
  let service: TelefonoUsuarioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TelefonoUsuarioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
