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

let logResult = function(hook) {
  console.log(hook.result)
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
    globalHooks.timestamp('createdAt'),
    toUserHook,
    fromUserHook,
    logData
  ],
  update: [globalHooks.timestamp('updatedAt')],
  patch: [
    globalHooks.timestamp('updatedAt'),
    transactionHook],
  remove: []
};

exports.after = {
  all: [logData],
  find: [hooks.populate('toUserObj', { service: 'users', field: 'toUser' })],
  get: [hooks.populate('toUserObj', { service: 'users', field: 'toUser' })],
  create: [],
  update: [],
  patch: [],
  remove: []
};
