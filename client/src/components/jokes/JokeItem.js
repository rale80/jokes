import React from 'react';
import Moment from 'react-moment';
const JokeItem = props => {
	const { text, createdAt, author } = props.joke;
	return (
		<div className="card">
			<div className="card-header d-flex justify-content-between">
				<small>Author: {author.username}</small>
				<small>
					Date: <Moment format="DD/MM/YYYY">{createdAt}</Moment>
				</small>
			</div>
			<div className="card-body">
				<p className="card-text">{text}</p>
				<button className="btn btn-primary">Comment</button>
			</div>
		</div>
	);
};

export default JokeItem;
