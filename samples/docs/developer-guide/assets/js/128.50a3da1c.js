(window.webpackJsonp=window.webpackJsonp||[]).push([[128],{489:function(t,s,a){"use strict";a.r(s);var n=a(55),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"foxit-pdf-sdk-for-web-示例-vue-js"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#foxit-pdf-sdk-for-web-示例-vue-js"}},[t._v("#")]),t._v(" Foxit PDF SDK for Web 示例 - Vue.js")]),t._v(" "),a("p",[t._v("本节介绍Vue.js的两个示例。一个介绍如何快速运行Foxit PDF SDK for Web包中的样板示例，另外一个介绍如何将Foxit PDF SDK for Web集成到现有的Vue应用程序中。")]),t._v(" "),a("h2",{attrs:{id:"快速运行vue-js样板示例"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#快速运行vue-js样板示例"}},[t._v("#")]),t._v(" 快速运行Vue.js样板示例")]),t._v(" "),a("p",[t._v("Foxit PDF SDK for Web为 "),a("a",{attrs:{href:"https://cli.vuejs.org/guide/",target:"_blank",rel:"noopener noreferrer"}},[t._v("@vue/cli"),a("OutboundLink")],1),t._v(" 应用程序提供了一个样板工程。该工程位于Foxit PDF SDK for Web包中的 "),a("code",[t._v("integrations/")]),t._v(" 目录下。")]),t._v(" "),a("h3",{attrs:{id:"先决条件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#先决条件"}},[t._v("#")]),t._v(" 先决条件")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://nodejs.org/en/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Nodejs"),a("OutboundLink")],1),t._v(" 和 "),a("a",{attrs:{href:"https://www.npmjs.com",target:"_blank",rel:"noopener noreferrer"}},[t._v("npm"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://developers.foxitsoftware.com/pdf-sdk/Web",target:"_blank",rel:"noopener noreferrer"}},[t._v("Foxit PDF SDK for Web"),a("OutboundLink")],1)])]),t._v(" "),a("h3",{attrs:{id:"开始"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#开始"}},[t._v("#")]),t._v(" 开始")]),t._v(" "),a("p",[t._v("在命令行中进入Foxit PDF SDK for Web的 "),a("code",[t._v("../integrations/vue.js/")]),t._v(" 目录，执行：")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" run setup\n")])])]),a("p",[t._v("此设置将实现以下操作：")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("npm install")]),t._v(" – 安装依赖项。")]),t._v(" "),a("li",[a("code",[t._v("npm run update-sdk")]),t._v(" "),a("ul",[a("li",[t._v("将Foxit PDF SDK for Web包中的 "),a("code",[t._v("lib")]),t._v(" 文件夹拷贝到 "),a("code",[t._v("../integrations/vue.js/src/")]),t._v("，并且自动重命名为"),a("code",[t._v("foxit-lib")]),t._v("。")]),t._v(" "),a("li",[t._v("将 "),a("code",[t._v("..examples/license-key.js")]),t._v(" 拷贝到 "),a("code",[t._v("../integrations/react.js/src/")]),t._v("。")])])])]),t._v(" "),a("h3",{attrs:{id:"运行示例"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#运行示例"}},[t._v("#")]),t._v(" 运行示例")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" run serve\n")])])]),a("p",[t._v("现在已经准备好启动应用程序了。打开浏览器，导航到 "),a("code",[t._v("<http://127.0.0.1:9103/>")]),t._v(" 加载您的应用程序。")]),t._v(" "),a("h2",{attrs:{id:"集成-foxit-pdf-sdk-for-web到现有的vue-js工程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#集成-foxit-pdf-sdk-for-web到现有的vue-js工程"}},[t._v("#")]),t._v(" 集成 Foxit PDF SDK for Web到现有的Vue.js工程")]),t._v(" "),a("p",[t._v("假设您已经安装了默认设置的 "),a("a",{attrs:{href:"https://cli.vuejs.org/guide/",target:"_blank",rel:"noopener noreferrer"}},[t._v("@vue/cli"),a("OutboundLink")],1),t._v(" 应用程序。")]),t._v(" "),a("h3",{attrs:{id:"先决条件-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#先决条件-2"}},[t._v("#")]),t._v(" 先决条件")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://nodejs.org/en/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Nodejs"),a("OutboundLink")],1),t._v(" 和 "),a("a",{attrs:{href:"https://www.npmjs.com",target:"_blank",rel:"noopener noreferrer"}},[t._v("npm"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://cli.vuejs.org/guide/",target:"_blank",rel:"noopener noreferrer"}},[t._v("@vue/cli"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://developers.foxitsoftware.com/pdf-sdk/Web",target:"_blank",rel:"noopener noreferrer"}},[t._v("Foxit PDF SDK for Web"),a("OutboundLink")],1)])]),t._v(" "),a("h3",{attrs:{id:"设置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#设置"}},[t._v("#")]),t._v(" 设置")]),t._v(" "),a("p",[t._v("为了方便后面介绍，我们将现有工程的根文件夹称为 VueJS，将Foxit PDF SDK for Web根文件夹称为SDK。")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("在SDK文件夹下，将下列文件夹和文件拷贝到 "),a("code",[t._v("VueJS/src")]),t._v(" 目录下，并将 "),a("code",[t._v("lib")]),t._v(" 文件夹重命名为 "),a("code",[t._v("foxit-lib")]),t._v("。")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("lib")]),t._v("文件夹。")]),t._v(" "),a("li",[a("code",[t._v("../examples/license-key.js")]),t._v(" 文件。")]),t._v(" "),a("li",[a("code",[t._v("/integrations/vue.js/src/preload.js")]),t._v(" 文件。")])]),t._v(" "),a("p",[t._v("另外，为了正确引用字体库，您还需要将SDK目录下的 "),a("code",[t._v("external")]),t._v(" 文件夹拷贝到 "),a("code",[t._v("VueJS/src/foxit-lib/assets")]),t._v("。")])]),t._v(" "),a("li",[a("p",[t._v("运行 "),a("code",[t._v("npm i -D cross-env")]),t._v(" 安装 "),a("code",[t._v("cross-env")]),t._v("，然后在 "),a("code",[t._v("VueJS/package.json")]),t._v(" 文件中的 "),a("code",[t._v("serve")]),t._v(" 和 "),a("code",[t._v("build")]),t._v(" 部分添加如下的代码段：")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[t._v("cross-env "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("NODE_OPTIONS")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("--max_old_space_size"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("8192")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("NODE_ENV")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("development vue-cli-service serve\ncross-env "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("NODE_OPTIONS")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("--max_old_space_size"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("8192")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("NODE_ENV")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("production vue-cli-service build\n")])])]),a("p",[a("em",[t._v("此步骤的目的是避免内存泄露的错误。")])])])]),t._v(" "),a("h3",{attrs:{id:"配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#配置"}},[t._v("#")]),t._v(" 配置")]),t._v(" "),a("p",[t._v("在VueJS中添加如下文件的配置：")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("vue.config.js")])]),t._v(" "),a("li",[a("code",[t._v(".eslintignore")])])]),t._v(" "),a("p",[t._v("有关配置的详细信息，请参阅SDK目录下的 "),a("code",[t._v("integrations/vue.js/counterpart")]),t._v(" 文件。")]),t._v(" "),a("h3",{attrs:{id:"组件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#组件"}},[t._v("#")]),t._v(" 组件")]),t._v(" "),a("ul",[a("li",[t._v("在VueJS中创建 "),a("code",[t._v("src/components/PDFViewer.vue")]),t._v("，然后在 "),a("code",[t._v("src/App.vue")]),t._v(" 中引用它。")])]),t._v(" "),a("p",[t._v("有关配置的详细信息，请参阅SDK目录下的 "),a("code",[t._v("integrations/vue.js/counterpart")]),t._v(" 文件。")]),t._v(" "),a("h3",{attrs:{id:"引用-addons"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#引用-addons"}},[t._v("#")]),t._v(" 引用 Addons")]),t._v(" "),a("p",[t._v("如果您正在将Foxit PDF SDK for Web集成到现有的Vue工程中，您需要先阅读本章节内容。有关Addons更详细的介绍，请查阅"),a("RouterLink",{attrs:{to:"/zh/ui-extension/addons/introduction.html"}},[t._v("Addons")]),t._v("。")],1),t._v(" "),a("p",[t._v("在这里，我们介绍三种在Vue工程中引用SDK addons的方法，您可以根据需要选择其中的一种。下面的 "),a("a",{attrs:{href:"#%E5%8A%A0%E8%BD%BD%E6%96%B9%E6%B3%95%E5%AF%B9%E6%AF%94"}},[t._v("对比介绍")]),t._v("将帮忙您更好地了解这三种方法的区别，并做出最佳的选择。")]),t._v(" "),a("h4",{attrs:{id:"_1-引用碎片化的addons"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-引用碎片化的addons"}},[t._v("#")]),t._v(" 1. 引用碎片化的addons")]),t._v(" "),a("p",[t._v("此方法在7.2之前的版本中是默认使用的。您需要打开 "),a("code",[t._v("PDFViewer.vue")]),t._v("，然后引用addons，如下所示：")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("pdfui "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("UIExtension"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("PDFUI")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    addons"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n        the_path_to_foxit_lib "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/uix-addons/file-property/addon.info.json'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        the_path_to_foxit_lib "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/uix-addons/full-screen/addon.info.json'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// .etc")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// other options")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("其中，"),a("code",[t._v("the_path_to_foxit_lib")]),t._v(" 是SDK目录下的lib 文件夹。")]),t._v(" "),a("h4",{attrs:{id:"_2-导入模块化的addons"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-导入模块化的addons"}},[t._v("#")]),t._v(" 2. 导入模块化的addons")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("安装。")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" i -D @foxitsoftware/addon-loader\n")])])])]),t._v(" "),a("li",[a("p",[t._v("更新 "),a("code",[t._v("vue.config.js")]),t._v("，您可以参阅"),a("code",[t._v("/integrations/vue.js/vue.config.js")]),t._v("。")])]),t._v(" "),a("li",[a("p",[t._v("在 "),a("code",[t._v("PDFViewer.vue")]),t._v("，为每个addon导入 "),a("code",[t._v("addon.info.json")]),t._v("：")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("as")]),t._v(" UIExtension "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'../foxit-lib/UIExtension.full.js'")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" filePropertyAddon "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'../foxit-lib/uix-addons/file-property/addon.info.json'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" multiMediaAddon "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'../foxit-lib/uix-addons/multi-media/addon.info.json'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" passwordProtectAddon "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'../foxit-lib/uix-addons/password-protect/addon.info.json'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" redactionAddon "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'../foxit-lib/uix-addons/redaction/addon.info.json'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" pathObjectsAddon "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'../foxit-lib/uix-addons/path-objects/addon.info.json'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" printAddon "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'../foxit-lib/uix-addons/print/addon.info.json'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" fullScreenAddon "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'../foxit-lib/uix-addons/full-screen/addon.info.json'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" importFormAddon "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'../foxit-lib/uix-addons/import-form/addon.info.json'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" exportFormAddon "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'../foxit-lib/uix-addons/export-form/addon.info.json'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" undoRedoAddon "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'../foxit-lib/uix-addons/undo-redo/addon.info.json'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" textObjectAddon "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'../foxit-lib/uix-addons/text-object/addon.info.json'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("并将addons传递给PDFUI构造函数：")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" libPath "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/foxit-lib/'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("pdfui "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("UIExtension"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("PDFUI")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        addons"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n            filePropertyAddon"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            multiMediaAddon"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            passwordProtectAddon"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            redactionAddon"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            pathObjectsAddon"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            printAddon"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            fullScreenAddon"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            importFormAddon"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            exportFormAddon"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            undoRedoAddon\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("concat")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// text-object addon is disabled on mobile platform")]),t._v("\n            UIExtension"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("PDFViewCtrl"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("DeviceInfo"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("isMobile\n                "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" textObjectAddon\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// other options")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])])]),t._v(" "),a("h4",{attrs:{id:"_3-引用-allinone-js"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-引用-allinone-js"}},[t._v("#")]),t._v(" 3. 引用 allInOne.js")]),t._v(" "),a("p",[t._v("allInOne.js是所有addons的合集，位于 "),a("code",[t._v("foxit-lib/uix-addons/")]),t._v(" 目录下。引用该文件，打开 "),a("code",[t._v("PDFViewer.vue")]),t._v("，如下所示更新代码：")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ...")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("as")]),t._v(" UIExtension "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'../foxit-lib/UIExtension.full.js'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("as")]),t._v(" Addons "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'../foxit-lib/uix-addons/allInOne.js'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ...")]),t._v("\n")])])]),a("p",[t._v("然后传递参数给PDFUI构造函数：")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("pdfui "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("UIExtension"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("PDFUI")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    addons"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" UIExtension"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("PDFViewCtrl"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("DeviceInfo"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("isMobile\n        "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),t._v(" Addons"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("filter")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("it")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" it"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getName")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!==")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'textEditObject'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" Addons"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// other options")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("h4",{attrs:{id:"加载方法对比"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#加载方法对比"}},[t._v("#")]),t._v(" 加载方法对比")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("加载方法对比")]),t._v(" "),a("th",[t._v("配置")]),t._v(" "),a("th",[t._v("HTTP 请求")]),t._v(" "),a("th",[t._v("可修改的 (比如，修改本地化资源，和addon.info.json)")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("碎片化")]),t._v(" "),a("td",[t._v("无")]),t._v(" "),a("td",[t._v("n+")]),t._v(" "),a("td",[t._v("支持修改")])]),t._v(" "),a("tr",[a("td",[t._v("模块化")]),t._v(" "),a("td",[t._v("配置 gulp")]),t._v(" "),a("td",[t._v("0")]),t._v(" "),a("td",[t._v("支持修改，但是修改后需要重新合并addons")])]),t._v(" "),a("tr",[a("td",[t._v("allInOne.js")]),t._v(" "),a("td",[t._v("无")]),t._v(" "),a("td",[t._v("1")]),t._v(" "),a("td",[t._v("不支持修改")])])])]),t._v(" "),a("p",[t._v("备注：您可以使用我们的 "),a("RouterLink",{attrs:{to:"/zh/ui-extension/addons/introduction.html#合并-addons"}},[t._v("Addons合并工具")]),t._v("来重新编译allInOne.js。")],1),t._v(" "),a("h3",{attrs:{id:"运行应用程序"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#运行应用程序"}},[t._v("#")]),t._v(" 运行应用程序")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" run serve\n")])])]),a("p",[t._v("现在，一切都已设置完成。打开浏览器，根据您的设置输入地址来启动应用程序。")])])}),[],!1,null,null,null);s.default=e.exports}}]);