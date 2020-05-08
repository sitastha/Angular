import { TestBed } from '@angular/core/testing';

import { McqchoiceService } from './mcqchoice.service';

describe('McqchoiceService', () => {
  let service: McqchoiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(McqchoiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
