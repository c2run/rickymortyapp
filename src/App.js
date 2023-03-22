import imagenRickyMorty from './img/rickymorty.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className='title'>Rick y Morty</h1>
        <img src={imagenRickyMorty} alt="Rick y Morty" className='img-home' />
      </header>
    </div>
  );
}

export default App;
