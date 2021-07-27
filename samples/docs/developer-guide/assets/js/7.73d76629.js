(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{414:function(t,e,a){},443:function(t,e,a){"use strict";a(414)},514:function(t,e,a){"use strict";a.r(e);a(443);var n=a(55),s=Object(n.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"version-7-4-0-changelog"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#version-7-4-0-changelog"}},[t._v("#")]),t._v(" Version 7.4.0 changelog")]),t._v(" "),a("h2",{attrs:{id:"new-features"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#new-features"}},[t._v("#")]),t._v(" New Features")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("Import and export ink signature list.")]),t._v(" "),a("p",[t._v("Related APIs: "),a("code",[t._v("pdfViewer.getInkSignList(); pdfViewer.setInkSignList()")])])]),t._v(" "),a("li",[a("p",[t._v("Set the default state tool to a particular stamp by using the new PDFUI constructor option or method.")]),t._v(" "),a("p",[t._v("Related option: "),a("code",[t._v("PDFUI.constructor([options.customs.handlerParams])")])]),t._v(" "),a("p",[t._v("Related API: "),a("code",[t._v('PDFViewCtrl.StateHandlerManager.switchTo(stamp,{category:"",name:""})')])])]),t._v(" "),a("li",[a("p",[t._v("Check, Enable and disable hotkey by using the new constructor option or method.")]),t._v(" "),a("p",[t._v("Related option: "),a("code",[t._v("pdfViewer.constructor([options.enableShortcutKey=true])")])]),t._v(" "),a("p",[t._v("Related APIs: "),a("code",[t._v("pdfViewer.setEnableShortcutKey(), pdfViewer.isShortcutKeyEnabled()")])])]),t._v(" "),a("li",[a("p",[t._v("Get a page's box information and check for cropped page.")]),t._v(" "),a("p",[t._v("Related APIs: "),a("code",[t._v("pdfPage.isCropped(); pdfPage.getPageBox()")])])]),t._v(" "),a("li",[a("p",[t._v("Configure default print options.")]),t._v(" "),a("p",[t._v("Related API: "),a("code",[t._v("pdfviewer.setDefaultPrintSetting()")])])]),t._v(" "),a("li",[a("p",[t._v("Unmount the iFrame DOM running PDF JavaScript by configuring the PDFViewer constructor option. Value is set to false by default. Use true value if you don’t want the JavaScript code to be called using iframe.")]),t._v(" "),a("p",[t._v("Related option: "),a("code",[t._v("pdfViewer.constructor([options.noJSFrame=false])")])])]),t._v(" "),a("li",[a("p",[t._v("Change the PDF text background and foreground display color.")]),t._v(" "),a("p",[t._v("Related API: "),a("code",[t._v("pdfviewer.setDocReadColor()")])])]),t._v(" "),a("li",[a("p",[t._v("Load image as document object.")]),t._v(" "),a("p",[t._v("Related API: "),a("code",[t._v("pdfViewer.convertImageToPDFDoc()")])])]),t._v(" "),a("li",[a("p",[t._v("Support view rotation and event handling.")]),t._v(" "),a("p",[t._v("Related APIs "),a("code",[t._v("PDFViewer.rotateTo()")]),t._v(", "),a("code",[t._v("PDFViewer.getRotation()")]),t._v(", "),a("code",[t._v("ViewerEvents.afterDocumentRotation")]),t._v(";")])]),t._v(" "),a("li",[a("p",[t._v("New methods to set form field highlight color and enable/disable form field highlight.")]),t._v(" "),a("p",[t._v("Related APIs: "),a("code",[t._v("pdfviewer.setFormHighlightColor()")]),t._v(", "),a("code",[t._v("pdfviewer.highlightForm(boolean)")])])]),t._v(" "),a("li",[a("p",[t._v("New method for pre-setting pencil drawing object time.\nRelated API: "),a("code",[t._v("pdfviewer.setPencilDrawingTimeOut()")])])]),t._v(" "),a("li",[a("p",[t._v("New classes and methods for working with and managing PDF objects programmatically.")]),t._v(" "),a("p",[t._v("Related new Classes: "),a("code",[t._v("PDF.GraphicsObject")]),t._v(", "),a("code",[t._v("PDF.ImageObject")]),t._v(", "),a("code",[t._v("PDF.TextObject")]),t._v(", "),a("code",[t._v("PDF.PathObject")])]),t._v(" "),a("p",[t._v("Related APIs:")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("PDFPage"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getGraphicsObjectsInRect")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nPDFPage"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getGraphicsObjectAtPoint")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nPDFPage"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getGraphicsObjectsCount")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nPDFPage"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("addGraphicsObject")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nPDFPage"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("removeGraphicsObject")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("Related Event: "),a("code",[t._v("DataEvents.graphicsUpdated()")])])]),t._v(" "),a("li",[a("p",[t._v("New constructor option to display comment list or not when a markup annotation was created.")]),t._v(" "),a("p",[t._v("Related option: "),a("code",[t._v("PDFViewer.constructor.showCommentList")])])]),t._v(" "),a("li",[a("p",[t._v("New Features at UIExtension module:")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("New "),a("code",[t._v("<gtab>")]),t._v(" component")])]),t._v(" "),a("li",[a("p",[t._v("New method to make create controller class easier.")]),t._v(" "),a("p",[t._v("Related API:"),a("code",[t._v("UIXModule.prototype.controller(name, def)")])])]),t._v(" "),a("li",[a("p",[t._v("New method to create custom appearance\nRelated API: "),a("code",[t._v("Appearance.extend(def, statics)")])])])])]),t._v(" "),a("li",[a("p",[t._v("New features were added to the web viewer’s UI:")]),t._v(" "),a("ul",[a("li",[t._v("New Signature field control.")]),t._v(" "),a("li",[t._v("New Form text field control.")]),t._v(" "),a("li",[t._v("New measurement tools "),a("code",[t._v("Perimeter, Polygon area and Circle area")]),t._v(".")]),t._v(" "),a("li",[t._v("New view Rotate options on right-click context menu.")]),t._v(" "),a("li",[t._v("New PDF text color view mode control.")]),t._v(" "),a("li",[t._v("Drag and drop annotation’s across pages feature.")]),t._v(" "),a("li",[t._v("Support displaying annotation contents on mouse hover action.")]),t._v(" "),a("li",[t._v("Support load image file directly.")]),t._v(" "),a("li",[t._v("Audio player now supports pause option.")]),t._v(" "),a("li",[t._v("New language localization support: Japanese and Korean.")])])])]),t._v(" "),a("h2",{attrs:{id:"changes"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#changes"}},[t._v("#")]),t._v(" Changes")]),t._v(" "),a("ul",[a("li",[t._v("Change the name of parameter "),a("code",[t._v("annotJson")]),t._v(" to "),a("code",[t._v("annotsJson")]),t._v(" in "),a("code",[t._v("PDFViewer.openPDFByHttpRangeRequest")]),t._v(" and "),a("code",[t._v("PDFViewer.reopenPDFDoc")]),t._v(".")]),t._v(" "),a("li",[t._v("The advanced_webViewer was removed from the SDK package. It was replaced with complete_webViewer.")]),t._v(" "),a("li",[t._v("The Form import&export tool were moved to Form tab from the Home tab.")]),t._v(" "),a("li",[t._v("New "),a("code",[t._v("allInOne.mobile.js")]),t._v(" file for mobile to load all addons using a single js file.")]),t._v(" "),a("li",[t._v("The thumbnails "),a("code",[t._v("uix-addons")]),t._v(" module has been made open source for specific customers, not released to general availability")]),t._v(" "),a("li",[t._v("Deprecated: Deprecate PDFUI options "),a("code",[t._v("template and fragments")]),t._v(", replace them with Appearance.")])]),t._v(" "),a("h2",{attrs:{id:"enhancements"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#enhancements"}},[t._v("#")]),t._v(" Enhancements")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("Optimized mobile pinch zoom touch screen performance.")])]),t._v(" "),a("li",[a("p",[t._v("Enhanced PDF JavaScript support: document print action and OCG object.")])]),t._v(" "),a("li",[a("p",[t._v("Enhanced "),a("code",[t._v("pdfField.setAction")]),t._v(" to support AdditionalAction.")]),t._v(" "),a("p",[t._v("Related APIs: "),a("code",[t._v("setAction(type,data){}")]),t._v(" was updated to "),a("code",[t._v("setAction(trigger, action){}")])]),t._v(" "),a("p",[t._v("Related constants: "),a("code",[t._v("PDF.constant.Action_Trigger")]),t._v(", "),a("code",[t._v("PDF.constant.Action.Box_Type")])])]),t._v(" "),a("li",[a("p",[t._v("Enhanced document open workflow by separating document loading and rendering logic..")]),t._v(" "),a("p",[t._v("Related APIs:")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v(" pdfViewer"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("renderDoc"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n pdfViewer"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("openPDFByFile")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("file"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("isRenderOnDocLoaded"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n pdfViewer"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("openPDFByHttpRangeRequest")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("request"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("isRenderOnDocLoaded"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" \n pdfViewer"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("openPDFById")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" pdfViewer"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("createNewDoc")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("isRenderOnDocLoaded"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])]),t._v(" "),a("li",[a("p",[t._v("Enhanced stamp functionality to support blob url/base64 data source, and allow users to add/edit custom stamps and change time format of dynamic stamp.")]),t._v(" "),a("p",[t._v("Related new APIs:")]),t._v(" "),a("p",[a("code",[t._v("pdfViewer.initAnnotationIcons(icons)")]),t._v(": Sets the custom initial stamps list. The default stamp list will be replaced.")]),t._v(" "),a("p",[a("code",[t._v("pdfViewer.addAnnotationIcon(icon)")]),t._v(": Adds a single custom stamp.")]),t._v(" "),a("p",[a("code",[t._v("pdfViewer.removeAnnotationIcon(type,category,name)")]),t._v(":Removes a single custom stamp.")]),t._v(" "),a("p",[a("code",[t._v("pdfui.getAnnotationIcons(annotType,onlyCustomized)")]),t._v(":Gets the custom stamps.")]),t._v(" "),a("p",[a("code",[t._v("pdfui.getAnnotationIcons('stamp',true)")]),t._v(";")]),t._v(" "),a("p",[a("code",[t._v("pdfViewer.setFormatOfDynamicStamp(seperator,timeFormat)")]),t._v(":Configures the time format for the dynamic stamp.")])]),t._v(" "),a("li",[a("p",[t._v("Enhanced the Digital Signature solution.\nRelated API:")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("PDFUI")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("registerSignHandler")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("signerInfo"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("PDFUI")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setVerifyHandler")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("verifyFunction"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nPDFDoc"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sign")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("signInfo"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("digestSignHandler"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nPDFDoc"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("verifySignature")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("signatureField"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" verifyHandler"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("p",[t._v("New class: "),a("code",[t._v("PDFSignature")])])])]),t._v(" "),a("h2",{attrs:{id:"fixes"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#fixes"}},[t._v("#")]),t._v(" Fixes")]),t._v(" "),a("ul",[a("li",[t._v("Barcode was not updated when document print action was triggered")]),t._v(" "),a("li",[a("code",[t._v("openPDFByHttpRangeRequest()")]),t._v(" did’t trigger error on incorrect URLs.")]),t._v(" "),a("li",[t._v("Pencil drawing data loss after import/export to FDF format on pages containing stamp annotations.")]),t._v(" "),a("li",[t._v("Text displayed incorrectly on rotated pages.")]),t._v(" "),a("li",[a("code",[t._v("getCurrentPageIndex()")]),t._v(" didn’tget correct page number in a visible area.")]),t._v(" "),a("li",[t._v("Thumbnail and page index did not update after importing documents with API "),a("code",[t._v("PDFDoc.insertPage()")]),t._v(".")]),t._v(" "),a("li",[t._v("Bookmark could not be deleted after being inserted by PDFBookmark.insertbookmark.")]),t._v(" "),a("li",[t._v("Comments were disabled in a signed document with comments permission.")]),t._v(" "),a("li",[t._v("Tab key always jump back to the first page when using Tab key to view a form file.")]),t._v(" "),a("li",[t._v("Font not rendered correctly in a combo box form field.")]),t._v(" "),a("li",[a("code",[t._v("MarkupAnnot.getReviewStateCount")]),t._v(" and "),a("code",[t._v("MarkupAnnot.GetReviewStates")]),t._v(" always return 1 regardless of having more than 1 review states.")]),t._v(" "),a("li",[a("code",[t._v("STATE_HANDLER_CREATE_FREETEXT_CALLOUT")]),t._v(" could not be created when using template")]),t._v(" "),a("li",[t._v("Callout annotation displayed incorrectly after being moved in a particular file.")]),t._v(" "),a("li",[t._v("SubmitForm action generated incorrect execution..")]),t._v(" "),a("li",[t._v("Parts of images were inaccessible or hidden when rotated.")]),t._v(" "),a("li",[t._v("Form field inaccessible in specific form files when document is loaded")]),t._v(" "),a("li",[a("code",[t._v("PDFViewCtrl.ViewerEvents.rightClickAnnotation")]),t._v(" fails to trigger in specific scenarios.")]),t._v(" "),a("li",[t._v("Form controls get lost when new form pages were inserted in document.")]),t._v(" "),a("li",[t._v("Combo box printed in the output file issue.")])])])}),[],!1,null,null,null);e.default=s.exports}}]);