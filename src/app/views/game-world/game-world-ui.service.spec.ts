import { TestBed } from '@angular/core/testing';

import { GameWorldUiService } from './game-world-ui.service';

describe('GameWorldUiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GameWorldUiService = TestBed.get(GameWorldUiService);
    expect(service).toBeTruthy();
  });
});
