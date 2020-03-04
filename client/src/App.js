import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import jwtDecode from 'jwt-decode';
import Navbar from './components/layout/Navbar';
import Home from './components/layout/Home';
import NewJoke from './components/pages/NewJoke';
import EditJoke from './components/pages/EditJoke';
import Joke from './components/joke/Joke';
import Register from './components/pages/Register';
import Login from './components/pages/Login';
import NotFound from './components/pages/NotFound';
import Footer from './components/layout/Footer';
import PrivateRoute from './components/common/PrivateRoute';
import { setCurrentUser } from './redux/actions/authActions';
import setAuthHeader from './utils/setAuthHeader';
import './App.css';

function App() {
	const dispatch = useDispatch();

	// Check for token
	if (localStorage['jwtToken']) {
		setAuthHeader(localStorage['jwtToken']);
		const decoded = jwtDecode(localStorage['jwtToken']);
		dispatch(setCurrentUser(decoded));
	}

	return (
		<Router>
			<div className="app container-md">
				<Navbar />
				<Switch>
					<Route exact path="/" component={Home} />
					<PrivateRoute exact path="/newjoke" component={NewJoke} />
					<PrivateRoute exact path="/joke/:id/edit" component={EditJoke} />
					<PrivateRoute exact path="/joke/:id" component={Joke} />
					<Route exact path="/register" component={Register} />
					<Route exact path="/login" component={Login} />
					<Route component={NotFound} />
				</Switch>
				<Footer />
			</div>
		</Router>
	);
}

export default App;
