!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("PDFViewCtrl")):"function"==typeof define&&define.amd?define(["PDFViewCtrl"],t):"object"==typeof exports?exports.HContinuousViewMode=t(require("PDFViewCtrl")):e.HContinuousViewMode=t(e.PDFViewCtrl)}(self,(function(e){return function(e){var t={};function o(r){if(t[r])return t[r].exports;var n=t[r]={i:r,l:!1,exports:{}};return e[r].call(n.exports,n,n.exports,o),n.l=!0,n.exports}return o.m=e,o.c=t,o.d=function(e,t,r){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(o.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)o.d(r,n,function(t){return e[t]}.bind(null,n));return r},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="",o(o.s=0)}([function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t.default=e,t}(o(1));function n(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):function(e,t){for(var o=Object.getOwnPropertyNames(t),r=0;r<o.length;r++){var n=o[r],i=Object.getOwnPropertyDescriptor(t,n);i&&i.configurable&&void 0===e[n]&&Object.defineProperty(e,n,i)}}(e,t))}var i=r.ViewerEvents,a=r.vendors.jQuery,d=function(e){function t(o){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var r=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,e.call(this,o));return r.diffHCache=null,r.pdfViewer=o.pdfViewer,r._rotateCallback=r._rotateCallback.bind(r),r.keydown=r.keydown.bind(r),r.keyup=r.keyup.bind(r),r}return n(t,e),t.getName=function(){return"h-continuous-view-mode"},t.prototype.getItems=function(){return a(e.prototype.getItems.call(this))},t.prototype.into=function(t,o){var r=this;e.prototype.into.call(this,t,o);var n=this.constructor.getName(),d=["<style>",".fv__pdf-viewer,.fv__pdf-viewer-layout,.fv__pdf-viewer-container,.fv__pdf-doc-layout{","height:100%;","}","."+n+"{","white-space:nowrap;","height:100%;","}","."+n+":before{",'content:"";',"display:inline-block;","height:100%;","vertical-align: middle;","}","."+n+" .fv__pdf-view-mode-item{","margin-right:10px;","display:inline-block;","vertical-align: middle;","}","."+n+" .fv__pdf-page-layout.fv__rendering{","min-width:128px;","}","."+n+" .fv__pdf-view-mode-item:first-child{","margin-left:10px;","}","</style>"].join("");this.$style=a(d),this.docRender.$container.after(this.$style),this.docRender.$container.addClass(this.constructor.getName()),this.docRender.$ui.parents(".fv__ui-pdfviewer").css({"overflow-y":"unset","overflow-x":"scroll"}),a(window).on("keydown",this.keydown),a(window).on("keyup",this.keyup),this.pdfViewer.eventEmitter.on(i.pageRotationChange,this.rotateCallback=function(e,t,o){var n=r.pdfViewer.getPDFPageRender(e.getIndex());r._rotateCallback(n,t)}),this.pdfViewer.eventEmitter.on(i.pagesRotated,this.rotatePagesCallback=function(e,t,o){e.forEach((function(e,t){r.rotateCallback(e,newRotation,oldRotations[t])}))});var c=this.docRender.viewerRender.scrollWrap;this._unwatchScrollEvent=c.addScrollEventListener((function(){clearTimeout(r.scrollEventTimer),r.scrollEventTimer=setTimeout((function(){var e=r.docRender.pagesRender;e&&e.renderVisiblePages().then((function(){r.docRender.setCurrentPageIndex(r.getCurrentPageIndex())}),(function(){}))}),30)}))},t.prototype.renderViewMode=function(e,t,o,r,n){},t.prototype.keydown=function(e){var t=e.keyCode;if(35===t||36===t||34===t||33===t)return!1},t.prototype.keyup=function(e){var t=e.keyCode;if(e.preventDefault(),e.stopPropagation(),33===t){var o=this.getPrevPageIndex();this.docRender.goToPage(o,{x:0,y:0})}if(34===t){var r=this.getNextPageIndex();this.docRender.goToPage(r,{x:0,y:0})}if(35===t){var n=this.docRender.doc.getPageCount();this.docRender.goToPage(n-1,{x:0,y:0})}36===t&&this.docRender.goToPage(0,{x:0,y:0})},t.prototype.jumpToPage=function(e,t){var o=t.x,r=void 0===o?0:o,n=t.y,i=void 0===n?0:n,a=this.getItems();e>=a.length?e=a.length-1:e<0&&(e=0);var d=a[e],c=d.offsetLeft+r,f=d.offsetTop+i;this.docRender.viewerRender.scrollWrap.scrollTo(c,f)},t.prototype._rotateCallback=function(e,t){var o=e.getShowWidth(),r=e.getShowHeight();this.getItems().eq(e.index);if(t%2!=0){var n=o;o=r,r=n}this.docRender.pagesRender.$ui.height()},t.prototype.getCurrentPageIndex=function(){var e=this.getItems(),t=this.docRender.viewerRender.scrollWrap.getScrollHost(),o=void 0;o=t===window?{x:0,y:0,right:window.innerWidth,height:window.innerHeight}:t.getBoundingClientRect();for(var r=0,n=0,i=0,a=0;a<e.length;a++){var d=e[a].firstElementChild.getBoundingClientRect(),f=c(o,d);if(f&&0==i&&(i=1),f>r&&(r=f,n=a),!f&&1==i){i=2;break}}return n},t.prototype.getFitHeight=function(e){var t=this.docRender.viewerRender.scrollWrap;return t.getHeight()-t.getScrollOffsetTop()},t.prototype.getFitWidth=function(e){return this.docRender.viewerRender.scrollWrap.getScrollHost().clientWidth},t.prototype.getVisibleIndexes=function(){var e=this.docRender.viewerRender.scrollWrap,t=e.getScrollLeft()-e.getScrollOffsetLeft(),o=this.docRender.$ui.width(),r=t+o,n=[];return this.getItems().each((function(e,o){var i=o.offsetLeft,a=o.offsetWidth+i;t<a&&r>i&&n.push(e)})),n},t.prototype.getNextPageIndex=function(){var e=this.docRender.doc.getPageCount(),t=this.getCurrentPageIndex();return t<e-1&&t++,t},t.prototype.getPrevPageIndex=function(){var e=this.getCurrentPageIndex();return e>0&&e--,e},t.prototype.out=function(){a(window).off("keydown",this.keydown),a(window).off("keyup",this.keyup),this._unwatchScrollEvent&&this._unwatchScrollEvent(),this.docRender.$container.removeClass(this.constructor.getName()),this.docRender.$ui.parents(".fv__ui-pdfviewer").css({"overflow-x":"","overflow-y":""}),this.pdfViewer.eventEmitter.off(i.pageRotationChange,this.rotateCallback),this.pdfViewer.eventEmitter.off(i.pagesRotated,this.rotatePagesCallback),this.docRender.pagesRender.$ui.css({paddingTop:"",paddingBottom:""}),this.$style&&this.$style.remove();for(var e=this.getItems(),t=0;t<e.length;t++)e.eq(t).css({paddingTop:"",paddingBottom:"",marginTop:"",marginBottom:"",paddingLeft:"",paddingRight:"",marginLeft:"",marginRight:""})},t}(r.IViewMode);t.default=d;var c=function(e,t){var o=arguments.length>2&&void 0!==arguments[2]&&arguments[2],r=Math.max(e.left,t.left),n=Math[o?"min":"max"](e.top,t.top),i=Math[o?"max":"min"](e.bottom,t.bottom),a=Math.min(e.right,t.right);if(r<=a)if(o){if(n>=i)return(a-r)*(n-i)}else if(n<=i)return(a-r)*(i-n);return 0}},function(t,o){t.exports=e}]).default}));