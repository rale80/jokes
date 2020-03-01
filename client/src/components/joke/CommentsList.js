import React from 'react';
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

export default CommentsList;
