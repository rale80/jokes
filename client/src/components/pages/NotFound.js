import React from 'react';

const NotFound = props => {
	return (
		<div
			className="d-flex justify-content-center align-items-center text-center"
			style={{ height: '72vh' }}>
			<h1>
				Requested page not found <span role="img" aria-label="emoji"></span>☹️
			</h1>
		</div>
	);
};

export default NotFound;
