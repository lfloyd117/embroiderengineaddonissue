'use strict';

// eslint-disable-next-line n/no-unpublished-require, n/no-unpublished-require
const EngineAddon = require('ember-engines/lib/engine-addon');

module.exports = EngineAddon.extend({
    name: require('./package').name,

    lazyLoading: true,

    // Allows you to symlink the addon
    isDevelopingAddon: () => false,

    // Ensure SASS compilation.
    included: function (app) {
        this._super.included.apply(this, arguments);

        // Allows the app babel config to overwrite properties of this addon babel config.
        this.options.babel = Object.assign({}, this.options.babel, app.options.babel);
        // Enable TS transpilation via Babel
        this.options['ember-cli-babel'] = {
            enableTypeScriptTransform: true
        };
    }
});
