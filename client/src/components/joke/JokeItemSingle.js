import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { deleteJoke } from '../../redux/actions/jokeActions';

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
						<p className="lead px-md-5 pt-md-3">
							{joke.text.split('\n').map((item, key) => (
								<Fragment key={key}>
									{item}
									<br />
								</Fragment>
							))}
						</p>
					</div>
					{joke.author === user.id ? (
						<div className="btn-group-vertical btn-absolute">
							<button
								onClick={() => dispatch(deleteJoke(joke._id, history))}
								type="button"
								className="btn btn-danger">
								<i className="fas fa-trash-alt"></i>
							</button>
							<Link
								to={`/joke/${joke._id}/edit`}
								type="button"
								className="btn btn-primary">
								<i className="fas fa-edit"></i>
							</Link>
						</div>
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
