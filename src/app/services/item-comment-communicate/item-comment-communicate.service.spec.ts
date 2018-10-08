import { TestBed, inject } from '@angular/core/testing';

import { ItemCommentCommunicateService } from './item-comment-communicate.service';

describe('ItemCommentCommunicateService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ItemCommentCommunicateService]
    });
  });

  it('should be created', inject([ItemCommentCommunicateService], (service: ItemCommentCommunicateService) => {
    expect(service).toBeTruthy();
  }));
});
