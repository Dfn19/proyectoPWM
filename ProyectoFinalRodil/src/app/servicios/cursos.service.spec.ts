import { TestBed } from '@angular/core/testing';

import { CursoService } from './cursos.service';

describe('CursoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CursoService = TestBed.get(CursoService);
    expect(service).toBeTruthy();
  });
});
