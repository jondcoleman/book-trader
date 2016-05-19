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
  trades: [{
    fromUser: { type: Schema.ObjectId, required: true },
    bookOffered: { type: Schema.ObjectId, required: true }
  }]
});

const booksModel = mongoose.model('books', booksSchema);

module.exports = booksModel;
