import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { AppProvider } from './context/AppContext'; // Corrected import path

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AppProvider>  {/* Wrap your App with AppProvider */}
      <App />
    </AppProvider>
  </React.StrictMode>
);