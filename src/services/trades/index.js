'use strict';

const Service = require('feathers-mongoose').Service;
const trades = require('./trades-model');
const hooks = require('./hooks');

module.exports = function() {
  const app = this;

  class TradeService extends Service {
    update(id, data, params) {
      console.log('implement', data)

      return super.update(id, data, params)
    }
  }

  const options = {
    Model: trades,
    paginate: {
      default: 5,
      max: 25
    }
  };

  // Initialize our service with any options it requires
  app.use('/trades', new TradeService(options));

  // Get our initialize service to that we can bind hooks
  const tradesService = app.service('/trades');

  // Set up our before hooks
  tradesService.before(hooks.before);

  // Set up our after hooks
  tradesService.after(hooks.after);
};
