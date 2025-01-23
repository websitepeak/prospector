import { useState } from 'react';
import reactLogo from '../assets/react.svg';
import viteLogo from '/vite.svg';
import './styles/app.css';

const App: React.FC = () => {
  const [count, setCount] = useState<number>(0);

  return (
    <div className="app">
      <div className="app__logo-section">
        <a href="https://vite.dev" target="_blank" rel="noopener noreferrer">
          <img src={viteLogo} className="app__logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noopener noreferrer">
          <img src={reactLogo} className="app__logo app__logo--react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="app__card">
        <button 
          className="app__button"
          onClick={() => setCount((prevCount) => prevCount + 1)}
          type="button"
        >
          count is {count}
        </button>
        <p>
          Edit <code>src/app/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="app__docs-link">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  );
};

export default App; 