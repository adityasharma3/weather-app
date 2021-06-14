import './App.scss';
import api from './api.info';
import React, { useState } from 'react';

function App() {

	let [query, setQuery] = useState('');
	const [weather, setWeather] = useState({});

	// query = 'Bhopal';

	const search = (evt) => {
		if (evt.key === "Enter") {
			fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
				.then(res => res.json())
				.then(result => {
					setWeather(result);
					setQuery('');
					console.log(result);
				});
		}
	}

	function WeatherBox() {
		return (
			<div className="weather-details">
				<div className="temp">
					{Math.round(weather.main.temp)}°C
				</div>
				<div className="weather">
					{weather.weather[0].description}
				</div>
			</div>
		);
	}

	const dateBuilder = (d) => {

		const months = [
			'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'
		];

		const days = [
			'Sunday', 'Monday', 'Tuesday', 'Wednseday', 'Thurdsay', 'Friday', 'Saturday', 'Sunday'
		];

		let day = days[d.getDay()];
		let date = d.getDate();
		let month = months[d.getMonth()];
		let year = d.getFullYear();

		return `${day} ${date} ${month} ${year}`;
	}


	function Location() {
		return (
			<>
				<div className="location">
					{weather.name} , {weather.sys.country}
				</div>

				<div className="date">{dateBuilder(new Date())}</div>
			</>
		);
	}

	return (
		<div className='app warm'>
			<main>
				<input
					type="text"
					className="search-bar"
					placeholder="Search"
					onChange = {e => setQuery(e.target.value)}
					value={query}
					onKeyPress = {search}
				/>
				<button
					type = "submit"
					className = "search-btn"
					placeholder="search"
					onClick = {search}
				>Search</button>
			</main>
			<div className = "dynamic-data">
				<Location />	
				<WeatherBox />
			</div>
		</div >
	);
}

export default App;