import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { KgMonacoEditorModule } from 'kg-monaco-editor';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, KgMonacoEditorModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
