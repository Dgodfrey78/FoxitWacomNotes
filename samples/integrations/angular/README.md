# FoxitPDFSDK for Web Example - Angular.js

This guide shows two examples for angular. One introduces how to quickly run the out-of-the-box sample in FoxitPDFSDK for Web package, and the other presents a way to integrate FoxitPDFSDK for Web into an exiting Angular/cli app.

## Quickly run the out-of-the-box example for Angular  

This example is built for [@angular/cli](https://www.npmjs.com/package/@angular/cli) app. It can be accessed at `../integrations/` inside FoxitPDFSDK for Web package.

### Prerequisites

- [Nodejs](https://nodejs.org/en/) and [npm](https://www.npmjs.com)
- [FoxitPDFSDK for Web](https://developers.foxitsoftware.com/pdf-sdk/Web)

### Getting started

Enter `../integratons/angular.js/` inside FoxitPDFSDK for Web, and execute:

```sh
npm i
```

This step will create a `node_modules` folder and download all dependencies, copy the `lib` folder from the root folder to `../integrations/angular/src*, and auto rename it as foxit-lib`.

### Runnning the example

On the shell, execute the following command to start your application:

```sh
npm start
```

Now you are ready to launch the app. Open your browser, navigate to `<http://localhost:4200>` to load your example.

## Integrate FoxitPDFSDK for Web into existing Angular project

This integration assumes you have `@Angular/cli` app installed.

### Prerequisites

- [Nodejs](https://nodejs.org/en/) and [npm](https://www.npmjs.com)
- [@angular/cli](https://www.npmjs.com/package/@angular/cli)
- [FoxitPDFSDKforWeb](https://developers.foxitsoftware.com/pdf-sdk/Web)

### Basic setup

Let's call the root folder of your exiting project as AngularJS and FoxitPDFSDK for Web as SDK.

1. Find the `lib` folder inside SDK, duplicate it to `AngularJS/src/` and rename it as `foxit-lib`. Besides， to correctly referene your fonts lib, you also need to duplicate the `external` folder inside SDK to `AngularJS/src/foxit-lib/assets`.

_Inside AngularJS, implement the following:_

1. In the `angular.json`, update `architect/build` options of `assets`,`styles` and `extractCss`, and `architect/lint` section.

   ```json
   {
     ...
     "build": {
       "assets": [
         ...,
         {
           "glob": "**/*",
           "input": "src/foxit-lib",
           "output": "/foxit-lib",
           "ignore": ["PDFViewCtrl.*", "UIExtension.*"]
         }
       ],
      "styles": [
          "src/foxit-lib/UIExtension.css",
          "src/styles.css"
        ],
        "extractCss": true,
        ...
     }
   }
   "lint": {
         "builder":...,
         "options": {
           "tsConfig": [
             //existing configuration can remain as they are
           ],
           "exclude": [
             // other dependencies you may have
             "src/foxit-lib/**/*.*"
           ]
         }
       },
   ```

1. Update `tsconfig.app.json` to exclude the `"src/foxit-lib/**/*.*"`.

   ```json
   {
     ...,
     "exclude": [
       ...
       ...,
       ...,
       "src/foxit-lib/**/*.*"
     ]
   }

   ```

### Creating components

1. In AngularJS, run

   ```sh
   ng generate component PDFViewer
   ```

   This step will create `pdfviewer`folder and related component files under `AngularJS/src/app`. Now, you need to implement the followings in `AngularJS/src/app/`.

1. Place the `license-key.js` into `../pdfviewer/`. You can find the license information at `SDK/examples/`.
1. Update `../pdfviewer/component.ts`. For configuration details, refer to the counterpart file inside SDK.
1. Update `../component.html` to pass a DOM element for placing web viewer.

   ```html
   <div>
     <app-foxitpdfviewer
       #pdfviewer
       class="foxit-pdf-viewer-container"
     ></app-foxitpdfviewer>
   </div>
   ```

1. Update `component.css` to make it look as what you preferred.

   ```css
   .foxit-pdf-viewer-container {
     display: block;
     margin: 0 auto;
     width: 1280px;
     height: 1024px;
   }
   ```

### Referencing Addons 

If you are integrating FoxitPDFSDK for Web into your existing Angular project, you should read this section before continue. You may want to check out [Addons](../addons/introduction.md) for detailed introductions. 

Here we introduce three ways to reference SDK addons for Anguar project, you may choose one of them based on your needs. This [Comparison](#Addons reference methods comparison) will help you to better understand the difference of the three ways and make a choice. 

#### 1. Reference fragmented addons

This method was used by default in past versions before version 7.2. You should open `pdfviewer.component.ts`, write the addons under ngOnInit() as shown below:

```js
ngOnInit(){
this.pdfui = new UIExtension.PDFUI({
    addons: [
        the_path_to_foxit_lib + '/uix-addons/file-property/addon.info.json',
        the_path_to_foxit_lib + '/uix-addons/full-screen/addon.info.json',
        // .etc
    ],
    // other options
});
}
```
Where `the_path_to_foxit_lib` is the SDK lib folder，the path depends on the assets configuration of angular.json. For details, check out [Basic Setup](#basic-setup).

#### 2. Import modular addons

This method was used by default in the out-of-the-box example for Anguar. 

1. Install

   ```sh
   npm install -D gulp @foxitsoftware/gulp-merge-addon
   ```
2. Refer to `/integrations/angular/gulpfile.js` for merging addons with gulp.task.

3. Update the scripts section in package.json:

   ```json
   "scripts": {
       "postinstall": "npm run update-sdk",
       "update-sdk": "node bin/setup.js",
       "merge-addons": "gulp merge-addons",
       "start": "npm run merge-addons && ng serve",
       "build": "npm run merge-addons && ng build",
       "test": "npm run merge-addons && ng test",
       "lint": "set NODE_OPTIONS=--max-old-space-size=8192 && ng lint",
       "e2e": "ng e2e"
   },
   ```
   This way will automatically merge addons once `npm start` is successfully executed. 

4. The import method can be seen at `/integrations/angular/src/app/pdfviewer/pdfviewer.component.ts`.

#### 3. Reference allInOne.js

The allInOne.js already combines all addons, that locates in `foxit-lib/uix-addons/`. To refenece this file, open `pdfviewer.component.ts`, and update the code as follows:

```js
// ...
import * as UIExtension from 'path/to/foxit-lib/UIExtension.full.js';
import * as Addons from 'path/to/foxit-lib/uix-addons/allInOne.js';
// ...
```
Under the ngOnInit(), pass Addons to PDFUI:

```js
this.pdfui = new UIExtension.PDFUI({
    addons: Addons,
    // other options
});
```

#### Comparions of addons reference methods 

|Referene method|Configuration|HTTP Requests|Modifiable (e.g Localization resoures, and addon.info.json)|
|--|--|--|--|
|Fragmentized|No|n+|Yes|
|Modularized|Configure gulp|0|Yes,but should re-merge the addons after modification |
|allInOne.js|No|1|No|

Note: You can rebuild allInOne.js by using our [Addons merge tools](../addons/introduction.html#how-to-merge-addons)

### Running your Application

On the Shell, run

```sh
npm start
```

Awsome, all are made ready. In your browser, go to <http://localhost:4200> to load your application.
