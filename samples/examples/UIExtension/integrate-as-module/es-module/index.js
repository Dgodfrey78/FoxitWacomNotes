import * as UIExtension from 'UIExtension';
import * as license from '../../../license-key.js';
import '@lib/UIExtension.css';

PDFViewCtrl.Log.setLogLevel(PDFViewCtrl.Log.LEVELS.LEVEL_ERROR)

const pdfui = new UIExtension.PDFUI({
    viewerOptions: {
        libPath: '/lib',
        jr: {
            licenseKey: license.licenseKey,
            licenseSN: license.licenseSN,
            enginePath: './jr-engine/gsdk',
            fontPath: '../external/brotli'
        }
    },
    renderTo: '#pdf-ui',
    addons: [
        '/lib/uix-addons/path-objects'
    ]
});
pdfui.openPDFByHttpRangeRequest({
    range:{
        // url:'/docs/FoxitPDFSDKforWeb_DeveloperGuide.pdf',
        url:'/docs/FoxitPDFSDKforWeb_DemoGuide.pdf',
    }
},{fileName:'FoxitPDFSDKforWeb_DemoGuide.pdf'});
