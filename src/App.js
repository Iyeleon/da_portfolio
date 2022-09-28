import logo from './logo.svg';
import './App.css';
import image from './assets/dami_akinniyi-02.png'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={image} className="App-logo" alt="Dami Akinniyi" />
        <p>
          Computational Designer | Machine Learning Scientist
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Explore Project
        </a>
      </header>
    </div>
  );
}

export default App;
