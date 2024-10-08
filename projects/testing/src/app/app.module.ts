import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { KgSampleLibraryModule } from 'kg-sample-library';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
    declarations: [AppComponent],
    imports: [BrowserModule, AppRoutingModule, KgSampleLibraryModule],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}
