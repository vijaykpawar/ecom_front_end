import { TestBed, inject } from '@angular/core/testing';

import { CustomerhomepageService } from './customerhomepage.service';

describe('CustomerhomepageService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CustomerhomepageService]
    });
  });

  it('should be created', inject([CustomerhomepageService], (service: CustomerhomepageService) => {
    expect(service).toBeTruthy();
  }));
});
