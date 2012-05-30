/*jshint node: true*/

var j = require('joint');

var server = {};

// We'll focus on client side for now.

server.register = function (channel, cb) {
  joint.pushTag(this.conn, channel)
};

module.exports = server;
