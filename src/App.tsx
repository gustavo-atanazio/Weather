import { BiSearch } from 'react-icons/bi';
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

				<div className='main-content'></div>
			</div>
		</div>
	);
}

export default App;