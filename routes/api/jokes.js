const express = require('express');
const router = express.Router();
const Joke = require('../../models/Joke');
const auth = require('../../middlewares/auth');
const logger = require('../../middlewares/logger');
const validateJokeInput = require('../../validation/joke');
const validateCommentInput = require('../../validation/comment');

/**
 * @route		Get api/jokes
 * @desc  	Get all jokes
 * @access	Public
 */
router.get('/', (req, res) => {
	Joke.find({})
		.populate('author', 'username')
		.sort({ createdAt: -1 })
		.then(jokes => {
			return res.status(200).json(jokes);
		})
		.catch(err => logger.error(err));
});

/**
 * @route		Get api/jokes/:jokeId
 * @desc  	Get joke by id
 * @access	Public
 */
router.get('/:jokeId', (req, res) => {
	const { jokeId } = req.params;

	Joke.findById(jokeId)
		.populate('author', 'username')
		.then(joke => {
			return res.status(200).json(joke);
		})
		.catch(err => logger.error(err));
});

/**
 * @route		Post api/jokes
 * @desc  	Create new joke
 * @access	Private
 */
router.post('/', auth, (req, res) => {
	const { errors, isValid } = validateJokeInput(req.body);
	const { text, category } = req.body;
	const user = req.user;

	if (!isValid) {
		return res.status(400).json(errors);
	}

	const newJoke = new Joke({ text, category, author: user.id });
	newJoke
		.save()
		.then(savedJoke => res.status(200).json(savedJoke))
		.catch(err => logger.error(err));
});

/**
 * @route		Put api/jokes/:jokeId
 * @desc  	Get joke by id
 * @access	Private
 */
router.put('/:jokeId', auth, (req, res) => {
	const { jokeId } = req.params;
	const { text, category } = req.body;
	const user = req.user;

	Joke.findById(jokeId)
		.then(joke => {
			if (joke.author.toString() === user.id) {
				joke.text = text;
				joke.category = category;

				joke
					.save()
					.then(updatedJoke => res.status(200).json(updatedJoke))
					.catch(err => logger.error(err));
			} else {
				return res.status(401).json({
					nopermission: 'You do not have permission to update this joke'
				});
			}
		})
		.catch(err => logger.error(err));
});

/**
 * @route		Delete api/jokes/:jokeId
 * @desc  	Delete joke by id
 * @access	Private
 */
router.delete('/:jokeId', auth, (req, res) => {
	const { jokeId } = req.params;
	const user = req.user;

	Joke.findById(jokeId)
		.then(joke => {
			if (joke.author.toString() === user.id) {
				joke
					.remove()
					.then(delJoke => res.status(200).json(delJoke))
					.catch(err => logger.error(err));
			} else {
				return res.status(401).json({
					nopermission: 'You do not have permission to delete this joke'
				});
			}
		})
		.catch(err => logger.error(err));
});

/**
 * @route		Post api/jokes/like/:jokeId
 * @desc  	Like a joke
 * @access	Private
 */
router.post('/like/:jokeId', auth, (req, res) => {
	const { jokeId } = req.params;
	const user = req.user;

	Joke.findById(jokeId)
		.then(joke => {
			if (
				joke.likes.filter(like => like.author.toString() === user.id).length > 0
			) {
				return res
					.status(400)
					.json({ alreadyliked: 'User already like this joke' });
			}

			joke.likes.unshift({ author: user.id });
			joke
				.save()
				.then(savedJoke => res.status(200).json(savedJoke))
				.catch(err => logger.error(err));
		})
		.catch(err => logger.error(err));
});

/**
 * @route		Post api/jokes/unlike/:jokeId
 * @desc  	Unlike a joke
 * @access	Private
 */
router.post('/unlike/:jokeId', auth, (req, res) => {
	const { jokeId } = req.params;
	const user = req.user;

	Joke.findById(jokeId)
		.then(joke => {
			if (
				joke.likes.filter(like => like.author.toString() === user.id).length ===
				0
			) {
				return res
					.status(400)
					.json({ notliked: 'You have not yet liked this post' });
			}

			const likeIndex = joke.likes.findIndex(
				like => like.author.toString() === user.id
			);
			joke.likes.splice(likeIndex, 1);
			joke
				.save()
				.then(savedJoke => res.status(200).json(savedJoke))
				.catch(err => logger.error(err));
		})
		.catch(err => logger.error(err));
});

/**
 * @route		Post api/jokes/comments/:jokeId
 * @desc  	Create new comment
 * @access	Private
 */
router.post('/comments/:jokeId', auth, (req, res) => {
	const { errors, isValid } = validateCommentInput(req.body);
	const { text } = req.body;
	const { jokeId } = req.params;
	const user = req.user;

	if (!isValid) {
		return res.status(400).json(errors);
	}

	Joke.findById(jokeId)
		.then(joke => {
			const newComment = { text, author: user.id };

			joke.comments.unshift(newComment);
			joke
				.save()
				.then(savedJoke => res.status(200).json(savedJoke))
				.catch(err => logger.error(err));
		})
		.catch(err => logger.error(err));
});

/**
 * @route		Delete api/jokes/comments/:jokeId/:commentId
 * @desc  	Delete comment
 * @access	Private
 */
router.delete('/comments/:jokeId/:commentId', auth, (req, res) => {
	const { jokeId, commentId } = req.params;
	const user = req.user;

	Joke.findById(jokeId)
		.then(joke => {
			if (
				joke.comments.filter(comment => comment._id.toString() === commentId)
					.length === 0
			) {
				return res
					.status(404)
					.json({ commentnotexists: 'Comment does not exist' });
			}

			const commentIndex = joke.comments.findIndex(
				comment =>
					comment._id.toString() === commentId && comment.author === user.id
			);

			if (commentIndex !== -1) {
				joke.comments.splice(commentIndex, 1);
				joke
					.save()
					.then(joke => res.status(200).json(joke))
					.catch(err => logger.error(err));
			} else {
				return res.status(401).json({
					nopermission: 'You do not have permission to delete this comment'
				});
			}
		})
		.catch(err => logger.error(err));
});

module.exports = router;
