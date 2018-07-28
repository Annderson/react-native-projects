import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './main//App';
import axios from 'axios'
import { BrowserRouter } from 'react-router-dom';


import registerServiceWorker from './registerServiceWorker';

axios.defaults.baseURL = 'https://tech18.herokuapp.com';


ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
   document.getElementById('root'));
registerServiceWorker();