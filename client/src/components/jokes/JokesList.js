import React, { useEffect, useState } from 'react';
import JokeItem from './JokeItem';
import { useDispatch, useSelector } from 'react-redux';
import { getJokes } from '../../redux/actions/jokeActions';
import Spinner from '../common/Spinner';
import Pagination from '../common/Pagination';

const JokesList = props => {
	const jokes = useSelector(state => state.jokes);
	const [currentPage, setCurrentPage] = useState(1);
	const [jokesPerPage] = useState(6);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getJokes());
	}, [dispatch]);

	const indexOfLastJoke = currentPage * jokesPerPage;
	const indexOfFirstJoke = indexOfLastJoke - jokesPerPage;
	const currentJokes = jokes.jokes.slice(indexOfFirstJoke, indexOfLastJoke);

	const paginate = pageNumber => setCurrentPage(pageNumber);

	return (
		<div className="jokes px-2">
			<h3 className="ml-1">All Jokes</h3>
			<div className="d-md-flex flex-wrap justify-content-around pb-2">
				{jokes.jokes === null || jokes.loading ? (
					<Spinner />
				) : (
					currentJokes.map(joke => (
						<JokeItem key={joke._id} joke={joke} topRated={false} />
					))
				)}
			</div>
			<Pagination
				jokesPerPage={jokesPerPage}
				totalJokes={jokes.jokes.length}
				paginate={paginate}
			/>
		</div>
	);
};

export default JokesList;
