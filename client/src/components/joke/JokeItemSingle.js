import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { deleteJoke } from '../../redux/actions/jokeActions';
import { useHistory } from 'react-router-dom';

const JokeItemSingle = props => {
	const { joke } = props;
	const { user } = useSelector(state => state.auth);
	const dispatch = useDispatch();
	const history = useHistory();

	return (
		<div className="singleJoke row mt-3">
			<div className="card card-body col-md-12 mb-3 py-3">
				<div className="row">
					<div className="col-md-2">
						<p style={{ textAlign: 'center' }}>
							<i
								className="fas fa-user-astronaut"
								style={{ fontSize: '100px' }}></i>
						</p>
						<p style={{ textAlign: 'center' }}>{joke.username}</p>
					</div>
					<div className="col-md-10">
						<p className="lead px-md-5 pt-md-3">{joke.text}</p>
					</div>
					{joke.author === user.id ? (
						<button
							onClick={() => dispatch(deleteJoke(joke._id, history))}
							type="button"
							className="btn btn-danger btn-absolute"
							style={{ top: '5px' }}>
							<i className="fas fa-times" />
						</button>
					) : null}
				</div>
			</div>
		</div>
	);
};

JokeItemSingle.propTypes = {
	joke: PropTypes.object.isRequired
};

export default JokeItemSingle;
