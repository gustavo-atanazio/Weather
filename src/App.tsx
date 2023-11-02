import Form from 'components/Form';
import Panel from 'components/Panel';
import Slider from 'components/Slider/Slider';
import { Slide, SliderProps } from 'components/Slider';

import './App.css';

function App() {
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

	return (
		<main>
			<Form/>

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