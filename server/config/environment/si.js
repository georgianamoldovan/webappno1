'use strict';
/*eslint no-process-env:0*/

// Development specific configuration
// ==================================
module.exports = {
  // MongoDB connection options
  mongo: {
    uri: 'mongodb://localhost/myapp-si'
  },

  // Server port
  port: process.env.PORT || 6002,

  // Server IP
  ip: process.env.IP || '0.0.0.0',

  // Seed database on startup
  seedDB: true
};
