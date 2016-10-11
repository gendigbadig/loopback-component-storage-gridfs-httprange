var GridFSService = require('./lib/gridfs-service');

/**
 * Initialize storage component.
 */
exports.initialize = function(dataSource, callback) {
  var settings = dataSource.settings || {};

  var connector = new GridFSService(settings);
  dataSource.connector = connector;
  dataSource.connector.dataSource = dataSource;

  connector.DataAccessObject = function () {};

  for (var m in GridFSService.prototype) {
    var method = GridFSService.prototype[m];
    if (typeof method === 'function') {
      connector.DataAccessObject[m] = method.bind(connector);
      for (var k in method) {
        connector.DataAccessObject[m][k] = method[k];
      }
    }
  }

  connector.define = function(model, properties, settings) {};

  if (callback) {
    dataSource.connector.connect(callback);
  }
};
