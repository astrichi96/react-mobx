import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import appState from './store/store';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App store={ appState }/>, document.getElementById('root'));
registerServiceWorker();
