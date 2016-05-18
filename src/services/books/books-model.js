'use strict';

// books-model.js - A mongoose model
//
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const booksSchema = new Schema({
  title: { type: String, required: true },
  createdAt: { type: Date, 'default': Date.now },
  updatedAt: { type: Date, 'default': Date.now },
  author: { type: String, required: false},
  imageUrl: { type: String, required: false},
  userId: { type: Schema.ObjectId, required: true },
  tradePending: { type: String, required: true, 'default': false},
  tradeTo: { type: Schema.ObjectId, required: false },
});

const booksModel = mongoose.model('books', booksSchema);

module.exports = booksModel;
