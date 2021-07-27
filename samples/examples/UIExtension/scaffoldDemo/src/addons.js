/**
 * We offer a loader("@foxitsoftware/addon-loader") to load foxit addons.
 * In this demo's package.json, pageckage 'UIExtension' is refer to 'FoxitPDFSDKForWeb/lib' path.
 */
import EditAddon from 'UIExtension/uix-addons/edit-graphics/addon.info.json';
import PathAddon from 'UIExtension/uix-addons/path-objects/addon.info.json';
export default [EditAddon,PathAddon];