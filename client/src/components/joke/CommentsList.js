import React from 'react';
import PropTypes from 'prop-types';
import CommentItem from './CommentItem';

const CommentsList = props => {
	return (
		<div className="comments-list">
			<div className="container">
				{props.comments.map(comment => (
					<CommentItem
						key={comment._id}
						comment={comment}
						jokeId={props.jokeId}
					/>
				))}
			</div>
		</div>
	);
};

CommentsList.propTypes = {
	comments: PropTypes.array.isRequired,
	jokeId: PropTypes.string.isRequired
};

export default CommentsList;
