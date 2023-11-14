import { useEffect, useState } from 'react';

import Form from 'components/Form';
import Panel from 'components/Panel';
import MiniPanel from 'components/MiniPanel';
import Slider from 'components/Slider/Slider';
import { Slide, SliderProps } from 'components/Slider';

import { getWeatherData } from 'utils/getWeatherData';
import { getCitiesWeatherData } from 'utils/getCitiesWeatherData';

import WeatherData from 'types/WeatherData';
import { CITIES } from 'constants/cities';

import './App.css';

function App() {
	const [city, setCity] = useState('');
	const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
	const [weatherWidgetData, setWeatherWidgetData] = useState<WeatherData[]>([]);

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

	useEffect(() => {
		getWeatherData(city)
			.then(data => setWeatherData(data))
			.catch(error => console.error(error))
	}, [city]);

	useEffect(() => {
		const selectedCities = CITIES.sort(() => Math.random() - 0.5).slice(0, 4);

		getCitiesWeatherData(selectedCities)
			.then(data => setWeatherWidgetData(data))
			.catch(error => console.error('Erro ao buscar dados do clima para as cidades', error));
	}, []);

	return (
		<main>
			<Form setCity={setCity}/>

			<Panel data={weatherData}/>

			<Slider settings={sliderSettings}>
				{weatherWidgetData.map((data, index) => (
					<Slide key={index}>
						<MiniPanel {...data}/>
					</Slide>
				))}
			</Slider>
		</main>
	);
}

export default App;