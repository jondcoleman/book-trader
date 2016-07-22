'use strict';

// trades-model.js - A mongoose model
//
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const tradesSchema = new Schema({
  bookOffered: {
    _id: String,
    title: String,
    imageUrl: String,
    author: String,
    userId: String
  },
  bookRequested: {
    _id: String,
    title: String,
    imageUrl: String,
    author: String,
    userId: String
  },
  owner: Schema.Types.ObjectId,
  status: { type: String, required: true, default: 'new'},
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

const tradesModel = mongoose.model('trades', tradesSchema);

module.exports = tradesModel;
