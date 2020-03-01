import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { isEmpty } from 'lodash';
import Spinner from '../common/Spinner';
import CommentsList from './CommentsList';
import CommentForm from './CommentForm';
import JokeItemSingle from './JokeItemSingle';
import { useParams } from 'react-router-dom';
import { getJoke } from '../../redux/actions/jokeActions';

const Joke = props => {
	const { joke, loading } = useSelector(state => state.jokes);
	const dispatch = useDispatch();
	let { id } = useParams();

	useEffect(() => {
		dispatch(getJoke(id));
	}, [dispatch, id]);

	return (
		<div className="joke">
			<div className="container">
				<div className="row">
					<div className="col-md-12">
						{joke === null || loading || isEmpty(joke) ? (
							<Spinner />
						) : (
							<div>
								<JokeItemSingle joke={joke} />
								<CommentForm jokeId={joke._id} />
								<CommentsList comments={joke.comments} jokeId={joke._id} />
							</div>
						)}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Joke;
