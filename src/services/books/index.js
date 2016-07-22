'use strict';

const service = require('feathers-mongoose');
const books = require('./books-model');
const hooks = require('./hooks');
const path = require('path')

const authorized = require(path.join(process.cwd(), 'src/middleware/authorized'));

module.exports = function() {
  const app = this;

  const options = {
    Model: books,
    paginate: {
      default: 200,
      max: 200
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


  app.get('/home', authorized(app), (req, res) => {
    if (!req.authorized) next()
    res.sendFile(path.join(process.cwd(), 'public/home.html'))
  })

  app.get('/test', (req, res) => {
    console.log(req.feathers)
    res.json({message: 'hello world'})
  })
};
