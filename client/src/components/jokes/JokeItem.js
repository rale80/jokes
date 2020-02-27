import React from 'react';

const JokeItem = props => {
	const { text, createdAt, author } = props.joke;
	return (
		<div className="joke">
			<small>Author: {author.username}</small>
			<small>Date: {createdAt}</small>
			<p>{text}</p>
		</div>
	);
};

export default JokeItem;
