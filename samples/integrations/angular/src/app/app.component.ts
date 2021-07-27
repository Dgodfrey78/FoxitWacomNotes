import { Component, ViewChild, ViewEncapsulation } from '@angular/core';
import { PDFViewerComponent } from './pdfviewer/pdfviewer.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild(
    'pdfviewer', {
    static: false
  })
  public pdfviewer: PDFViewerComponent;
}
