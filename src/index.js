import React from 'react';
import ReactDOM from 'react-dom';
import Sc from 'soundcloud';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

Sc.initialize({
  client_id : fb64fbb609d51541d9cfd30a4b1498b3,
});

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
