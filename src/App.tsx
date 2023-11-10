import { useEffect, useState } from 'react';
import axios from 'axios';

import Form from 'components/Form';
import Panel from 'components/Panel';
import Slider from 'components/Slider/Slider';
import { Slide, SliderProps } from 'components/Slider';

import WeatherData from 'types/WeatherData';
import './App.css';

function App() {
	const [city, setCity] = useState('');
	const [weatherData, setWeatherData] = useState<WeatherData | null>(null);

	const sliderSettings: SliderProps = {
		autoplay: {
			delay: 4000,
			disableOnInteraction: false
		},
		pagination: true,
		navigation: true,
		loop: true,
		speed: 800,
		spaceBetween: 15
	};

	async function getWeatherData(city: string) {
		try {
			const response = await axios.get('http://localhost:8000/weather', {
				params: { city: city }
			});

			const data: WeatherData = {
				city: response.data.name,
				country: response.data.sys.country,
				temperature: response.data.main.temp,
				humidity: response.data.main.humidity,
				sky: response.data.weather[0].description
			};

			if (data) {
				setWeatherData(data);
			}
		} catch (error) {
			alert('Ocorreu um erro.');
			console.log(error);
		}
	}

	useEffect(() => {
		getWeatherData(city);
	}, [city]);

	return (
		<main>
			<Form setCity={setCity}/>

			<Panel
				size='normal'
				city='Toronto'
				country='Canadá'
				temperature='19° C'
				humidity={68}
				sky='Parcialmente nublado'
			/>

			<Slider settings={sliderSettings}>
				<Slide>
					<Panel
						size='mini'
						city='Toronto'
						country='Canadá'
						temperature='19° C'
					/>
				</Slide>

				<Slide>
					<Panel
						size='mini'
						city='Toronto'
						country='Canadá'
						temperature='19° C'
					/>
				</Slide>

				<Slide>
					<Panel
						size='mini'
						city='Toronto'
						country='Canadá'
						temperature='19° C'
					/>
				</Slide>

				<Slide>
					<Panel
						size='mini'
						city='Toronto'
						country='Canadá'
						temperature='19° C'
					/>
				</Slide>
			</Slider>
		</main>
	);
}

export default App;