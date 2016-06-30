'use strict';

const globalHooks = require('../../../hooks');
const hooks = require('feathers-hooks');
const auth = require('feathers-authentication').hooks;

const logAuth = function(hook) {
  console.log(hook)
}

exports.before = {
  all: [
    // auth.verifyToken(),
    // auth.populateUser(),
    // auth.restrictToAuthenticated()
    logAuth
  ],
  find: [],
  get: [],
  create: [auth.associateCurrentUser()],
  update: [globalHooks.timestamp('updatedAt')],
  patch: [globalHooks.timestamp('updatedAt')],
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
