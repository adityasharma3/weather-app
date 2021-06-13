import React, { useState } from "react";
import api from '../../api.info';

function WeatherBox() {

	const [query,setQuery] = useState('');
	const [weather , setWeather] = useState({});

	function search(event) {
		if (event.key == "Enter" ) {
			fetch(`${api.base}weather?q=${query}$units=metric$APPID=${api.key}`)
			.then(res => res.json())
			.then(result => setWeather(result));
		} 
	}

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

export default WeatherBox; 