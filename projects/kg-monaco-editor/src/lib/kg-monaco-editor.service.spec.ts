import { TestBed } from '@angular/core/testing';

import { KgMonacoEditorService } from './kg-monaco-editor.service';

describe('KgMonacoEditorService', () => {
  let service: KgMonacoEditorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(KgMonacoEditorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
