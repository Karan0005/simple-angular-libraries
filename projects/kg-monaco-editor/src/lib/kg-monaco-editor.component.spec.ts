import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KgMonacoEditorComponent } from './kg-monaco-editor.component';

describe('KgMonacoEditorComponent', () => {
  let component: KgMonacoEditorComponent;
  let fixture: ComponentFixture<KgMonacoEditorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [KgMonacoEditorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KgMonacoEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
