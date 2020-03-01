import React from 'react';

const Spinner = props => {
	return props.isTopRated ? (
		<div className="lds-dual-ring-red"></div>
	) : (
		<div className="lds-dual-ring-blue"></div>
	);
};

export default Spinner;
