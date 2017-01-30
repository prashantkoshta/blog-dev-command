/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { LoginlogoutService } from './loginlogout.service';

describe('LoginlogoutService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LoginlogoutService]
    });
  });

  it('should ...', inject([LoginlogoutService], (service: LoginlogoutService) => {
    expect(service).toBeTruthy();
  }));
});
