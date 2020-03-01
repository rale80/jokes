import React, { useEffect } from 'react';
import JokeItem from './JokeItem';
import { useSelector, useDispatch } from 'react-redux';
import { getTopJokes } from '../../redux/actions/jokeActions';
import Spinner from '../common/Spinner';

const Featured = props => {
	const jokes = useSelector(state => state.jokes);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getTopJokes());
	}, [dispatch]);

	return (
		<div className="featured px-2">
			<h3 className="pl-1 pt-2">Best Rated Jokes</h3>
			<div className="d-md-flex justify-content-around pb-2">
				{jokes.topjokes === null || jokes.loading ? (
					<Spinner isTopRated={true} />
				) : (
					jokes.topjokes.map(joke => (
						<JokeItem key={joke._id} joke={joke} topRated={true} />
					))
				)}
			</div>
			<hr />
		</div>
	);
};

export default Featured;
