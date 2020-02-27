import React from 'react';

const Navbar = props => {
	return (
		<header className="main-header">
			<nav className="navbar navbar-expand-md navbar-light bg-light">
				<a className="navbar-brand" href="#">
					Jokes
				</a>
				<button
					className="navbar-toggler"
					type="button"
					data-toggle="collapse"
					data-target="#navbarSupportedContent"
					aria-controls="navbarSupportedContent"
					aria-expanded="false"
					aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
				</button>

				<div className="collapse navbar-collapse" id="navbarSupportedContent">
					<ul className="navbar-nav ml-auto">
						<li className="nav-item active">
							<a className="nav-link" href="#">
								Home
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="#">
								New Joke
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="#">
								Register
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="#">
								Login
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="#">
								Logout
							</a>
						</li>
					</ul>
				</div>
			</nav>
		</header>
	);
};

export default Navbar;
