import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {Actions} from './Actions';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
const actions = new Actions;
ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
