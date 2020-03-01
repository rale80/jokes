import React, { useEffect } from 'react';
import JokeItem from './JokeItem';
import { useDispatch, useSelector } from 'react-redux';
import { getJokes } from '../../redux/actions/jokeActions';
import Spinner from '../common/Spinner';

const JokesList = props => {
	const jokes = useSelector(state => state.jokes);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getJokes());
	}, [dispatch]);

	return (
		<div className="jokes px-2">
			<h3 className="ml-1">All Jokes</h3>
			<div className="d-md-flex flex-wrap justify-content-around pb-2">
				{jokes.jokes === null || jokes.loading ? (
					<Spinner />
				) : (
					jokes.jokes.map(joke => (
						<JokeItem key={joke._id} joke={joke} topRated={false} />
					))
				)}
			</div>
		</div>
	);
};

export default JokesList;
