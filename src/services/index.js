const hype = require('./hype/hype.service.js');
module.exports = function () {
  const app = this; // eslint-disable-line no-unused-vars
  app.configure(hype);
};
