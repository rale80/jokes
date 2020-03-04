import React, { Fragment } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Moment from 'react-moment';
import { isEmpty } from 'lodash';
import { addLike, removeLike } from '../../redux/actions/jokeActions';
import makeExcerpt from '../../utils/makeExcerpt';

const JokeItem = props => {
	const { _id, text, createdAt, likes, username, category } = props.joke;
	const auth = useSelector(state => state.auth);
	const dispatch = useDispatch();
	const history = useHistory();

	const onJokeLike = id => {
		if (auth.isAuthenticated) {
			dispatch(addLike(id));
		} else {
			history.push('/login');
		}
	};

	const onJokeUnlike = id => {
		if (auth.isAuthenticated) {
			dispatch(removeLike(id));
		} else {
			history.push('/login');
		}
	};

	const findUserLike = likes =>
		isEmpty(auth.user) ||
		likes.findIndex(like => like.author === auth.user.id) === -1
			? false
			: true;

	return (
		<div className="card mb-3 mr-1">
			<div
				className={classNames(
					'card-header bg-info d-flex justify-content-between',
					{
						'bg-top-rated': props.topRated
					}
				)}>
				<div>
					<small title="author">{username}</small> |{' '}
					<small title="category">{category}</small>
				</div>
				<div>
					<small title="date">
						<Moment format="DD/MM/YYYY">{createdAt}</Moment>
					</small>
				</div>
			</div>
			<div className="card-body pb-5">
				<p className="card-text">
					{makeExcerpt(text, 150)
						.split('\n')
						.map((item, key) => (
							<Fragment key={key}>
								{item}
								<br />
							</Fragment>
						))}{' '}
					{text.length > 150 ? (
						<Link to={`/joke/${_id}`}>...read more</Link>
					) : null}
				</p>
			</div>
			<div className="card-footer">
				<button
					onClick={() => onJokeLike(_id)}
					type="button"
					className="btn btn-sm btn-light mr-1">
					<i
						className={classNames('fas fa-thumbs-up', {
							'text-info': findUserLike(likes)
						})}></i>
					<span className="badge badge-light">{likes.length}</span>
				</button>
				<button
					onClick={() => onJokeUnlike(_id)}
					type="button"
					className="btn btn-sm btn-light mr-1">
					<i className="text-secondary fas fa-thumbs-down"></i>
				</button>
				<Link
					to={`/joke/${_id}`}
					className={classNames('btn btn-sm btn-primary', {
						'bg-top-rated-btn': props.topRated
					})}>
					Comments
				</Link>
			</div>
		</div>
	);
};

JokeItem.propTypes = {
	joke: PropTypes.object.isRequired,
	topRated: PropTypes.bool.isRequired
};

export default JokeItem;
