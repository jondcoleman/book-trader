'use strict';

const service = require('feathers-mongoose');
const books = require('./books-model');
const hooks = require('./hooks');

module.exports = function() {
  const app = this;

  const options = {
    Model: books,
    paginate: {
      default: 5,
      max: 25
    }
  };

  // Initialize our service with any options it requires
  app.use('/books', service(options));

  // Get our initialize service to that we can bind hooks
  const booksService = app.service('/books');

  // Set up our before hooks
  booksService.before(hooks.before);

  // Set up our after hooks
  booksService.after(hooks.after);
};
