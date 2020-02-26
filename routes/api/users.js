const express = require('express');
const router = express.Router();
const logger = require('../../middlewares/logger');

const User = require('../../models/User');
const validateRegisterInput = require('../../validation/register');
const validateLoginInput = require('../../validation/login');

/**
 * @route		POST api/users/register
 * @desc  	Create new user
 * @access	Public
 */
router.post('/register', (req, res) => {
	const { errors, isValid } = validateRegisterInput(req.body);
	const { username, email, password } = req.body;

	if (!isValid) {
		return res.status(400).json(errors);
	}

	User.findOne({ $or: [{ username }, { email }] }).then(user => {
		if (user) {
			errors.email = 'Username or email already exists';
			return res.status(400).json(errors);
		} else {
			const newUser = new User({ username, email, password });
			newUser
				.save()
				.then(user => res.status(200).json(user))
				.catch(err => logger.error(err));
		}
	});
});

/**
 * @route		POST api/users/login
 * @desc  	Login User / Returning JWT
 * @access	Public
 */
router.post('/login', (req, res) => {
	const { errors, isValid } = validateLoginInput(req.body);
	const { email, password } = req.body;

	if (!isValid) {
		return res.status(400).json(errors);
	}

	User.findOne({ email })
		.then(async user => {
			if (!user) {
				errors.email = 'User with that email not found';
				return res.status(404).json(errors);
			}

			const validPassword = await user.validatePassword(password);

			if (!validPassword) {
				errors.password = 'Password is not correct';
				return res.status(400).json(errors);
			} else {
				const token = user.genAuthToken();
				return res
					.status(200)
					.json({ success: true, token: 'Bearer ' + token });
			}
		})
		.catch(err => logger.error(err));
});

module.exports = router;
