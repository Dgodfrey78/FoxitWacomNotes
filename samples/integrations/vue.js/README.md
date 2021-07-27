# FoxitPDFSDK for Web Example - Vue.js

This guide shows two examples. One introduces how to quickly run the out-of-the-box sample for Vue.js in FoxitPDFSDK for Web package, and the other presents a way to integrate FoxitPDFSDK for Web into an exiting Vue app.

## Quickly run the out-of-the-box example for Vue.js

FoxitPDFSDK for Web provides a boilerplate project for [@vue/cli](https://cli.vuejs.org/guide/) app. This example can be found at `../integrations/` inside FoxitPDFSDK for Web package.

### Prerequisites

- [Nodejs](https://nodejs.org/en/) and [npm](https://www.npmjs.com)
- [FoxitPDFSDK for Web](https://developers.foxitsoftware.com/pdf-sdk/Web)

### Getting started

Enter `../integratons/vue.js/` inside FoxitPDFSDK for Web, and run:

```sh
npm run setup
```

This setup will implement the followings:

- `npm install` - install dependencies.
- `npm run update-sdk`
  - Copy `lib` folder from the root folder to the `../integratons/vue.js/src/`, and auto rename it to `foxit-lib`.
  - Copy `..examples/license-key.js`to the `../integratons/react.js/src/`.

### Runnning the example

```sh
npm run serve
```

Now you are ready to launch the app. Open your browser, navigate to `<http://127.0.0.1:9103/>` to load your example.

## Integrate FoxitPDFSDK for Web into existing Vue.js project

This integration assumes you have [@vue/cli](https://cli.vuejs.org/guide/) app installed with _all default settings_.

### Prerequisites

- [Nodejs](https://nodejs.org/en/) and [npm](https://www.npmjs.com)
- [@vue/cli](https://cli.vuejs.org/guide/)
- [FoxitPDFSDK for Web](https://developers.foxitsoftware.com/pdf-sdk/Web)

### Setup

Let's call the root folder of your exiting project as VueJS and FoxitPDFSDK for Web as SDK.

1. In SDK, duplicate the following folder and files to `VueJS/src`, and change the `lib` name to `foxit-lib`.

   - The `lib`folder. 
   - The `../examples/license-key.js` file.
   - The `../integrations/vue.js/src/preload.js` file

   Besides, to correctly referene your fonts lib, you also need to duplicate the `external` folder inside SDK to `VueJS/src/foxit-lib/assets`. 

2. Run `npm i -D cross-env` to install `cross-env`, and add the following segments to `serve` and `build` in `VueJS/package.json`.

   ```sh
   cross-env NODE_OPTIONS=--max_old_space_size=8192 NODE_ENV=development vue-cli-service serve
   cross-env NODE_OPTIONS=--max_old_space_size=8192 NODE_ENV=production vue-cli-service build
   ```

   _The purpose of this step is to void memory leak error._

<!-- 3. 安装 Addon 合并工具

    ```sh
    npm i -D @foxitsoftware/addon-loader
    ``` -->

### Configuration

Add configurations onto the following files in your VueJS:

- `vue.config.js`
- `.eslintignore`

For the configuration details, refer to the counterpart files in SDK.

### Component

- Create `src/components/PDFViewer.vue` in your VueJS，and reference it in `src/App.vue`.

For the configuration details, refer to the counterpart files in SDK.

### Referene Addons
If you are integrating FoxitPDFSDK for Web into your existing Vue project, you should read this section before continue. You may want to check out [Addons](../addons/introduction.md) for detailed introductions. 

Here we introduce three ways to reference SDK addons for Anguar project, you may choose one of them based on your needs. This [Comparison](#Addons reference methods comparison) will help you to better understand the difference of the three ways and make a choice. 

#### 1. Reference fragmented addons

This method was used by default in past versions before version 7.2. You should open `PDFViewer.vue `, and referece addons as shown below:

```js
this.pdfui = new UIExtension.PDFUI({
    addons: [
        the_path_to_foxit_lib + '/uix-addons/file-property/addon.info.json',
        the_path_to_foxit_lib + '/uix-addons/full-screen/addon.info.json',
        // .etc
    ],
    // other options
});
```

Where `the_path_to_foxit_lib` is the SDK lib folder， 

#### 2. Import modular addons

1. Install

   ```sh
   npm i -D @foxitsoftware/addon-loader
   ```

2. Update `vue.config.js`，you may refer to `/integrations/vue.js/vue.config.js`

3. In`PDFViewer.vue`, import `addon.info.json` for each addon:

    ```js
        import * as UIExtension from '../foxit-lib/UIExtension.full.js'
        import filePropertyAddon from '../foxit-lib/uix-addons/file-property/addon.info.json';
        import multiMediaAddon from '../foxit-lib/uix-addons/multi-media/addon.info.json';
        import passwordProtectAddon from '../foxit-lib/uix-addons/password-protect/addon.info.json';
        import redactionAddon from '../foxit-lib/uix-addons/redaction/addon.info.json';
        import pathObjectsAddon from '../foxit-lib/uix-addons/path-objects/addon.info.json';
        import printAddon from '../foxit-lib/uix-addons/print/addon.info.json';
        import fullScreenAddon from '../foxit-lib/uix-addons/full-screen/addon.info.json';
        import importFormAddon from '../foxit-lib/uix-addons/import-form/addon.info.json';
        import exportFormAddon from '../foxit-lib/uix-addons/export-form/addon.info.json';
        import undoRedoAddon from '../foxit-lib/uix-addons/undo-redo/addon.info.json';
        import textObjectAddon from '../foxit-lib/uix-addons/text-object/addon.info.json';
    ```

    And pass addons to the PDFUI constructor:

    ```js
    const libPath = '/foxit-lib/';
        this.pdfui = new UIExtension.PDFUI({
            addons: [
                filePropertyAddon,
                multiMediaAddon,
                passwordProtectAddon,
                redactionAddon,
                pathObjectsAddon,
                printAddon,
                fullScreenAddon,
                importFormAddon,
                exportFormAddon,
                undoRedoAddon
            ].concat(
                // text-object addon is disabled on mobile platform
                UIExtension.PDFViewCtrl.DeviceInfo.isMobile
                    ? []
                    : textObjectAddon
            ),
            // other options
        });
    ```

#### 3. Reference allInOne.js

The allInOne.js already combines all addons, which locates in `foxit-lib/uix-addons/`. To refenece this file, open `PDFViewer.vue`, and update the code as follows:

```js
// ...
import * as UIExtension from '../foxit-lib/UIExtension.full.js';
import * as Addons from '../foxit-lib/uix-addons/allInOne.js';
// ...
```

And pass parameters to the PDFUI constructor:

```js
this.pdfui = new UIExtension.PDFUI({
    addons: UIExtension.PDFViewCtrl.DeviceInfo.isMobile
        ? Addons.filter(it => it.getName() !== 'textEditObject')
        : Addons,
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

### Running your application

```sh
npm run serve
```

Now everything is set up. Open your browser, input the address based on you set up to launch your application.
