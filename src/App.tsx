import Lottie from 'lottie-react';

import Slider from 'components/Slider/Slider';
import { Slide, SliderProps } from 'components/Slider';

import { BiSearch } from 'react-icons/bi';
import { TbDropletFilled } from 'react-icons/tb';

import rain from './animations/rain.json';
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
			<div className='main-container'>
				<div className='container'>
					<div className='user-input'>
						<h2>Busque o clima de algum lugar</h2>
						<div className='user-search'>
							<input type="text" required />
							<button>
								<BiSearch size={25} color={'#FFF'} />
							</button>
						</div>
					</div>

					<div className='divisor'></div>

					<div className='main-content'>
						<div>
							<h2>Toronto</h2>
							<h4>Canadá</h4>
						</div>

						<Lottie
							animationData={rain}
							loop={true}
							style={{ height: 150 }}
						/>

						<span className='temperature'>19° C</span>

						<div className='weather-others'>
							<TbDropletFilled size={20} />
							<span>68%</span>
							<span>Parcialmente nublado</span>
						</div>
					</div>
				</div>
			</div>

			<Slider settings={sliderSettings}>
				<Slide>
					<div className="mini-container">
						<span>Toronto1</span>
						<span>Canadá</span>
					</div>
				</Slide>

				<Slide>
					<div className="mini-container">
						<span>Toronto2</span>
						<span>Canadá</span>
					</div>
				</Slide>

				<Slide>
					<div className="mini-container">
						<span>Toronto3</span>
						<span>Canadá</span>
					</div>
				</Slide>

				<Slide>
					<div className="mini-container">
						<span>Toronto4</span>
						<span>Canadá</span>
					</div>
				</Slide>
			</Slider>
		</main>
	);
}

export default App;