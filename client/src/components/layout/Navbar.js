import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = props => {
	const onLogoutClick = () => {};

	return (
		<header className="main-header">
			<nav className="navbar navbar-expand-md navbar-light">
				<Link className="navbar-brand" to="/">
					Jokes
				</Link>
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
						<li className="nav-item">
							<Link className="nav-link" to="/">
								Home
							</Link>
						</li>
						<li className="nav-item">
							<Link className="nav-link" to="/newjoke">
								New Joke
							</Link>
						</li>
						<li className="nav-item">
							<Link className="nav-link" to="/register">
								Register
							</Link>
						</li>
						<li className="nav-item">
							<Link className="nav-link" to="/login">
								Login
							</Link>
						</li>
						<li className="nav-item">
							<Link className="nav-link" to="#" onClick={onLogoutClick}>
								<i class="fas fa-user-astronaut"></i> Logout
							</Link>
						</li>
					</ul>
				</div>
			</nav>
		</header>
	);
};

export default Navbar;
