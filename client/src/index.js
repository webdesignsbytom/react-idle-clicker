import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
// Context
import GameContextProvider from './context/GameContext';
import OptionContextProvider from './context/OptionContext';
import UserContextProvider from './context/UserContext';
import ToggleContextProvider from './context/ToggleContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <UserContextProvider>
      <ToggleContextProvider>
        <GameContextProvider>
          <OptionContextProvider>
            <App />
          </OptionContextProvider>
        </GameContextProvider>
      </ToggleContextProvider>
    </UserContextProvider>
  </BrowserRouter>
);
