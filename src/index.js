import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'react-app-polyfill/ie9';

ReactDOM.render(<App />, document.getElementById('root'));
serviceWorker.unregister();
