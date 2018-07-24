import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './main//App';
import axios from 'axios'

import registerServiceWorker from './registerServiceWorker';

axios.defaults.baseURL = 'http://localhost:3005';


ReactDOM.render( <App /> , document.getElementById('root'));
registerServiceWorker();