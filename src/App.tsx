import { BiSearch } from 'react-icons/bi';
import Lottie from 'lottie-react';

import sun from './animations/sun.json';
import './App.css';

function App() {
	const animationData = sun;

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
					<h2>Toronto</h2>
					<h4>Canadá</h4>
					
					<Lottie
						animationData={animationData}
						loop={true}
						style={{ height: 150 }}
					/>

					<span>19° C</span>
					<p>Parcialmente nublado</p>
				</div>
			</div>
		</div>
	);
}

export default App;