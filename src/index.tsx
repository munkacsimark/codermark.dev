import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './assets/fonts/Roboto-Regular.ttf';
import './assets/fonts/Roboto-Medium.ttf';
import Site from './layout/site';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<Site />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
