import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';

ReactDOM.render(
  <React.StrictMode>
    <App urlToRedirect="https://www.youtube.com/watch?v=dQw4w9WgXcQ"/>
  </React.StrictMode>,
  document.getElementById('root')
);