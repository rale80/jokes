const mongoose = require('mongoose');

const jokeSchema = new mongoose.Schema(
	{
		text: {
			type: String,
			required: true,
			minlength: 10,
			maxlength: 2000
		},
		category: {
			type: String,
			enum: [
				'Blondies',
				'Cops',
				'Gypsies',
				'Black Humour',
				'Animals',
				'Sex',
				'Dumb',
				'Q&A',
				'Nations',
				'Other'
			],
			required: true
		},
		likes: [
			{
				author: {
					type: mongoose.Schema.Types.ObjectId,
					ref: 'User'
				}
			}
		],
		comments: [
			{
				author: {
					type: mongoose.Schema.Types.ObjectId,
					ref: 'User'
				},
				username: {
					type: String
				},
				text: {
					type: String,
					minlength: 10,
					maxlength: 200,
					required: true
				},
				date: {
					type: Date,
					default: Date.now
				}
			}
		],
		username: {
			type: String
		},
		author: {
			type: mongoose.Schema.Types.ObjectId,
			ref: 'User'
		}
	},
	{ timestamps: true }
);

const Joke = mongoose.model('Joke', jokeSchema);
module.exports = Joke;
