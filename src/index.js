import React from 'react';
import ReactDOM from 'react-dom';
import App from './z_App1.jsx';
import Graphs from './z_App2.jsx';
import History from './z_App3.jsx';
import './index.css';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<History />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
