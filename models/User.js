const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const userSchema = new mongoose.Schema({
	username: {
		type: String,
		required: true,
		unique: true,
		minlength: 2,
		maxlength: 30
	},
	email: {
		type: String,
		required: true,
		match: /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
	},
	password: {
		type: String,
		required: true,
		minlength: 6,
		maxlength: 80
	}
});

userSchema.pre('save', async function(next) {
	if (!this.isModified('password')) {
		return next();
	}

	try {
		this.password = await bcrypt.hash(this.password, 10);
	} catch (err) {
		next(err);
	}

	next();
});

userSchema.methods.validatePassword = async function(password) {
	try {
		return await bcrypt.compare(password, this.password);
	} catch (err) {
		return res.status(500).json({
			error: err
		});
	}
};

userSchema.methods.genAuthToken = function() {
	const token = jwt.sign(
		{ id: this._id, username: this.username },
		process.env.JWT_SECRET,
		{ expiresIn: 300 }
	);
	return token;
};

const User = mongoose.model('User', userSchema);
module.exports = User;
