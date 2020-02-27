import React from 'react';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Featured from './components/Featured';
import JokesList from './components/jokes/JokesList';
import './App.css';

function App() {
	return (
		<div className="App container">
			<Navbar />
			<Featured />
			<JokesList />
			<Footer />
		</div>
	);
}

export default App;
