'use strict';

// trades-model.js - A mongoose model
//
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const tradesSchema = new Schema({
  fromUser: { type: Schema.ObjectId, required: true },
  bookOffered: { type: Schema.ObjectId, required: true },
  toUser: { type: Schema.ObjectId, required: true },
  bookRequested: { type: Schema.ObjectId, required: true },
  status: { type: String, required: true, 'default': 'new'},
  createdAt: { type: Date, 'default': Date.now },
  updatedAt: { type: Date, 'default': Date.now }
});

const tradesModel = mongoose.model('trades', tradesSchema);

module.exports = tradesModel;