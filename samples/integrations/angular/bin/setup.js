var fs = require('fs-extra');
var path = require('path');
var libPath = path.resolve(__dirname, '../../../lib');
var externalFontPath = path.resolve(libPath, '../external');
var exampleLicensePath = path.resolve(__dirname, '../../../examples/license-key.js');
var foxitLibPath = path.resolve(__dirname, '../src/foxit-lib');
var destExternalFontPath = path.resolve(foxitLibPath, 'assets/external');
var pdfviewerPath = path.resolve(__dirname, '../src/app/pdfviewer');
var destLicenseFilePath = path.resolve(pdfviewerPath, 'license-key.js');

if(!fs.existsSync(libPath)) {
  console.error('The lib path is not exist: ' + libPath);
  process.exit(-1);
}

if(fs.existsSync(foxitLibPath)) {
  fs.removeSync(foxitLibPath);
}

fs.copySync(libPath, foxitLibPath);

if(!fs.existsSync(externalFontPath)) {
  console.warn('The `external` folder is not found in this SDK package, maybe you should use `FoxitPDFSDKForWeb_{version}_Full.zip`, otherwise this application will not support more fonts provided in `external` folder');
} else {
  fs.copySync(externalFontPath, destExternalFontPath);
}

if(fs.existsSync(destLicenseFilePath)) {
  fs.removeSync(destLicenseFilePath);
}
fs.copySync(exampleLicensePath, destLicenseFilePath);
