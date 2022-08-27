import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ThemeProvider } from '../src/Components/ThemeContext/ThemeContext.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider > 
      <App />
    </ThemeProvider>
  </React.StrictMode>
);


