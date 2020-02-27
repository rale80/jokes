import React, { useState, useEffect } from 'react';
import JokeItem from './JokeItem';
import axios from 'axios';

const JokesList = props => {
	const [jokes, setJokes] = useState([]);

	useEffect(() => {
		axios
			.get('/api/jokes')
			.then(res => setJokes(res.data))
			.catch(err => console.log(err));
	});

	return (
		<div className="jokes d-md-flex justify-content-between">
			{jokes.map(joke => (
				<JokeItem key={joke._id} joke={joke} />
			))}
		</div>
	);
};

export default JokesList;
