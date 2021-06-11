import './App.css';
import Location from './components/Location';
import WeatherBox from './components/WeatherBox';
import React from 'react';

function App() {
	return (
		<div className="app">
			<main>
				<input
					type="text"
					className="search-bar"
					placeholder="Search"
				/>
				<button
					type = "submit"
					className = "search-btn"
					placeholder="seach"
				>Search</button>
			</main>
			<Location />	
			<WeatherBox />
		</div>
	);
}

export default App;
