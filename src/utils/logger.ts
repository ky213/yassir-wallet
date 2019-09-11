import { createLogger, transports, format } from 'winston';

const logger = createLogger({
  level: 'info',
  format: format.combine(
    format.timestamp({
      format: 'YYYY-MM-DD HH:mm:ss'
    }),
    format.errors({ stack: true }),
    format.splat(),
    format.json()
  ),
  defaultMeta: {},
  transports: [
    new transports.File({
      filename: 'logs/error.log',
      level: 'error'
    }),
    new transports.File({
      filename: 'logs/combined.log'
    })
  ],
  exceptionHandlers: [
    new transports.File({
      filename: 'logs/exceptions.log'
    })
  ]
});

if (process.env.NODE_ENV !== 'production') {
  logger.add(
    new transports.Console({
      format: format.combine(format.simple())
    })
  );
  logger.exceptions.handle(
    new transports.Console({
      format: format.combine(format.simple())
    })
  );
}

process.on('unhandledRejection', err => {
  throw err;
});

export default logger;
