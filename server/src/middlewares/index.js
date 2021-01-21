const errorHandler = require('./errorHandler');
const assignMetaToRequestAndLogger = require('./assignMetaToRequestAndLogger');
const handle404 = require('./404');
const statusCheck = require('./statusCheck');
const ensureAdmin = require('./ensureAdmin');

module.exports = {
  errorHandlerMiddleware: errorHandler,
  assignMetaToRequestAndLogger,
  handle404,
  statusCheck,
  ensureAdmin,
};
