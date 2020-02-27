const path = require('path');
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

require('dotenv').config();
const PORT = process.env.PORT || 5000;

const error = require('./middlewares/error');
const logger = require('./middlewares/logger');
const usersRouter = require('./routes/api/users');
const jokesRouter = require('./routes/api/jokes');

const db = process.env.MONGO_URI;
mongoose
	.connect(db, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
		useCreateIndex: true,
		useFindAndModify: false
	})
	.then(() => logger.info('Connected to MongoDB'))
	.catch(err => logger.error('Error connecting to MongoDB'));

const app = express();

process.on('unhandledRejection', ex => {
	throw ex;
});

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors({ exposedHeaders: 'Authorization' }));

app.use('/api/users', usersRouter);
app.use('/api/jokes', jokesRouter);

app.use(error);

app.listen(PORT, err => {
	if (err) {
		logger.error(`Express server startup error`);
	}
	logger.info(`Express server listen on port ${PORT}`);
});
