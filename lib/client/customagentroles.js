//CustomAgentRoles.js: Client for the zendesk API.


var util        = require('util'),
    Client      = require('./client').Client,
    defaultgroups = require('./helpers').defaultgroups;


var CustomAgentRoles = exports.CustomAgentRoles = function (options) {
  Client.call(this, options);
};

// Inherit from Client base object
util.inherits(CustomAgentRoles, Client);

// ######################################################## CustomAgentRoles
// ====================================== Listing CustomAgentRoles
CustomAgentRoles.prototype.list = function (cb) {
  this.request('GET', ['custom_roles'], cb);//all
};
