'use strict';
const { createLogger, format, transports } = require('winston');

const env = process.env.NODE_ENV || 'development';

const logger = createLogger({
  level: env === 'development' ? 'debug' : 'info',
  format: format.combine(format.simple(), format.timestamp({
    format: 'YYYY-MM-DD HH:mm:ss'
  }, format.json()),
  format.printf((info) => `${info.timestamp} ${info.level}: ${info.message}`)),
  transports: [ new transports.Console({
    level: 'info',
    format: format.combine(
      format.colorize(),
      format.printf(
        (info) => `${info.timestamp} ${info.level}: ${info.message}`
      )
    )
  }),
  ]
});


module.exports = logger;
