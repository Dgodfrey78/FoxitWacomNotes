!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e(require("UIExtension")):"function"==typeof define&&define.amd?define(["UIExtension"],e):"object"==typeof exports?exports.XfaFormUIXAddon=e(require("UIExtension")):t.XfaFormUIXAddon=e(t.UIExtension)}(self,(function(t){return function(t){var e={};function n(o){if(e[o])return e[o].exports;var r=e[o]={i:o,l:!1,exports:{}};return t[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=t,n.c=e,n.d=function(t,e,o){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)n.d(o,r,function(e){return t[e]}.bind(null,r));return o},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=0)}([function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o,r=function(t,e){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return function(t,e){var n=[],o=!0,r=!1,i=void 0;try{for(var a,u=t[Symbol.iterator]();!(o=(a=u.next()).done)&&(n.push(a.value),!e||n.length!==e);o=!0);}catch(t){r=!0,i=t}finally{try{!o&&u.return&&u.return()}finally{if(r)throw i}}return n}(t,e);throw new TypeError("Invalid attempt to destructure non-iterable instance")},i=function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e}(n(1)),a=n(2),u=(o=a)&&o.__esModule?o:{default:o};function f(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function c(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function l(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):function(t,e){for(var n=Object.getOwnPropertyNames(e),o=0;o<n.length;o++){var r=n[o],i=Object.getOwnPropertyDescriptor(e,r);i&&i.configurable&&void 0===t[r]&&Object.defineProperty(t,r,i)}}(t,e))}n(3);var s=i.PDFViewCtrl.Consts.PDFDocPermission,p=i.PDFViewCtrl.Events,d=function(t){function e(){return f(this,e),c(this,t.apply(this,arguments))}return l(e,t),e.getName=function(){return"xfaForm"},e.getLoader=function(){return u.default},e.initOnLoad=function(){var t=i.modular.module("xfa-form-module",[]),e=this,n="";t.registerPreConfiguredComponent("xfa-form-button",{template:'<xbutton @tooltip name="xfa-form-button" icon-class="fv__icon-toolbar-xfa-form"></xbutton>',config:{target:"xfa-form-button",tooltip:{title:"xfa:tips.xfa"},callback:function(t){function o(){return f(this,o),c(this,t.apply(this,arguments))}return l(o,t),o.prototype.mounted=function(){var e=this;t.prototype.mounted.call(this),n=this.component,this.addDestroyHook(this.pdfUI.addViewerEventListener(p.openFileSuccess,(function(t){e.checkPermission(t)})),this.pdfUI.addViewerEventListener(p.permissionChanged,(function(t){e.checkPermission(t)})),(function(){n=void 0}))},o.prototype.handle=function(t){this.getComponentByName("xfa-dialog").show()},o.prototype.checkPermission=function(t){var n=this;this.pdfUI.getPDFDocRender().then((function(t){return t.getUserPermission().getValue()})).then((function(e){return t.isStaticXFA().then((function(t){return[t,e]}))})).then((function(t){var o=r(t,2),i=o[0],a=o[1];i&&s.ModifyDocument&a?(n.component.unlock(),e.setFormButtonPermission(n.pdfUI,!0)):n.component.lock()}))},o}(i.Controller)}}),t.controller("Confirm",{handle:function(){var t=this,o=this.getComponentByName("xfa-dialog");o&&o.hide(),this.pdfUI.getCurrentPDFDoc().then((function(o){o.removeXFA().then((function(o){o&&(n&&n.lock(),e.setFormButtonPermission(t.pdfUI,!1))}))}))}}),t.controller("Cancel",{handle:function(){var t=this.getComponentByName("xfa-dialog");t&&t.hide()}})},e.setFormButtonPermission=function(t,e){var n=[];["create-push-button","create-check-box","create-radio-button","create-combo-box","create-list-box","create-text","create-sign","create-date","create-image"].forEach((function(e){n.push(t.getComponentByName("fv--form-designer-"+e+"-btn"))})),Promise.all(n).then((function(t){t.forEach((function(t){e?t.lock():t.unlock()}))}))},e.prototype.init=function(t){this.pdfUI=t,t.getRootComponent().then((function(t){t.append('\n                <layer name="xfa-dialog" class="fv__popup-dialog center fv__ui-xfa-dialog" @resizable backdrop style="max-height: calc(100vh - 40px); overflow: auto;">\n                    <layer-header title="xfa:confirm.title"></layer-header>\n                    <div class="fv__popup-xfa-body">xfa:confirm.content</div>\n                    <layer-toolbar class="fv__ui-xfa-bottom-bar">\n                        <xbutton data-action="OK" class="fv__ui-dialog-ok-button" @controller="xfa-form-module:Confirm">xfa:confirm.confirmButton</xbutton>\n                        <xbutton data-action="NO" class="fv__ui-dialog-button fv__ui-dialog-cancel-button" @controller="xfa-form-module:Cancel">xfa:confirm.cancelButton</xbutton>\n                    </layer-toolbar>\n                </layer>\n            ')}))},e.prototype.destroy=function(){},e}(i.UIXAddon);e.default=d},function(e,n){e.exports=t},function(t,e){t.exports=null},function(t,e,n){}]).default}));