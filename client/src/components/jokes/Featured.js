import React, { useState, useEffect } from 'react';
import JokeItem from './JokeItem';
import axios from 'axios';

const Featured = props => {
	const [topJokes, setTopJokes] = useState([]);

	useEffect(() => {
		axios
			.get('/api/jokes/top')
			.then(res => setTopJokes(res.data))
			.catch(err => console.log(err));
	});

	return (
		<div className="featured">
			<h3>Best Rated Jokes</h3>
			<div className="d-md-flex justify-content-between pb-2">
				{topJokes.map(joke => (
					<JokeItem key={joke._id} joke={joke} />
				))}
			</div>
			<hr />
		</div>
	);
};

export default Featured;
