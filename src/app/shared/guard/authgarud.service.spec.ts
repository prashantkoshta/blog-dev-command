/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { AuthgarudService } from './authgarud.service';

describe('AuthgarudService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthgarudService]
    });
  });

  it('should ...', inject([AuthgarudService], (service: AuthgarudService) => {
    expect(service).toBeTruthy();
  }));
});
