!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("UIExtension")):"function"==typeof define&&define.amd?define(["UIExtension"],t):"object"==typeof exports?exports.ImportFormUIXAddon=t(require("UIExtension")):e.ImportFormUIXAddon=t(e.UIExtension)}(self,(function(e){return function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o,r=function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var n=[],o=!0,r=!1,i=void 0;try{for(var u,c=e[Symbol.iterator]();!(o=(u=c.next()).done)&&(n.push(u.value),!t||n.length!==t);o=!0);}catch(e){r=!0,i=e}finally{try{!o&&c.return&&c.return()}finally{if(r)throw i}}return n}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")},i=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),u=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(n(1)),c=n(2),f=(o=c)&&o.__esModule?o:{default:o};function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):function(e,t){for(var n=Object.getOwnPropertyNames(t),o=0;o<n.length;o++){var r=n[o],i=Object.getOwnPropertyDescriptor(t,r);i&&i.configurable&&void 0===e[r]&&Object.defineProperty(e,r,i)}}(e,t))}n(3);var p=u.PDFViewCtrl.Events,d=function(e){function t(){return a(this,t),l(this,e.apply(this,arguments))}return s(t,e),t.getName=function(){return"importForm"},t.getLoader=function(){return f.default},t.initOnLoad=function(){u.modular.module("import-form-module",[]).registerPreConfiguredComponent("import-form-button",{template:'<file-selector @tooltip name="import-form-tool" accept=".xml,.fdf,.xfdf,.csv,.txt" icon-class="fv__icon-toolbar-import-form" ></file-selector>',config:{target:"import-form-tool",tooltip:{title:"import:button-tooltip.title"},callback:function(e){function t(){return a(this,t),l(this,e.apply(this,arguments))}return s(t,e),t.prototype.changePeimission=function(e){var t=this,n=this.getPDFUI().getPDFDocRender().then((function(e){return e.getUserPermission().getValue()}));Promise.all([e.hasForm(),n]).then((function(e){var n=r(e,2),o=n[0];n[1]&t.constructor.permission&&o?t.component.lock&&t.component.unlock():t.component.lock&&t.component.lock()}))},t.prototype.mounted=function(){var t=this;e.prototype.mounted.call(this),this.addDestroyHook(this.getPDFUI().addViewerEventListener(p.annotationAdd,(function(e){t.getPDFUI().getPDFDocRender().then((function(e){t.changePeimission(e.getPDFDoc())}))}))),this.addDestroyHook(this.getPDFUI().addViewerEventListener(p.annotationRemoved,(function(e){t.getPDFUI().getPDFDocRender().then((function(e){t.changePeimission(e.getPDFDoc())}))})))},t.prototype.handle=function(e){this.getPDFUI().getPDFDocRender().then((function(t){var n=t.getPDFDoc(),o=e.name,r=o.substr(o.length-3),i=0,u=Promise.resolve();switch(r){case"fdf":case"xfdf":break;case"xml":i=2;break;case"csv":i=3,u=m(e);break;case"txt":i=4,u=m(e)}u.then((function(t){t||3!==i||(t="GBK"),n.importFormFromFile(e,i,t)}))}))},i(t,null,[{key:"permission",get:function(){return u.PDFViewCtrl.Consts.PDFDocPermission.AnnotForm+u.PDFViewCtrl.Consts.PDFDocPermission.FillForm}}]),t}(u.Controller)}})},t.prototype.fragments=function(){return[]},t}(u.UIXAddon);t.default=d;var m=function(e){return new Promise((function(t,n){var o=new FileReader;o.onloadend=function(){var e=new Uint8Array(o.result);return 254==e[0]&&255==e[1]||255==e[0]&&254==e[1]?t("UTF-16"):239==e[0]&&187==e[1]&&191==e[2]?t("UTF-8"):0==e[0]&&0==e[1]&&254==e[2]&&255==e[3]?t("UTF-32"):void t()},o.readAsArrayBuffer(e)}))}},function(t,n){t.exports=e},function(e,t){e.exports=null},function(e,t,n){}]).default}));