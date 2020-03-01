import React from 'react';
import Moment from 'react-moment';
import classNames from 'classnames';
import { useDispatch, useSelector } from 'react-redux';
import { isEmpty } from 'lodash';
import { Link } from 'react-router-dom';
import { addLike, removeLike } from '../../redux/actions/jokeActions';

const JokeItem = props => {
	const { _id, text, createdAt, author, likes } = props.joke;
	const auth = useSelector(state => state.auth);
	const dispatch = useDispatch();

	const onJokeLike = id => {
		dispatch(addLike(id));
	};

	const onJokeUnlike = id => {
		dispatch(removeLike(id));
	};

	const findUserLike = likes =>
		isEmpty(auth.user) ||
		likes.findIndex(like => like.author === auth.user.id.toString()) === -1
			? false
			: true;

	return (
		<div className="card mb-3">
			<div
				className={classNames(
					'card-header bg-info d-flex justify-content-between',
					{
						'bg-top-rated': props.topRated
					}
				)}>
				<small>Author: {author.username}</small>
				<small>
					Date: <Moment format="DD/MM/YYYY">{createdAt}</Moment>
				</small>
			</div>
			<div className="card-body pb-5">
				<p className="card-text">{text}</p>
				<div className="position-absolute" style={{ bottom: '5px' }}>
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
		</div>
	);
};

export default JokeItem;
