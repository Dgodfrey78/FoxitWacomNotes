### **Overview**
* * *

Bundeling with webpack requires some additional configuration for proper bundeling integration of digital-ink dependency with third party technologies.
**analyze** script tag provides analyses about bundle structure. Properly integrated **digital-ink** package should not contains any of externals as a part from bundeling structure.

### **With React**
* * *

This configuration targets **create-react-app** and **react-scripts**. Requires **react-app-rewired** plugin.

```
/* config-overrides.js */
const rewireProvidePlugin = require('react-app-rewire-provide-plugin');
const rewireDefinePlugin = require('@yeutech-lab/react-app-rewire-define-plugin');

module.exports = function override(config, env) {​​​​​​​​
	if (!config.eternals) {​​​​​​
		config.externals = [];
	}​​

	if (!config.plugins) {​​​​​​​​
		config.plugins = [];
	}​​​​​​​

	config.externals = [...config.externals, 'bindings', 'canvas', 'gl', 'systeminformation'];

	config = rewireProvidePlugin(config, env, {​​​​​​​​
		// expose some of public dependencies - these ones which do not provides ECMA 6 exports
		ClipperLib: 'clipper-lib',
		poly2tri: 'poly2tri',
		protobuf: 'protobufjs',
		Long: 'long',
		md5: 'js-md5'
	}​​​​​​​​);

	config = rewireDefinePlugin(config, env, {​​​​​​​​
		DIGITAL_INK_ENV:'"BROWSER"'
	}​​​​​​​​);

	return config;
}​​​​​​​​
```

**react-app-rewired** plugin requires some changes in **package.json** scripts section:

```
"scripts": {​​​​​​​​
	"analyze": "source-map-explorer 'build/static/js/*.js'",
	"start": "react-app-rewired start -host 0.0.0.0",
	"build": "react-app-rewired build",
	"test": "react-scripts test",
	"eject": "react-scripts eject"
}​​​​​​​​
```

### **With Nuxt**
* * *

```
/* nuxt.config.js */
import webpack from 'webpack'

export default {
	...,

	// Build configuration
	build: {
		extend(config, ctx) {
			if (ctx.isDev && ctx.isClient) {
				...

				config.externals = ['bindings', 'canvas', 'gl', 'systeminformation']

				// exclude commonjs dependencies
				config.node = {
					fs: "empty",
					net: "empty",
					child_process: "empty"
				}
			}
		},
		plugins: [
			new webpack.ProvidePlugin({
				...

				// expose some of public dependencies - these ones which do not provides ECMA 6 exports
				ClipperLib: 'clipper-lib',
				poly2tri: 'poly2tri',
				protobuf: 'protobufjs',
				Long: 'long',
				md5: 'js-md5'
			}),

			new webpack.DefinePlugin({
				DIGITAL_INK_ENV: '"BROWSER"'
			})
		]
	}
}
```

**package.json** scripts section:

```
"scripts": {
	"analyze": "nuxt build --analyze",
	"build": "nuxt build",
	"dev": "nuxt --hostname 0.0.0.0",
	"start": "nuxt start --hostname 0.0.0.0",
	"generate": "nuxt generate"
}
```
