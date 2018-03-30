import { TestBed, inject } from '@angular/core/testing';

import { NgxZaloService } from './ngx-zalo.service';

describe('NgxZaloService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NgxZaloService]
    });
  });

  it('should be created', inject([NgxZaloService], (service: NgxZaloService) => {
    expect(service).toBeTruthy();
  }));
});
