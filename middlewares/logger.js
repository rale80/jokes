const path = require('path');
const winston = require('winston');

const logger = winston.createLogger({
	level: 'info',
	format: winston.format.json(),
	transports: [
		new winston.transports.File({
			level: 'error',
			filename: path.join(__dirname, '../logs', 'error.log')
		}),
		new winston.transports.File({
			filename: path.join(__dirname, '../logs', 'combined.log')
		})
	],
	exceptionHandlers: [
		new winston.transports.File({
			level: 'error',
			filename: path.join(__dirname, '../logs', 'exceptions.log')
		}),
		new winston.transports.Console({
			format: winston.format.simple()
		})
	]
});

if (process.env.NODE_ENV !== 'production') {
	logger.add(
		new winston.transports.Console({
			format: winston.format.simple()
		})
	);
}

module.exports = logger;
