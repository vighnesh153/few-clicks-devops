const loggerLoader = require('./logger');
const mongooseLoader = require('./mongoose');
const expressLoader = require('./express');
const osSignalsLoader = require('./osSignals');
const unhandledRejectionAndUncaughtExceptionHandler = require('./unhandledRejectionAndUncaughtException');
const jobsLoader = require('./jobs');

module.exports = async (app) => {
  loggerLoader.configure(app);

  await mongooseLoader(app);

  expressLoader(app);

  osSignalsLoader(app);

  unhandledRejectionAndUncaughtExceptionHandler(app);

  await jobsLoader();
};
