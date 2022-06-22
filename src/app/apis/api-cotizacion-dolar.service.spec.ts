import { TestBed } from '@angular/core/testing';

import { ApiCotizacionDolarService } from './api-cotizacion-dolar.service';

describe('ApiCotizacionDolarService', () => {
  let service: ApiCotizacionDolarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiCotizacionDolarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
