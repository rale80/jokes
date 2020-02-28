import React from 'react';
import Navbar from './components/layout/Navbar';
import Home from './components/layout/Home';
import Footer from './components/layout/Footer';
import './App.css';

function App() {
	return (
		<div className="app container">
			<Navbar />
			<Home />
			<Footer />
		</div>
	);
}

export default App;
