'use strict';

const globalHooks = require('../../../hooks');
const hooks = require('feathers-hooks');
const auth = require('feathers-authentication').hooks;
const transactionHooks = require('./transaction-hooks');

let transactionHook = function(hook) {
  if (hook.data.transition === 'approve') return transactionHooks.approve(hook)
  if (hook.data.transition === 'decline') return transactionHooks.decline(hook)
}

let toUserHook = function(hook) {
  const bookId = hook.data.bookRequested
  return hook.app.service('books').get(bookId)
    .then(book => {
      hook.data.toUser = book.userId
    })
}

let fromUserHook = function(hook) {
  const bookId = hook.data.bookOffered
  return hook.app.service('books').get(bookId)
    .then(book => {
      hook.data.fromUser = book.userId
    })
}

let logData = function(hook) {
  console.log(hook.data)
}

exports.before = {
  all: [
    // auth.verifyToken(),
    // auth.populateUser(),
    // auth.restrictToAuthenticated()
  ],
  find: [],
  get: [],
  create: [
    toUserHook,
    fromUserHook,
    logData
  ],
  update: [],
  patch: [transactionHook],
  remove: []
};

exports.after = {
  all: [],
  find: [],
  get: [],
  create: [],
  update: [],
  patch: [],
  remove: []
};
