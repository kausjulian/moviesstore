import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import {Auth0Provider} from '@auth0/auth0-react'
import 'animate.css';

ReactDOM.render(
  
  <React.StrictMode>
    <Auth0Provider domain='moviesstore.us.auth0.com' clientId='oEm0x3ISYjWFaB7wr07mk0P72BxaeltI' redirectUri={window.location.origin}>
    <App />
    </Auth0Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


