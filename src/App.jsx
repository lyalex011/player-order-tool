import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
  const [names, setNames] = useState(Array(10).fill(''));
  const [randomizedNames, setRandomizedNames] = useState([])

  const handleNameChange = (e, index) => {
    const newNames = [...names];
    newNames[index] = e.target.value;
    setNames(newNames);
  };

  const randomizeNames = () => {
    const shuffledNames = [...names];
    for (let i = shuffledNames.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledNames[i], shuffledNames[j]] = [shuffledNames[j], shuffledNames[i]];
    }
    setRandomizedNames(shuffledNames);
  };

  return (
    <div className="random-name-form">
      <h2>Mafia Player Order</h2>
      <div className="input-container">
        {names.map((name, index) => (
          <input
            key={index}
            type="text"
            placeholder={`Name ${index + 1}`}
            value={name}
            onChange={(e) => handleNameChange(e, index)}
          />
        ))}
      </div>
      <button className='btn' onClick={randomizeNames}>Randomize Names</button>
      <div className="randomized-names">
        {randomizedNames.length > 0 && (
          <ol>
            {randomizedNames.map((name, index) => (
              <li key={index}>{`${name}`}</li>
            ))}
          </ol>
        )}
      </div>
    </div>
  );
};

export default App
