import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// contexts
import { GameProvider } from './contexts/GameContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GameProvider>
      <App />
    </GameProvider>
  </React.StrictMode>
);