(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{528:function(t,s,e){"use strict";e.r(s);var a=e(55),r=Object(a.a)({},(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"quickly-run-examples"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#quickly-run-examples"}},[t._v("#")]),t._v(" Quickly Run Examples")]),t._v(" "),e("p",[t._v("Foxit PDF SDK for Web comes with a lot of example projects and files for building the viewer and/or implementing additional functionality. These examples are provided in the "),e("code",[t._v("./examples")]),t._v(" folder of Foxit PDF SDK for Web. To run them, initialize your (local) web server, open your browser and add the localhost (http://localhost:port) or corresponding IP number URL. The directory list of files will be displayed and you can choose which sample to use.")]),t._v(" "),e("p",[t._v("To quickly get a web server running on your local system, you can use node.js "),e("a",{attrs:{href:"https://www.npmjs.com/package/http-server",target:"_blank",rel:"noopener noreferrer"}},[t._v("http-server"),e("OutboundLink")],1),t._v(":")]),t._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[t._v("http-server\n")])])]),e("p",[t._v("Additionally, you can append the '-o' command to open directly in your browser window")]),t._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[t._v("http-server -o\n")])])]),e("p",[t._v("You can also use Python's "),e("a",{attrs:{href:"https://docs.python.org/3/library/http.server.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("SimpleHTTPServe"),e("OutboundLink")],1),t._v(" module:")]),t._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[t._v("python -m http.server "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("8000")]),t._v("\n")])])]),e("p",[t._v("You may want to refer to "),e("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Learn/Common_questions/set_up_a_local_testing_server",target:"_blank",rel:"noopener noreferrer"}},[t._v("Set up local server"),e("OutboundLink")],1),t._v(" for more information.")]),t._v(" "),e("h2",{attrs:{id:"quickly-run-samples-with-snapshot-feature"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#quickly-run-samples-with-snapshot-feature"}},[t._v("#")]),t._v(" Quickly run samples with Snapshot feature")]),t._v(" "),e("p",[t._v("To use some features that required a backend such as Snapshot and collaboration, your should run "),e("code",[t._v("npm install")]),t._v(" and "),e("code",[t._v("npm start")]),t._v(" to quicly start the http server and corresponding backend server at the same time. Below are steps in details.")]),t._v(" "),e("p",[t._v("Before running a sample, you may refer to the "),e("code",[t._v("package.json")]),t._v(" file inside the SDK package, which looks a below:")]),t._v(" "),e("div",{staticClass:"language-json extra-class"},[e("pre",{pre:!0,attrs:{class:"language-json"}},[e("code",[e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"scripts"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"start"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"concurrently --kill-others \\"npm run start-http-server\\" \\"npm run start-snapshot-server\\" \\"npm run start-collaboration-server\\""')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"start-snapshot-server"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"node ./server/snapshot/src/index -p 3002"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"start-http-server"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"node ./server/index"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"start-collaboration-websocket-server"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"node ./server/collaboration-websocket-server/src/index.js -p 9111"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"start-collaboration-server"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"node ./server/collaboration-sockjs-server/src/index.js -p 9112"')]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"serve"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"port"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("8080")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"public"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"proxy"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"target"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"http://127.0.0.1:3002"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"changeOrigin"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"collaboration-websocket"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"target"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"http://127.0.0.1:9111"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"changeOrigin"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"ws"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"collaboration-sockjs"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"target"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"http://127.0.0.1:9112"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"changeOrigin"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"ws"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("p",[t._v("Next check if and which version of the nodejs and npm are installed on in your computer:")]),t._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[t._v("node -v\nv10.16.0\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" -v\n"),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("6.14")]),t._v(".1\n")])])]),e("p",[t._v("Then install the dependencies declared in "),e("code",[t._v("package.json")]),t._v(":")]),t._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v("\n")])])]),e("p",[t._v("Finally, run "),e("code",[t._v("npm start")]),t._v(" command to start servive.")]),t._v(" "),e("p",[t._v("And visit "),e("a",{attrs:{href:"http://127.0.0.1:8080",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://127.0.0.1:8080"),e("OutboundLink")],1),t._v(" in browser, you can see all files and examples.")]),t._v(" "),e("p",[e("strong",[e("em",[t._v("See also")])])]),t._v(" "),e("ul",[e("li",[e("RouterLink",{attrs:{to:"/main/examples/example-projects.html#start-http-server-using-nginx"}},[t._v("Start Http Server using Nginx")])],1),t._v(" "),e("li",[e("RouterLink",{attrs:{to:"/main/examples/example-projects.html#start-http-server-using-nodejs"}},[t._v("Start Http Server using Nodejs")])],1)])])}),[],!1,null,null,null);s.default=r.exports}}]);