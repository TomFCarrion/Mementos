var yo = require('yo-yo');
var layout = require('../layout');

var template = yo`<p>content</p>`;

module.exports = layout(template);
