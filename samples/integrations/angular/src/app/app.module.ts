import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PDFViewerComponent } from './pdfviewer/pdfviewer.component';
@NgModule({
  declarations: [
    AppComponent,
    PDFViewerComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
