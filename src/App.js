import './App.scss';
import Location from './components/Location';
import api from './api.info';
import React, {useState} from 'react';

function App() {

	const [query,setQuery] = useState('');
	const [weather , setWeather] = useState({});

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
					15°C
				</div>	
				<div className= "weather">
					Sunny
				</div>
			</div>
		);
	}

	return (
		<div className="app">
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
					placeholder="seach"
				>Search</button>
			</main>
			<div className = "dynamic-data">
				<Location />	
				<WeatherBox />
			</div>
		</div>
	);

	
}

export default App;