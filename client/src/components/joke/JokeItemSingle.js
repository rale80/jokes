import React from 'react';

const JokeItemSingle = props => {
	const { joke } = props;

	return (
		<div className="singleJoke mt-3">
			<div className="container">
				<div className="row">
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
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default JokeItemSingle;
