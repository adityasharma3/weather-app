import './App.css';
import Location from './components/Location';
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

				{/* <Location /> */}
			</main>
			<Location />	
			<WeatherBox />
		</div>
			// <Location />

	);
}

export default App;
