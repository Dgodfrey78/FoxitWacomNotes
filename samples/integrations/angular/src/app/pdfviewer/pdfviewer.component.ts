import { Component, OnInit, ViewEncapsulation, ElementRef } from '@angular/core';
import license from './license-key';
import * as UIExtension from '../../foxit-lib/UIExtension.full.js';
import * as Addons from '../../merged-foxit-addons.js';

@Component({
  selector: 'app-foxitpdfviewer',
  template: '',
  styleUrls: ['./pdfviewer.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class PDFViewerComponent implements OnInit {

  pdfui: any;
  constructor(
    private element: ElementRef
  ) { }

  ngOnInit() {
      this.pdfui = new UIExtension.PDFUI({
        viewerOptions: {
          libPath: '/foxit-lib',
          jr: {
            ...license,
            fontPath: location.origin + '/foxit-lib/assets/external/brotli/'
          }
        },
        renderTo: this.element.nativeElement,
        addons: Addons
      });
  }

}
