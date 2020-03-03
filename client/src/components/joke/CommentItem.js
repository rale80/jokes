import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { deleteComment } from '../../redux/actions/jokeActions';

const CommentItem = props => {
	const { user } = useSelector(state => state.auth);
	const dispatch = useDispatch();
	const { comment, jokeId } = props;

	return (
		<div className="row">
			<div className="card card-body col-md-12 mb-3">
				<div className="row">
					<div className="col-md-2">
						<p style={{ textAlign: 'center' }}>
							<i
								className="far fa-user-circle"
								style={{ fontSize: '80px' }}></i>
						</p>
						<p style={{ textAlign: 'center' }}>{comment.username}</p>
					</div>
					<div className="col-md-10">
						<p className="lead">{comment.text}</p>
					</div>
					{comment.author.toString() === user.id ? (
						<button
							onClick={() => dispatch(deleteComment(jokeId, comment._id))}
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

CommentItem.propTypes = {
	jokeId: PropTypes.string.isRequired,
	comment: PropTypes.object.isRequired
};

export default CommentItem;
