'use strict';

const service = require('feathers-mongoose');
const trades = require('./trades-model');
const hooks = require('./hooks');

module.exports = function() {
  const app = this;

  const options = {
    Model: trades,
    paginate: {
      default: 5,
      max: 25
    }
  };

  // Initialize our service with any options it requires
  app.use('/trades', service(options));

  // Get our initialize service to that we can bind hooks
  const tradesService = app.service('/trades');

  // Set up our before hooks
  tradesService.before(hooks.before);

  // Set up our after hooks
  tradesService.after(hooks.after);
};
