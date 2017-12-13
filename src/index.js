import React from 'react';
import ReactDOM from 'react-dom';

import {Provider} from 'react-redux';
import {createStore} from 'redux';

// here we import tachyons as a package from our node_modules folder
import 'tachyons';
import './css/main.css';

import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

import mixesApp from './store';

let store = createStore(
  mixesApp,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const Root = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

ReactDOM.render(<Root />, document.getElementById('root'));
registerServiceWorker();
