import { TestBed } from '@angular/core/testing';
import { RouterModule } from '@angular/router';
import { KgMonacoEditorModule } from 'kg-monaco-editor';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [RouterModule.forRoot([]), KgMonacoEditorModule],
            declarations: [AppComponent]
        }).compileComponents();
    });

    it('should create the app', () => {
        const fixture = TestBed.createComponent(AppComponent);
        const app = fixture.componentInstance;
        expect(app).toBeTruthy();
    });
});
