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
// limit trade results to the current user being the from User or to User
let filterTradesToUser = function(hook) {
  let data = hook.result.data
  const userId = hook.params.user._id
  data = data.filter(trade => trade.toUser === userId || trade.fromUser === userId)
}

let logData = function(hook) {
  console.log(hook.data)
}

let logResult = function(hook) {
  console.log(hook.result)
}

exports.before = {
  all: [
    auth.verifyToken(),
    auth.populateUser(),
    auth.restrictToAuthenticated()
  ],
  find: [],
  get: [auth.restrictToOwner({ idField: '_id', ownerField: 'toUser' })],
  create: [
    globalHooks.timestamp('createdAt'),
    toUserHook,
    fromUserHook,
    logData
  ],
  update: [
    globalHooks.timestamp('updatedAt'),
    // hooks.restrictToOwner({ idField: '_id', ownerField: 'toUser' })
  ],
  patch: [
    auth.restrictToOwner({ idField: '_id', ownerField: 'toUser' }),
    globalHooks.timestamp('updatedAt'),
    transactionHook
  ],
  remove: [auth.restrictToOwner({ idField: '_id', ownerField: 'toUser' })]
};

exports.after = {
  all: [logData],
  find: [filterTradesToUser],
  get: [],
  create: [],
  update: [],
  patch: [],
  remove: []
};
