import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KgSampleLibraryComponent } from './kg-sample-library.component';

describe('KgSampleLibraryComponent', () => {
  let component: KgSampleLibraryComponent;
  let fixture: ComponentFixture<KgSampleLibraryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [KgSampleLibraryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KgSampleLibraryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
