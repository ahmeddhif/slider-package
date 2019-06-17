var plugin = require('./index');
var base = require('@jupyter-widgets/base');

module.exports = {
  id: 'slider-package',
  requires: [base.IJupyterWidgetRegistry],
  activate: function(app, widgets) {
      widgets.registerWidget({
          name: 'slider-package',
          version: plugin.version,
          exports: plugin
      });
  },
  autoStart: true
};

