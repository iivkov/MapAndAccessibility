import logo from './assets/logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Contact from './components/Contact';
import TextControls from './components/TextControls';
import { useState } from 'react';

function App() {

  const [textSize, setTextSize] = useState(16); // Defaultna veličina teksta

    const handleIncreaseTextSize = () => {
        setTextSize(prevSize => prevSize + 2); // Povećaj veličinu teksta za 2px
    }

    const handleDecreaseTextSize = () => {
        setTextSize(prevSize => Math.max(prevSize - 2, 12)); // Smanji veličinu teksta za 2px, ali ne ispod 12px
    }

    const handleResetTextSize = () => {
        setTextSize(16); // Vrati veličinu teksta na defaultnu
    }

  return (
    <div className="App">
      <p>Probni tekst.</p>
      {/* <Navbar /> */}
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <Contact />
      <div className="app">
            {/* Vaš sadržaj */}
            <TextControls
                handleIncreaseTextSize={handleIncreaseTextSize}
                handleDecreaseTextSize={handleDecreaseTextSize}
                handleResetTextSize={handleResetTextSize}
            />
            <div style={{ fontSize: `${textSize}px` }}>
                {/* Vaš tekst */}
            </div>
        </div>
    );
    </div>
  );
}

export default App;
