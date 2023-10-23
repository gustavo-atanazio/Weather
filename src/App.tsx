import { BiSearch } from 'react-icons/bi';
import { TbDropletFilled } from 'react-icons/tb';
import Lottie from 'lottie-react';

import sun from './animations/sun.json';
import './App.css';

function App() {
	return (
		<div className='main-container'>
			<div className='container'>
				<div className='user-input'>
					<h2>Busque o clima de algum lugar</h2>
					<div className='user-search'>
						<input type="text" required/>
						<button>
							<BiSearch size={25} color={'#FFF'}/>
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
						animationData={sun}
						loop={true}
						style={{ height: 150 }}
					/>

					<span className='temperature'>19° C</span>

					<div className='weather-others'>
						<TbDropletFilled size={20}/>
						<span>68%</span>
						<span>Parcialmente nublado</span>
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;